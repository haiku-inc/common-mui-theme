# Description

Project contains Haiku MUI 5 theme.

## How to use

Add dependency to common-mui theme.

Add to `tsconfig.json`:

```json
  "files": [
    "common-mui-theme/index.ts"
  ]
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
