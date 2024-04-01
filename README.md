## phosphor-css

Unlike `phosphor-icons`, `phosphor-css` isn't loading any fonts. Instead, CSS is loaded, and SVG icons are requested when required. It is possible to load a multi- or single-weight CSS file (e.g. "regular" or "fill"), allowing for even more efficient use.

[![build package and run tests](https://github.com/lucagoslar/phosphor-css/actions/workflows/test.yml/badge.svg)](https://github.com/lucagoslar/phosphor-css/actions/workflows/test.yml)

## Index

- [phosphor-css](#phosphor-css)
- [Index](#index)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)

## Installation

```bash
npm i phosphor-css
```

## Usage

By default, icons are the size of 1.5rem (24px). `width`, `height`, `background-color` (final icon colour) and `line-height` can be modified when targetting `.ph.icon`.

```css
@import 'phosphor-css/css/index.css';
@import 'phosphor-css/sass/index.scss';
@import 'phosphor-css/less/index.less';

/* @import "phosphor-css/{language}/{weight}.{language}"; */
```

```html
<!-- regular -->
<i class="ph icon heart" />
```

```html
<!-- bold -->
<i class="ph icon heart bold" />
```

## License

[phosphor-icons](https://github.com/phosphor-icons/core/blob/main/LICENSE) is licensed under MIT. After building, you may find the license in the `assets` folder. Thus, the license is included in the npm package.

## Contribute

Install all (dev-)dependencies by running the following.

```
  pnpm i
```

Make sure [husky](https://github.com/typicode/husky) is being installed too.

```
  pnpm run prepare
```

\
_And off we go …_

Build this project with the following.

```
  pnpm run build
```
