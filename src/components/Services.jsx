import { CodeXml, HardDriveUpload, MonitorCog, Store } from "lucide-react"
import { motion } from "motion/react";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }
    }
};

const cardFade = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Services({ id }) {

    const services = [
        {
            id: 1,
            icon: CodeXml,
            title: "Web Application Development",
            description: "Building practical web applications for real business needs."
        },
        {
            id: 2,
            icon: HardDriveUpload,
            title: "API & Backend Development",
            description: "Developing APIs, databases, and reliable backend services."
        },
        {
            id: 3,
            icon: Store,
            title: "Business Systems",
            description: "Creating systems that organize data and simplify daily operations."
        },
        {
            id: 4,
            icon: MonitorCog,
            title: "Process Automation",
            description: "Replacing repetitive manual processes with reliable digital workflows."
        }
    ];

    return (

        <div className="max-w-4xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8 mx-auto mt-22 scroll-mt-24" id={id}>

            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h2 className="mt-3 text-2xl md:text-4xl font-semibold text-blue-500">
                    What I Work On
                </h2>
            </motion.div>

            <div className="mt-8 lg:mt-12 lg:mt-16 flex justify-center items-center">
                <motion.div
                    className="flex flex-col gap-8 lg:grid lg:grid-cols-2 md:gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={container}
                >
                    {services.map((service) => (
                        <motion.div
                            className="bg-blue-50 rounded-md p-5 border border-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                            key={service.id}
                            variants={cardFade}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <div className="flex gap-x-[16px]">
                                <div>
                                    <service.icon size={40} color="blue" strokeWidth={2} />
                                </div>

                                <div>
                                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600 dark:text-gray-100">{service.title}</h1>
                                    <p className="mt-3 lg:mt-5 text-sm md:text-md lg:text-lg text-gray-500">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </div>

    )
}