import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <footer id="contact" className="bg-black text-white py-16 px-6 border-t border-[#00C3FF]/20">
            {/* Заголовок */}
            <motion.h2
                className="text-3xl font-bold text-[#00C3FF] text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Let’s Connect
            </motion.h2>

            {/* Иконки */}
            <div className="flex justify-center gap-10 mb-10">
                <motion.a
                    href="https://github.com/TripleK1122"
                    whileHover={{ scale: 1.2, color: "#00C3FF" }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-4xl text-white hover:text-[#00C3FF] transition"
                >
                    <FaGithub />
                </motion.a>

                <motion.a
                    href="https://linkedin.com/in/your-profile"
                    whileHover={{ scale: 1.2, color: "#00C3FF" }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-4xl text-white hover:text-[#00C3FF] transition"
                >
                    <FaLinkedin />
                </motion.a>

                <motion.a
                    href="mailto:kostyaone0@gmail.com"
                    whileHover={{ scale: 1.2, color: "#00C3FF" }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-4xl text-white hover:text-[#00C3FF] transition"
                >
                    <FaEnvelope />
                </motion.a>
            </div>

            {/* Кнопка CV */}
            <motion.div
                className="flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <a
                    href="/Kostya K (1).pdf"
                    download
                    className="border border-[#00C3FF] px-6 py-2 rounded-lg text-[#00C3FF] hover:bg-[#00C3FF] hover:text-black transition"
                >
                    Download CV
                </a>

            </motion.div>

            {/* Новый футер */}
            <motion.div
                className="mt-12 text-center text-[#00C3FF] font-semibold drop-shadow-[0_0_6px_#00C3FF]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                © 2025 Kostiantyn Kostin — DevOps Engineer
            </motion.div>
        </footer >
    );
}
