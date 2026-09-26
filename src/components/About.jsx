import { Brain, Code, Goal, Lightbulb } from "lucide-react"
import { motion } from "motion/react";
import HeaderText from "./HeaderText";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" }
    })
};

export default function About({ id }) {

    function AboutDescription({ number, title, icon: Icon, text, custom }) {
        
        return (
            <motion.div
                className="w-full flex gap-x-10 border-b border-gray-300 pb-5"
                variants={fadeUp}
                custom={custom}
            >
                <h1 className="font-mono text-2xl font-bold text-blue-500">
                    {number}
                </h1>

                <div>
                    <div className="flex items-center gap-x-3">
                        <h1 className="text-xl md:text-2xl font-semibold">
                            {title}
                        </h1>

                        <div>
                            <Icon size={25} />
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm md:text-lg">
                        {text}
                    </p>
                </div>
            </motion.div>
        );
    }

    return (

        <div className="max-w-4xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8 mx-auto mt-22 scroll-mt-24" id={id}>

            <div>
                <HeaderText text={"About me"} />

                <div className="flex flex-col gap-y-10 lg:flex-row gap-x-15 lg:items-center">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                    >
                        <div className="w-full">
                            <h1 className="text-3xl md:text-5xl font-bold">Building software <br /> <span className="text-blue-500">with purpose.</span></h1>
                        </div>

                        <div className="mt-8 md:max-w-200">
                            <p className="text-lg md:text-xl leading-8 md:leading-10 lg:leading-8">
                                I'm Gilbert Sta. Maria, a BSIT fresh graduate and a <span className="font-semibold">Full-Stack Developer.</span> focused on building practical software for real-world workflows.
                            </p>
                            <p className="mt-4 text-md md:text-lg lg:text-xl leading-8 md:leading-7 tracking-wide">
                                I enjoy turning manual processes into organized digital systems — from order management and payment workflows to government records and educational platforms.
                            </p>

                            <p className="mt-4 text-md md:text-lg leading-8 md:leading-7">
                                My main stack includes Laravel, React, Inertia, Tailwind CSS, PHP, and MySQL. I'm particularly interested in building systems that are reliable, easy to use, and maintainable as they grow.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-x-8 gap-y-5 md:gap-y-8 bg-blue-50 p-5 rounded-xl border border-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <AboutDescription
                            number={"01"}
                            title={"Problem Solver"}
                            text={"Understand the problem before building the solution."}
                            icon={Lightbulb}
                            custom={0}
                        />

                        <AboutDescription
                            number={"02"}
                            title={"Clean & Practical"}
                            text={"Write code that's simple to understand and maintain."}
                            icon={Code}
                            custom={1}
                        />

                        <AboutDescription
                            number={"03"}
                            title={"Curious Learner"}
                            text={"Improve through projects and hands-on experience."}
                            icon={Brain}
                            custom={2}
                        />

                        <AboutDescription
                            number={"04"}
                            title={"User-Focused"}
                            text={"Build systems that are useful and easy to use."}
                            icon={Goal}
                            custom={3}
                        />
                    </motion.div>
                </div>
            </div>

        </div>

    )
}