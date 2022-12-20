import { createGlobalStyle } from "styled-components";

const StyleVariables = createGlobalStyle`
  :root {

    // colors

    --color-primary: #0c9b58;
    --color-danger: #f00;
    --color-light: #fff;
    --color-dark: #000;
    --color-dark-light: rgba(0, 0, 0, 0.5);
    --color-silver-light: #eff1f2;
    --color-silver-dark: #d0d0d7;
    --color-gray: #e9e9ed;

    // font-size

    --font-size-20: calc(20rem / 16);
    --font-size-24: calc(24rem / 16);
    --font-size-32: calc(32rem / 16);
    --font-size-40: calc(40rem / 16);
    
    // font-weight

    --font-weight-500: 500;
    --font-weight-700: 700;

    // spacing

    --space-8: 8px;
    --space-12: 12px;
    --space-16: 16px;
    --space-24: 24px;
    --space-32: 32px;
    --space-48: 48px;
    --space-64: 64px;
    --space-80: 80px;

    // border

    --border-4: 3px;

    // border-radius

    --border-radius-5: 5px;

    // box-shadow

    --box-shadow-store-item: 0 0 10px rgba(0, 0, 0, 0.1);
    --box-shadow-header: 0 2px 10px rgba(0, 0, 0, 0.3);
    --box-shadow-sm: 2px 4px 4px rgba(0, 0, 0, 0.7);
    --box-shadow-md: 4px 8px 8px rgba(0, 0, 0, 0.333);
    --box-shadow-lg: 8px 16px 16px rgba(0, 0, 0, 0.2);

    // z-index

    --z-index-10: 10;
    --z-index-20: 20;
    --z-index-30: 30;
    --z-index-40: 40;
    --z-index-50: 50;

    // transitions
    --transition-duration: 0.25s;
  }
`;

export default StyleVariables;
