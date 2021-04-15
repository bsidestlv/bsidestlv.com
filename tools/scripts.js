const rollup = require('rollup');
const terser = require("rollup-plugin-terser");
const babel = require('rollup-plugin-babel');
const { Logger, LogLevel, colorEmojiConfig } = require('plop-logger');

Logger.config = colorEmojiConfig;
const logger = Logger.getLogger('scripts');
logger.level = LogLevel.All;

const inputOptions = {
  input: 'src/scripts/main.js',
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    terser
  ],
  onwarn(warning) {
    logger.warn(warning.message, warning);
  }
};

const outputOptions = {
  file: 'static/theme.js',
  format: 'esm'
};


async function build() {
  const bundle = await rollup.rollup(inputOptions);
  logger.info("Write to", outputOptions.file);
  await bundle.write(outputOptions);
}

build();

