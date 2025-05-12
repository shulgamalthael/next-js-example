import {useState} from "react";
import Card from "@/components/Card";

const CardsList = () => {
    const [cards] = useState(Array(12).fill(null).map((card, idx) => ({ id: idx + 1 })));

    return cards.map((card) => <Card key={card.id} />);
}

export default CardsList;