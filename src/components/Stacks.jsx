import HeaderText from "./HeaderText";
import { motion } from "motion/react";

export default function Stacks({ id }) {

    const technologies = [
        {
            category: "Frontend",
            items: [
                { name: "JavaScript", icon: "/images/logo/technologies/frontend/javascript.svg" },
                { name: "ReactJS", icon: "/images/logo/technologies/frontend/react.svg" },
                { name: "VueJS", icon: "/images/logo/technologies/frontend/vue.svg" },
                { name: "Tailwind", icon: "/images/logo/technologies/frontend/tailwind.svg" },
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "PHP", icon: "/images/logo/technologies/backend/php.svg" },
                { name: "Laravel", icon: "/images/logo/technologies/backend/laravel.svg" },
                { name: "REST APIs", icon: "/images/logo/technologies/backend/api.svg" },
            ]
        },
        {
            category: "Database & Tools",
            items: [
                { name: "MySQL", icon: "/images/logo/technologies/tools/mysql.svg" },
                { name: "Git", icon: "/images/logo/technologies/tools/git.svg" }
            ]
        },
    ];

    const groupFade = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const itemPop = {
        hidden: { opacity: 0, scale: 0.85, y: 12 },
        visible: (i = 0) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" }
        })
    };

    function TechnologyGroup({ category, items }) {
        return (
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={groupFade}
            >
                <h2 className="font-mono text-sm md:text-lg font-semibold uppercase tracking-wider text-gray-500">
                    {category}
                </h2>

                <div className="mt-5 grid grid-cols-2 gap-5 lg:flex lg:gap-x-8 gap-y-8 md:items-center">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.name}
                            custom={i}
                            variants={itemPop}
                            className="flex flex-col lg:flex-row items-center gap-3 rounded-xl border border-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 p-5 md:p-8 bg-blue-50 dark:bg-gray-900 dark:text-gray-100"
                        >
                            <img
                                src={item.icon}
                                alt={`${item.name} icon`}
                                className="h-8 w-8 md:w-10 md:h-10 lg:h-12 lg:w-12 object-contain"
                            />

                            <span className="text-md md:text-lg lg:text-xl font-semibold font-mono">
                                {item.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        );
    }

    return (
        <section className="max-w-4xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8 mx-auto mt-22 scroll-mt-24" id={id}>

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <HeaderText text={"TECH STACK"} />

                <h2 className="mt-3 text-2xl md:text-4xl font-semibold text-blue-500">
                    Tools I work with.
                </h2>
            </motion.div>

            <div className="mt-10 flex flex-col gap-y-8">
                {technologies.map((technology) => (
                    <TechnologyGroup
                        key={technology.category}
                        category={technology.category}
                        items={technology.items}
                    />
                ))}
            </div>

        </section>
    );
}