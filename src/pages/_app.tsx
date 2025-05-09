import {NextPage} from "next";
import type { AppProps } from "next/app";
import {ReactElement, ReactNode} from "react";
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from "../../next-i18next.config";
import "@/styles/globals.css";
import "@/assets/fontello/css/fontello.css";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default appWithTranslation(App, nextI18nextConfig);
