# Food Zone

A React + Vite food ordering UI showcasing product listing, cart management with Redux Toolkit, and a protected checkout flow.

## Live View:- https://foodspot7101.netlify.app/

## Key ideas / summary
- Single-page React app bootstrapped with Vite. See [`vite.config.js`](vite.config.js).
- Client-side routing with `react-router-dom` via [`App`](src/App.jsx).
- Cart state managed by Redux Toolkit in [`Store`](src/redux/Store.js) and [`CartSlice`](src/redux/slices/CartSlice.jsx).
- UI built with Tailwind; configuration in [`tailwind.config.js`](tailwind.config.js) and global styles in [`src/index.css`](src/index.css).
- Demonstrates add/remove/increment/decrement cart actions, toast notifications and a protected checkout route.

## Live UI / pages (key files)
- Main entry: [`src/main.jsx`](src/main.jsx) -> mounts the app.
- Router + routes: [`src/App.jsx`](src/App.jsx)
- Pages:
  - Home: [`src/pages/Home.jsx`](src/pages/Home.jsx)
  - Menu: [`src/pages/Menu.jsx`](src/pages/Menu.jsx)
  - Cart: [`src/pages/Cart.jsx`](src/pages/Cart.jsx)
  - Sign In: [`src/pages/SignIn.jsx`](src/pages/SignIn.jsx)
  - Success (checkout): [`src/pages/Success.jsx`](src/pages/Success.jsx)
  - Error (404): [`src/pages/Error.jsx`](src/pages/Error.jsx)

## Main components
- Header / navigation: [`Navbar`](src/components/Navbar.jsx)
- Product list: [`FoodItems`](src/components/FoodItems.jsx)
- Product card: [`FoodCard`](src/components/FoodCard.jsx)
- Cart list item UI: [`CartItems`](src/components/CartItems.jsx)
- Checkout guard: [`ProtectedRoute`](src/components/ProtectedRoute.jsx)
- Other layout components: [`Hero`](src/components/Hero.jsx), [`Join`](src/components/Join.jsx), [`Features`](src/components/Features.jsx), [`Team`](src/components/Team.jsx), [`FAQ`](src/components/FAQ.jsx), [`Footer`](src/components/Footer.jsx)

## Data
- Sample product data is in [`src/data/FoodData.js`](src/data/FoodData.js).

## State & actions
- Store: [`Store`](src/redux/Store.js)
- Slice: [`CartSlice`](src/redux/slices/CartSlice.jsx)
  - Actions: [`addToCart`](src/redux/slices/CartSlice.jsx), [`removeFromCart`](src/redux/slices/CartSlice.jsx), [`incrementQty`](src/redux/slices/CartSlice.jsx), [`decrementQty`](src/redux/slices/CartSlice.jsx)

Behavior highlights:
- `addToCart` will either push a new item or increase qty for existing items.
- `incrementQty` / `decrementQty` update item quantities.
- Checkout route (`/success`) is protected by [`ProtectedRoute`](src/components/ProtectedRoute.jsx) which checks `state.cart.cart.length > 0`.

## Tech stack & notable packages
- React 18 + Vite — config: [`vite.config.js`](vite.config.js)
- Styling: Tailwind CSS — config: [`tailwind.config.js`](tailwind.config.js), PostCSS: [`postcss.config.js`](postcss.config.js), styles: [`src/index.css`](src/index.css)
- State: Redux Toolkit (`@reduxjs/toolkit`) — [`Store`](src/redux/Store.js), [`CartSlice`](src/redux/slices/CartSlice.jsx)
- Routing: `react-router-dom` — routes in [`src/App.jsx`](src/App.jsx)
- Notifications: `react-hot-toast` used from [`FoodItems`](src/components/FoodItems.jsx) / [`FoodCard`](src/components/FoodCard.jsx)
- Icons: `lucide-react`, `react-icons`
- Scrollbars: `react-custom-scrollbars-2` in [`src/pages/Cart.jsx`](src/pages/Cart.jsx)
- Loader: `react-spinners` used in [`src/pages/Success.jsx`](src/pages/Success.jsx)

(Dependencies are listed in [`package.json`](package.json).)

## Features
- Browse products from [`FoodData`](src/data/FoodData.js) rendered by [`FoodItems`](src/components/FoodItems.jsx).
- Add items to cart with toast confirmation via [`FoodCard`](src/components/FoodCard.jsx) -> dispatches [`addToCart`](src/redux/slices/CartSlice.jsx).
- View cart with quantities, price totals and scrollable list in [`src/pages/Cart.jsx`](src/pages/Cart.jsx).
- Increment / decrement and remove items with actions from [`CartSlice`](src/redux/slices/CartSlice.jsx) via [`CartItems`](src/components/CartItems.jsx).
- Protected checkout: the `/success` route uses [`ProtectedRoute`](src/components/ProtectedRoute.jsx) to prevent navigation when the cart is empty.
- Simple sign in UI layout (no auth), search input in hero (UI only).

## Run locally

1. Install dependencies
```sh
npm install
```

2. Start dev server
```sh
npm run dev
```

3. Build for production
```sh
npm run build
```

4. Lint
```sh
npm run lint
```

(See scripts in [`package.json`](package.json).)

## Where to look to extend functionality
- Persist cart: enhance [`Store`](src/redux/Store.js) to load/save from localStorage.
- Add real auth: replace [`SignIn`](src/pages/SignIn.jsx) with authentication and protect routes by auth state instead of cart-length in [`ProtectedRoute`](src/components/ProtectedRoute.jsx).
- Make search functional: connect the search input in [`Hero`](src/components/Hero.jsx) to filter [`FoodData`](src/data/FoodData.js) / product list in [`FoodItems`](src/components/FoodItems.jsx).
- Improve UI/UX: add mobile menu improvements in [`Navbar`](src/components/Navbar.jsx), image optimization, and add unit tests.

## Project structure (selected)
- src/
  - App.jsx — app router ([`src/App.jsx`](src/App.jsx))
  - main.jsx — app bootstrap ([`src/main.jsx`](src/main.jsx))
  - index.css — global styles ([`src/index.css`](src/index.css))
  - data/FoodData.js — sample items ([`src/data/FoodData.js`](src/data/FoodData.js))
  - components/ — UI pieces (see links above)
  - pages/ — route pages (see links above)
  - redux/
    - Store.js — store setup ([`src/redux/Store.js`](src/redux/Store.js))
    - slices/CartSlice.jsx — cart slice & actions ([`src/redux/slices/CartSlice.jsx`](src/redux/slices/CartSlice.jsx))

---
- Made by @nkit.
