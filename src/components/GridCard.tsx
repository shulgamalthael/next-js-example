import Link from "next/link";
import Image from "next/image";

export interface ICard {
    id: number;
}

const GridCard = () => {
    return(
        <div className="flex group flex-col justify-between px-[22px] pt-[22px] hover:shadow-[0_0_30px_0_rgba(0,0,0,0.28)]">
            <div className="relative">
                <Link href="/" className="flex h-[220px] w-full overflow-hidden whitespace-nowrap mb-[29px] pt-[10px] text-center relative">
                    <Image src="https://img.dok.ua/images/tile/group/motornoe-maslo-ford-motorcraft-a5-5w-30-sinteticheskoe_774.jpg" alt="Product" layout="fill" objectFit="contain" />
                </Link>
                <span className="favorite-heart favorite-heart_empty z-[2] h-[40px] w-[40px] flex text-[24px] leading-[40px] items-center font-normal mr-[2px] text-center rounded-full bg-[#f5f5f5] cursor-pointer hover:bg-stone-900 hover:shadow-[0_1px_2px_0_rgba(5,23,42,0.3),_0_1px_3px_1px_rgba(5,23,42,0.15)]"></span>
            </div>
            <div>
                <Link href="/" className="flex flex-col">
                    <span className="text-[#1a77d2] tracking-[0.5px] leading-[1.56] font-bold">Ford</span>
                    <span className="text-[16px] font-normal leading-[1.56] text-[#333]">Моторное масло  Motorcraft A5 5W-30 синтетическое</span>
                </Link>
            </div>
            <div className="text-[16px] font-normal leading-[1.56] tracking-normal text-stone-400">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            Классификация API: SM / CF
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Классификация ACEA: A5/B5 / A1/B1
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
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
            <div className="grid grid-cols-[calc(25%-8px)_calc(25%-8px)_calc(25%-8px)_calc(25%-8px)] gap-[8px] mb-[8px]">
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
            <div className="flex justify-between">
                <div className="flex flex-col mb-[5px]">
                    <div className="flex">
                        <div className="text-[#333] text-[20px] leading-[1.25] tracking-[0.5px] font-bold">301</div>
                        <div className="flex flex-col justify-center text-[#333] font-normal leading-[1.54] tracking-normal opacity-50 ml-1">грн</div>
                    </div>
                    <div className="text-[13px] text-[#43a047] leading-[1.54] overflow-hidden text-ellipsis whitespace-nowrap">Есть в наличии</div>
                </div>
                <div className="w-[72px] h-[40px] bg-[#1a77d2] text-center text-[13px] leading-[40px] text-white cursor-pointer rounded-[3px] my-auto hover:bg-[#1e5ba5]">Купить</div>
            </div>
            <div className="py-[40px] hidden group-hover:flex">
                <Link href="/" className="text-[#1a77d2] mx-auto">Смотреть подробнее</Link>
            </div>
        </div>
    )
}

export default GridCard;