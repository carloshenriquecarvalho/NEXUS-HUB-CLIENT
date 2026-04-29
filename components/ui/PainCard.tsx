import Image from "next/image";
import { CardItem } from "@/types/types";

interface PainCardProps {
    cardContent: CardItem[];
}

export default function PainCard({ cardContent }: PainCardProps) {
    return (
        <div 
        className="">
            {cardContent.map((card) => (
                <div 
                key={card.id} 
                className="">
                    <Image
                    alt="Imagem de Procedimento"
                    width={296}
                    height={296}
                    src={card.imgUrl}
                    ></Image>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                </div>
            ))}
        </div>
    )
}