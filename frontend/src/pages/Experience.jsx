import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    Code2,
    Trophy,
    GraduationCap,
} from "lucide-react";

function Experience() {
    const experiences = [
        {
            year: "2026",
            type: "Project",
            icon: Code2,
            title: "Zestora — Full-Stack Food Ordering System",
            description:
                "Building a complete online food ordering platform using the MERN stack. The project includes authentication, cart management, coupons, checkout, order management, and a responsive user interface.",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
            ],
        },
        {
            year: "2026",
            type: "Hackathon",
            icon: Trophy,
            title: "Edge AI for PCB Defect Detection",
            description:
                "Worked as ML Lead and System Architect on an AI-powered PCB inspection system. The project uses computer vision and YOLO-based object detection to identify manufacturing defects.",
            technologies: [
                "Python",
                "YOLOv8",
                "OpenCV",
                "FastAPI",
                "Machine Learning",
            ],
        },
        {
            year: "2026",
            type: "Project",
            icon: BriefcaseBusiness,
            title: "Patra Physiotherapy Clinic",
            description:
                "Developed a full-stack web application focused on creating a modern digital experience for a physiotherapy clinic, combining frontend interfaces with backend functionality.",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
            ],
        },
        {
            year: "2025 — 2026",
            type: "Development",
            icon: Code2,
            title: "MERN Stack Development",
            description:
                "Focused on learning and applying full-stack JavaScript development through practical projects, exploring frontend architecture, REST APIs, authentication, databases, and responsive UI development.",
            technologies: [
                "JavaScript",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
            ],
        },
        {
            year: "Ongoing",
            type: "Learning",
            icon: GraduationCap,
            title: "Exploring AI & Intelligent Systems",
            description:
                "Continuously exploring machine learning, computer vision, and ways to integrate intelligent systems with practical software applications.",
            technologies: [
                "Python",
                "OpenCV",
                "YOLO",
                "AI / ML",
            ],
        },
    ];

    return (
        <main className="bg-white text-slate-900">

            {/* ================= HEADER ================= */}
            <section className="border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        className="max-w-3xl"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                            Experience
                        </p>

                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            The journey behind
                            <br />
                            <span className="text-slate-400">
                                what I build.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
                            A timeline of the projects, challenges, and
                            experiences that have shaped my development journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ================= TIMELINE ================= */}
            <section>
                <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-24">

                    <div className="relative">

                        {/* Timeline Line */}
                        <div className="absolute left-[15px] top-2 hidden h-[calc(100%-10px)] w-px bg-slate-200 sm:block" />

                        <div className="space-y-12">

                            {experiences.map((experience, index) => {
                                const Icon = experience.icon;

                                return (
                                    <motion.article
                                        key={experience.title}
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
                                            amount: 0.15,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.08,
                                        }}
                                        className="relative sm:pl-14"
                                    >

                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white sm:flex">
                                            <div className="h-2 w-2 rounded-full bg-blue-600" />
                                        </div>

                                        {/* Content */}
                                        <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

                                            {/* Top */}
                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                                                <div className="flex items-start gap-4">

                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                                                        <Icon
                                                            size={21}
                                                            strokeWidth={1.8}
                                                            className="text-blue-600"
                                                        />
                                                    </div>

                                                    <div>
                                                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                                                            {experience.type}
                                                        </p>

                                                        <h2 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                                                            {experience.title}
                                                        </h2>
                                                    </div>

                                                </div>

                                                <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
                                                    {experience.year}
                                                </span>

                                            </div>

                                            {/* Description */}
                                            <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
                                                {experience.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {experience.technologies.map(
                                                    (technology) => (
                                                        <span
                                                            key={technology}
                                                            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                                                        >
                                                            {technology}
                                                        </span>
                                                    )
                                                )}
                                            </div>

                                        </div>
                                    </motion.article>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PHILOSOPHY ================= */}
            <section className="border-t border-slate-100 bg-slate-50">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">

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
                                duration: 0.6,
                            }}
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                                My Approach
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                                Learn.
                                <br />
                                Build.
                                <br />
                                <span className="text-slate-400">
                                    Improve.
                                </span>
                            </h2>
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
                                duration: 0.6,
                            }}
                            className="space-y-5 text-base leading-7 text-slate-500 sm:text-lg"
                        >
                            <p>
                                I don't see development as simply learning a
                                list of technologies. I prefer understanding
                                how those technologies work together to solve
                                actual problems.
                            </p>

                            <p>
                                Every project gives me something new to learn,
                                whether it is designing a better interface,
                                building a reliable API, structuring a
                                database, or integrating an AI model.
                            </p>

                            <p>
                                My goal is to keep improving both as a
                                developer and as a problem solver.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section>
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
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-10 sm:flex-row sm:items-end"
                    >
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                                Explore
                            </p>

                            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                                See the projects behind the journey.
                            </h2>
                        </div>

                        <a
                            href="/projects"
                            className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                        >
                            View Projects
                            <ArrowUpRight size={17} />
                        </a>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default Experience;