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

or if you want to depend on exact version:
```json
"common-mui-theme": "git+https://x-oauth-basic@github.com/haiku-inc/common-mui-theme.git#0.0.3"
```

Now you can run `npm install`, which should install private repository `common-mui-theme`. Later you need to use `npm update` even after updating the tag version, because this dependency is not semver.

Update `tsconfig.json`. Add `"node_modules/common-mui-theme/**/*"` to the `include`. For example:

```json
  "include": ["src", "node_modules/common-mui-theme/**/*"],
```
      
Wrap React root App with `ThemeProvider` with the imported `theme`:

```jsx
import theme from 'common-mui-theme';

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
```


Add fonts to HTML template:
```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap"
/>
```
