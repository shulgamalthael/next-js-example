import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Header = () => {
    const { t } = useTranslation('common');

    return(
        <header className="bg-white p-4">
            <nav>
                <Link href="/about_us" className="text-black">
                    {t("about_us")}
                </Link>
            </nav>
        </header>
    )
}

export default Header;

export async function getStaticProps({ locale = 'ua' }: GetStaticPropsContext) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}