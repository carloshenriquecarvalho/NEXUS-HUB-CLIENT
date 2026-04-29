import Link from "next/link";

interface ButtonProps {
    text: string;
    url: string;
}

export default function Button({text, url}: ButtonProps) {
    return (
        <Link className="bg-button p-4 w-fit hover:bg-hover duration-400 text-buttonText"
        target="_blank"
        
        href={url}
        >
            {text}
        </Link>
    )
}