import React from "react";
import { motion } from "framer-motion";

export default function HowIWork() {
    const principles = [
        {
            title: "System First Thinking",
            description:
                "I start by understanding the system as a whole — its constraints, dependencies, and failure points — before proposing solutions.",
        },
        {
            title: "Automation by Default",
            description:
                "Anything that repeats gets automated. This reduces errors, saves time, and keeps systems predictable.",
        },
        {
            title: "Simplicity Over Complexity",
            description:
                "I prefer clear, maintainable solutions over clever but fragile designs.",
        },
        {
            title: "Infrastructure as Code",
            description:
                "All infrastructure is defined, versioned, and reviewed as code to ensure consistency and reproducibility.",
        },
        {
            title: "Reliability and Cost Awareness",
            description:
                "I design systems with monitoring, recovery, and cost efficiency in mind from the beginning.",
        },
    ];

    return (
        <section id="how-i-work" className="bg-black text-white py-16 px-6">
            <motion.h2
                className="text-3xl font-bold text-[#00C3FF] text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                How I Work
            </motion.h2>

            <div className="max-w-3xl mx-auto space-y-10">
                {principles.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative pl-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                        {/* Акцентная линия */}
                        <span className="absolute left-0 top-1 h-full w-[2px] bg-[#00C3FF]/40" />

                        <h3 className="text-lg font-semibold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
