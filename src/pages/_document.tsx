import { Html, Head, Main, NextScript } from "next/document";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPropsContext } from "next";
import Header from "@/components/Header";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export async function getStaticProps({ locale = 'ua' }: GetStaticPropsContext) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
