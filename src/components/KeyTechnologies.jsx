import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaDocker, FaAws } from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";

export default function KeyTechnologies() {
    const technologies = [
        {
            icon: <FaGithub className="text-[#00C3FF] text-5xl mb-4" />,
            title: "GitHub Actions",
            desc: "CI/CD Pipelines",
        },
        {
            icon: <SiKubernetes className="text-[#00C3FF] text-5xl mb-4" />,
            title: "Kubernetes",
            desc: "Orchestration",
        },
        {
            icon: <FaAws className="text-[#00C3FF] text-5xl mb-4" />,
            title: "AWS",
            desc: "Cloud Solutions",
        },
        {
            icon: <SiTerraform className="text-[#00C3FF] text-5xl mb-4" />,
            title: "Terraform",
            desc: "Infrastructure as Code",
        },
        {
            icon: <FaDocker className="text-[#00C3FF] text-5xl mb-4" />,
            title: "Docker",
            desc: "Containerization",
        },
    ];

    return (
        <section id="technologies" className="py-24 bg-black text-white">
            <motion.h2
                className="text-3xl font-bold text-center mb-12 text-[#00C3FF]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Key Technologies
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-8 px-6">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="w-52 h-56 bg-[#0a0a0a] border border-[#00C3FF]/40 rounded-2xl shadow-[0_0_30px_#00C3FF]/30 flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_#00C3FF]/70"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {tech.icon}
                        <h3 className="text-lg font-semibold text-white mb-2">
                            {tech.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{tech.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
