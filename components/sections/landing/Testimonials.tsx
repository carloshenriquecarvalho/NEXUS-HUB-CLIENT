'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, PlayCircle } from "lucide-react";
import { TestimonialsProps } from "@/types/types";

export default function Testimonials({ title, cardContent }: TestimonialsProps) {
    return (
        <section id="depoimentos" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center gap-4 mb-16"
                >
                    <span className="text-highlight font-semibold tracking-widest uppercase text-sm">Experiências Reais</span>
                    <h2 className="font-serif font-bold text-4xl md:text-5xl text-title leading-tight">{title}</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {cardContent.map((card, index) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            key={card.id} 
                            className="flex flex-col bg-card rounded-2xl shadow-xl shadow-shadow/50 border border-shadow overflow-hidden group"
                        >
                            <div className="relative w-full aspect-video bg-shadow flex items-center justify-center overflow-hidden cursor-pointer">
                                {card.videoUrl || card.patientImgUrl ? (
                                    <>
                                        <Image 
                                            src={card.patientImgUrl || card.videoUrl} 
                                            alt={card.title} 
                                            fill 
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-title/20 group-hover:bg-title/40 transition-colors duration-300 flex items-center justify-center">
                                            <PlayCircle className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" size={48} />
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center gap-2 text-title/40">
                                        <PlayCircle size={48} />
                                        <span>Vídeo {card.id}</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col p-6 gap-4">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-highlight text-highlight" />
                                    ))}
                                </div>
                                <h4 className="font-serif font-bold text-lg text-title">{card.title}</h4>
                                <p className="text-sm text-title/70 italic">"Um atendimento excepcional e resultados que superaram minhas expectativas. Recomendo de olhos fechados."</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
