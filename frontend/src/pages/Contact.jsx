import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Send,
} from "lucide-react";
import profileImage from "../assets/aniketimg.png";

function Contact() {
    const socials = [
        {
            name: "GitHub",
            href: "https://github.com/AniketPatra-tech",
            color: "group-hover:text-white",
            bg: "group-hover:bg-[#181717]",
            border: "group-hover:border-[#181717]",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.1c.97 0 1.94.13 2.85.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
            ),
        },
        {
            name: "X",
            href: "https://x.com/Ami_Aniket",
            color: "group-hover:text-white",
            bg: "group-hover:bg-black",
            border: "group-hover:border-black",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/mr_aniket.031/",
            color: "group-hover:text-white",
            bg: "group-hover:bg-gradient-to-br group-hover:from-[#f58529] group-hover:via-[#dd2a7b] group-hover:to-[#8134af]",
            border: "group-hover:border-[#dd2a7b]",
            icon: (
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
                    <circle cx="12" cy="12" r="4" />
                    <circle
                        cx="17.5"
                        cy="6.5"
                        r="1"
                        fill="currentColor"
                        stroke="none"
                    />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/aniket-patra-35b558326",
            color: "group-hover:text-white",
            bg: "group-hover:bg-[#0A66C2]",
            border: "group-hover:border-[#0A66C2]",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                >
                    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.32ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V8.99h3.56v11.46Z" />
                </svg>
            ),
        },
    ];

    return (
        <main className="min-h-screen bg-[#07090d] text-white">

            {/* ================= BACKGROUND GLOW ================= */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[5%] h-80 w-80 rounded-full bg-purple-600/10 blur-[140px]" />
            </div>

            {/* ================= HEADER ================= */}
            <section className="border-b border-white/[0.07] bg-[#08080a] text-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10">

                    {/* ================= LEFT CONTENT ================= */}
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
                        className="max-w-3xl"
                    >
                        {/* Label */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                            }}
                            className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400"
                        >
                            Contact
                        </motion.p>

                        {/* Heading */}
                        <h1 className="mt-4 whitespace-nowrap text-[clamp(2.3rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.045em] text-white">
                            Let's build something
                        </h1>

                        <h1 className="mt-1 text-[clamp(2.3rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.045em] text-white/35">
                            meaningful together.
                        </h1>

                        {/* Description */}
                        <motion.p
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
                                delay: 0.3,
                            }}
                            className="mt-7 max-w-2xl text-base leading-7 text-white/50 sm:text-lg"
                        >
                            Have an idea, project, opportunity, or simply want to
                            connect? Feel free to reach out.
                        </motion.p>
                    </motion.div>


                    {/* ================= FLOATING CHATBOT ================= */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            x: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative hidden h-[330px] translate-y-8 items-center justify-center lg:flex"
                    >

                        {/* Soft blue glow */}
                        <motion.div
                            animate={{
                                scale: [1, 1.12, 1],
                                opacity: [0.12, 0.22, 0.12],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute h-56 w-56 rounded-full bg-blue-600/30 blur-3xl"
                        />

                        {/* Chatbot */}
                        <motion.div
                            animate={{
                                y: [0, -9, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                scale: 1.025,
                            }}
                            className="relative z-10 w-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-[#111113]/95 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
                        >

                            {/* Top glow */}
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-600/10 to-transparent" />

                            {/* Chatbot Header */}
                            <div className="relative flex items-center justify-between border-b border-white/[0.07] px-5 py-4">

                                <div className="flex items-center gap-3">

                                    {/* PROFILE AVATAR */}
                                    <div className="relative h-10 w-10 shrink-0">

                                        {/* Online glow */}
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.12, 1],
                                                opacity: [0.4, 0, 0.4],
                                            }}
                                            transition={{
                                                duration: 2.2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            className="absolute inset-0 rounded-full bg-blue-500"
                                        />

                                        {/* Profile Image */}
                                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-[#222] shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                                            <img
                                                src={profileImage}
                                                alt="Aniket Patra"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        {/* Online status */}
                                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#111113] bg-emerald-400" />

                                    </div>
                                                                        <div>
                                        <p className="text-sm font-semibold text-white">
                                            Aniket Patra
                                        </p>

                                        <div className="mt-1 flex items-center gap-1.5">
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                            </span>

                                            <span className="text-[10px] text-white/40">
                                                Online
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex gap-1">
                                    <span className="h-1 w-1 rounded-full bg-white/20" />
                                    <span className="h-1 w-1 rounded-full bg-white/20" />
                                    <span className="h-1 w-1 rounded-full bg-white/20" />
                                </div>

                            </div>


                            {/* Chat Area */}
                            <div className="relative space-y-4 px-5 py-5">

                                {/* AI message */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: 0.8,
                                        duration: 0.5,
                                    }}
                                    className="max-w-[210px] rounded-2xl rounded-tl-md border border-white/[0.06] bg-white/[0.05] px-4 py-3"
                                >
                                    <p className="text-xs leading-5 text-white/60">
                                        Hey, Aniket! 👋
                                        <br />
                                        Have a project or idea you'd like to discuss?
                                    </p>
                                </motion.div>


                                {/* User message */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: 1.3,
                                        duration: 0.5,
                                    }}
                                    className="ml-auto max-w-[180px] rounded-2xl rounded-tr-md bg-blue-600 px-4 py-3 shadow-[0_8px_25px_rgba(37,99,235,0.2)]"
                                >
                                    <p className="text-xs leading-5 text-white">
                                        Glad to Connect.
                                        I'd like to build something together.
                                    </p>
                                </motion.div>


                                {/* Typing */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    transition={{
                                        delay: 1.8,
                                    }}
                                    className="flex items-center gap-1.5"
                                >
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/30" />
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/30 [animation-delay:150ms]" />
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/30 [animation-delay:300ms]" />
                                </motion.div>

                            </div>


                            {/* Chat Input */}
                            <div className="border-t border-white/[0.07] px-5 py-4">

                                <div className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5">

                                    <span className="text-[11px] text-white/25">
                                        Start a conversation...
                                    </span>

                                    <motion.div
                                        animate={{
                                            x: [0, 3, 0],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}
                                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600"
                                    >
                                        <ArrowUpRight
                                            size={14}
                                            className="text-white"
                                        />
                                    </motion.div>

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                </div>
            </section>

            {/* ================= CONTACT SECTION ================= */}
            <section>
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-5 lg:gap-20 lg:px-10">

                    {/* ================= LEFT ================= */}
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
                        className="lg:col-span-2"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                            Get in touch
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                            Have something
                            <br />
                            <span className="text-white/35">
                                in mind?
                            </span>
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
                            I'm always interested in discussing development,
                            interesting ideas, collaborations, and new
                            opportunities.
                        </p>

                        {/* CONTACT DETAILS */}
                        <div className="mt-9 space-y-5">

                            {/* EMAIL */}
                            <a
                                href="mailto:your.email@example.com"
                                className="group flex items-center gap-4"
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.08,
                                        rotate: -3,
                                    }}
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/10"
                                >
                                    <Mail
                                        size={20}
                                        strokeWidth={1.7}
                                        className="text-blue-400"
                                    />
                                </motion.div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-white/30">
                                        Email
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-white/75 transition-colors group-hover:text-blue-400">
                                        aniketpatra3131@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* LOCATION */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                                    <MapPin
                                        size={20}
                                        strokeWidth={1.7}
                                        className="text-purple-400"
                                    />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-white/30">
                                        Location
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-white/75">
                                        Kolkata, West Bengal, India
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* ================= SOCIALS ================= */}
                        <div className="mt-10 border-t border-white/[0.07] pt-8">

                            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/30">
                                Find me online
                            </p>

                            <div className="mt-5 flex flex-wrap gap-3">

                                {socials.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            delay: index * 0.08,
                                        }}
                                        whileHover={{
                                            y: -5,
                                        }}
                                        whileTap={{
                                            scale: 0.94,
                                        }}
                                        className={`group relative flex h-11 items-center gap-2.5 overflow-hidden rounded-xl border border-white/[0.09] bg-white/[0.035] px-4 text-white/55 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.35)] ${social.border}`}
                                    >
                                        {/* animated background */}
                                        <span
                                            className={`absolute inset-0 -z-10 scale-0 rounded-xl opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 ${social.bg}`}
                                        />

                                        <span
                                            className={`relative transition-all duration-300 group-hover:scale-110 ${social.color}`}
                                        >
                                            {social.icon}
                                        </span>

                                        <span className="relative text-sm font-medium transition-colors duration-300 group-hover:text-white">
                                            {social.name}
                                        </span>
                                    </motion.a>
                                ))}

                            </div>
                        </div>

                    </motion.div>

                    {/* ================= FORM ================= */}
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
                            delay: 0.1,
                        }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                            }}
                            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8"
                        >
                            {/* form glow */}
                            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

                            {/* NAME + EMAIL */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium text-white/70"
                                    >
                                        Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        className="mt-2 w-full rounded-xl border border-white/[0.09] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-blue-500/60 focus:bg-blue-500/[0.03] focus:ring-2 focus:ring-blue-500/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-white/70"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="mt-2 w-full rounded-xl border border-white/[0.09] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-blue-500/60 focus:bg-blue-500/[0.03] focus:ring-2 focus:ring-blue-500/10"
                                    />
                                </div>

                            </div>

                            {/* SUBJECT */}
                            <div className="mt-6">
                                <label
                                    htmlFor="subject"
                                    className="text-sm font-medium text-white/70"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="What would you like to talk about?"
                                    className="mt-2 w-full rounded-xl border border-white/[0.09] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-blue-500/60 focus:bg-blue-500/[0.03] focus:ring-2 focus:ring-blue-500/10"
                                />
                            </div>

                            {/* MESSAGE */}
                            <div className="mt-6">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-white/70"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Tell me a little about your idea..."
                                    className="mt-2 w-full resize-none rounded-xl border border-white/[0.09] bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-blue-500/60 focus:bg-blue-500/[0.03] focus:ring-2 focus:ring-blue-500/10"
                                />
                            </div>

                            {/* BUTTON */}
                            <motion.button
                                type="submit"
                                whileHover={{
                                    y: -2,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="group relative mt-6 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(37,99,235,0.25)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_15px_45px_rgba(37,99,235,0.35)]"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />

                                <span className="relative">
                                    Send Message
                                </span>

                                <Send
                                    size={16}
                                    strokeWidth={1.8}
                                    className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </motion.button>

                            <p className="mt-4 text-xs leading-5 text-white/25">
                                This form is currently a frontend interface.
                                We can connect it to an email service later.
                            </p>

                        </form>
                    </motion.div>

                </div>
            </section>

            {/* ================= BOTTOM CTA ================= */}
            <section className="border-t border-white/[0.07]">
                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

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
                        className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center"
                    >
                        <div>
                            <p className="text-sm text-white/35">
                                Want to explore more?
                            </p>

                            <h2 className="mt-1 text-xl font-bold text-white">
                                Take a look at my projects.
                            </h2>
                        </div>

                        <Link
                            to="/projects"
                            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-blue-400"
                        >
                            View Projects

                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default Contact;