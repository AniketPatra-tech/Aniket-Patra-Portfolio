import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();
    const currentPath = location.pathname;

    const links = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Skills", href: "/skills" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <motion.nav
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-4 sm:px-4 sm:pt-5"
            >
                {/* MAIN CAPSULE */}
                <div
                    className="
                        relative
                        flex
                        w-full
                        max-w-fit
                        items-center
                        rounded-full
                        border
                        border-black/[0.08]
                        bg-[#f8f8f6]/95
                        p-1.5
                        shadow-[0_15px_45px_rgba(0,0,0,0.09)]
                        backdrop-blur-2xl
                    "
                >
                    {/* Inner highlight */}
                    <div className="pointer-events-none absolute inset-[1px] rounded-full border border-white/80" />

                    {/* ================= LOGO ================= */}
                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="
                            group
                            relative
                            z-10
                            flex
                            items-center
                            gap-2.5
                            rounded-full
                            px-2
                            py-1.5
                            pr-3
                            transition-colors
                            duration-300
                            hover:bg-black/[0.04]
                            sm:gap-3
                            sm:pr-4
                        "
                    >
                        {/* AP LOGO */}
                        <div
                            className="
                                relative
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-full
                                bg-[#111]
                                text-white
                                shadow-sm
                                transition-all
                                duration-300
                                group-hover:bg-[#222]
                                sm:h-10
                                sm:w-10
                            "
                        >
                            <span className="relative z-10 text-[12px] font-semibold tracking-[-0.06em]">
                                AP
                            </span>

                            <span
                                className="
                                    absolute
                                    -bottom-5
                                    h-10
                                    w-10
                                    rounded-full
                                    bg-blue-500
                                    blur-md
                                    opacity-0
                                    transition-all
                                    duration-500
                                    group-hover:bottom-0
                                    group-hover:opacity-60
                                "
                            />
                        </div>

                        {/* NAME */}
                        <div className="block leading-none">
                            <p className="text-[12px] font-semibold tracking-[-0.025em] text-[#111] sm:text-[13px]">
                                Aniket Patra
                            </p>

                            <div className="mt-1.5 flex items-center gap-1.5">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />

                                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </span>

                                <span className="text-[8px] text-black/35 sm:text-[9px]">
                                    Available
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* ================= DESKTOP SEPARATOR ================= */}
                    <div className="mx-1 hidden h-7 w-px bg-black/[0.08] sm:block" />

                    {/* ================= DESKTOP NAVIGATION ================= */}
                    <div className="relative z-10 hidden items-center gap-0.5 md:flex">
                        {links.map((link) => {
                            const isActive =
                                currentPath === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`group relative rounded-full px-4 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                                        isActive
                                            ? "text-blue-600"
                                            : "text-black/45 hover:text-black"
                                    }`}
                                >
                                    {/* ACTIVE INDICATOR */}
                                    {isActive && (
                                        <>
                                            <motion.span
                                                layoutId="activeNav"
                                                className="
                                                    absolute
                                                    inset-0
                                                    -z-10
                                                    rounded-full
                                                    border
                                                    border-blue-500/20
                                                    bg-blue-500/[0.08]
                                                "
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 30,
                                                }}
                                            />

                                            <motion.span
                                                layoutId="activeLine"
                                                className="
                                                    absolute
                                                    bottom-1
                                                    left-1/2
                                                    h-[2px]
                                                    w-5
                                                    -translate-x-1/2
                                                    rounded-full
                                                    bg-blue-500
                                                "
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 30,
                                                }}
                                            />
                                        </>
                                    )}

                                    <span className="relative">
                                        {link.name}
                                    </span>

                                    {/* Hover line */}
                                    {!isActive && (
                                        <span
                                            className="
                                                absolute
                                                bottom-1.5
                                                left-1/2
                                                h-px
                                                w-0
                                                -translate-x-1/2
                                                bg-black
                                                transition-all
                                                duration-300
                                                group-hover:w-4
                                            "
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* ================= DESKTOP SEPARATOR ================= */}
                    <div className="mx-1 hidden h-7 w-px bg-black/[0.08] md:block" />

                    {/* ================= DESKTOP CTA ================= */}
                    <Link
                        to="/contact"
                        className="
                            group
                            relative
                            z-10
                            hidden
                            items-center
                            gap-2
                            overflow-hidden
                            rounded-full
                            bg-[#111]
                            px-5
                            py-3
                            text-[13px]
                            font-medium
                            text-white
                            shadow-[0_5px_20px_rgba(0,0,0,0.15)]
                            transition-all
                            duration-300
                            hover:bg-black
                            sm:flex
                        "
                    >
                        <span
                            className="
                                absolute
                                inset-0
                                translate-y-full
                                bg-blue-600
                                transition-transform
                                duration-500
                                group-hover:translate-y-0
                            "
                        />

                        <span className="relative">
                            Let's talk
                        </span>

                        <ArrowUpRight
                            size={15}
                            className="
                                relative
                                transition-transform
                                duration-300
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                            "
                        />
                    </Link>

                    {/* ================= MOBILE BUTTON ================= */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="
                            relative
                            z-10
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#111]
                            text-white
                            shadow-[0_5px_15px_rgba(0,0,0,0.12)]
                            transition-all
                            duration-300
                            hover:bg-blue-600
                            active:scale-95
                            md:hidden
                        "
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                    >
                        <motion.div
                            animate={{
                                rotate: menuOpen ? 90 : 0,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                        >
                            {menuOpen ? (
                                <X size={18} strokeWidth={1.8} />
                            ) : (
                                <Menu size={18} strokeWidth={1.8} />
                            )}
                        </motion.div>
                    </button>
                </div>
            </motion.nav>

            {/* ================= MOBILE MENU ================= */}
            <motion.div
                initial={false}
                animate={{
                    opacity: menuOpen ? 1 : 0,
                    y: menuOpen ? 0 : -15,
                    scale: menuOpen ? 1 : 0.97,
                }}
                transition={{
                    duration: 0.25,
                    ease: "easeOut",
                }}
                className="
                    pointer-events-none
                    fixed
                    left-3
                    right-3
                    top-[78px]
                    z-40
                    md:hidden
                    sm:left-4
                    sm:right-4
                    sm:top-[82px]
                "
                style={{
                    pointerEvents: menuOpen ? "auto" : "none",
                }}
            >
                <div
                    className="
                        mx-auto
                        max-w-sm
                        rounded-[26px]
                        border
                        border-black/[0.08]
                        bg-[#f8f8f6]/95
                        p-2
                        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                        backdrop-blur-2xl
                    "
                >
                    {links.map((link, index) => {
                        const isActive =
                            currentPath === link.href;

                        return (
                            <motion.div
                                key={link.name}
                                initial={{
                                    opacity: 0,
                                    x: -8,
                                }}
                                animate={{
                                    opacity: menuOpen ? 1 : 0,
                                    x: menuOpen ? 0 : -8,
                                }}
                                transition={{
                                    delay: index * 0.04,
                                }}
                            >
                                <Link
                                    to={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`
                                        relative
                                        mb-1.5
                                        flex
                                        items-center
                                        justify-between
                                        overflow-hidden
                                        rounded-2xl
                                        px-5
                                        py-4
                                        text-[15px]
                                        font-medium
                                        transition-all
                                        duration-300
                                        ${
                                            isActive
                                                ? "bg-blue-600 text-white"
                                                : "text-black/55 hover:bg-black/[0.04] hover:text-black"
                                        }
                                    `}
                                >
                                    <span className="relative z-10">
                                        {link.name}
                                    </span>

                                    <ArrowUpRight
                                        size={16}
                                        className="relative z-10"
                                    />
                                </Link>
                            </motion.div>
                        );
                    })}

                    {/* STATUS */}
                    <div className="mt-1 flex items-center gap-2 px-5 py-4">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />

                            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                        </span>

                        <span className="text-[11px] text-black/35">
                            Available for opportunities
                        </span>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Navbar;