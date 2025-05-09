import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../next-i18next.config";

export function withI18nNamespaces(namespaces: string[] = ["common"]) {
    return async ({ locale }: { locale: string }) => ({
        props: {
            ...(await serverSideTranslations(locale, namespaces, nextI18nextConfig)),
        },
    });
}