const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/**
 * @param {string} mode
 * @param {string} tsconfig
 * @param {boolean} ie8
 */
function makeConfig(mode, tsconfig, ie8) {
  const id = `${tsconfig}_${mode}${ie8 ? '_ie8' : ''}`;

  const config = {
    mode,
    entry: './src/index.ts',
    output: {
      filename: `bundle.${id}.js`,
      path: path.resolve(__dirname, 'dist'),
      library: `Hello_${id}`
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: `tsconfig.${tsconfig}.json`
              }
            }
          ]
        }
      ]
    }
  };

  if (ie8) {
    config.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: { ie8 }
        })
      ]
    };
  }

  return config;
}

const modes = ['development', 'production'];
const tsconfigs = ['es3_cjs', 'es3_es2015', 'es5_cjs', 'es5_es2015'];

const configs = [];

for (const mode of modes) {
  for (const tsconfig of tsconfigs) {
    configs.push(makeConfig(mode, tsconfig, false));
    configs.push(makeConfig(mode, tsconfig, true));
  }
}

module.exports = configs;
