import Link from "next/link";
import Image from "next/image";

const HorizontalCard = () => {
    return(
        <div className="mb-[26px] w-full flex border-b border-solid border-[#d3d3d3]">
            <div className="w-[75%] relative flex">
                <div className="flex-[0_0_40.54%] h-[248px] mb-[35px] pt-[10px] w-full relative">
                    <Link href="/" className="flex m-auto relative max-w-[230px] h-full">
                        <Image src="https://img.dok.ua/images/tile/group/motornoe-maslo-ford-motorcraft-a5-5w-30-sinteticheskoe_774.jpg" alt="Product" layout="fill" objectFit="contain" />
                        <span className="favorite-heart favorite-heart_empty z-[2] h-[40px] w-[40px] flex text-[24px] leading-[40px] items-center font-normal mr-[2px] text-center rounded-full bg-[#f5f5f5] cursor-pointer hover:bg-stone-900 hover:shadow-[0_1px_2px_0_rgba(5,23,42,0.3),_0_1px_3px_1px_rgba(5,23,42,0.15)]"></span>
                    </Link>
                </div>
                <Link href="/" className="flex-[0_0_59.46%] pt-[10px] pr-[10px]">
                    <span className="text-[16px] font-bold leading-[1.56] text-[#1a77d2] tracking-[0.5px]">General Motors</span>
                    <div className="mb-1px text-[16px] text-[#333] tracking-normal leading-[1.56] font-normal">Моторна олива  Dexos2 5W-30 синтетична</div>
                    <div className="mb-[19px]">
                        <div className="flex py-[8px] text-[12px] leading-[16px]">
                            <div className="flex">
                                <div className="h-[16px] w-[16px] bg-[url(/icons/star-active.svg)]"></div>
                                <div className="h-[16px] w-[16px] bg-[url(/icons/star-active.svg)]"></div>
                                <div className="h-[16px] w-[16px] bg-[url(/icons/star-active.svg)]"></div>
                                <div className="h-[16px] w-[16px] bg-[url(/icons/star-active.svg)]"></div>
                                <div className="h-[16px] w-[16px] bg-[url(/icons/star-active.svg)]"></div>
                            </div>
                            <div className="ml-1 text-[#919294]">888 оценок</div>
                        </div>
                        <div className="opacity-50 text-[16px] font-normal leading-[1.56] text-[#333]">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            Тип двигуна: Дизель / Бензин
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            В&apos;язкість за SAE: 5W-30
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Серія: Dexos2
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Класифікація API: SN / CF
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Класифікація ACEA: C3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col w-[30%] relative pt-[10px]">
                <div className="flex flex-col w-full mb-[10px]">
                    <div className="flex">
                        <div className="mb-[5px] font-bold inline-block text-[20px] text-[#333] tracking-[0.5px] leading-[1.25]">282</div>
                        <span className="my-auto ml-1 opacity-50 text-[13px] text-[#333] tracking-normal leading-[1.54] font-normal">грн</span>
                    </div>
                    <div>
                        <span className="text-[green] text-[13px] leading-[1.54] overflow-hidden whitespace-nowrap text-ellipsis">Доставимо  сьогодні</span>
                    </div>
                </div>
                <div className="grid grid-cols-[calc(25%-8px)_calc(25%-8px)_calc(25%-8px)_calc(25%-8px)] gap-[8px] mb-[10px]">
                    <div className="h-[32px] leading-[30px] text-[#05172a] text-center rounded-[8px] bg-[#e8f1fa] border border-solid border-[#e8f1fa] cursor-pointer">
                        1 л
                    </div>
                    <div className="h-[32px] leading-[30px] text-[#05172a] text-center rounded-[8px] border border-solid border-[#0000001f] hover:bg-[#e8f1fa] hover:border-[#e8f1fa] cursor-pointer">
                        2 л
                    </div>
                    <div className="h-[32px] leading-[30px] text-[#05172a] text-center rounded-[8px] border border-solid border-[#0000001f] hover:bg-[#e8f1fa] hover:border-[#e8f1fa] cursor-pointer">
                        4 л
                    </div>
                    <div className="h-[32px] leading-[30px] text-[#05172a] text-center rounded-[8px] border border-solid border-[#0000001f] hover:bg-[#e8f1fa] hover:border-[#e8f1fa] cursor-pointer">
                        5 л
                    </div>
                    <div className="h-[32px] leading-[30px] text-[#05172a] text-center rounded-[8px] border border-solid border-[#0000001f] hover:bg-[#e8f1fa] hover:border-[#e8f1fa] cursor-pointer">
                        5,6 л
                    </div>
                </div>
                <div className="w-[100%] h-[40px] bg-[#1a77d2] text-center text-[13px] leading-[40px] text-white cursor-pointer rounded-[3px] hover:bg-[#1e5ba5]">Купить</div>
            </div>
        </div>
    )
}

export default HorizontalCard;