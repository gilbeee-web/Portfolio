import { ArrowUpRight, Dot, Mail, MapPin, PhoneCall } from "lucide-react"
import { motion } from "motion/react";
import HeaderText from "./HeaderText";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

const rowSlide = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Contact({ id }) {

    const contacts = [
        { id: 1, type: "Email", icon: Mail, value: "gilbertstamaria58@gmail.com" },
        { id: 2, type: "Phone number", icon: PhoneCall, value: "+63 981 5170381" },
        { id: 3, type: "Address", icon: MapPin, value: "Nueva Ecija, Philippines" }
    ];

    const socials = [
        { id: 1, type: "Email", img: Mail, value: "gilbertstamaria58@gmail.com", link: "mailto:gilbertstamaria58@gmail.com" },
        { id: 2, type: "Facebook", img: "/images/logo/fb.png", value: "facebook.com/gilbert.stamaria", link: "https://www.facebook.com/gilbert.stamaria.52" },
        { id: 3, type: "GitHub", img: "/images/logo/github.png", value: "github.com/gilbeee-web", link: "https://github.com/gilbeee-web" },
        { id: 4, type: "LinkedIn", img: "/images/logo/linkedin.png", value: "linkedin.com/in/gilbertstamaria", link: "linkedin.com/in/gilbertstamaria"},
    ]

    return (

        <section className="bg-blue-50 mt-22 scroll-mt-24 p-6 md:p-8 lg:p-8 dark:bg-gray-900" id={id}>

            <div className="max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto">

                <motion.div
                    className="flex flex-col gap-y-3 md:flex-row md:justify-between"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                >
                    <HeaderText text={"Contact"} />

                    <div className="max-w-60 md:max-w-100">
                        <div className="bg-white py-4 px-2 h-4 md:px-4 md:py-4 lg:px-8 lg:h-10 rounded-full flex gap-x-2 items-center text-center">
                            <div className="rounded-full w-4 h-4 md:h-5 md:w-5 bg-gray-100 flex items-center justify-center">
                                <motion.div
                                    className="rounded-full bg-blue-500 h-2 w-2 md:h-3 md:w-3"
                                    animate={{ opacity: [1, 0.4, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>
                            <h1 className="text-sm md:text-md lg:text-lg font-semibold text-blue-500">Available for new projects</h1>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                    transition={{ delay: 0.1 }}
                >
                    <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl md:leading-8 lg:leading-16">
                        Let's build something <br /> <span className="text-blue-500">meaningful together.</span>
                    </h1>
                </motion.div>

                <motion.div
                    className="mt-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                    transition={{ delay: 0.2 }}
                >
                    <p className="text-sm md:text-md lg:text-lg font-medium text-gray-500">
                        I'm currently available for freelance work.
                        <br />
                        Let's discuss how can I help your business grow.
                    </p>
                </motion.div>

                <div className="mt-8">
                    <motion.div
                        className="flex flex-col gap-y-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={container}
                    >
                        {socials.map((social) => (
                            <motion.a
                                key={social.id}
                                href={social.link}
                                target={social.type !== "Email" ? "_blank" : undefined}
                                rel={social.type !== "Email" ? "noopener noreferrer" : undefined}
                                className="border-t border-gray-300 flex justify-between py-3 px-3 cursor-pointer hover:bg-white group dark:hover:bg-gray-700"
                                variants={rowSlide}
                            >
                                <div className="flex gap-x-8 items-center">
                                    <h1 className="font-mono font-semibold text-gray-500 text-md lg:text-lg">
                                        0{social.id}
                                    </h1>

                                    <div className="bg-white min-h-12 w-12 rounded-full flex items-center justify-center">
                                        {social.type === "Email" ? (
                                            <social.img
                                                size={25}
                                                className="dark:text-black"
                                            />
                                        ) : (
                                            <img
                                                src={social.img}
                                                alt={`${social.type} logo`}
                                                className="object-contain h-10 w-10"
                                            />
                                        )}
                                    </div>

                                    <h1 className="capitalize text-lg md:text-xl lg:text-2xl font-bold">
                                        {social.type}
                                    </h1>

                                    <p className="hidden md:flex text-sm text-gray-500">
                                        {social.value}
                                    </p>
                                </div>

                                <div className="flex justify-center items-center">
                                    <motion.div
                                        className="inline-flex"
                                        whileHover={{ x: 4, y: -4 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                    >
                                        <ArrowUpRight
                                            size={25}
                                            strokeWidth={1}
                                        />
                                    </motion.div>
                                </div>
                            </motion.a>
                        ))}

                        <motion.div
                            className="border-t border-gray-300 pt-5"
                            variants={rowSlide}
                        >
                            <div className="flex gap-x-2 items-center">
                                <MapPin />
                                <h1 className="text-xs md:text-md lg:text-lg font-mono font-semibold text-gray-500 dark:text-gray-200">
                                    Philippines
                                </h1>
                                <Dot />
                                <h1 className="text-xs md:text-md lg:text-lg font-mono font-semibold text-gray-500 dark:text-gray-200">
                                    Remote-friendly worldwide
                                </h1>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </section>

    )
}