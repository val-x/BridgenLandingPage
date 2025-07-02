#!/usr/bin/env node

/*
 * Script: updatePortfolioData.js
 *
 * 1. Recursively walks through every directory in `public/images/portfolio/`.
 * 2. Renames each image to a predictable, URL-safe slug (lower-case, words
 *    separated by hyphens, original extension kept).
 * 3. Produces an object whose keys are the portfolio sub-folder names and whose
 *    values are arrays of web paths (e.g. /images/portfolio/<folder>/<file>).
 * 4. Injects / updates this object under the key `portfolios` in
 *    `public/data/StudentReviews.json` so the frontend can easily render each
 *    student portfolio gallery.
 *
 * Usage:
 *   bun run scripts/updatePortfolioData.js      # bun
 *   node scripts/updatePortfolioData.js         # node
 */

const fs = require("fs");
const path = require("path");

/* eslint-disable no-console */

const PORTFOLIO_DIR = path.resolve(
  __dirname,
  "..",
  "public",
  "images",
  "portfolio"
);
const STUDENT_REVIEWS_PATH = path.resolve(
  __dirname,
  "..",
  "public",
  "data",
  "StudentReviews.json"
);

// Utility — turn any filename into a kebab-case slug, preserving extension.
function slugifyFilename(filename) {
  const parsed = path.parse(filename);
  const base = parsed.name
    .trim()
    .toLowerCase()
    // Replace any non-alphanumeric sequence with a single hyphen.
    .replace(/[^a-z0-9]+/g, "-")
    // Collapse multiple consecutive hyphens.
    .replace(/-+/g, "-")
    // Remove leading / trailing hyphens.
    .replace(/^-|-$/g, "");
  return `${base}${parsed.ext.toLowerCase()}`;
}

function isImageFile(fileName) {
  return /\.(png|jpe?g|gif|webp|svg)$/i.test(fileName);
}

function collectPortfolios() {
  const portfolios = {};

  const folders = fs
    .readdirSync(PORTFOLIO_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  folders.forEach((dirEnt) => {
    const folder = dirEnt.name;
    const absFolder = path.join(PORTFOLIO_DIR, folder);

    const images = fs
      .readdirSync(absFolder, { withFileTypes: true })
      .filter((f) => f.isFile() && isImageFile(f.name))
      .map((fileEnt) => {
        const oldName = fileEnt.name;
        const newName = slugifyFilename(oldName);

        // If slug differs from original, rename on disk.
        if (oldName !== newName) {
          fs.renameSync(
            path.join(absFolder, oldName),
            path.join(absFolder, newName)
          );
          console.log(`renamed: ${folder}/${oldName} -> ${newName}`);
        }

        return `/images/portfolio/${folder}/${newName}`;
      });

    portfolios[folder] = images;
  });

  return portfolios;
}

function updateStudentReviews(portfolios) {
  const raw = fs.readFileSync(STUDENT_REVIEWS_PATH, "utf8");
  const data = JSON.parse(raw);

  data.portfolios = portfolios;

  // Pretty print with 2-space indentation to keep git diffs tidy.
  fs.writeFileSync(
    STUDENT_REVIEWS_PATH,
    `${JSON.stringify(data, null, 2)}\n`,
    "utf8"
  );
  console.log("✅ Updated StudentReviews.json with new portfolios field");
}

(function main() {
  try {
    const portfolios = collectPortfolios();
    updateStudentReviews(portfolios);
    console.log("🏁 Portfolio data generation complete");
  } catch (err) {
    console.error("❌ Error updating portfolio data:", err);
    process.exit(1);
  }
})();
