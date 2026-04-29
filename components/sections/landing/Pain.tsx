import PainCard from "@/components/ui/PainCard"

import { CardItem } from "@/types/types";

interface PainProps {
    title: string;
    cardContent: CardItem[];
}

export default function Pain({ title, cardContent }: PainProps) {
    return (
        <div>
            <h2>{title}</h2>
            <PainCard cardContent={cardContent} />
        </div>
    )
}