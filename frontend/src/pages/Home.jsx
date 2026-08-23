import { motion } from "framer-motion";
import {
    ArrowDownRight,
    ArrowUpRight,
    Code2,
    Database,
    Layers3,
    Sparkles,
} from "lucide-react";
import aniketImg from "../assets/aniketimg.png";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 22,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0a0b0d] text-white">

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Large ambient glow */}
                <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/[0.045] blur-[150px]" />

                <div className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-indigo-500/[0.035] blur-[160px]" />

                {/* Fine grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Vertical architectural lines */}
                <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.035] lg:block" />

                <div className="absolute right-[8%] top-0 hidden h-full w-px bg-white/[0.035] lg:block" />
            </div>

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative z-10">
                <div className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:pb-28 lg:pt-40">

                    <div className="grid items-center gap-20 lg:grid-cols-[1fr_430px]">

                        {/* LEFT */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                        >
                            {/* Status */}
                            <div className="mb-8 flex items-center gap-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                                </span>

                                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
                                    Available for opportunities
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="max-w-2xl text-[42px] font-semibold leading-[1.05] tracking-[-0.055em] sm:text-5xl lg:text-[62px]">
                                I build digital
                                <span className="block text-white/25">
                                    experiences that work.
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="mt-7 max-w-xl text-[14px] leading-7 text-white/40 sm:text-[15px]">
                                I'm Aniket Patra, a full-stack developer focused
                                on building modern web applications with
                                thoughtful interfaces, reliable backend systems
                                and clean architecture.
                            </p>

                            {/* Actions */}
                            <div className="mt-9 flex flex-wrap items-center gap-3">
                                <a
                                    href="/projects"
                                    className="group flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-[12px] font-semibold text-black transition-all duration-300 hover:bg-blue-500 hover:text-white"
                                >
                                    View my projects

                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>

                                <a
                                    href="/contact"
                                    className="flex items-center gap-2 rounded-full border border-white/[0.1] px-5 py-3.5 text-[12px] font-medium text-white/50 transition-all duration-300 hover:border-white/25 hover:text-white"
                                >
                                    Let's talk
                                </a>
                            </div>

                            {/* Mini stats */}
                            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/[0.07] pt-6">
                                <MiniStat
                                    label="Stack"
                                    value="MERN"
                                />

                                <MiniStat
                                    label="Focus"
                                    value="Web Development"
                                />

                                <MiniStat
                                    label="Exploring"
                                    value="AI / Vision"
                                />
                            </div>
                        </motion.div>

                        {/* =================================================
                            PROFILE CARD
                        ================================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                                scale: 0.97,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative mx-auto w-full max-w-[390px]"
                        >

                            {/* Glow */}
                            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.055] blur-[100px]" />

                            {/* Orbit */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.06]"
                            >
                                <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,.8)]" />
                            </motion.div>

                            {/* Card */}
                            <div className="relative overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#111317]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-xl">

                                {/* Card top */}
                                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/25">
                                            Developer Profile
                                        </p>

                                        <p className="mt-1 text-xs text-white/45">
                                            Full-Stack · MERN
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                                        <span className="text-[8px] text-white/25">
                                            Online
                                        </span>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative flex justify-center py-8">

                                    {/* Inner ring */}
                                    <div className="absolute h-[245px] w-[245px] rounded-full border border-white/[0.05]" />

                                    <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full border-[6px] border-[#1a1d22] bg-[#171a1f] shadow-[0_20px_70px_rgba(0,0,0,.5)] sm:h-[240px] sm:w-[240px]">
                                        <img
                                            src={aniketImg}
                                            alt="Aniket Patra"
                                            className="h-full w-full object-cover"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                                    </div>
                                </div>

                                {/* Name */}
                                <div>
                                    <h2 className="text-xl font-semibold tracking-[-0.035em]">
                                        Aniket Patra
                                    </h2>

                                    <p className="mt-1 text-xs text-white/30">
                                        Full-Stack Web Developer
                                    </p>
                                </div>

                                {/* Bottom details */}
                                <div className="mt-5 grid grid-cols-2 border-t border-white/[0.06] pt-4">

                                    <div>
                                        <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                                            Building
                                        </p>

                                        <p className="mt-1 text-xs text-white/55">
                                            Web Products
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                                            Based in
                                        </p>

                                        <p className="mt-1 text-xs text-white/55">
                                            India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* React */}
                            <FloatingTech
                                icon={<Code2 size={15} />}
                                title="React"
                                subtitle="Frontend"
                                className="-left-5 top-[28%]"
                            />

                            {/* MongoDB */}
                            <FloatingTech
                                icon={<Database size={15} />}
                                title="MongoDB"
                                subtitle="Database"
                                className="-right-5 bottom-[25%]"
                                reverse
                            />
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 1.2,
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="mt-20 hidden items-center gap-4 text-white/50 lg:flex"
                    >
                        {/* Animated arrow */}
                        <motion.div
                            animate={{
                                y: [0, 5, 0],
                            }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm"
                        >
                            <ArrowDownRight
                                size={18}
                                strokeWidth={1.5}
                                className="text-blue-400"
                            />
                        </motion.div>

                        {/* Text */}
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/55">
                                Scroll to explore
                            </span>

                            <span className="text-[9px] tracking-[0.08em] text-white/25">
                                Discover more
                            </span>
                        </div>

                        {/* Animated line */}
                        <motion.span
                            animate={{
                                scaleX: [0.4, 1, 0.4],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="h-px w-12 origin-left bg-blue-400/60"
                        />
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                ABOUT
            ====================================================== */}

            <section className="relative z-10 border-t border-white/[0.06]">
                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-100px",
                        }}
                        variants={fadeUp}
                        className="grid gap-12 lg:grid-cols-[200px_1fr]"
                    >
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.22em] text-blue-400">
                                01 / About
                            </span>
                        </div>

                        <div>
                            <h2 className="max-w-4xl text-3xl font-medium leading-[1.15] tracking-[-0.045em] sm:text-4xl">
                                I like building things that feel
                                <span className="text-white/40">
                                    {" "}simple on the surface,
                                </span>{" "}
                                but are thoughtfully engineered underneath.
                            </h2>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/35">
                                From responsive interfaces to backend APIs and
                                databases, I enjoy working across the complete
                                development process and understanding how each
                                layer connects.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                SKILLS
            ====================================================== */}

            <section className="relative z-10 border-t border-white/[0.06]">
                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.22em] text-blue-400">
                                02 / Expertise
                            </span>

                            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
                                What I work with
                            </h2>
                        </div>

                        <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">
                            Technologies
                        </span>
                    </div>

                    <div className="grid overflow-hidden rounded-[24px] border border-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">

                        <Skill
                            number="01"
                            icon={<Code2 size={19} />}
                            title="React.js"
                            text="Interfaces & experiences"
                        />

                        <Skill
                            number="02"
                            icon={<Layers3 size={19} />}
                            title="Node.js"
                            text="APIs & backend systems"
                        />

                        <Skill
                            number="03"
                            icon={<Database size={19} />}
                            title="MongoDB"
                            text="Data & application storage"
                        />

                        <Skill
                            number="04"
                            icon={<Sparkles size={19} />}
                            title="AI / Vision"
                            text="Intelligent applications"
                        />
                    </div>
                </div>
            </section>

            {/* =====================================================
                CTA
            ====================================================== */}

            <section className="relative z-10 border-t border-white/[0.06]">
                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-80px",
                        }}
                        variants={fadeUp}
                        className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-12"
                    >
                        {/* Decorative glow */}
                        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/[0.06] blur-[90px]" />

                        <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-center">

                            <div>
                                <span className="text-[10px] uppercase tracking-[0.22em] text-blue-400">
                                    03 / Contact
                                </span>

                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                                    Let's build something
                                    <span className="text-white/25">
                                        {" "}meaningful.
                                    </span>
                                </h2>

                                <p className="mt-3 text-sm text-white/30">
                                    Have an idea, project or opportunity?
                                </p>
                            </div>

                            <a
                                href="/contact"
                                className="group flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-black transition-all duration-300 hover:bg-blue-500 hover:text-white"
                            >
                                Get in touch

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                FOOTER
            ====================================================== */}

            {/* ================= FOOTER ================= */}
            <footer className="relative z-10 border-t border-slate-200 bg-white text-slate-900">

                <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

                    {/* ================= TOP FOOTER ================= */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

                        {/* ================= BRAND ================= */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                        >
                            {/* Logo */}
                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111] text-white shadow-sm">
                                    <span className="text-xs font-semibold tracking-[-0.05em]">
                                        AP
                                    </span>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold tracking-tight text-slate-950">
                                        Aniket Patra
                                    </p>

                                    <p className="mt-0.5 text-xs text-slate-400">
                                        Full-Stack Developer
                                    </p>
                                </div>

                            </div>

                            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
                                I build modern web applications, full-stack systems,
                                and explore AI-powered solutions with a focus on
                                practical and meaningful technology.
                            </p>

                            {/* Email */}
                            <a
                                href="mailto:aniketpatra3131@gmail.com"
                                className="mt-5 inline-block text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-blue-600"
                            >
                                aniketpatra3131@gmail.com
                            </a>

                        </motion.div>


                        {/* ================= QUICK LINKS ================= */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                            }}
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                Explore
                            </p>

                            <div className="mt-5 space-y-3">

                                <a
                                    href="/"
                                    className="block w-fit text-sm text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
                                >
                                    Home
                                </a>

                                <a
                                    href="/projects"
                                    className="block w-fit text-sm text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
                                >
                                    Projects
                                </a>

                                <a
                                    href="/about"
                                    className="block w-fit text-sm text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
                                >
                                    About
                                </a>

                                <a
                                    href="/skills"
                                    className="block w-fit text-sm text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
                                >
                                    Skills
                                </a>

                                <a
                                    href="/contact"
                                    className="block w-fit text-sm text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
                                >
                                    Contact
                                </a>

                            </div>
                        </motion.div>


                        {/* ================= CONNECT ================= */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                            }}
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                Connect
                            </p>

                            {/* Location */}
                            <div className="mt-5">
                                <p className="text-sm font-medium text-slate-800">
                                    Kolkata, West Bengal, India
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                    Open to opportunities & collaborations
                                </p>
                            </div>


                            {/* ================= SOCIALS ================= */}
                            <div className="mt-5 flex flex-wrap gap-2">

                                {/* GitHub */}
                                <a
                                    href="https://github.com/AniketPatra-tech"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="group flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#181717] hover:bg-[#181717] hover:text-white"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                    >
                                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.1c.97 0 1.94.13 2.85.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/aniket-patra-35b558326"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                    className="group flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                    >
                                        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.32ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V8.99h3.56v11.46Z" />
                                    </svg>
                                </a>

                                {/* X */}
                                <a
                                    href="https://x.com/Ami_Aniket"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="X"
                                    className="group flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/mr_aniket.031/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                    className="group flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#dd2a7b] hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <rect
                                            x="3"
                                            y="3"
                                            width="18"
                                            height="18"
                                            rx="5"
                                        />

                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4"
                                        />

                                        <circle
                                            cx="17.5"
                                            cy="6.5"
                                            r="1"
                                            fill="currentColor"
                                            stroke="none"
                                        />
                                    </svg>
                                </a>

                            </div>
                        </motion.div>

                    </div>


                    {/* ================= CTA ================= */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15,
                        }}
                        className="mt-14 flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:p-7"
                    >

                        <div>
                            <p className="text-sm font-semibold text-slate-900">
                                Have a project in mind?
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                                Let's turn an idea into something useful.
                            </p>
                        </div>

                        <motion.a
                            href="/projects"
                            whileHover={{
                                y: -2,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="group inline-flex w-fit items-center gap-2 rounded-lg bg-[#111] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                            Explore Projects

                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </motion.a>

                    </motion.div>


                    {/* ================= BOTTOM ================= */}
                    <div className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">

                        <p className="text-xs text-slate-400">
                            © 2026 Aniket Patra. All rights reserved.
                        </p>

                        <p className="text-xs text-slate-400">
                            Designed & built with React
                        </p>

                    </div>

                </div>

            </footer>
        </main>
    );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function MiniStat({ label, value }) {
    return (
        <div>
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                {label}
            </p>

            <p className="mt-1.5 text-xs text-white/55">
                {value}
            </p>
        </div>
    );
}

function FloatingTech({
    icon,
    title,
    subtitle,
    className,
    reverse = false,
}) {
    return (
        <motion.div
            animate={{
                y: reverse ? [0, 7, 0] : [0, -7, 0],
            }}
            transition={{
                duration: reverse ? 4.5 : 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={`absolute hidden rounded-2xl border border-white/[0.09] bg-[#13161b]/90 px-3.5 py-3 shadow-xl backdrop-blur-xl sm:block ${className}`}
        >
            <div className="flex items-center gap-2.5">
                <span className="text-blue-400">
                    {icon}
                </span>

                <div>
                    <p className="text-[9px] font-medium text-white/60">
                        {title}
                    </p>

                    <p className="mt-0.5 text-[7px] text-white/25">
                        {subtitle}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function Skill({ number, icon, title, text }) {
    return (
        <motion.div
            whileHover={{
                backgroundColor: "rgba(255,255,255,.025)",
            }}
            transition={{
                duration: 0.25,
            }}
            className="group border-b border-white/[0.07] p-7 sm:border-r lg:border-b-0 lg:last:border-r-0"
        >
            <div className="flex items-center justify-between">
                <span className="text-white/40 transition-colors duration-300 group-hover:text-blue-400">
                    {icon}
                </span>

                <span className="font-mono text-[8px] text-white/15">
                    {number}
                </span>
            </div>

            <h3 className="mt-10 text-[15px] font-medium">
                {title}
            </h3>

            <p className="mt-1.5 text-xs text-white/25">
                {text}
            </p>

            <div className="mt-7 h-px w-6 bg-blue-500/40 transition-all duration-300 group-hover:w-10" />
        </motion.div>
    );
}

export default Home;