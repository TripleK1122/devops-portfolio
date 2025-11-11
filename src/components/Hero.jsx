import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import profile from "../assets/profile.jpeg";

export default function Hero() {
    return (
        <motion.section
            id="hero"
            className="flex flex-col items-center justify-center text-center py-24 bg-black text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            {/* Фото с неоновой подсветкой */}
            <motion.div
                className="relative mb-8 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Мягкое неоновое свечение */}
                <div className="absolute w-60 h-60 rounded-full bg-[#00C3FF] blur-3xl opacity-30 animate-glow"></div>

                {/* Фото с неоновой рамкой */}
                <div className="relative w-48 h-48 rounded-full border-4 border-[#00C3FF] shadow-[0_0_60px_#00C3FF] overflow-hidden flex items-center justify-center bg-black">
                    <img
                        src={profile}
                        alt="Profile"
                        className="object-cover w-full h-full rounded-full"
                    />
                </div>
            </motion.div>

            {/* Имя и должность */}
            <h1 className="text-4xl font-bold mb-2">Kostiantyn Kostin</h1>
            <h2 className="text-[#00C3FF] font-semibold text-lg mb-4">
                DevOps Engineer
            </h2>

            {/* Технологии */}
            <p className="max-w-2xl text-gray-300 text-sm mb-6">
                AWS | Terraform | CI/CD (GitHub Actions) | Docker | K8s | Python | Linux
            </p>

            {/* Кнопка со smooth scroll */}
            <motion.div
                className="flex gap-6 justify-center mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <Link
                    to="contact"
                    smooth={true}
                    duration={700}
                    offset={-60}
                    className="border border-[#00C3FF] px-5 py-2 rounded-lg text-[#00C3FF] hover:bg-[#00C3FF] hover:text-black transition cursor-pointer"
                >
                    Contact Me
                </Link>
            </motion.div>
        </motion.section>
    );
}
