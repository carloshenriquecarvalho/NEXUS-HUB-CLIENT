'use client'

import PainCard from "@/components/ui/PainCard"
import { PainProps } from "@/types/types";
import { motion } from "framer-motion";

export default function Pain({ title, cardContent }: PainProps) {
    return (
        <section id="servicos" className="flex flex-col justify-center items-center py-24 bg-shadow/20">
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center gap-4 mb-16"
                >
                    <span className="text-highlight font-semibold tracking-widest uppercase text-sm">Problemas Comuns</span>
                    <h2 className="font-serif font-bold text-4xl md:text-5xl text-title leading-tight">{title}</h2>
                    <p className="text-lg text-title/70 max-w-2xl">
                        Nós entendemos suas necessidades. Nossos tratamentos são focados em realçar o que você tem de melhor.
                    </p>
                </motion.div>
                <PainCard cardContent={cardContent}/>
            </div>
        </section>
    )
}