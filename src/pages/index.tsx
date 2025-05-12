import Head from "next/head";
import {Fragment, ReactElement} from "react";
import BaseLayout from "@/layouts/Base.layout";
import { withI18nNamespaces } from "@/lib/withI18n";
import Link from "next/link";
import CardsList from "@/components/CardsList";

Home.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>
}

function Home() {
    return (
        <Fragment>
            <Head>
                <title>DOK UA | Моторное топливо</title>
            </Head>
            <section className="pt-[32px] pr-0 pb-[50px] pl-0">
                <div className="max-w-[1600px] mx-auto px-[62px]">
                    <div className="mb-[28px]">
                        <ol>
                            <li className="inline-block">
                                <a className="text-[13px] text-[#9f9f9f] after:content-['→'] after:inline-block after:text-[13px] after:text-[#9f9f9f] after:px-[7px]">
                                    <span>Интернет-магазин автозапчастей dok.ua</span>
                                </a>
                            </li>
                            <li className="inline-block">
                                <a className="text-[13px]">
                                    <span>Моторное масло</span>
                                </a>
                            </li>
                        </ol>
                    </div>
                    <h1 className="text-[30px] font-medium leading-[1.07] tracking-normal text-black mb-[28px]">Моторное масло</h1>
                    <div className="min-h-[72px] mb-[28px] w-full relative shadow-[0_0_40px_0_rgba(0,0,0,0.11)] select-none">
                        <div className="flex bg-white">
                            <div className="h-[72px] leading-[75px] inline-block pl-[46px] pr-[87px] cursor-pointer tracking-[1px] max-w-[300px] grow relative text-[16px] text-white bg-[#1a77d2] overflow-hidden whitespace-nowrap text-ellipsis">
                                Уточните год
                                <i className="fva__button-icon" />
                            </div>
                            <div className="h-[72px] leading-[75px] inline-block pl-[46px] pr-[87px] cursor-pointer tracking-[1px] max-w-[300px] grow relative text-[16px] text-[#989898] overflow-hidden whitespace-nowrap text-ellipsis">
                                Выберете марку
                                <i className="fva__button_disbled fva__button-icon" />
                            </div>
                            <div className="h-[72px] leading-[75px] inline-block pl-[46px] pr-[87px] cursor-pointer tracking-[1px] max-w-[300px] grow relative text-[16px] text-[#989898] overflow-hidden whitespace-nowrap text-ellipsis">
                                Выберете модель
                                <i className="fva__button_disbled fva__button-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex justify-center bg-[#fafafa] rounded-[3px] mb-25px min-h-[2000px] min-w-[300px]">
                            Подбор по параметрам
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between pl-[30px] w-full mb-[20px]">
                                <div className="w-[140px] leading-[40px] text-[13px] font-normal tracking-normal text-[#333]">
                                    <div className="text-[14px]">
                                        <span>Найдено</span>
                                        <span className="text-black font-bold ml-1">100</span>
                                        <span className="ml-1">шт</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="border border-solid border-[#dadada] rounded-[5px] bg-[url(/icons/arrow-down-black.svg)] bg-no-repeat bg-position-[calc(100%-14px)] w-[244px] min-h-[40px] h-[40px] mr-[16px]">
                                        <div className="p-[9px_30px_8px_20px]">По рейтингу</div>
                                    </div>
                                    <div className="flex h-[40px] w-[40px] text-center">
                                        <img src="/icons/groupsIcon.svg" alt="groupsIcon.svg" className="max-h-full max-w-full h-auto m-auto border-0 filter-[invert(46%)_sepia(8%)_saturate(37%)_hue-rotate(316deg)_brightness(97%)_contrast(82%)] hover:filter-[brightness(80%)_saturate(0)]" />
                                    </div>
                                    <div className="flex h-[40px] w-[40px] text-center">
                                        <img src="/icons/tilesIcon.svg" alt="tilesIcon.svg" className="max-h-full max-w-full h-auto m-auto border-0 hover:filter-[brightness(80%)_saturate(0)]" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-[33.3%_33.3%_33.3%] mb-[26px] px-[22px]">
                                <CardsList />
                            </div>
                            <div className="flex mb-[20px]">
                                <button className="group flex justify-center mx-auto cursor-pointer text-[16px] border border-solid border-[#1a77d2] text-center rounded-[3px] w-[280px] h-[40px] text-[#1a77d2] leading-[1.25] hover:bg-[#1a77d2] hover:text-white">
                                    <div className="flex my-auto">
                                        <span className="flex h-[16px] w-[20px] bg-[url(/icons/add-more.svg)] bg-contain bg-no-repeat mr-1 group-hover:bg-[url(/icons/add-more-white.svg)]"></span>
                                        Показать ещё
                                        <span className="mx-1">12</span>
                                        товаров
                                    </div>
                                </button>
                            </div>
                            <div className="flex mb-[20px]">
                                <div className="flex mx-auto">
                                    <span className="mr-[16px]">Страницы</span>
                                    <ul className="flex text-[13px]">
                                        <li className="flex h-[36px] w-[44px] bg-[#1a77d2] text-white rounded-tl-[4px] rounded-bl-[4px]">
                                            <Link href="/" className="m-auto">1</Link>
                                        </li>
                                        <li className="flex h-[36px] w-[44px] text-[#333] border border-solid border-[#dadada] hover:bg-[#f5f5f5]">
                                            <Link href="/" className="m-auto">2</Link>
                                        </li>
                                        <li className="flex h-[36px] w-[44px] text-[#333] border border-solid border-[#dadada] hover:bg-[#f5f5f5]">
                                            <Link href="/" className="m-auto">3</Link>
                                        </li>
                                        <li className="flex h-[36px] w-[44px] text-[#333] border border-solid border-[#dadada] hover:bg-[#f5f5f5]">
                                            <Link href="/" className="m-auto">4</Link>
                                        </li>
                                        <li className="flex h-[36px] w-[44px] text-[#333] border border-solid border-[#dadada] hover:bg-[#f5f5f5]">
                                            <Link href="/" className="m-auto">5</Link>
                                        </li>
                                        <li className="flex h-[36px] w-[44px] text-[#333] border border-solid border-[#dadada] hover:bg-[#f5f5f5]">
                                            <Link href="/" className="m-auto">...</Link>
                                        </li>
                                        <li className="flex h-[36px] w-[44px] text-[#333] rounded-tr-[4px] rounded-br-[4px] border border-solid border-[#dadada] hover:bg-[#f5f5f5]">
                                            <Link href="/" className="m-auto">100</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex text-[13px] leading-[1.54] opacity-50">
                                <div className="mx-auto">
                                    <span className="mr-1">Показано</span>
                                    <span className="mr-1">12</span>
                                    <span>из 1839 товаров</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Home;

export const getStaticProps = withI18nNamespaces();
