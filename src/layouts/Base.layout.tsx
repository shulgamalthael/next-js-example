import { Fragment, ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BaseLayoutProps {
    children: ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
    return(
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}