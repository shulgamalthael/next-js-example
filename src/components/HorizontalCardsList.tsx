import {FC} from "react";
import {ICard} from "@/components/GridCard";
import HorizontalCard from "@/components/HorizontalCard";

interface HorizontalCardsListProps {
    cardsList: ICard[];
}

const HorizontalCardsList: FC<HorizontalCardsListProps> = ({ cardsList }) => {
    return(
        <div className="flex flex-col">
            {cardsList.map((card) => <HorizontalCard key={card.id} />)}
        </div>
    )
}

export default HorizontalCardsList;