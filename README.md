# NextJS v12 SSG with TypeScript tutorial

## Setup project

### Add dependencies

```sh
npm install next react react-dom

npm install --save-dev @types/node @types/react @types/react-dom typescript
```

## Add page

```sh
mkdir -p src/pages
```

src/pages/index.tsx

```tsx
import type { ReactElement } from "react";
import Head from "next/head";

export default function IndexPage(): ReactElement {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <div>Hello, World!</div>
        </>
    );
}
```

src/pages/\_app.tsx

```tsx
import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function CustomApp({ Component, pageProps }: AppProps): ReactElement {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="initial-scale=1,width=device-width" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
```

src/pages/\_document.tsx

```tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ja">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
```

## Build

next.config.js

```js
/** @type {import("next").NextConfig} */
const nextConfig = {
    trailingSlash: true,
};
module.exports = nextConfig;
```

package.json

```json
{
    ...
    "scripts": {
        "dev": "next dev",
        "prebuild": "rm -rf .next out",
        "build": "next build && next export"
    }
    ...
}
```

## Stylesheet (SCSS)

```sh
npm install sass
```

### Global stylesheet

src/style.scss

```scss
* {
    margin: 0;
    padding: 0;
}
body {
    background-color: #fff;
    color: #000;
}
```

src/pages/\_app.tsx

```tsx
import "../style.scss";
```

#### Reset CSS

```sh
npm install destyle.css
```

src/style.scss

```scss
@import "destyle.css";

...
```

## ESLint

```sh
npm install --save-dev eslint eslint-config-next eslint-config-prettier @typescript-eslint/eslint-plugin
```

.eslintrc.js

```js
/** @type {import("eslint").Linter.Config} */
module.exports = {
    plugins: [
        //
        "@typescript-eslint",
    ],
    extends: [
        //
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals",
        "prettier",
    ],
    rules: {
        curly: "warn",
        eqeqeq: "warn",
    },
};
```

package.json

```json
{
    ...
    "scripts": {
        "lint": "next lint",
        ...
    }
    ...
}
```
