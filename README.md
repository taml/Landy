# 🧱 Landy

This project utilises JavaScript, TypeScript, Vue, HTML and CSS to create a simple landing page builder which features `Image` and `Text` blocks. 

The page content can be saved as a log to the console which features block types, order and more. 

This project uses some images courtesy of [Unsplash](https://unsplash.com/) and icons from [Font Awesome](https://fontawesome.com/).

#### Features
+ Text and Image blocks which can be reordered, duplicated and deleted ✔️
+ A custom page template background colour ✔️
+ A rich text block editor (Quill) ✔️
+ Image block adjustments - captions, padding, alignment and width  ✔️
+ Adaptive, responsive design ✔️
+ Accessibility Consideration (colour ratios and aria labels) ✔️
+ Local Store (Pinia) for managing state ✔️
+ Basic component testing and save page end to end test using Cypress ✔️

Instructions for running and building the project can be found below.


## Project Setup

### Install the Project

```sh
npm install
```

### To Run the Project (Compile and Hot-Reload for Development)

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customise configuration

See [Vite Configuration Reference](https://vite.dev/config/).
