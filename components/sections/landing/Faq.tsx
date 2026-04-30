'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { FaqProps } from "@/types/types";

export default function Faq({ title, cardContent, moreQuestions }: FaqProps) {
    // Filter out potential undefined elements from the mock data array
    const safeContent = cardContent?.filter(item => item !== undefined) || [];
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-shadow/20">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center gap-4 mb-16"
                >
                    <span className="text-highlight font-semibold tracking-widest uppercase text-sm">Tire suas Dúvidas</span>
                    <h2 className="font-serif font-bold text-4xl md:text-5xl text-title leading-tight">{title}</h2>
                </motion.div>

                <div className="flex flex-col w-full gap-4 mb-16">
                    {safeContent.map((faq, index) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            key={faq.id} 
                            className="bg-card rounded-xl shadow-sm border border-shadow/50 overflow-hidden"
                        >
                            <button 
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-shadow/10 transition-colors cursor-pointer"
                            >
                                <span className="font-serif font-bold text-lg text-title pr-8">{faq.question}</span>
                                <ChevronDown 
                                    className={`text-highlight shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            <AnimatePresence>
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-5 pt-0 text-title/70">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-card p-10 rounded-2xl shadow-xl w-full flex flex-col items-center text-center gap-6 border border-shadow"
                >
                    <h3 className="font-serif font-bold text-2xl text-title">{moreQuestions.title}</h3>
                    <p className="text-title/70">{moreQuestions.cta}</p>
                    <Button text={moreQuestions.contactButton} url="#contato" variant="outline" />
                </motion.div>
            </div>
        </section>
    );
}
