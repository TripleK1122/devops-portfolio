import React from "react";
import { motion } from "framer-motion";

export default function Timeline() {
    const timeline = [
        {
            year: "2020 – 2024",
            title: "Massage Therapist, Private Practice",
            description:
                "Built and managed a successful massage business focused on quality and client experience. Introduced online scheduling and digital tracking — this inspired my passion for process automation and technology.",
        },
        {
            year: "2024 – 2025",
            title: "Transition to IT & DevOps",
            description:
                "Began structured learning in Linux, AWS, and Terraform. Completed hands-on projects deploying infrastructure, CI/CD pipelines, and automation tools.",
        },
        {
            year: "2025 – Present",
            title: "DevOps Engineer (Freelance / Projects)",
            description:
                "Designing and automating AWS cloud environments using Terraform, Docker, and GitHub Actions. Building a full DevOps portfolio and cost-optimized cloud projects.",
        },
    ];

    return (
        <section id="timeline" className="bg-black text-white py-16 px-6">
            <motion.h2
                className="text-3xl font-bold text-[#00C3FF] text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Career Timeline
            </motion.h2>

            <div className="relative max-w-3xl mx-auto pl-10">
                {/* Вертикальная линия */}
                <div className="absolute left-3 top-0 h-full w-[2px] bg-[#00C3FF]/40" />

                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative mb-12"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        {/* Точка */}
                        <span className="absolute left-1 top-[6px] w-4 h-4 bg-[#00C3FF] rounded-full border-2 border-black shadow-[0_0_8px_#00C3FF]" />

                        {/* Контент */}
                        <div className="ml-8">
                            <h3 className="text-lg font-semibold text-white mb-1">
                                {item.year}
                            </h3>
                            <h4 className="text-[#00C3FF] font-medium mb-2">
                                {item.title}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
