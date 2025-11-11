import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaGithub } from "react-icons/fa";

export default function ProjectsCarousel() {
    const projects = [
        {
            name: "🚀 AWS Project 01 — Terraform Web Server",
            description:
                "IaC project deploying an Apache web server on AWS EC2 using Terraform. Demonstrates provisioning, automation with user_data, and outputs the instance public IP.",
            url: "https://github.com/TripleK1122/aws-project-01-terraform-webserver",
            tags: ["Terraform", "AWS", "EC2", "Apache"],
        },
        {
            name: "🚀 AWS Project 02 — WordPress Infrastructure",
            description:
                "Full AWS setup using Terraform: VPC, EC2, RDS, NAT, and S3. Deploys a complete WordPress environment with MySQL and Apache.",
            url: "https://github.com/TripleK1122/aws-project-02-terraform-webserver",
            tags: ["Terraform", "AWS", "WordPress", "RDS", "VPC"],
        },
        {
            name: "🚀 Terraform AWS CI/CD Project",
            description:
                "Terraform project that deploys Nginx on AWS EC2 via GitHub Actions CI/CD pipeline — automating init, plan, and apply on each push.",
            url: "https://github.com/TripleK1122/nginx-ec2",
            tags: ["Terraform", "GitHub Actions", "Nginx", "CI/CD"],
        },
        {
            name: "🚀 Node.js CI/CD Pipeline on AWS (Terraform + ECS Fargate)",
            description:
                "End-to-end CI/CD for a Node.js app using Terraform, ECS Fargate, ECR, and GitHub Actions. Demonstrates container automation and deployment pipelines.",
            url: "https://github.com/TripleK1122/node.js-infra-aws-",
            tags: ["Terraform", "ECS", "ECR", "GitHub Actions", "Docker"],
        },
        {
            name: "🚀 Node.js on Kubernetes (Minikube / Docker Desktop)",
            description:
                "Deploys a Node.js app on Kubernetes with load balancing, replication, and auto-healing using Minikube or Docker Desktop.",
            url: "https://github.com/TripleK1122/k8s-docker-js",
            tags: ["Kubernetes", "Docker", "Node.js", "K8s"],
        },
        {
            name: "🚀 Monitoring with Prometheus & Grafana",
            description:
                "Monitoring stack using Docker Compose — launches Prometheus and Grafana locally for visualization and metrics tracking.",
            url: "https://github.com/TripleK1122/Monitoring-with-Prometheus-and-Grafana",
            tags: ["Docker", "Prometheus", "Grafana", "Monitoring"],
        },
    ];

    return (
        <section id="projects" className="py-20 bg-black text-white">
            <motion.h2
                className="text-3xl font-bold text-center mb-12 text-[#00C3FF]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Projects Showcase
            </motion.h2>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="max-w-6xl mx-auto px-6"
            >
                {projects.map((p, i) => (
                    <SwiperSlide key={i}>
                        <motion.div
                            className="bg-[#0a0a0a] border border-[#00C3FF]/20 rounded-xl p-6 shadow-[0_0_25px_#00C3FF]/20 hover:shadow-[0_0_50px_#00C3FF]/40 transition-all duration-300 h-full flex flex-col justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-[#00C3FF]">
                                    {p.name}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    {p.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {p.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs text-[#00C3FF] border border-[#00C3FF]/30 px-2 py-1 rounded-lg"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 border border-[#00C3FF] text-[#00C3FF] px-4 py-2 rounded-lg hover:bg-[#00C3FF] hover:text-black transition"
                            >
                                <FaGithub /> View on GitHub
                            </a>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
