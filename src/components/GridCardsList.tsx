import GridCard, { ICard } from "@/components/GridCard";
import {FC} from "react";

interface GridCardsListProps {
    cardsList: ICard[];
}

const GridCardsList: FC<GridCardsListProps> = ({ cardsList }) => {
    return(
        <div className="grid grid-cols-[33.3%_33.3%_33.3%] mb-[26px] px-[22px]">
            {cardsList.map((card) => <GridCard key={card.id} />)}
        </div>
    )
}

export default GridCardsList;