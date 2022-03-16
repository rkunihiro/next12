import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "../style.scss";

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
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
