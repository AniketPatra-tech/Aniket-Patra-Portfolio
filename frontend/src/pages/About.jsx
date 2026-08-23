import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    Code2,
    Database,
    GraduationCap,
    Lightbulb,
    Rocket,
    Sparkles,
} from "lucide-react";

import aniketImg from "../assets/aniketimg.png";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const highlights = [
    {
        icon: Code2,
        number: "01",
        title: "Full-Stack Development",
        description:
            "I build complete web applications where interfaces, APIs, authentication, databases, and user experience work together as one system.",
    },
    {
        icon: Lightbulb,
        number: "02",
        title: "Problem Solving",
        description:
            "I enjoy breaking complex requirements into smaller problems and turning them into practical, maintainable solutions.",
    },
    {
        icon: BriefcaseBusiness,
        number: "03",
        title: "Real Projects",
        description:
            "Most of my learning comes through building real applications, experimenting with ideas, debugging systems, and improving them.",
    },
    {
        icon: GraduationCap,
        number: "04",
        title: "Continuous Learning",
        description:
            "Technology keeps changing, so I continuously explore better development practices, backend systems, AI, and modern tools.",
    },
];

const focusAreas = [
    {
        icon: Code2,
        title: "Frontend Engineering",
        text: "React, JavaScript, Tailwind CSS, responsive interfaces, component architecture and interactive experiences.",
    },
    {
        icon: Database,
        title: "Backend & APIs",
        text: "Node.js, Express.js, REST APIs, MongoDB, authentication, authorization and server-side architecture.",
    },
    {
        icon: Sparkles,
        title: "AI & Computer Vision",
        text: "Python, OpenCV, YOLO and practical AI systems that connect intelligent models with real applications.",
    },
];

