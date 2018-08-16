# Test Typescript and Webpack configurations for Google Apps Script

## Test configurations

| Target                                                                     | Values                      |
| -------------------------------------------------------------------------- | --------------------------- |
| `compilerOptions.target` in Typescript                                     | `es3`, `es5`                |
| `compilerOptions.module` in Typescript                                     | `commonjs`, `es2015`        |
| `mode` in Webpack                                                          | `development`, `production` |
| `uglifyOptions.ie8` in UglifyJsPlugin <br> (affect only `production` mode) | `false`, `true`             |

## Result

| `compilerOptions.target` | `compilerOptions.module` | `mode`        | `uglifyOptions.ie8` | OK?                      |
| ------------------------ | ------------------------ | ------------- | ------------------- | ------------------------ |
| `es3`                    | `commonjs`               | `development` | `false`             | :ok:                     |
| `es3`                    | `commonjs`               | `development` | `true`              | :ok:                     |
| `es3`                    | `commonjs`               | `production`  | `false`             | Syntax error             |
| `es3`                    | `commonjs`               | `production`  | `true`              | :ok:                     |
| `es3`                    | `es2015`                 | `development` | `false`             | :ok:                     |
| `es3`                    | `es2015`                 | `development` | `true`              | :ok:                     |
| `es3`                    | `es2015`                 | `production`  | `false`             | Syntax error             |
| `es3`                    | `es2015`                 | `production`  | `true`              | :ok:                     |
| `es5`                    | `commonjs`               | `development` | `false`             | Syntax error (in `eval`) |
| `es5`                    | `commonjs`               | `development` | `true`              | Syntax error (in `eval`) |
| `es5`                    | `commonjs`               | `production`  | `false`             | Syntax error             |
| `es5`                    | `commonjs`               | `production`  | `true`              | :ok:                     |
| `es5`                    | `es2015`                 | `development` | `false`             | :ok:                     |
| `es5`                    | `es2015`                 | `development` | `true`              | :ok:                     |
| `es5`                    | `es2015`                 | `production`  | `false`             | Syntax error             |
| `es5`                    | `es2015`                 | `production`  | `true`              | :ok:                     |

## Conclusion

- Set `compilerOptions.target` to `es3`
- Set `compilerOptions.module` to `es2015` if you prefer static import
- Set `uglifyOptions.ie8` to `true`

## License

[MIT](https://choosealicense.com/licenses/mit/)
