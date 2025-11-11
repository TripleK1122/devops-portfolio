import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY) setVisible(false);
            else setVisible(true);
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${visible ? "translate-y-0" : "-translate-y-20"
                } bg-black/80 backdrop-blur-md border-b border-[#00C3FF]/20`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="text-[#00C3FF] font-bold text-xl">
                    Kostiantyn Kostin — DevOps Engineer
                </span>

                <ul className="flex gap-8 text-white text-sm">
                    {[
                        { to: "hero", label: "Home" },
                        { to: "technologies", label: "Technologies" },
                        { to: "certificates", label: "Certificates" },
                        { to: "contact", label: "Contact" },
                    ].map((item, i) => (  // ✅ точка убрана
                        <li key={i}>
                            <Link
                                activeClass="text-[#00C3FF]"
                                to={item.to}
                                spy={true}
                                smooth={true}
                                duration={700}
                                offset={-70}
                                className="cursor-pointer hover:text-[#00C3FF] transition-all"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
