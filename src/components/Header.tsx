import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
    const { t } = useTranslation('common');

    return(
        <header className="flex flex-col bg-white">
            <div className="bg-[#fafafa] text-[#05172a]">
                <div className="flex justify-between max-w-[1600px] mx-auto px-[62px] py-4">
                    <nav className="my-auto">
                        <Link href="/about_us" className="text-[14px] p-2 leading-[20px] font-normalr:underline">
                            {t("about_us")}
                        </Link>
                        <Link href="/" className="text-[14px] p-2 leading-[20px] font-normal hover:underline">
                            {t("receipt_and_payment")}
                        </Link>
                        <Link href="/" className="text-[14px] p-2 leading-[20px] font-normal hover:underline">
                            {t("returns_and_exchanges")}</Link>
                        <Link href="/" className="text-[14px] p-2 leading-[20px] font-normal hover:underline">
                            {t("articles_and_reviews")}
                        </Link>
                        <Link href="/" className="text-[14px] p-2 leading-[20px] font-normal hover:underline">
                            {t("faq")}
                        </Link>
                        <Link href="/" className="text-[14px] p-2 leading-[20px] font-normal hover:underline">
                            {t("suppliers")}
                        </Link>
                    </nav>
                    <nav className="flex">
                        <div className="flex my-auto text-[14px] leading-[20px] font-bold">
                            <span>0 (800) </span>
                            <span className="text-[#1a77d2] ml-2">330-707</span>
                        </div>
                        <div className="ml-4 my-auto">
                            <i className="icon-ic-location-outline" />
                            <span>Київ</span>
                        </div>
                        <div className="ml-4">
                            <LanguageSwitcher />
                        </div>
                    </nav>
                </div>
            </div>
            <div className="flex bg-white">
                <div className="flex max-w-[1600px] w-[1600px] h-[100px] mx-auto px-[62px]">
                    <div className="flex p-4">
                        <Link href="/" className="m-auto">
                            <Image src="/logo-full-original-ua.svg" alt="Logo" height={48} width={144} />
                        </Link>
                    </div>
                    <div className="flex bg-[#1a77d2] h-[48px] relative w-[125px] rounded-[8px] my-auto mx-4 cursor-pointer">
                        <div className="bg-[url(/icons/ic-catalog.svg)] bg-center bg-size-[24px] bg-no-repeat h-[48px] w-[48px]"></div>
                        <div className="text-white text-[16px] leading-[48px]">Каталог</div>
                    </div>
                    <div className="flex flex-col grow-[20] shrink-[2] max-w-[calc(100vw-332px)] my-auto">
                        <div className="flex w-full rounded-[8px] hover:shadow-[0_1px_3px_0_rgba(5,23,42,0.3),_0_4px_8px_3px_rgba(5,23,42,0.15)]">
                            <input className="h-[48px] w-full text-black placeholder:text-stone-400 border-r-[0] border border-solid border-[rgba(0,0,0,0.12)] gap-[8] text-13px pt-[12px] pr-[4px] pb-[12px] pl-[16px] rounded-tl-[8px] rounded-bl-[8px] cursor-pointer" placeholder="Яку запчастину шукаєте?" />
                            <div className="h-[48px] w-[48px] p-[12px] bg-[#1a77d2] rounded-tr-[8px] rounded-br-[8px] cursor-pointer border border-solid border-[rgba(0,0,0,0.12)]">
                                <i className="icon-ic-search flex flex-col justify-center h-[24px] w-[24px] text-white text-[24px]" />
                            </div>
                        </div>
                        <div className="max-h-[15px] text-[13px] overflow-y-clip">
                            <span className="text-[#949494]">Часто шукають:</span>
                            <span className="text-[#1a77d2] max-h-[15px]">
                                <Link href="/" className="underline ml-1">
                                    свічки розжарювання,
                                </Link>
                                <Link href="/" className="underline ml-1">
                                    свічки запалювання,
                                </Link>
                                <Link href="/" className="underline ml-1">
                                    повітряний фільтр,
                                </Link>
                                 <Link href="/" className="underline ml-1">
                                    -
                                </Link>
                                <Link href="/" className="underline ml-1">
                                    ремінь ГРМ,
                                </Link>
                                <Link href="/" className="underline ml-1">
                                    щітка склоочисника
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="h-[92px] max-w-[160px] p-4">
                            <div className="flex flex-col py-[8px] px-[16px] gap-[4px] hover:bg-[rgba(26,119,210,0.08)] rounded-[8px] cursor-pointer">
                                <i className="icon-ic-garage text-[#05172a] text-[24px] flex justify-center" />
                                <div className="text-[#05172a] text-[12px] leading-[16px] font-normal text-ellipsis whitespace-nowrap overflow-hidden">Гараж</div>
                            </div>
                        </div>
                        <div className="h-[92px] max-w-[160px] p-4">
                            <div className="flex flex-col py-[8px] px-[16px] gap-[4px] hover:bg-[rgba(26,119,210,0.08)] rounded-[8px] cursor-pointer">
                                <i className="icon-ic-heart-empty text-[#05172a] text-[24px] flex justify-center" />
                                <div className="text-[#05172a] text-[12px] leading-[16px] font-normal text-ellipsis whitespace-nowrap overflow-hidden">Вибране</div>
                            </div>
                        </div>
                        <div className="h-[92px] max-w-[160px] p-4">
                            <div className="flex flex-col py-[8px] px-[16px] gap-[4px] hover:bg-[rgba(26,119,210,0.08)] rounded-[8px] cursor-pointer">
                                <i className="icon-ic-person-outline text-[#05172a] text-[24px] flex justify-center" />
                                <div className="text-[#05172a] text-[12px] leading-[16px] font-normal text-ellipsis whitespace-nowrap overflow-hidden">Кабінет</div>
                            </div>
                        </div>
                        <div className="h-[92px] max-w-[160px] p-4">
                            <div className="flex flex-col py-[8px] px-[16px] gap-[4px] hover:bg-[rgba(26,119,210,0.08)] rounded-[8px] cursor-pointer">
                                <i className="icon-ic-shopping-cart-outline text-[#05172a] text-[24px] flex justify-center" />
                                <div className="text-[#05172a] text-[12px] leading-[16px] font-normal text-ellipsis whitespace-nowrap overflow-hidden">8888 грн</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#171718]">
                <div className="max-w-[1600px] px-[62px] mx-auto">
                    <nav>
                        <ul className="flex justify-center relative">
                            <li className="hover:bg-[#464749]">
                               <Link href="/" className="flex no-underline p-4 relative h-[48px] leading-[16px] font-medium content-center text-[12px] text-[#fafafa] cursor-pointer before:content-[''] before:absolute before:left-[-1px] before:top-[16px] before:w-[1px] before:h-[16px] before:border before:border-solid before:border-[#76777a]">
                                   Все для ТО
                               </Link>
                            </li>
                            <li className="hover:bg-[#464749]">
                                <Link href="/" className="flex p-4 no-underline relative h-[48px] leading-[16px] font-medium content-center text-[12px] text-[#fafafa] cursor-pointer before:content-[''] before:absolute before:left-[-1px] before:top-[16px] before:w-[1px] before:h-[16px] before:border before:border-solid before:border-[#76777a]">
                                    Тормозная система
                                </Link>
                            </li>
                            <li className="hover:bg-[#464749]">
                                <Link href="/" className="flex p-4 no-underline relative h-[48px] leading-[16px] font-medium content-center text-[12px] text-[#fafafa] cursor-pointer before:content-[''] before:absolute before:left-[-1px] before:top-[16px] before:w-[1px] before:h-[16px] before:border before:border-solid before:border-[#76777a]">
                                    Двигатель и система выхлопа
                                </Link>
                            </li>
                            <li className="hover:bg-[#464749]">
                                <Link href="/" className="flex p-4 no-underline relative h-[48px] leading-[16px] font-medium content-center text-[12px] text-[#fafafa] cursor-pointer before:content-[''] before:absolute before:left-[-1px] before:top-[16px] before:w-[1px] before:h-[16px] before:border before:border-solid before:border-[#76777a]">
                                    Подвеска и рулевое
                                </Link>
                            </li>
                            <li className="hover:bg-[#464749]">
                                <Link href="/" className="flex p-4 no-underline relative h-[48px] leading-[16px] font-medium content-center text-[12px] text-[#fafafa] cursor-pointer before:content-[''] before:absolute before:left-[-1px] before:top-[16px] before:w-[1px] before:h-[16px] before:border before:border-solid before:border-[#76777a]">
                                    Коробка передач
                                </Link>
                            </li>
                            <li className="hover:bg-[#464749]">
                                <Link href="/" className="flex p-4 no-underline relative h-[48px] leading-[16px] font-medium content-center text-[12px] text-[#fafafa] cursor-pointer before:content-[''] before:absolute before:left-[-1px] before:top-[16px] before:w-[1px] before:h-[16px] before:border before:border-solid before:border-[#76777a]">
                                    Охлаждение и отопление
                                </Link>
                            </li>
                            <li className="hover:bg-[#464749]">
                                <Link href="/" className="flex p-4 no-underline relative h-[48px] leading-[16px] font-medium content-center text-[12px] text-[#fafafa] cursor-pointer before:content-[''] before:absolute before:left-[-1px] before:top-[16px] before:w-[1px] before:h-[16px] before:border before:border-solid before:border-[#76777a]">
                                    Электрика и освещение
                                </Link>
                            </li>
                            <li className="hover:bg-[#464749]">
                                <Link href="/" className="flex p-4 no-underline relative h-[48px] leading-[16px] font-medium content-center text-[12px] text-[#fafafa] cursor-pointer before:content-[''] before:absolute before:left-[-1px] before:top-[16px] before:w-[1px] before:h-[16px] before:border before:border-solid before:border-[#76777a]">
                                    Кузов и составляющие
                                </Link>
                            </li>
                            <li className="hover:bg-[#464749]">
                                <Link href="/" className="flex p-4 no-underline relative h-[48px] leading-[16px] font-medium content-center text-[12px] text-[#fafafa] cursor-pointer before:content-[''] before:absolute before:left-[-1px] before:top-[16px] before:w-[1px] before:h-[16px] before:border before:border-solid before:border-[#76777a] after:content-[''] after:absolute after:h-[16px] after:w-[1px] after:top-[16px] after:right-[0] after:border after:border-solid after:border-[#76777a]">
                                    Автотовары и автохимия
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;