# Components Library

A lightweight, modular JavaScript UI library.

## Usage

1. **Import library's CSS**. Add the following to your stylesheet to import all source's css.

```css
/* Import all of Bootstrap’s CSS */
@import "@ekio/components/dist/css/components";
```

_You can also import stylesheets individually._

```css
/* Import all of carousel’s CSS */
@import "@ekio/components/dist/css/carousel";
```

**You can also use the stylesheets with the link tag.**

2. **Load the CSS and import library's JavaScript.** Add the following to your script.

```js
// Import your CSS
import "./styles.css";

// Import all of library’s JS
import * as Components from "@ekio/components";
```

_You can also import plugins individually._

```js
import Dropdown from "@ekio/components/dist/js/dropdown";

// or, specify multiple plugins:
import { Dropdown, Carousel } from "@ekio/components";
```

**You can also use the scripts with the script tag.**