function About() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0c0e11] text-white">

            {/* =========================================================
                AMBIENT BACKGROUND
            ========================================================= */}

            <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">

                {/* Blue glow */}

                <div className="absolute left-[8%] top-[12%] h-[320px] w-[320px] rounded-full bg-blue-500/[0.055] blur-[120px]" />

                {/* Indigo glow */}

                <div className="absolute right-[8%] top-[38%] h-[280px] w-[280px] rounded-full bg-indigo-500/[0.045] blur-[120px]" />

                {/* Cyan glow */}

                <div className="absolute bottom-[5%] left-[40%] h-[300px] w-[300px] rounded-full bg-cyan-500/[0.025] blur-[130px]" />

                {/* Subtle grid */}

                <div
                    className="absolute inset-0 opacity-[0.018]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

            </div>


            {/* =========================================================
                PAGE HEADER
            ========================================================= */}

            <section className="relative z-10">

                <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10">

                    <div className="grid items-center gap-12 lg:grid-cols-[1fr_300px] lg:gap-20">

                        {/* =================================================
                            LEFT — INTRO
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="max-w-4xl"
                        >

                            {/* Eyebrow */}

                            <div className="flex items-center gap-3">

                                <motion.span
                                    animate={{
                                        scale: [1, 1.35, 1],
                                        opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,.7)]"
                                />

                                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-blue-400 sm:text-xs">
                                    About Me
                                </p>

                            </div>


                            {/* Heading */}

                            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[58px]">

                                I build things to

                                <span className="block text-white/30">
                                    understand how they work.
                                </span>

                            </h1>


                            {/* Description */}

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">

                                I'm Aniket Patra, a full-stack developer focused
                                on building modern web applications and exploring
                                the intersection of software development and AI.

                            </p>


                            {/* Identity Tags */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2,
                                }}
                                className="mt-10 flex flex-wrap gap-3"
                            >

                                <Tag text="MERN Stack" />
                                <Tag text="React" />
                                <Tag text="Node.js" />
                                <Tag text="MongoDB" />
                                <Tag text="AI / Vision" />

                            </motion.div>

                        </motion.div>


                        {/* =================================================
                            RIGHT — SIMPLE FLOATING PHOTO
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 25,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex justify-center lg:justify-end"
                        >

                            <motion.img
                                src={aniketImg}
                                alt="Aniket Patra"
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                whileHover={{
                                    scale: 1.025,
                                }}
                                className="
                                    h-48
                                    w-48
                                    rounded-full
                                    object-cover
                                    object-center
                                    border
                                    border-white/[0.08]
                                    shadow-[0_25px_70px_rgba(0,0,0,0.4)]
                                    transition-transform
                                    duration-500
                                    sm:h-56
                                    sm:w-56
                                    lg:h-64
                                    lg:w-64
                                "
                            />

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                JOURNEY
            ========================================================= */}

            <section className="relative z-10 border-t border-white/[0.06]">

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[1fr_340px] lg:gap-20 lg:px-10">

                    {/* Main story */}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={fadeUp}
                    >

                        <SectionLabel
                            number="01"
                            text="My Journey"
                        />

                        <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">

                            A developer who likes to

                            <span className="text-blue-400">
                                {" "}build,
                            </span>{" "}

                            experiment and improve.

                        </h2>

                        <div className="mt-7 max-w-2xl space-y-5 text-sm leading-7 text-white/38 sm:text-base">

                            <p>
                                My primary interest is web development. I
                                enjoy understanding how an application works
                                from the first interface a user sees to the
                                backend logic and database behind it.
                            </p>

                            <p>
                                I primarily work with the MERN stack and enjoy
                                building applications that are responsive,
                                practical and easy to use. I care about both
                                the visual experience and what happens behind
                                the interface.
                            </p>

                            <p>
                                My development process usually starts with
                                understanding the problem. From there, I
                                design the structure, build the interface,
                                connect the backend, test the system and keep
                                refining the experience.
                            </p>

                            <p>
                                Alongside web development, I've become
                                increasingly interested in AI and computer
                                vision. Working with technologies such as
                                Python, OpenCV and YOLO has helped me explore
                                how intelligent systems can become useful
                                products rather than just isolated models.
                            </p>

                        </div>

                    </motion.div>


                    {/* Side panel */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                    >

                        <div className="sticky top-28 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl">

                            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/[0.08] blur-3xl" />

                            <div className="relative">

                                <div className="flex items-center justify-between">

                                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                                        Current Direction
                                    </span>

                                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.5)]" />

                                </div>


                                <h3 className="mt-6 text-xl font-medium tracking-[-0.03em]">

                                    Building. Learning.

                                    <span className="block text-white/30">
                                        Experimenting.
                                    </span>

                                </h3>


                                <p className="mt-4 text-xs leading-6 text-white/35">

                                    Currently focused on strengthening
                                    full-stack development while exploring
                                    AI-powered applications and intelligent
                                    systems.

                                </p>


                                <div className="mt-7 border-t border-white/[0.07] pt-5">

                                    <InfoRow
                                        label="Primary"
                                        value="MERN Development"
                                    />

                                    <InfoRow
                                        label="Exploring"
                                        value="AI / Computer Vision"
                                    />

                                    <InfoRow
                                        label="Approach"
                                        value="Build → Test → Improve"
                                    />

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* =========================================================
                TECHNICAL FOCUS
            ========================================================= */}

            <section className="relative z-10 border-t border-white/[0.06]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={fadeUp}
                    >

                        <SectionLabel
                            number="02"
                            text="Technical Focus"
                        />

                        <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

                            <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.04em] sm:text-4xl">

                                The areas where I

                                <span className="text-white/30">
                                    {" "}spend my time.
                                </span>

                            </h2>

                            <p className="max-w-sm text-xs leading-6 text-white/30">

                                A combination of frontend engineering,
                                backend systems and intelligent technologies.

                            </p>

                        </div>

                    </motion.div>


                    <div className="mt-10 grid gap-4 lg:grid-cols-3">

                        {focusAreas.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -5,
                                    }}
                                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-blue-400/20 hover:bg-white/[0.04]"
                                >

                                    <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/[0.04] blur-3xl transition-all duration-500 group-hover:bg-blue-500/[0.08]" />

                                    <div className="relative">

                                        <div className="flex items-center justify-between">

                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-blue-400 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-400/[0.08]">

                                                <Icon
                                                    size={18}
                                                    strokeWidth={1.7}
                                                />

                                            </div>

                                            <span className="font-mono text-[9px] text-white/15">
                                                0{index + 1}
                                            </span>

                                        </div>


                                        <h3 className="mt-8 text-base font-medium tracking-[-0.02em]">
                                            {item.title}
                                        </h3>


                                        <p className="mt-3 text-xs leading-6 text-white/30">
                                            {item.text}
                                        </p>


                                        <div className="mt-7 h-px w-8 bg-blue-400/40 transition-all duration-500 group-hover:w-14" />

                                    </div>

                                </motion.div>
                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =========================================================
                HIGHLIGHTS
            ========================================================= */}

            <section className="relative z-10 border-t border-white/[0.06]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={fadeUp}
                    >

                        <SectionLabel
                            number="03"
                            text="What Drives Me"
                        />

                        <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                            Beyond the code.
                        </h2>

                    </motion.div>


                    <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">

                        {highlights.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.07,
                                    }}
                                    whileHover={{
                                        backgroundColor:
                                            "rgba(255,255,255,0.035)",
                                    }}
                                    className="group bg-[#0c0e11] p-6"
                                >

                                    <div className="flex items-center justify-between">

                                        <Icon
                                            size={18}
                                            strokeWidth={1.6}
                                            className="text-white/35 transition-colors duration-300 group-hover:text-blue-400"
                                        />

                                        <span className="font-mono text-[8px] text-white/15">
                                            {item.number}
                                        </span>

                                    </div>


                                    <h3 className="mt-8 text-sm font-medium">
                                        {item.title}
                                    </h3>


                                    <p className="mt-3 text-xs leading-6 text-white/30">
                                        {item.description}
                                    </p>

                                </motion.div>
                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =========================================================
                WORKING PHILOSOPHY
            ========================================================= */}

            <section className="relative z-10 border-t border-white/[0.06]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeUp}
                        className="grid gap-12 lg:grid-cols-[240px_1fr]"
                    >

                        <SectionLabel
                            number="04"
                            text="How I Work"
                        />


                        <div className="max-w-3xl">

                            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">

                                I don't just want to make something

                                <span className="text-white/30">
                                    {" "}work.
                                </span>

                            </h2>


                            <p className="mt-6 text-sm leading-7 text-white/35 sm:text-base">

                                I want to understand why it works, how it can
                                be improved, and how someone will actually use
                                it.

                            </p>


                            <div className="mt-10 grid gap-5 sm:grid-cols-3">

                                <Process
                                    number="01"
                                    title="Understand"
                                    text="Understand the problem, requirements and people using the product."
                                />

                                <Process
                                    number="02"
                                    title="Build"
                                    text="Design the structure and turn the idea into a working system."
                                />

                                <Process
                                    number="03"
                                    title="Improve"
                                    text="Test, debug, refine and continuously improve the final experience."
                                />

                            </div>

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* =========================================================
                CTA
            ========================================================= */}

            <section className="relative z-10 border-t border-white/[0.06]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.65,
                        }}
                        className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10"
                    >

                        {/* CTA glow */}

                        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.07] blur-[90px]" />


                        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">

                            <div>

                                <div className="flex items-center gap-3">

                                    <Rocket
                                        size={15}
                                        className="text-blue-400"
                                    />

                                    <span className="text-[9px] uppercase tracking-[0.2em] text-blue-400">
                                        What's Next
                                    </span>

                                </div>


                                <h2 className="mt-4 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">

                                    Let's build something

                                    <span className="text-white/30">
                                        {" "}meaningful.
                                    </span>

                                </h2>


                                <p className="mt-3 max-w-lg text-xs leading-6 text-white/30">

                                    I'm always interested in learning,
                                    collaborating and working on projects that
                                    solve interesting problems.

                                </p>

                            </div>


                            <a
                                href="/projects"
                                className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
                            >

                                Explore my work

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />

                            </a>

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* =========================================================
                FOOTER
            ========================================================= */}

            <footer className="relative z-10 border-t border-white/[0.06]">

                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-6 sm:px-8 md:flex-row lg:px-10">

                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
                        © 2026 Aniket Patra
                    </p>

                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
                        Built with React
                    </p>

                </div>

            </footer>

        </main>
    );
}


/* =========================================================
    COMPONENTS
========================================================= */

function SectionLabel({ number, text }) {
    return (
        <div className="flex items-center gap-3">

            <span className="font-mono text-[9px] text-blue-400">
                {number}
            </span>

            <span className="h-px w-7 bg-white/10" />

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                {text}
            </span>

        </div>
    );
}


function Tag({ text }) {
    return (
        <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-[10px] text-white/40 backdrop-blur-sm transition-colors duration-300 hover:border-blue-400/20 hover:text-white/65">
            {text}
        </span>
    );
}


function InfoRow({ label, value }) {
    return (
        <div className="mb-4 flex items-center justify-between last:mb-0">

            <span className="text-[9px] uppercase tracking-[0.15em] text-white/20">
                {label}
            </span>

            <span className="text-[10px] text-white/45">
                {value}
            </span>

        </div>
    );
}


function Process({ number, title, text }) {
    return (
        <div className="border-t border-white/[0.08] pt-4">

            <span className="font-mono text-[9px] text-blue-400">
                {number}
            </span>

            <h3 className="mt-4 text-sm font-medium">
                {title}
            </h3>

            <p className="mt-2 text-xs leading-6 text-white/28">
                {text}
            </p>

        </div>
    );
}


export default About;
