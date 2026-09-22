import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" }
    })
};

export default function Hero({ id }) {
    return (
        <section
            className="max-w-4xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8 mx-auto mt-8 md:mt-12 scroll-mt-24"
            id={id}
        >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-25">
                <div className="">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        variants={fadeUp}
                    >
                        <h1 className="text-3xl text-center lg:text-start leading-8 md:leading-12 lg:leading-16 md:text-5xl lg:text-6xl font-bold font-sans">
                            Building Software <br /> That Drives <br />{" "}
                            <span className="text-blue-500">Business Forward.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        className="mt-8"
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        variants={fadeUp}
                    >
                        <p className="text-lg text-center md:text-lg lg:text-xl lg:text-start text-gray-500 font-sans">
                            I'm <span className="font-bold text-blue-500">Gilbert Sta. Maria</span> —
                            a Junior Full-Stack Developer focused on business applications, process
                            automation, and data-driven systems.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-12 flex flex-col gap-y-5 md:flex-row gap-x-8 md:justify-center lg:justify-start items-center"
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        variants={fadeUp}
                    >
                        <a
                            href="#projects"
                            className="text-white text-sm md:text-lg lg:text-lg font-semibold px-3 py-2 md:px-5 md:py-3 lg:py-5 lg:px-8 flex gap-x-1 items-center bg-blue-500 hover:bg-blue-400 rounded-full cursor-pointer"
                        >
                            View Projects <span><ArrowRight size={15} /></span>
                        </a>

                        <button className="bg-white border border-gray-300 dark:border-gray-50 hover:bg-gray-50 rounded-full font-semibold text-sm md:text-lg lg:text-lg px-3 py-2 md:px-5 md:py-3 lg:py-5 lg:px-8 flex gap-x-1 items-center cursor-pointer dark:bg-gray-950 dark:hover:bg-gray-900">
                            Download CV <span><Download size={15} /></span>
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    <div className="relative p-5 bg-blue-50 dark:bg-gray-900 rounded-lg border border-blue-50 dark:border-none min-w-60 min-h-80 md:min-w-120 md:min-h-150 lg:min-w-120 lg:min-h-150">
                        <div className="absolute bg-white border border-gray-200 top-2 md:top-5 left-[-25px] p-2 md:p-5 rounded-xl text-center dark:bg-gray-900 dark:text-gray-400 font-semibold">
                            <h1 className="text-xs md:text-sm text-gray-500 font-mono">
                                <span className="font-bold text-md md:text-xl text-black dark:text-gray-400">3+</span> Projects Shipped
                            </h1>
                        </div>

                        <div className="flex justify-center items-center">
                            <img
                                className="object-contain w-[250px] h-[250px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px]"
                                src="/images/developer-profile.png"
                                alt="Developer profile"
                            />
                        </div>

                        <div className="absolute bg-white border border-gray-200 bottom-15 md:bottom-10 right-[-25px] p-2 md:p-5 rounded-xl text-center dark:bg-gray-900 dark:text-gray-400 font-semibold">
                            <h1 className="text-xs md:text-sm text-gray-500 font-mono">Real world projects</h1>
                        </div>

                        <div className="absolute bg-white border border-gray-200 bottom-[-20px] left-[15px] p-2 md:p-5 rounded-xl text-center dark:bg-gray-900 dark:text-gray-400 font-semibold">
                            <h1 className="text-xs md:text-sm text-gray-500 font-mono">BSIT Graduate</h1>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}