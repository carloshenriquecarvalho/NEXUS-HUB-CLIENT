import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonProps } from "@/types/types";

export default function Button({ text, url, variant = "primary" }: ButtonProps) {
    const baseStyle = "group inline-flex items-center justify-center gap-2 px-8 py-4 font-sans font-medium uppercase tracking-widest text-sm transition-all duration-300 w-fit";
    
    const variants = {
        primary: "bg-button text-buttonText hover:bg-hover shadow-lg shadow-highlight/20",
        outline: "border border-button text-button hover:bg-button hover:text-buttonText"
    };

    return (
        <Link className={`${baseStyle} ${variants[variant]}`}
            target={url.startsWith('http') ? "_blank" : "_self"}
            href={url}
        >
            {text}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
    )
}