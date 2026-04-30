# Slide Preview Library

Reusable React component library for rendering slide thumbnails in a drawer with a full-stage slide preview.

## Install

```bash
npm install @yogeshsharma/slide-preview
```

## Usage

```tsx
import { SlidePreview, type SlideData } from "@yogeshsharma/slide-preview";
import "@yogeshsharma/slide-preview/style.css";

const slides: SlideData[] = [
  {
    id: "slide-1",
    name: "Slide 1",
    content: "<div class='slide-content'><h1>Hello</h1></div>",
  },
];

export function App() {
  return <SlidePreview items={slides} theme="dark" />;
}
```

## API

- `SlidePreview` props:
  - `items: SlideData[]`
  - `theme?: "dark" | "light"` (default `"dark"`)

## Build

```bash
npm install
npm run build
```
