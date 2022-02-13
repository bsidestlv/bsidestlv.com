const { readFileSync, writeFileSync } = require("fs");
const { sync: glob } = require("glob");
const { minify } = require("html-minifier");
const postcss = require("postcss");
const { Logger, LogLevel, colorEmojiConfig } = require("plop-logger");

Logger.config = colorEmojiConfig;
const logger = Logger.getLogger("minifier");
logger.level = LogLevel.All;

// Compress HTML
const htmlFiles = `public/**/*.html`;
logger.info("Compress HTML files", htmlFiles);

const totalGain = glob(htmlFiles)
  .map((file) => {
    const html = readFileSync(file, "utf8");
    const minified = minify(html, {});
    const gain = html.length - minified.length;
    if (gain > 0) {
      const percent = (gain / html.length) * 100;
      logger.debug(file, () => ["gain", percent.toFixed(2), "%"].join(" "));
      writeFileSync(file, minified, { flag: "w" });
    }
    return gain;
  })
  .reduce((acc, elt) => acc + elt, 0);

logger.info("Total HTML gain", "" + totalGain);

// Compress CSS
const cssFiles = `public/styles/*.css`;
logger.info("Post processing CSS files", cssFiles);
const plugins = [
  require("postcss-preset-env")({
    autoprefixer: { grid: true },
    stage: 3,
  }),
  require("cssnano")({ preset: "default" }),
];

const totalGainCssPromises = glob(cssFiles).map((file) => {
  logger.debug(`PostCSS on`, file);
  const css = readFileSync(file, "utf8");

  return postcss(plugins)
    .process(css, { from: undefined })
    .then((result) => result.css)
    .then((minified) => {
      const gain = css.length - minified.length;
      const percent = (gain / css.length) * 100;
      logger.debug(file, () => ["gain", percent.toFixed(2), "%"].join(" "));
      writeFileSync(file, minified, { flag: "w" });
      return gain;
    })
    .catch((err) => {
      logger.error("Oops", err);
      console.error(err);
      return 0;
    });
});

Promise.all(totalGainCssPromises)
  .then((res) => res.reduce((acc, elt) => acc + elt, 0))
  .then((totalGain) => logger.info("Total CSS gain", "" + totalGain));
