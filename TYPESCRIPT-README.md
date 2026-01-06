# TypeScript Shopping Cart Application

This is a fully typed TypeScript shopping cart application compiled to vanilla JavaScript. The project uses HTML, CSS, and TypeScript with a clean object-oriented architecture.

## Project Structure

```
desertts/
├── src/                    # TypeScript source files
│   ├── types.ts           # Type definitions and interfaces
│   ├── data.ts            # Product data loading
│   ├── cart.ts            # Cart class with operations
│   ├── order.ts           # Order management class
│   ├── renderer.ts        # UI rendering class
│   └── app.ts             # Main application entry point
├── dist/                   # Compiled JavaScript (generated)
│   ├── types.js
│   ├── data.js
│   ├── cart.js
│   ├── order.js
│   ├── renderer.js
│   ├── app.js
│   └── data.json
├── images/                 # Product images and icons
├── index.html             # Main HTML file
├── data.json              # Product data
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project configuration
```

## Installation

```bash
npm install
```

## Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

This command:
1. Compiles all TypeScript files from `src/` to `dist/`
2. Copies `data.json` to `dist/` folder

## Development

Watch mode for automatic recompilation on file changes:

```bash
npm run watch
```

## Running the Application

After building, serve the application using any static file server:

```bash
npx http-server -p 8000
```

Then open: `http://localhost:8000`

## Features

- Browse dessert products
- Add items to shopping cart
- Increase/decrease quantities
- Remove items from cart
- View cart total
- Confirm order with modal
- Start new order

## TypeScript Architecture

### Classes

- **Cart**: Manages cart items with add, remove, increase/decrease quantity operations
- **OrderManager**: Handles order confirmation modal
- **Renderer**: Manages all DOM rendering (products and cart)
- **App**: Main application class that coordinates everything

### Type Safety

All code is fully typed with TypeScript interfaces:
- `Product`: Product data structure
- `CartItem`: Cart item with quantity
- `ProductImage`: Image URLs for responsive design

### Strict Mode

The project uses TypeScript strict mode with:
- No implicit any
- Strict null checks
- No unused locals/parameters
- No implicit returns

## Scripts

- `npm run build` - Compile TypeScript and copy assets
- `npm run watch` - Watch mode for development
- `npm run clean` - Remove dist folder
- `npm run copy-assets` - Copy data.json to dist

## Browser Compatibility

Works in all modern browsers that support:
- ES2020 JavaScript
- ES Modules
- Fetch API
- CSS Grid and Flexbox

## Styling

- Uses Tailwind CSS via CDN
- Custom color theme (Rose, Red, Green)
- Google Fonts (Red Hat Text)
- Fully responsive (mobile and desktop)

## No Framework Dependencies

This project uses pure TypeScript with no frontend frameworks:
- No React
- No Vue
- No Angular
- Just TypeScript + HTML + CSS
