import React from "react";
import { motion } from "framer-motion";

export default function Certificates() {
    const certs = [
        {
            title: "AWS Certified Cloud Practitioner",
            year: "2025",
            id: "AWS05126345",
        },
        {
            title: "AWS Certified Solutions Architect Associate",
            year: "2025",
            id: "AWS05126345",
        },
        {
            title: "HashiCorp Certified: Terraform Associate",
            year: "2025",
            id: "HCP00278124",
        },
        {
            title: "Linux Essentials",
            year: "2025",
            id: "LPI000646030",
        },
        {
            title: "GitHub Actions for CI/CD",
            year: "2025",
            id: "EF7630A057F622",
        },
        {
            title: "Python Programming (Basic)",
            year: "2025",
            id: "5uKW.cpz3.5xka",
        },
    ];

    return (
        <section id="certificates" className="py-20 bg-black text-white">
            <motion.h2
                className="text-3xl font-bold text-[#00C3FF] text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Certificates
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="p-6 rounded-xl bg-[#0a0a0a] border border-[#00C3FF]/20 shadow-[0_0_25px_#00C3FF] hover:shadow-[0_0_50px_#00C3FF] transition-all duration-300 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <h3 className="text-lg font-semibold mb-2 text-white">
                            {cert.title}
                        </h3>
                        <p className="text-gray-400 mb-2">Issued: {cert.year}</p>
                        <p className="text-[#00C3FF] text-sm font-mono">
                            Credential ID: {cert.id}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
