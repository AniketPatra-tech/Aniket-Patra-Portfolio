import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ExternalLink,
    Code2,
    Sparkles,
    CheckCircle2,
    Monitor,
    BrainCircuit,
    HeartPulse,
    ShoppingBag,
    Terminal,
    ScanLine,
    Activity,
} from "lucide-react";

function Projects() {
    const projects = [
        {
            number: "01",
            title: "Zestora",
            category: "Full-Stack Web Application",
            description:
                "A full-stack online food ordering platform designed for a restaurant, featuring authentication, cart management, coupons, checkout, order management, and a responsive user experience.",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
            ],
            status: "In Development",
            featured: true,
            github: "#",
            demo: "#",
            visual: "zestora",
        },
        {
            number: "02",
            title: "PCB Defect Detection",
            category: "AI / Computer Vision",
            description:
                "An AI-powered PCB inspection system designed to detect manufacturing defects using computer vision and YOLO-based object detection.",
            technologies: [
                "Python",
                "YOLOv8",
                "OpenCV",
                "FastAPI",
                "AI / ML",
            ],
            status: "Hackathon Project",
            featured: true,
            github: "#",
            demo: "#",
            visual: "ai",
        },
        {
            number: "03",
            title: "Patra Physiotherapy Clinic",
            category: "Full-Stack Web Application",
            description:
                "A modern clinic web application built to provide a clean digital experience with practical frontend and backend functionality.",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
            ],
            status: "Completed",
            featured: false,
            github: "#",
            demo: "#",
            visual: "clinic",
        },
        {
            number: "04",
            title: "Cardio UI",
            category: "Frontend Development",
            description:
                "A modern healthcare-focused interface built with React and Tailwind CSS, emphasizing responsive layouts, reusable components, and clean visual design.",
            technologies: [
                "React",
                "Tailwind CSS",
                "Vite",
                "Framer Motion",
            ],
            status: "Frontend Project",
            featured: false,
            github: "#",
            demo: "#",
            visual: "cardio",
        },
    ];

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0c0e11] text-white">

            {/* =====================================================
                AMBIENT BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[8%] top-[8%] h-[320px] w-[320px] rounded-full bg-blue-500/[0.045] blur-[120px]"
                />

                <motion.div
                    animate={{
                        x: [0, -35, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[5%] top-[35%] h-[380px] w-[380px] rounded-full bg-indigo-500/[0.035] blur-[140px]"
                />

                <div className="absolute bottom-[5%] left-[35%] h-[300px] w-[300px] rounded-full bg-blue-400/[0.025] blur-[120px]" />

                <div
                    className="absolute inset-0 opacity-[0.018]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                        backgroundSize: "70px 70px",
                    }}
                />
            </div>

            {/* =====================================================
                HEADER
            ===================================================== */}

            <section className="relative z-10">
                <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pb-20">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10"
                    >

                        {/* =================================================
                            LEFT : TEXT
                        ================================================= */}

                        <div className="max-w-3xl">

                            <div className="flex items-center gap-3">

                                <motion.span
                                    animate={{
                                        scale: [1, 1.45, 1],
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,.9)]"
                                />

                                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-blue-400 sm:text-xs">
                                    Selected Work
                                </p>

                            </div>

                            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">

                                Things I've built

                                <span className="block text-white/25">
                                    and explored.
                                </span>

                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                                A collection of applications, experiments and systems
                                where I combine design, development, backend
                                architecture and intelligent technologies.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-8">

                                <Stat
                                    number="04"
                                    label="Projects"
                                />

                                <Stat
                                    number="MERN"
                                    label="Primary Stack"
                                />

                                <Stat
                                    number="AI"
                                    label="Exploration"
                                />

                            </div>

                        </div>


                        {/* =================================================
                            RIGHT : DESKTOP + LAPTOP WORKSTATION
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 35,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative mt-10 h-[250px] w-full sm:h-[280px] lg:mt-0 lg:h-[340px]"
                        >

                            {/* =================================================
                                AMBIENT BLUE LIGHT
                            ================================================= */}

                            <motion.div
                                animate={{
                                    scale: [1, 1.12, 1],
                                    opacity: [0.28, 0.42, 0.28],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute left-[48%] top-[42%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.12] blur-[100px]"
                            />

                            <motion.div
                                animate={{
                                    opacity: [0.08, 0.16, 0.08],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                className="absolute bottom-12 left-1/2 h-20 w-[420px] -translate-x-1/2 rounded-full bg-blue-400/[0.10] blur-[50px]"
                            />


                            {/* =================================================
                                FLOATING CODE CARD
                            ================================================= */}

                            <motion.div
                                animate={{
                                    y: [-5, 5, -5],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute right-0 top-1 z-40 w-[155px] rounded-xl border border-blue-400/[0.12] bg-[#10151c]/90 p-3 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-xl"
                            >

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-1.5">

                                        <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />

                                    </div>

                                    <span className="font-mono text-[6px] text-white/20">
                                        api.js
                                    </span>

                                </div>

                                <div className="mt-3 space-y-2 font-mono text-[7px]">

                                    <div>
                                        <span className="text-purple-400/80">
                                            async
                                        </span>{" "}
                                        <span className="text-blue-300/70">
                                            build
                                        </span>
                                        <span className="text-white/30">
                                            ()
                                        </span>
                                    </div>

                                    <div className="ml-2 text-white/25">
                                        await database.connect()
                                    </div>

                                    <div className="ml-2 text-emerald-400/60">
                                        return project
                                    </div>

                                    <motion.div
                                        animate={{
                                            width: ["20px", "70px", "30px"],
                                        }}
                                        transition={{
                                            duration: 2.4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="h-[2px] rounded-full bg-blue-400/70"
                                    />

                                </div>

                            </motion.div>


                            {/* =================================================
                                DESKTOP MONITOR
                            ================================================= */}

                            <motion.div
                                animate={{
                                    y: [0, -3, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute left-[2%] top-[35px] z-20"
                            >

                                {/* Monitor Frame */}

                                <div className="relative h-[220px] w-[315px] rounded-[12px] border border-white/[0.16] bg-[#171b20] p-[8px] shadow-[0_35px_90px_rgba(0,0,0,.65)]">

                                    {/* Screen */}

                                    <div className="relative h-full overflow-hidden rounded-[5px] border border-white/[0.08] bg-[#080b0f]">

                                        {/* Screen glow */}

                                        <div className="pointer-events-none absolute inset-0 bg-blue-500/[0.035]" />

                                        {/* Screen reflection */}

                                        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rotate-45 bg-white/[0.025] blur-2xl" />


                                        {/* Browser / IDE Header */}

                                        <div className="flex h-7 items-center border-b border-white/[0.07] bg-[#0d1117] px-3">

                                            <div className="flex gap-1.5">

                                                <span className="h-2 w-2 rounded-full bg-red-400/65" />
                                                <span className="h-2 w-2 rounded-full bg-yellow-400/65" />
                                                <span className="h-2 w-2 rounded-full bg-emerald-400/65" />

                                            </div>

                                            <div className="ml-5 flex h-3 w-28 items-center rounded bg-white/[0.035] px-2">

                                                <span className="font-mono text-[5px] text-white/20">
                                                    zestora / src / App.jsx
                                                </span>

                                            </div>

                                        </div>


                                        {/* IDE */}

                                        <div className="flex h-[calc(100%-28px)]">

                                            {/* Sidebar */}

                                            <div className="w-[38px] border-r border-white/[0.05] bg-[#0b0f14] px-2 pt-3">

                                                <div className="space-y-3">

                                                    <div className="mx-auto h-2.5 w-2.5 rounded bg-blue-400/50" />

                                                    <div className="mx-auto h-2.5 w-2.5 rounded bg-white/10" />

                                                    <div className="mx-auto h-2.5 w-2.5 rounded bg-white/10" />

                                                    <div className="mx-auto h-2.5 w-2.5 rounded bg-white/10" />

                                                </div>

                                            </div>


                                            {/* Code Editor */}

                                            <div className="flex-1 overflow-hidden px-3 pt-3">

                                                <div className="flex gap-3">

                                                    {/* Line Numbers */}

                                                    <div className="font-mono text-[6px] leading-[15px] text-white/10">
                                                        01<br />
                                                        02<br />
                                                        03<br />
                                                        04<br />
                                                        05<br />
                                                        06<br />
                                                        07<br />
                                                        08<br />
                                                        09<br />
                                                        10
                                                    </div>


                                                    {/* Code */}

                                                    <div className="font-mono text-[7px] leading-[15px]">

                                                        <div>
                                                            <span className="text-purple-400/80">
                                                                import
                                                            </span>{" "}
                                                            <span className="text-blue-300/70">
                                                                React
                                                            </span>{" "}
                                                            <span className="text-white/20">
                                                                from
                                                            </span>{" "}
                                                            <span className="text-emerald-400/65">
                                                                "react"
                                                            </span>
                                                        </div>

                                                        <div>
                                                            <span className="text-purple-400/80">
                                                                import
                                                            </span>{" "}
                                                            <span className="text-white/40">
                                                                Navbar
                                                            </span>
                                                        </div>

                                                        <div className="mt-1">
                                                            <span className="text-purple-400/80">
                                                                const
                                                            </span>{" "}
                                                            <span className="text-blue-300/70">
                                                                App
                                                            </span>{" "}
                                                            <span className="text-white/25">
                                                                =
                                                            </span>{" "}
                                                            <span className="text-yellow-300/60">
                                                                ()
                                                            </span>{" "}
                                                            <span className="text-white/30">
                                                                =&gt;
                                                            </span>
                                                        </div>

                                                        <div className="ml-3">
                                                            <span className="text-purple-400/70">
                                                                return
                                                            </span>{" "}
                                                            <span className="text-white/40">
                                                                (
                                                            </span>
                                                        </div>

                                                        <div className="ml-6 text-blue-300/60">
                                                            &lt;main&gt;
                                                        </div>

                                                        <div className="ml-9 text-emerald-400/60">
                                                            &lt;Navbar /&gt;
                                                        </div>

                                                        <div className="ml-9 text-emerald-400/60">
                                                            &lt;Projects /&gt;
                                                        </div>

                                                        <div className="ml-6 text-blue-300/60">
                                                            &lt;/main&gt;
                                                        </div>

                                                        <div className="ml-3 text-white/30">
                                                            )
                                                        </div>

                                                        <motion.div
                                                            animate={{
                                                                opacity: [0.2, 1, 0.2],
                                                            }}
                                                            transition={{
                                                                duration: 1.1,
                                                                repeat: Infinity,
                                                            }}
                                                            className="mt-1 h-3 w-[1px] bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,.8)]"
                                                        />

                                                    </div>

                                                </div>


                                                {/* Bottom terminal */}

                                                <div className="absolute bottom-2 left-[48px] right-2 flex items-center justify-between border-t border-white/[0.05] pt-1.5">

                                                    <span className="font-mono text-[5px] text-white/20">
                                                        main
                                                    </span>

                                                    <span className="flex items-center gap-1 font-mono text-[5px] text-emerald-400/60">

                                                        <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,.8)]" />

                                                        Running

                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* Monitor Stand */}

                                <div className="mx-auto h-10 w-5 bg-[#1a1e23]">

                                    <div className="mx-auto h-full w-2 bg-white/[0.035]" />

                                </div>


                                {/* Monitor Foot */}

                                <div className="mx-auto -mt-1 h-2.5 w-24 rounded-full border border-white/[0.08] bg-[#181c21] shadow-[0_10px_25px_rgba(0,0,0,.5)]" />

                            </motion.div>


                            {/* =================================================
                                LAPTOP — LIVE DEMO
                            ================================================= */}

                            <motion.div
                                animate={{
                                    y: [0, -5, 0],
                                    rotate: [0, 0.4, 0],
                                }}
                                transition={{
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-[54px] right-[2%] z-30"
                            >

                                {/* Laptop Screen */}

                                <div className="relative h-[145px] w-[205px] rounded-[12px] border border-white/[0.16] bg-[#171b20] p-[6px] shadow-[0_30px_70px_rgba(0,0,0,.65)]">

                                    <div className="relative h-full overflow-hidden rounded-[7px] border border-white/[0.08] bg-[#f8fafc]">

                                        {/* Browser top */}

                                        <div className="flex h-6 items-center gap-1.5 border-b border-slate-200 bg-white px-2">

                                            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                                            <div className="ml-2 h-2.5 flex-1 rounded-full bg-slate-100" />

                                        </div>


                                        {/* LIVE DEMO */}

                                        <div className="p-3">

                                            <div className="flex items-center justify-between">

                                                <div className="font-bold text-[9px] tracking-tight text-slate-900">
                                                    zestora
                                                </div>

                                                <div className="flex gap-2 text-[5px] text-slate-400">
                                                    Menu
                                                    Cart
                                                    Login
                                                </div>

                                            </div>


                                            {/* Hero */}

                                            <div className="mt-3 rounded-md bg-gradient-to-r from-slate-900 to-slate-700 p-3">

                                                <div className="text-[6px] font-semibold uppercase tracking-widest text-blue-300">
                                                    Only on zestora
                                                </div>

                                                <div className="mt-1 text-[11px] font-bold leading-tight text-white">
                                                    Taste something
                                                    <br />
                                                    special.
                                                </div>

                                                <div className="mt-2 h-2 w-14 rounded-full bg-blue-400" />

                                            </div>


                                            {/* Food cards */}

                                            <div className="mt-3 grid grid-cols-3 gap-2">

                                                <div className="rounded-md border border-slate-200 bg-white p-1.5 shadow-sm">

                                                    <div className="h-7 rounded bg-orange-100" />

                                                    <div className="mt-1 h-1 w-10 rounded bg-slate-200" />

                                                    <div className="mt-1 h-1 w-6 rounded bg-blue-200" />

                                                </div>

                                                <div className="rounded-md border border-slate-200 bg-white p-1.5 shadow-sm">

                                                    <div className="h-7 rounded bg-yellow-100" />

                                                    <div className="mt-1 h-1 w-10 rounded bg-slate-200" />

                                                    <div className="mt-1 h-1 w-6 rounded bg-blue-200" />

                                                </div>

                                                <div className="rounded-md border border-slate-200 bg-white p-1.5 shadow-sm">

                                                    <div className="h-7 rounded bg-red-100" />

                                                    <div className="mt-1 h-1 w-10 rounded bg-slate-200" />

                                                    <div className="mt-1 h-1 w-6 rounded bg-blue-200" />

                                                </div>

                                            </div>


                                            {/* Live indicator */}

                                            <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow-sm">

                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                                                <span className="text-[5px] font-semibold uppercase tracking-wider text-slate-500">
                                                    Live Demo
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* Laptop hinge */}

                                <div className="mx-auto h-2 w-8 rounded-b bg-[#252a30]" />


                                {/* Laptop Base */}

                                <div className="relative -mt-1 -ml-[20px] h-4 w-[245px] rounded-b-[13px] border border-white/[0.10] bg-[#181c21] shadow-[0_20px_40px_rgba(0,0,0,.6)]">

                                    {/* Trackpad */}

                                    <div className="absolute left-1/2 top-1 h-2 w-16 -translate-x-1/2 rounded border border-white/[0.04] bg-white/[0.025]" />

                                </div>

                            </motion.div>


                            {/* =================================================
                                SMALL TERMINAL
                            ================================================= */}

                            <motion.div
                                animate={{
                                    y: [5, -5, 5],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                }}
                                className="absolute bottom-10 left-0 z-40 w-[125px] rounded-xl border border-white/[0.07] bg-[#101419]/90 p-3 shadow-[0_20px_50px_rgba(0,0,0,.4)] backdrop-blur-xl"
                            >

                                <div className="font-mono text-[7px] text-white/30">

                                    <span className="text-blue-400">
                                        $
                                    </span>{" "}
                                    npm run dev

                                </div>

                                <motion.div
                                    animate={{
                                        width: ["20px", "72px", "35px"],
                                    }}
                                    transition={{
                                        duration: 2.2,
                                        repeat: Infinity,
                                    }}
                                    className="mt-2 h-[2px] rounded-full bg-emerald-400/70"
                                />

                                <p className="mt-2 font-mono text-[6px] text-emerald-400/45">
                                    server running...
                                </p>

                            </motion.div>


                            {/* =================================================
                                FLOATING TECHNOLOGY LABELS
                            ================================================= */}

                            <motion.div
                                animate={{
                                    y: [-3, 4, -3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                className="absolute left-[42%] top-0 z-40 rounded-full border border-blue-400/[0.12] bg-blue-400/[0.05] px-3 py-1.5 font-mono text-[7px] text-blue-300/60 backdrop-blur-md"
                            >
                                React + Node
                            </motion.div>


                            {/* =================================================
                                DESK
                            ================================================= */}

                            <div className="absolute bottom-[44px] left-[4%] right-[2%] h-px bg-white/[0.08]" />

                            <div className="absolute bottom-[32px] left-[20%] h-6 w-[360px] rounded-full bg-blue-500/[0.05] blur-2xl" />


                            {/* =================================================
                                BUILDING STATUS
                            ================================================= */}

                            <motion.div
                                animate={{
                                    y: [0, -4, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-0 right-[6%] z-50 flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#101318]/95 px-4 py-2.5 shadow-[0_15px_45px_rgba(0,0,0,.5)] backdrop-blur-xl"
                            >

                                <motion.span
                                    animate={{
                                        scale: [1, 1.45, 1],
                                        opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.9)]"
                                />

                                <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/40">
                                    Building projects
                                </span>

                            </motion.div>

                        </motion.div>

                    </motion.div>

                </div>
            </section>

            {/* =====================================================
                PROJECT LIST
            ===================================================== */}

            <section className="relative z-10">
                <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">

                    <div className="space-y-7">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* =====================================================
                BUILDING PHILOSOPHY
            ===================================================== */}

            <section className="relative z-10 border-t border-white/[0.06]">
                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -25,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                        >
                            <span className="text-[10px] uppercase tracking-[0.22em] text-blue-400 sm:text-xs">
                                05 / Philosophy
                            </span>

                            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                                Projects are where
                                <span className="block text-white/25">
                                    I learn the most.
                                </span>
                            </h2>

                            <div className="mt-7 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                                    <Sparkles
                                        size={17}
                                        className="text-blue-400"
                                    />
                                </div>

                                <p className="text-xs text-white/40 sm:text-sm">
                                    Build · Learn · Improve
                                </p>
                            </div>
                        </motion.div>

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
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                        >
                            <p className="text-sm leading-8 text-white/45 sm:text-base">
                                I prefer learning by building complete
                                systems. That means thinking about the
                                interface, application logic, APIs, database
                                structure, authentication, user experience,
                                and the problems that appear along the way.
                            </p>

                            <p className="mt-5 text-sm leading-8 text-white/35 sm:text-base">
                                Every project gives me an opportunity to
                                understand something deeper and turn that
                                knowledge into a better product.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* =====================================================
                CTA
            ===================================================== */}

            <section className="relative z-10 border-t border-white/[0.06]">
                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

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
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.9, 0.5],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/[0.08] blur-[80px]"
                        />

                        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">

                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.7)]" />

                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                                        What's next?
                                    </p>
                                </div>

                                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                                    Let's build something useful.
                                </h2>

                                <p className="mt-2 text-sm text-white/35">
                                    Have an idea, project or problem worth
                                    solving?
                                </p>
                            </div>

                            <Link
                                to="/contact"
                                className="group flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
                            >
                                Get in touch

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>

                        </div>
                    </motion.div>

                </div>
            </section>

            {/* =====================================================
                FOOTER
            ===================================================== */}

            <footer className="relative z-10 border-t border-white/[0.06]">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-7 sm:px-8 md:flex-row lg:px-10">

                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                        © 2026 Aniket Patra
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                        Building with curiosity
                    </p>

                </div>
            </footer>

        </main>
    );
}


/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({ project, index }) {
    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 35,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.12,
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.08,
            }}
            whileHover={{
                y: -4,
            }}
            className="group relative overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#111419] transition-all duration-500 hover:border-blue-400/20 hover:shadow-[0_25px_80px_rgba(0,0,0,.3)]"
        >

            {/* Hover glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.05] opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />

            <div className="relative grid lg:grid-cols-[330px_1fr]">

                {/* =================================================
                    ANIMATED PROJECT VISUAL
                ================================================= */}

                <ProjectVisual project={project} />

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="p-7 sm:p-9">

                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-blue-400 sm:text-xs">
                                {project.category}
                            </p>

                            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                                {project.title}
                            </h2>
                        </div>

                        {project.featured && (
                            <span className="flex w-fit items-center gap-2 rounded-full border border-blue-400/10 bg-blue-400/[0.06] px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-blue-300">
                                <Sparkles size={11} />
                                Featured
                            </span>
                        )}

                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-white/45 sm:text-base">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">

                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-white/45 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-400/[0.05] hover:text-blue-300 sm:text-xs"
                            >
                                {technology}
                            </span>
                        ))}

                    </div>

                    {/* Bottom */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/[0.06] pt-6">

                        <div className="flex flex-wrap items-center gap-5">

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="group/link inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white sm:text-sm"
                            >
                                <Code2
                                    size={15}
                                    className="text-white/30 transition-colors group-hover/link:text-blue-400"
                                />

                                Source Code

                                <ArrowUpRight
                                    size={12}
                                    className="opacity-0 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
                                />
                            </a>

                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="group/link inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-white sm:text-sm"
                            >
                                <ExternalLink
                                    size={15}
                                    className="text-white/30 transition-colors group-hover/link:text-blue-400"
                                />

                                Live Demo

                                <ArrowUpRight
                                    size={12}
                                    className="opacity-0 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
                                />
                            </a>

                        </div>

                        <div className="hidden items-center gap-2 sm:flex">

                            <CheckCircle2
                                size={14}
                                className="text-emerald-400/50"
                            />

                            <span className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                                {project.status}
                            </span>

                        </div>

                    </div>

                </div>
            </div>
        </motion.article>
    );
}


/* ============================================================
   PROJECT VISUAL
============================================================ */

function ProjectVisual({ project }) {
    return (
        <div className="relative flex min-h-[270px] items-center justify-center overflow-hidden border-b border-white/[0.06] bg-[#080a0d] p-7 lg:min-h-[340px] lg:border-b-0 lg:border-r">

            {/* Grid */}
            <motion.div
                animate={{
                    backgroundPosition: ["0px 0px", "32px 32px"],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Ambient orb */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.25, 0.6, 0.25],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute h-44 w-44 rounded-full bg-blue-500/[0.08] blur-[60px]"
            />

            {/* Specific animation */}
            {project.visual === "zestora" && <ZestoraVisual />}

            {project.visual === "ai" && <AIVisual />}

            {project.visual === "clinic" && <ClinicVisual />}

            {project.visual === "cardio" && <CardioVisual />}

            {/* Project number */}
            <span className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                PROJECT {project.number}
            </span>

            {/* Status */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2">

                <motion.span
                    animate={{
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]"
                />

                <span className="text-[10px] uppercase tracking-[0.12em] text-white/30">
                    {project.status}
                </span>

            </div>
        </div>
    );
}


/* ============================================================
   ZESTORA VISUAL
============================================================ */

function ZestoraVisual() {
    return (
        <div className="relative z-10 w-full max-w-[245px]">

            <motion.div
                animate={{
                    y: [0, -5, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#11151a] shadow-[0_25px_70px_rgba(0,0,0,.5)]"
            >

                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">

                    <div className="flex items-center gap-2">
                        <ShoppingBag
                            size={13}
                            className="text-blue-400"
                        />

                        <span className="text-[10px] font-semibold text-white/70">
                            zestora
                        </span>
                    </div>

                    <div className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                    </div>

                </div>

                {/* Hero */}
                <div className="relative h-24 overflow-hidden bg-gradient-to-br from-blue-500/20 to-transparent p-4">

                    <div className="relative z-10">
                        <p className="text-[8px] uppercase tracking-widest text-blue-300/70">
                            Fresh · Fast · Local
                        </p>

                        <p className="mt-2 text-xs font-semibold text-white/85">
                            Your food,
                            <br />
                            your way.
                        </p>
                    </div>

                    <motion.div
                        animate={{
                            x: [-30, 100, -30],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-0 h-full w-10 bg-white/10 blur-xl"
                    />

                </div>

                {/* Fake food cards */}
                <div className="grid grid-cols-2 gap-2 p-3">

                    {["Burger", "Biryani"].map((item, index) => (
                        <motion.div
                            key={item}
                            animate={{
                                y: [0, -2, 0],
                            }}
                            transition={{
                                duration: 3 + index,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2"
                        >
                            <div className="h-8 rounded-md bg-blue-400/[0.08]" />

                            <p className="mt-2 text-[8px] text-white/50">
                                {item}
                            </p>

                            <p className="mt-1 text-[8px] font-semibold text-blue-300">
                                ₹149
                            </p>
                        </motion.div>
                    ))}

                </div>

            </motion.div>

        </div>
    );
}


/* ============================================================
   AI VISUAL
============================================================ */

function AIVisual() {
    return (
        <div className="relative z-10 flex h-[190px] w-[245px] items-center justify-center">

            {/* Scanner area */}
            <div className="relative h-[145px] w-[215px] overflow-hidden rounded-xl border border-blue-400/15 bg-blue-400/[0.025]">

                {/* PCB lines */}
                <div className="absolute inset-5 opacity-30">

                    <div className="absolute left-3 top-8 h-px w-24 bg-blue-400" />
                    <div className="absolute left-12 top-16 h-px w-32 bg-blue-400" />
                    <div className="absolute left-5 top-24 h-px w-20 bg-blue-400" />
                    <div className="absolute right-5 top-10 h-16 w-px bg-blue-400" />

                    <div className="absolute left-10 top-8 h-3 w-3 rounded-full border border-blue-400" />
                    <div className="absolute right-12 top-20 h-3 w-3 rounded-full border border-blue-400" />
                    <div className="absolute left-20 bottom-5 h-3 w-3 rounded-full border border-blue-400" />

                </div>

                {/* Detection boxes */}
                <motion.div
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.03, 1],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                    }}
                    className="absolute left-[55px] top-[42px] h-9 w-12 rounded border border-red-400/80"
                >
                    <span className="absolute -top-4 left-0 text-[7px] text-red-400">
                        DEFECT
                    </span>
                </motion.div>

                <motion.div
                    animate={{
                        opacity: [1, 0.3, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="absolute right-[38px] bottom-[32px] h-7 w-9 rounded border border-emerald-400/80"
                >
                    <span className="absolute -top-4 left-0 text-[7px] text-emerald-400">
                        OK
                    </span>
                </motion.div>

                {/* Scanning line */}
                <motion.div
                    animate={{
                        y: [0, 130, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-0 right-0 top-0 h-px bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,.9)]"
                />

                {/* Scan glow */}
                <motion.div
                    animate={{
                        y: [0, 130, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-0 right-0 top-0 h-12 bg-blue-400/[0.05] blur-xl"
                />

            </div>

            {/* Center icon */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                className="absolute bottom-0 right-3 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-[#111419] shadow-lg"
            >
                <BrainCircuit
                    size={18}
                    className="text-blue-400"
                />
            </motion.div>

        </div>
    );
}


/* ============================================================
   CLINIC VISUAL
============================================================ */

function ClinicVisual() {
    return (
        <div className="relative z-10 w-full max-w-[245px]">

            <motion.div
                animate={{
                    y: [0, -5, 0],
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="rounded-2xl border border-white/10 bg-[#111419] p-4 shadow-[0_25px_70px_rgba(0,0,0,.5)]"
            >

                <div className="flex items-center gap-3 border-b border-white/[0.06] pb-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                        <HeartPulse
                            size={15}
                            className="text-blue-400"
                        />
                    </div>

                    <div>
                        <p className="text-[9px] font-semibold text-white/70">
                            Patient Dashboard
                        </p>

                        <p className="text-[7px] text-white/25">
                            Today's overview
                        </p>
                    </div>

                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">

                    <MiniMetric
                        value="24"
                        label="Patients"
                    />

                    <MiniMetric
                        value="08"
                        label="Sessions"
                    />

                </div>

                <div className="mt-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">

                    <div className="flex items-center justify-between">
                        <span className="text-[8px] text-white/30">
                            Recovery
                        </span>

                        <span className="text-[8px] text-emerald-400">
                            +18%
                        </span>
                    </div>

                    <div className="mt-3 flex h-10 items-end gap-1">

                        {[30, 45, 35, 60, 48, 72, 64, 82].map(
                            (height, index) => (
                                <motion.div
                                    key={index}
                                    animate={{
                                        height: [
                                            `${height - 10}%`,
                                            `${height}%`,
                                            `${height - 10}%`,
                                        ],
                                    }}
                                    transition={{
                                        duration: 2 + index * 0.1,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="flex-1 rounded-t bg-blue-400/40"
                                />
                            )
                        )}

                    </div>

                </div>

            </motion.div>

        </div>
    );
}


/* ============================================================
   CARDIO VISUAL
============================================================ */

function CardioVisual() {
    return (
        <div className="relative z-10 flex w-full max-w-[245px] justify-center">

            <motion.div
                animate={{
                    rotate: [-1, 1, -1],
                    y: [0, -4, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative w-[220px] rounded-2xl border border-white/10 bg-[#111419] p-4 shadow-[0_25px_70px_rgba(0,0,0,.5)]"
            >

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">
                        <Activity
                            size={14}
                            className="text-blue-400"
                        />

                        <span className="text-[9px] font-semibold text-white/65">
                            Cardio UI
                        </span>
                    </div>

                    <span className="text-[7px] text-emerald-400">
                        ● LIVE
                    </span>

                </div>

                <div className="mt-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">

                    <p className="text-[8px] uppercase tracking-widest text-white/25">
                        Heart Rate
                    </p>

                    <div className="mt-2 flex items-end gap-2">
                        <span className="text-2xl font-semibold text-white/85">
                            78
                        </span>

                        <span className="pb-1 text-[8px] text-white/25">
                            BPM
                        </span>
                    </div>

                    {/* ECG */}
                    <div className="relative mt-4 h-10 overflow-hidden">

                        <motion.div
                            animate={{
                                x: [0, -110],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute flex h-full w-[220px] items-center"
                        >
                            <svg
                                viewBox="0 0 220 40"
                                className="h-full w-full"
                            >
                                <motion.path
                                    d="M0 22 H35 L42 22 L48 8 L55 33 L63 18 L70 22 H105 L112 22 L118 8 L125 33 L133 18 L140 22 H175 L182 22 L188 8 L195 33 L203 18 L210 22 H220"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    className="text-blue-400"
                                />
                            </svg>
                        </motion.div>

                    </div>

                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">

                    <div className="rounded-lg bg-blue-400/[0.05] p-2">
                        <p className="text-[7px] text-white/25">
                            Blood Oxygen
                        </p>

                        <p className="mt-1 text-[10px] font-semibold text-white/65">
                            98%
                        </p>
                    </div>

                    <div className="rounded-lg bg-blue-400/[0.05] p-2">
                        <p className="text-[7px] text-white/25">
                            Status
                        </p>

                        <p className="mt-1 text-[10px] font-semibold text-emerald-400">
                            Healthy
                        </p>
                    </div>

                </div>

            </motion.div>

        </div>
    );
}


/* ============================================================
   MINI METRIC
============================================================ */

function MiniMetric({ value, label }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.03,
            }}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
        >
            <p className="text-lg font-semibold text-white/75">
                {value}
            </p>

            <p className="mt-1 text-[7px] uppercase tracking-widest text-white/25">
                {label}
            </p>
        </motion.div>
    );
}


/* ============================================================
   SMALL STAT
============================================================ */

function Stat({ number, label }) {
    return (
        <div>
            <p className="text-sm font-medium text-white/75 sm:text-base">
                {number}
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/30 sm:text-xs">
                {label}
            </p>
        </div>
    );
}

export default Projects;