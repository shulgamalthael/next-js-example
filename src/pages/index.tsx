import Head from "next/head";
import {Fragment, ReactElement, useCallback, useState} from "react";
import BaseLayout from "@/layouts/Base.layout";
import HomePage from "@/components/HomePage";
import { withI18nNamespaces } from "@/lib/withI18n";

Home.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>
}

function Home() {
    return (
        <Fragment>
            <Head>
                <title>DOK UA | Моторное топливо</title>
            </Head>
            <HomePage />
        </Fragment>
    );
}

export default Home;

export const getStaticProps = withI18nNamespaces();
