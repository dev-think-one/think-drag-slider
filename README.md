# think-drag-slider

A lightweight JavaScript utility for enabling click-and-drag horizontal scrolling on any element.

## Features

- Adds drag-to-scroll behavior to one or more elements selected by CSS selector
- Adds helper classes automatically:
  - `.drag-slider` on initialization
  - `.active` while dragging
- Includes optional CSS for cursor states and disabling accidental text/image dragging

## Installation

```bash
npm install think-drag-slider
```

## Basic Usage

```js
import dragSlider from 'think-drag-slider';
import 'think-drag-slider/dragSlider.css';

dragSlider('.my-scroll-row');
```

## HTML Example

```html
<div class="my-scroll-row">
  <article>Item 1</article>
  <article>Item 2</article>
  <article>Item 3</article>
</div>
```

Make sure your container can scroll horizontally, for example with layout/overflow styles:

```css
.my-scroll-row {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  white-space: nowrap;
}
```

## API

### `dragSlider(target)`

- `target` (`string`): CSS selector used by `document.querySelectorAll`.
- Returns: `void`.

If no elements match, the function exits safely.

## Behavior Notes

- Current implementation listens to mouse events (`mousedown`, `mousemove`, `mouseup`, `mouseleave`).
- Drag speed is multiplied internally for a faster feel.
- The utility currently logs drag distance to the console during dragging.

## Included Files

- `dragSlider.js`
- `dragSlider.css`

## Development

Run the default script:

```bash
npm test
```

(Currently this project has no automated tests configured.)

## License

MIT
