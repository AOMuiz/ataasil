# Ataasil university

## A brief description of the project

Attaasil University is an online based university that set out the goal of benefitting mankind with the knowledge of the Qur'an and Sunnah In Shaa Allah

## Preview

## Getting Started

Prerequisites include Node.JS v16 and yarn. See Gatsby's Development Environment Setup documentation for more details or issues with initial project installation.

- `Nodejs version 16`
- `Yarn`

1. First, clone this repo :
   `git clone https://github.com/AOMuiz/ataasil`

Navigate to the root folder and install all dependencies :

- `yarn`

2. Run the development server:

- Terminal run

```bash
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Happy Hacking!

## Folder Structure

```
|-- locales/
  |-- ar/
  |-- en-US/
|-- src/
    |-- components/
    |-- assets/
        |-- fonts/
        |-- icon/
        |-- images/
    |-- hooks/
    |-- redux/
    |-- pages/
     |-- index.js/
     |-- about/
        |-- index.js
    |-- utils/
        |-- lib/
        |-- index.js
        |-- constants.js
        |-- helpers.js
    |-- App.js
```

- `locales`:
- `shared/assets`: Folder to put assets like fonts, icons and images
- `components`: Folder to put all shared Component
- `utils` : Folder to put our helpers function like Consume API and formating data or others helpers and utilities.
- `hooks` : Folder to put all of ours custom hooks/logic for component.
- `pages` : Folder to put our different screens for our app such as `home screen`.

## Technologies Used

1. Used `React Js` and `Nextjs` for building the website.

2. Implemented website styling using [`twin.macro(styled Components and tailwindcss)`]([https://github.com/ben-rogerson/twin.examples/tree/832a3b5c2fc1c83dad90859f6f5129506e686db8/next-styled-components).

3. Used `nextjs` internationalized routing and `next-translate` npm package for internationalization(i18n) and localization.

4. Used `Redux Toolkit` for data and state management.

5. Created `Custom Hooks` for handling fetched data and rendering.

## Style Utilities

### Relative Unit

This project using relative unit based 16px. so you can use `1rem` which means `106px` properties in css to help ours styling more easier handling Resposive.

### Media Queries

#### Relative Unit

| BREAKPOINTS | Values |
| ----------- | ------ |
| phne        | 600    |
| tablet      | 950    |
| laptop      | 1300   |

#### QUERIES

phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
