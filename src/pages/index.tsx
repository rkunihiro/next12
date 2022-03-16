import type { ReactElement } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";

interface Props {
    build: string;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    console.log(context);
    return {
        props: {
            build: new Date().toISOString(),
        },
    };
};

export default function IndexPage({ build }: Props): ReactElement {
    const now = new Date().toISOString();
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <main>
                <div>now: {now}</div>
                <div>buildDate: {build}</div>
            </main>
        </>
    );
}
