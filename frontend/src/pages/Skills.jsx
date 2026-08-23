import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Server,
    Brain,
    Wrench,
    GitBranch,
    ArrowUpRight,
} from "lucide-react";

function Skills() {
    const skillGroups = [
        {
            icon: Code2,
            title: "Frontend",
            description:
                "Building responsive, interactive, and modern user interfaces with strong attention to usability and visual design.",
            skills: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "Tailwind CSS",
                "Vite",
                "Responsive Design",
            ],
        },
        {
            icon: Server,
            title: "Backend",
            description:
                "Developing reliable APIs, authentication systems, server-side logic, and application architecture.",
            skills: [
                "Node.js",
                "Express.js",
                "REST API",
                "JWT Authentication",
                "Cookie Authentication",
                "API Integration",
            ],
        },
        {
            icon: Database,
            title: "Database",
            description:
                "Designing and managing application data with structured schemas, database operations, and cloud storage.",
            skills: [
                "MongoDB",
                "MongoDB Atlas",
                "Mongoose",
                "Database Design",
                "CRUD Operations",
            ],
        },
        {
            icon: Brain,
            title: "AI & Computer Vision",
            description:
                "Exploring intelligent systems, object detection, computer vision, and practical AI-powered applications.",
            skills: [
                "Python",
                "YOLO",
                "OpenCV",
                "Machine Learning",
                "Object Detection",
                "AI Integration",
            ],
        },
        {
            icon: Wrench,
            title: "Tools & Workflow",
            description:
                "Using modern development tools to build, test, debug, manage, and maintain projects efficiently.",
            skills: [
                "VS Code",
                "Postman",
                "Thunder Client",
                "npm",
                "Git",
                "GitHub",
            ],
        },
        {
            icon: GitBranch,
            title: "Development",
            description:
                "Applying reusable architecture, version control, authentication patterns, and maintainable development practices.",
            skills: [
                "Component Architecture",
                "Context API",
                "React Router",
                "Authentication",
                "API Architecture",
                "Version Control",
            ],
        },
    ];

    const stack = [
        {
            name: "MongoDB",
            number: "01",
            description: "Database",
        },
        {
            name: "Express",
            number: "02",
            description: "Backend",
        },
        {
            name: "React",
            number: "03",
            description: "Frontend",
        },
        {
            name: "Node.js",
            number: "04",
            description: "Runtime",
        },
    ];

    return (
        <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">

            {/* =========================================================
                BACKGROUND ATMOSPHERE
            ========================================================= */}

            <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">

                {/* Blue glow */}
                <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[130px]" />

                {/* Violet glow */}
                <div className="absolute right-[-200px] top-[30%] h-[500px] w-[500px] rounded-full bg-indigo-500/[0.06] blur-[140px]" />

                {/* Bottom glow */}
                <div className="absolute bottom-[-250px] left-[35%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[140px]" />

                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* =========================================================
                HEADER — SKILLS INTRO
            ========================================================= */}

            <section className="relative overflow-hidden border-b border-white/[0.07]">

                {/* =====================================================
                    AMBIENT BACKGROUND
                ===================================================== */}

                <div className="pointer-events-none absolute inset-0">

                    {/* Main glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.12, 1],
                            opacity: [0.12, 0.22, 0.12],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute right-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.08] blur-[130px]"
                    />

                    {/* Secondary glow */}
                    <motion.div
                        animate={{
                            x: [-20, 20, -20],
                            opacity: [0.06, 0.12, 0.06],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-[-120px] left-[20%] h-[300px] w-[300px] rounded-full bg-indigo-500/[0.07] blur-[120px]"
                    />

                    {/* Subtle grid */}
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
                    CONTAINER
                ===================================================== */}

                <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">

                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_430px] lg:gap-16">


                        {/* =================================================
                            LEFT — TEXT
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -25,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative z-10"
                        >

                            {/* Eyebrow */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -15,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.15,
                                }}
                                className="flex items-center gap-3"
                            >

                                <motion.span
                                    animate={{
                                        scaleX: [1, 1.4, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="h-px w-8 origin-left bg-blue-500"
                                />

                                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-blue-400 sm:text-xs">
                                    Skills & Technologies
                                </p>

                            </motion.div>


                            {/* Heading */}

                            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">

                                Tools I use to

                                <span className="block bg-gradient-to-r from-white via-white/70 to-white/25 bg-clip-text text-transparent">
                                    build ideas.
                                </span>

                            </h1>


                            {/* Description */}

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                                Technologies are more than just tools. They are the
                                building blocks I use to turn ideas into interfaces,
                                applications, intelligent systems, and real products.
                            </p>


                            {/* =================================================
                                SKILL CATEGORIES
                            ================================================= */}

                            <div className="mt-9 flex flex-wrap gap-2.5">

                                {[
                                    "Frontend",
                                    "Backend",
                                    "Database",
                                    "AI / ML",
                                    "Computer Vision",
                                ].map((item, index) => (

                                    <motion.div
                                        key={item}
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            delay: 0.45 + index * 0.08,
                                            duration: 0.45,
                                        }}
                                        whileHover={{
                                            y: -2,
                                        }}
                                        className="
                                            rounded-full
                                            border
                                            border-white/[0.08]
                                            bg-white/[0.025]
                                            px-4
                                            py-2
                                            text-[10px]
                                            font-medium
                                            text-white/45
                                            backdrop-blur-md
                                            transition-all
                                            duration-300
                                            hover:border-blue-400/25
                                            hover:bg-blue-500/[0.06]
                                            hover:text-blue-300
                                            sm:text-xs
                                        "
                                    >
                                        {item}
                                    </motion.div>

                                ))}

                            </div>


                            {/* =================================================
                                BOTTOM STATUS
                            ================================================= */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 0.9,
                                    duration: 0.7,
                                }}
                                className="mt-10 flex items-center gap-3"
                            >

                                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.05]">

                                    <motion.span
                                        animate={{
                                            scale: [1, 1.4, 1],
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                        className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]"
                                    />

                                </span>

                                <span className="text-[9px] uppercase tracking-[0.18em] text-white/25 sm:text-[10px]">
                                    Always learning · Always building
                                </span>

                            </motion.div>

                        </motion.div>


                        {/* =================================================
                            RIGHT — SIMPLE TECHNOLOGY VISUAL
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
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                relative
                                mx-auto
                                flex
                                h-[320px]
                                w-full
                                max-w-[400px]
                                items-center
                                justify-center
                            "
                        >

                            {/* =================================================
                                AMBIENT CENTER GLOW
                            ================================================= */}

                            <motion.div
                                animate={{
                                    scale: [1, 1.15, 1],
                                    opacity: [0.15, 0.28, 0.15],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    h-44
                                    w-44
                                    rounded-full
                                    bg-blue-500/[0.10]
                                    blur-[80px]
                                "
                            />


                            {/* =================================================
                                OUTER CIRCLE
                            ================================================= */}

                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="
                                    absolute
                                    h-[250px]
                                    w-[250px]
                                    rounded-full
                                    border
                                    border-white/[0.06]
                                "
                            />


                            {/* =================================================
                                ORBIT DOT
                            ================================================= */}

                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute h-[250px] w-[250px]"
                            >

                                <span
                                    className="
                                        absolute
                                        -top-1
                                        left-1/2
                                        h-2
                                        w-2
                                        -translate-x-1/2
                                        rounded-full
                                        bg-blue-400
                                        shadow-[0_0_14px_rgba(96,165,250,.8)]
                                    "
                                />

                            </motion.div>


                            {/* =================================================
                                INNER CIRCLE
                            ================================================= */}

                            <div
                                className="
                                    absolute
                                    h-[175px]
                                    w-[175px]
                                    rounded-full
                                    border
                                    border-blue-400/[0.08]
                                "
                            />


                            {/* =================================================
                                REACT
                            ================================================= */}

                            <motion.div
                                animate={{
                                    y: [-5, 5, -5],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    left-[2%]
                                    top-[27%]
                                    rounded-xl
                                    border
                                    border-blue-400/10
                                    bg-white/[0.035]
                                    px-4
                                    py-2.5
                                    backdrop-blur-md
                                "
                            >

                                <span className="text-xs font-medium text-white/55">
                                    React.js
                                </span>

                            </motion.div>


                            {/* =================================================
                                NODE
                            ================================================= */}

                            <motion.div
                                animate={{
                                    y: [5, -5, 5],
                                }}
                                transition={{
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                }}
                                className="
                                    absolute
                                    right-[1%]
                                    top-[22%]
                                    rounded-xl
                                    border
                                    border-white/[0.08]
                                    bg-white/[0.035]
                                    px-4
                                    py-2.5
                                    backdrop-blur-md
                                "
                            >

                                <span className="text-xs font-medium text-white/50">
                                    Node.js
                                </span>

                            </motion.div>


                            {/* =================================================
                                MONGODB
                            ================================================= */}

                            <motion.div
                                animate={{
                                    y: [-4, 4, -4],
                                }}
                                transition={{
                                    duration: 4.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                className="
                                    absolute
                                    bottom-[23%]
                                    left-[4%]
                                    rounded-xl
                                    border
                                    border-emerald-400/10
                                    bg-white/[0.035]
                                    px-4
                                    py-2.5
                                    backdrop-blur-md
                                "
                            >

                                <span className="text-xs font-medium text-white/50">
                                    MongoDB
                                </span>

                            </motion.div>


                            {/* =================================================
                                PYTHON
                            ================================================= */}

                            <motion.div
                                animate={{
                                    y: [4, -4, 4],
                                }}
                                transition={{
                                    duration: 4.7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.3,
                                }}
                                className="
                                    absolute
                                    bottom-[19%]
                                    right-[3%]
                                    rounded-xl
                                    border
                                    border-blue-400/10
                                    bg-white/[0.035]
                                    px-4
                                    py-2.5
                                    backdrop-blur-md
                                "
                            >

                                <span className="text-xs font-medium text-white/50">
                                    Python
                                </span>

                            </motion.div>


                            {/* =================================================
                                CENTER CARD
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
                                className="
                                    relative
                                    z-20
                                    flex
                                    h-[105px]
                                    w-[105px]
                                    flex-col
                                    items-center
                                    justify-center
                                    rounded-[30px]
                                    border
                                    border-blue-400/20
                                    bg-[#111419]/90
                                    shadow-[0_25px_70px_rgba(37,99,235,.18)]
                                    backdrop-blur-xl
                                "
                            >

                                {/* Inner border */}

                                <div
                                    className="
                                        absolute
                                        inset-2
                                        rounded-[24px]
                                        border
                                        border-white/[0.05]
                                    "
                                />

                                <span className="relative text-2xl font-semibold tracking-[-0.05em] text-white">
                                    SKILLS
                                </span>

                                <span className="relative mt-1 text-[7px] uppercase tracking-[0.25em] text-blue-400">
                                    Technologies
                                </span>

                            </motion.div>


                            {/* =================================================
                                SMALL JS LABEL
                            ================================================= */}

                            <motion.span
                                animate={{
                                    opacity: [0.25, 0.7, 0.25],
                                    y: [-2, 2, -2],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    left-[31%]
                                    top-[7%]
                                    font-mono
                                    text-[9px]
                                    text-white/25
                                "
                            >
                                JS
                            </motion.span>


                            {/* =================================================
                                SMALL AI LABEL
                            ================================================= */}

                            <motion.span
                                animate={{
                                    opacity: [0.6, 0.2, 0.6],
                                    y: [2, -2, 2],
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    bottom-[8%]
                                    right-[31%]
                                    font-mono
                                    text-[9px]
                                    text-white/25
                                "
                            >
                                AI
                            </motion.span>


                            {/* =================================================
                                DECORATIVE DOTS
                            ================================================= */}

                            <motion.span
                                animate={{
                                    opacity: [0.2, 1, 0.2],
                                    scale: [0.8, 1.2, 0.8],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="
                                    absolute
                                    left-[24%]
                                    top-[50%]
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-blue-400
                                    shadow-[0_0_10px_rgba(96,165,250,.8)]
                                "
                            />

                            <motion.span
                                animate={{
                                    opacity: [1, 0.2, 1],
                                    scale: [1.2, 0.8, 1.2],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                }}
                                className="
                                    absolute
                                    right-[23%]
                                    top-[51%]
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-blue-400
                                    shadow-[0_0_10px_rgba(96,165,250,.8)]
                                "
                            />

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                SKILL GROUPS
            ========================================================= */}

            <section className="relative">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">

                    {/* Section heading */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{ duration: 0.6 }}
                        className="mb-10"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                            Technical Skills
                        </p>

                        <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            The tools behind my projects.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                        {skillGroups.map((group, index) => {
                            const Icon = group.icon;

                            return (
                                <motion.article
                                    key={group.title}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
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
                                        duration: 0.6,
                                        delay: index * 0.07,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    whileHover={{
                                        y: -7,
                                    }}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-white/[0.08]
                                        bg-white/[0.035]
                                        p-6
                                        backdrop-blur-xl
                                        transition-all
                                        duration-500
                                        hover:border-blue-500/30
                                        hover:bg-white/[0.055]
                                        hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                                        sm:p-7
                                    "
                                >

                                    {/* Hover glow */}

                                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/[0.12] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Top line */}

                                    <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Icon + number */}

                                    <div className="relative flex items-start justify-between">

                                        <motion.div
                                            whileHover={{
                                                scale: 1.08,
                                                rotate: 3,
                                            }}
                                            className="
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-blue-400/10
                                                bg-blue-500/[0.08]
                                                transition-all
                                                duration-300
                                                group-hover:border-blue-400/20
                                                group-hover:bg-blue-500/[0.14]
                                            "
                                        >
                                            <Icon
                                                size={22}
                                                strokeWidth={1.7}
                                                className="text-blue-400"
                                            />
                                        </motion.div>

                                        <span className="font-mono text-sm font-medium text-white/20 transition-colors duration-300 group-hover:text-blue-400/50">
                                            0{index + 1}
                                        </span>

                                    </div>

                                    {/* Title */}

                                    <h2 className="relative mt-7 text-xl font-semibold tracking-tight text-white">
                                        {group.title}
                                    </h2>

                                    {/* Description */}

                                    <p className="relative mt-3 text-[15px] leading-7 text-white/60">
                                        {group.description}
                                    </p>

                                    {/* Skills */}

                                    <div className="relative mt-7 flex flex-wrap gap-2">

                                        {group.skills.map((skill) => (
                                            <motion.span
                                                key={skill}
                                                whileHover={{
                                                    y: -2,
                                                }}
                                                className="
                                                    rounded-lg
                                                    border
                                                    border-white/[0.09]
                                                    bg-black/20
                                                    px-3
                                                    py-2
                                                    text-sm
                                                    font-medium
                                                    text-white/75
                                                    transition-all
                                                    duration-300
                                                    hover:border-blue-400/30
                                                    hover:bg-blue-500/[0.08]
                                                    hover:text-blue-300
                                                "
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}

                                    </div>

                                </motion.article>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =========================================================
                CORE STACK
            ========================================================= */}

            <section className="relative border-y border-white/[0.07] bg-white/[0.018]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">

                    <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

                        {/* Text */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -30,
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

                            <div className="flex items-center gap-3">

                                <span className="h-px w-8 bg-blue-500" />

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                                    My Core Stack
                                </p>

                            </div>

                            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">

                                MERN is at the

                                <br />

                                <span className="text-white/35">
                                    center of my development.
                                </span>

                            </h2>

                            <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/60 sm:text-base">
                                I use MongoDB, Express.js, React, and Node.js
                                to build complete applications—from responsive
                                interfaces to APIs, authentication, and
                                database operations.
                            </p>

                            <motion.a
                                href="/projects"
                                whileHover={{ x: 4 }}
                                className="
                                    group
                                    mt-8
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition-colors
                                    duration-300
                                    hover:text-blue-400
                                "
                            >
                                See the stack in action

                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </motion.a>

                        </motion.div>

                        {/* Stack Visual */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.94,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                            className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2"
                        >

                            {stack.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    whileHover={{
                                        y: -6,
                                        scale: 1.02,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                    className="
                                        group
                                        relative
                                        min-h-32
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-white/[0.08]
                                        bg-[#0b0e13]
                                        p-5
                                        shadow-[0_10px_40px_rgba(0,0,0,0.2)]
                                        transition-all
                                        duration-300
                                        hover:border-blue-500/30
                                    "
                                >

                                    <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-blue-500/[0.07] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    <div className="relative flex h-full flex-col justify-between">

                                        <div className="flex items-center justify-between">

                                            <span className="font-mono text-xs font-medium text-white/25">
                                                {item.number}
                                            </span>

                                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500/60 transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-400" />

                                        </div>

                                        <div className="mt-7">

                                            <p className="text-lg font-semibold text-white">
                                                {item.name}
                                            </p>

                                            <p className="mt-1 text-sm text-white/40">
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>

                                </motion.div>
                            ))}

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                DEVELOPMENT PHILOSOPHY
            ========================================================= */}

            <section>

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">

                    <motion.div
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
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white/[0.08]
                            bg-gradient-to-br
                            from-blue-500/[0.09]
                            via-white/[0.025]
                            to-transparent
                            p-8
                            sm:p-10
                            lg:p-14
                        "
                    >

                        {/* Decorative circle */}

                        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-blue-400/[0.08]" />

                        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-blue-400/[0.08]" />

                        <div className="relative max-w-3xl">

                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                                Development Philosophy
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Learn by building.
                                <br />
                                <span className="text-white/35">
                                    Improve by solving.
                                </span>
                            </h2>

                            <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                                I believe the fastest way to understand
                                technology is to build real systems. Every
                                project gives me an opportunity to understand
                                architecture, solve unexpected problems,
                                improve the user experience, and learn
                                something new.
                            </p>

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* =========================================================
                BOTTOM CTA
            ========================================================= */}

            <section>

                <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 md:pb-32 lg:px-10">

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
                            duration: 0.6,
                        }}
                        className="
                            flex
                            flex-col
                            justify-between
                            gap-7
                            border-b
                            border-white/[0.08]
                            pb-10
                            sm:flex-row
                            sm:items-end
                        "
                    >

                        <div>

                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                                What's next?
                            </p>

                            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Want to see what I build?
                            </h2>

                            <p className="mt-3 max-w-lg text-[15px] leading-7 text-white/50">
                                Explore the projects where these technologies
                                come together to solve practical problems.
                            </p>

                        </div>

                        <motion.a
                            href="/projects"
                            whileHover={{
                                y: -3,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="
                                group
                                relative
                                inline-flex
                                w-fit
                                items-center
                                gap-2
                                overflow-hidden
                                rounded-full
                                bg-white
                                px-6
                                py-3.5
                                text-sm
                                font-semibold
                                text-[#07090d]
                                transition-all
                                duration-300
                                hover:bg-blue-500
                                hover:text-white
                                hover:shadow-[0_10px_35px_rgba(37,99,235,0.25)]
                            "
                        >

                            <span className="relative">
                                View Projects
                            </span>

                            <ArrowUpRight
                                size={17}
                                className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />

                        </motion.a>

                    </motion.div>

                </div>

            </section>

        </main>
    );
}

export default Skills;