// Visual QA harness.
// Drives the locally installed Chrome (no browser download) against the file:// page
// and writes full-page + per-section shots into .qa/ for comparison against the reference.
//
//   npm run shot            all shots
//   npm run shot -- 2560    only the 2560 full-page shot

import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, ".qa");
const PAGE = pathToFileURL(path.join(ROOT, "wenhao.html")).href;

const SECTIONS = ["masthead", "hero", "projects", "buildlog", "notes", "about", "contact"];
const WIDTHS = [2560, 1440, 390];

const only = process.argv[2] ? Number(process.argv[2]) : null;

async function settle(page) {
  await page.evaluate(() => document.fonts.ready);
  // Reveal animations are scroll-triggered; force the end state so shots are deterministic.
  await page.evaluate(() => {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
  });
  await page.waitForTimeout(350);
}

const browser = await chromium.launch({ channel: "chrome" });
await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

for (const width of WIDTHS) {
  if (only && width !== only) continue;

  const page = await browser.newPage({
    viewport: { width, height: 1600 },
    deviceScaleFactor: 1,
  });
  await page.goto(PAGE, { waitUntil: "networkidle" });
  await settle(page);

  await page.screenshot({ path: path.join(OUT, `full-${width}.png`), fullPage: true });
  console.log(`full-${width}.png`);

  // Per-section crops only at reference width — that's where detail comparison happens.
  if (width === 2560) {
    for (const id of SECTIONS) {
      const el = page.locator(`#${id}`);
      if ((await el.count()) === 0) {
        console.warn(`  ! #${id} not found`);
        continue;
      }
      await el.screenshot({ path: path.join(OUT, `section-${id}.png`) });
      console.log(`  section-${id}.png`);
    }
  }

  // Catch horizontal overflow, the usual failure mode for rotated cards on narrow screens.
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  if (overflow > 0) console.warn(`  ! horizontal overflow at ${width}px: ${overflow}px`);

  await page.close();
}

await browser.close();
console.log(`\nwrote ${path.relative(process.cwd(), OUT)}`);
