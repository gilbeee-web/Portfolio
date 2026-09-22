import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react";
import HeaderText from "./HeaderText";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardFade = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" }
    })
};

export default function Projects({ id }) {

    function FeatureCardProject() {
        return (
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="border border-gray-300 shadow-sm rounded-lg flex flex-col lg:flex-row gap-5 p-5 lg:px-8 lg:py-5 max-w-150 lg:max-w-full"
            >
                {/* cover image */}
                <div className="lg:hidden h-full">
                    <img
                        src="/images/projects/order-management-system/dashboard.png"
                        alt="Order Management System"
                        className="h-full w-full object-cover rounded-xl"
                    />
                </div>

                <div className="mt-5 md:mt-8 flex gap-x-5 justify-center items-center">
                    <div>
                        <h2 className="inline-block p-2 lg:p-3 font-mono font-semibold text-xs md:text-md lg:text-lg bg-blue-500 text-white text-center rounded-full dark:bg-gray-900 dark:text-gray-200">
                            Personal Project
                        </h2>

                        <h1 className="mt-2 md:mt-5 lg:mt-8 font-bold text-lg md:text-2xl lg:text-4xl">
                            Order Management System
                        </h1>

                        <p className="mt-3 md:mt-5 lg:mt-8 text-sm leading-6 font-medium md:text-lg lg:text-xl lg:leading-8 text-gray-500">
                            A web-based order management system that helps businesses
                            organize products, orders, payments, and shipping.
                        </p>

                        <ul className="mt-4 md:mt-12 flex gap-x-2 md:gap-x-5 text-sm text-gray-500 font-mono">
                            <li className="p-2 md:p-3 lg:px-3 lg:py-2 text-xs text-center md:text-sm lg:text-lg font-semibold bg-blue-100 rounded-full dark:bg-gray-900 dark:text-gray-200">
                                Laravel
                            </li>
                            <li className="p-2 md:p-3 lg:px-3 lg:py-2 text-xs text-center md:text-sm lg:text-lg font-semibold bg-blue-100 rounded-full dark:bg-gray-900 dark:text-gray-200">
                                ReactJS
                            </li>
                            <li className="p-2 md:p-3 lg:px-3 lg:py-2 text-xs text-center md:text-sm lg:text-lg font-semibold bg-blue-100 rounded-full dark:bg-gray-900 dark:text-gray-200">
                                Tailwind
                            </li>
                        </ul>

                        <div className="mt-8 md:mt-16 w-full flex justify-end">
                            <button className="flex gap-x-2 items-center cursor-pointer text-sm md:text-lg font-semibold hover:opacity-50">
                                View Demo
                                <span><ArrowUpRight size={25} strokeWidth={1} /></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* cover image */}
                <div className="hidden lg:flex h-full">
                    <img
                        src="/images/projects/order-management-system/dashboard.png"
                        alt="Order Management System"
                        className="h-full w-full object-cover"
                    />
                </div>
            </motion.div>
        )
    }

    const projects = [
        {
            id: 1,
            title: "Gamified Learning System",
            type: "Capstone Project",
            description: "A web application designed to make learning more engaging through gamified educational activities.",
            img: "/images/projects/gamified-learning-system/cover-page.png"
        },
        {
            id: 2,
            title: "Senior & PWD Data Management System",
            type: "OJT Project",
            description: "A web application for organizing beneficiary records and managing ID releases.",
            img: "/images/projects/data-management-system/dashboard.png"
        },
    ];

    return (
        <section className="max-w-4xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8 mx-auto mt-22 scroll-mt-24" id={id}>

            <motion.div
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
            >
                <div className="flex justify-center">
                    <HeaderText text={"Projects"} />
                </div>

                <h2 className="mt-3 text-2xl md:text-4xl font-semibold text-blue-500">
                    Software I've Built for Real-World Problems
                </h2>
            </motion.div>

            <div className="mx-auto">

                <div className="mt-8 flex justify-center">
                    <FeatureCardProject />
                </div>

                <div className="mt-8 w-full flex justify-center">
                    <div className="flex flex-col gap-y-5 md:gap-y-8 lg:flex-row lg:gap-x-10 lg:justify-between lg:items-center">
                        {projects.map((project, i) => (
                            <motion.div
                                className="rounded-lg border border-gray-300 shadow-sm max-w-150 lg:max-w-full overflow-hidden"
                                key={project.id}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={cardFade}
                                whileHover={{ y: -6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <div className="h-50 md:h-80">
                                    <img
                                        src={project.img}
                                        alt={`${project.title} cover`}
                                        className="object-cover h-full w-full object-cover rounded-t-lg"
                                    />
                                </div>

                                <div className="mt-2 lg:mt-5 p-5">
                                    <h2 className="inline-block text-xs md:text-md lg:text-lg font-mono font-semibold lg:hidden bg-blue-500 text-white rounded-full p-2 dark:bg-gray-900 dark:text-gray-200">
                                        {project.type}
                                    </h2>
                                    <h1 className="mt-3 font-bold text-lg md:text-xl lg:text-2xl">
                                        {project.title}
                                    </h1>

                                    <p className="mt-3 md:mt-5 lg:mt-8 text-sm leading-6 font-medium md:text-lg lg:text-xl lg:leading-8 text-gray-500 md:max-w-150">
                                        {project.description}
                                    </p>

                                    <div className="hidden lg:flex mt-12 flex justify-between items-center">
                                        <h1 className="inline-block text-xs md:text-lg font-mono font-semibold hidden lg:flex bg-blue-500 text-white rounded-full p-2 dark:bg-gray-900 dark:text-gray-200">
                                            {project.type}
                                        </h1>

                                        <button className="flex gap-x-2 items-center cursor-pointer hover:opacity-50 text-lg font-semibold">
                                            View Demo
                                            <span><ArrowUpRight size={25} strokeWidth={1} /></span>
                                        </button>
                                    </div>

                                    <div className="lg:hidden mt-8 flex justify-end">
                                        <button className="flex gap-x-2 items-center cursor-pointer hover:opacity-50 text-sm md:text-lg font-semibold">
                                            View Demo
                                            <span><ArrowUpRight size={25} strokeWidth={1} /></span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}