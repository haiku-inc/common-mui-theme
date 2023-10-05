# Description

Project contains Haiku MUI 5 theme.

## How to use

Create personal access token on the https://github.com/settings/tokens/new. Select `repo` scope.

Run following command in any folder replacing `<your_token>` with your token from above step:

`git config --global url."https://<your_token>:x-oauth-basic@github.com/".insteadOf https://x-oauth-basic@github.com/`

This command will add URL rewrite to the `~/.gitconfig`, which will be used in the following step.

Add dependency to `common-mui-theme` in a project `package.json`:

```json
"common-mui-theme": "git+https://x-oauth-basic@github.com/haiku-inc/common-mui-theme.git#main"
```

in this case to fetch new version of the theme use `npm update` command;

or if you want to depend on exact version:

```json
"common-mui-theme": "git+https://x-oauth-basic@github.com/haiku-inc/common-mui-theme.git#0.0.3"
```

Note: you have to have a corresponding tag for this to be working propely.

Now you can run `npm install`, which should install private repository `common-mui-theme`. Later you need to use `npm update` even after updating the tag version, because this dependency is not semver.

Update `tsconfig.json`. Add `"node_modules/common-mui-theme/**/*"` to the `include`. For example:

```json
  "include": ["src", "node_modules/common-mui-theme/**/*"],
```

Change `webpack.common.js` (Or any other config which executes TS). Change exclusion of `"node_modules"` in such way it doesn't affect `common-mui-theme`. For example:

```js
{
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules\/(?!(common-mui-theme)\/).*/,
},
```

Wrap React root App with `ThemeProvider` with the imported theme (supports light and dark):

```jsx
import { lightTheme } from 'common-mui-theme';

root.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>,
);
```

or

```jsx
import { darkTheme } from 'common-mui-theme';

root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>,
);
```

Add fonts to HTML template:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;500;600;700&display=swap" />
```
