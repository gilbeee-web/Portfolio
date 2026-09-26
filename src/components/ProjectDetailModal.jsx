import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProjectDetailModal({onClose, project_id}){

    console.log("Project Detail Modal Open: ", project_id);

    const projectDetails = [
        {
            id: 1,
            title: "Elga Order Management System",
            type: "Internal Order Management & Business Operations System",
            techstack: [
                {
                    type: "Frontend",
                    techs: [
                        "React",
                        "Tailwind CSS",
                        "Inertia",
                        "Vite"
                    ]
                },
                {
                    type: "Backend",
                    techs: [
                        "Laravel",
                        "PHP"
                    ]
                },
                {
                    type: "Database",
                    techs: [
                        "MySQL"
                    ]
                }
            ],
            overview: [
                "A web-based order management system built for a fashion retail business. It centralizes orders, customers, payments, shipping, and reporting into a single system, reducing reliance on spreadsheets and manual encoding.",
                "The system is designed around the business's actual order workflow, with separate processes for walk-in and shipment orders."
            ],
            role_description: "Designed and developed the system from the ground up, including the database structure, backend business logic, order workflows, payment handling, reporting, and user interface.",
            key_features: [
                {
                    id: 1,
                    title: "Order Management",
                    description: "Manage walk-in and shipment orders through structured workflows."
                },
                {
                    id: 2,
                    title: "Payment Tracking",
                    description: " Handle down payments, balance payments, payment status, and payment proofs."
                },
                {
                    id: 3,
                    title: "Product Management",
                    description: "Manage products, variants and product information."
                },
                {
                    id: 4,
                    title: "Shipment Processing",
                    description: "Track shipping information, fees, couriers, and tracking details."
                },
                {
                    id: 5,
                    title: "Reports",
                    description: "Filter and monitor payment and order data across different periods."
                },
                {
                    id: 6,
                    title: "Multi-Shop Support",
                    description: "Manage transactions and products across multiple shops."
                },
            ],

            tech_highlight: [
                "One of the main challenges was handling different order workflows and multiple payments.",
                "Shipment orders require shipping information and additional processing steps, while walk-in orders follow a simpler workflow. The system uses order states and business rules to ensure that each order progresses through the appropriate steps.",
                "For payments, individual transactions are recorded and used to automatically calculate the total amount paid, remaining balance, and payment status."
            ],

            img: [
                "/images/projects/order-management-system/dashboard.png",
                "/images/projects/order-management-system/orders.png",
                "/images/projects/order-management-system/edit-order.png",
                "/images/projects/order-management-system/products.png",
                "/images/projects/order-management-system/reports.png",
            ], 
        },



        {
            id: 3,
            title: "Senior & PWD Data Management System",
            type: "Web-Based Centralized Senior Citizen & PWD Management System",
            techstack: [
                {
                    type: "Frontend",
                    techs: [
                        "Blade",
                        "Tailwind CSS"
                    ]
                },
                {
                    type: "Backend",
                    techs: [
                        "Laravel",
                        "PHP"
                    ]
                },
                {
                    type: "Database",
                    techs: [
                        "MySQL"
                    ]
                }
            ],
            overview: [
                "A web-based centralized management system developed for the Municipal Social Welfare and Development Office (MSWDO) to manage Senior Citizen and Persons with Disabilities (PWD) records.",
                "The system centralizes beneficiary information from different barangays and provides tools for record management, reporting, identification, and administrative workflows."
            ],

            role_description: "Developed the system during my OJT, working on the application structure, database design, user interfaces, data management features, reporting functionality, and administrative workflows.",
            key_features: [
                {
                    id: 1,
                    title: "Beneficiary Management",
                    description: "Manage and maintain Senior Citizen and PWD records in a centralized system."
                },
                {
                    id: 2,
                    title: "Barangay Management",
                    description: " Organize records by barangay and manage location-related information."
                },
                {
                    id: 3,
                    title: "Role-Based Access",
                    description: "Provide different permissions for administrators and barangay-level users."
                },
                {
                    id: 4,
                    title: "Reports & Exporting",
                    description: "Generate reports and export relevant records for administrative use."
                },
                {
                    id: 5,
                    title: "ID & QR Code Support",
                    description: "Generate identification information and QR codes for registered beneficiaries."
                },
                {
                    id: 6,
                    title: "Request Management",
                    description: "Handle administrative requests and related actions through the system."
                },
            ],

            tech_highlight: [
                "A key challenge was managing different user roles while maintaining access to a centralized dataset.",
                "The system uses role-based permissions to provide different capabilities for municipal administrators, Senior Citizen and PWD administrators, and barangay-level users.",
                "This allows users to work with the records relevant to their responsibilities while maintaining a centralized source of information for the office."
            ],

            img: [
                "/images/projects/data-management-system/dashboard.png",
                "/images/projects/data-management-system/form.png",
                "/images/projects/data-management-system/pwd-front-id.png",
                "/images/projects/data-management-system/senior-front-id.png",
                "/images/projects/data-management-system/view.png"
            ], 
        },
    ];


    const selectedProject = projectDetails.find(
        (project) => project.id === project_id
    );

    const [imageIndex, setImageIndex] = useState(0);

    const currentImage = selectedProject.img[imageIndex];

    const handleProjectImage = (direction) => {

        if (direction === "next") {
            setImageIndex((prev) =>
                Math.min(prev + 1, selectedProject.img.length - 1)
            );
        } else {
            setImageIndex((prev) =>
                Math.max(prev - 1, 0)
            );
        }
    };





    console.log("Selected Project: ", selectedProject);



    return (
        <div
            className="fixed inset-0 bg-[rgb(0,0,0,0.5)] z-99 flex items-center justify-center sm:p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full h-full overflow-y-auto bg-white shadow-2xl sm:h-auto sm:max-h-[90vh] sm:max-w-4xl sm:rounded-2xl dark:bg-gray-950"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="
                        absolute right-4 top-4 z-10
                        flex h-9 w-9 items-center justify-center
                        rounded-full
                        bg-white/90 text-2xl text-gray-500
                        shadow-sm
                        transition
                        hover:bg-gray-100 hover:text-gray-900
                        dark:bg-gray-900/90 dark:text-gray-400
                        dark:hover:bg-gray-800 dark:hover:text-white
                        cursor-pointer
                    "
                    aria-label="Close project details"
                >
                    &times;
                </button>


                {/* Header */}
                <div className="px-6 pt-8 sm:px-8 sm:pt-10">

                    <div className="max-w-3xl">

                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            Project Details
                        </p>

                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                            {selectedProject.title}
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base dark:text-gray-400">
                            {selectedProject.type}
                        </p>

                    </div>

                </div>


                {/* Screenshot Gallery */}
                <div className="mt-7 px-6 sm:px-8">

                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">

                        <img
                            src={currentImage}
                            alt={`${selectedProject.title} screenshot`}
                            className="block w-full object-cover"
                        />

                    </div>

                    {/* Gallery Controls */}
                    <div className="mt-3 flex items-center justify-center gap-4">

                        <button
                            className="
                                flex h-8 w-8 items-center justify-center
                                rounded-full border border-gray-200
                                text-gray-500 transition
                                hover:bg-gray-100 hover:text-gray-900
                                dark:border-gray-700 dark:hover:bg-gray-800
                                cursor-pointer
                            "
                            onClick={() => handleProjectImage("prev")}
                        >
                            <ChevronLeft />
                        </button>

                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {imageIndex + 1} / {selectedProject.img.length}
                        </span>

                        <button
                            className="
                                flex h-8 w-8 items-center justify-center
                                rounded-full border border-gray-200
                                text-gray-500 transition
                                hover:bg-gray-100 hover:text-gray-900
                                dark:border-gray-700 dark:hover:bg-gray-800
                                cursor-pointer
                            "
                            onClick={() => handleProjectImage("next")}
                        >
                            <ChevronRight />
                        </button>

                    </div>

                </div>


                {/* Content */}
                <div className="px-6 pb-10 sm:px-8">


                    {/* Overview */}
                    <section className="mt-10">

                        <div className="mb-4 flex items-center gap-3">

                            <span className="h-6 w-1 rounded-full bg-blue-600" />

                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                Overview
                            </h2>

                        </div>

                        <div className="rounded-xl bg-gray-50 p-5 dark:bg-gray-900">

                            {selectedProject.overview.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={`
                                        text-sm leading-7 text-gray-600
                                        dark:text-gray-300
                                        ${index > 0 ? "mt-3" : ""}
                                    `}
                                >
                                    {paragraph}
                                </p>
                            ))}

                        </div>

                    </section>


                    {/* Tech Stack */}
                    <section className="mt-10">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-6 w-1 rounded-full bg-blue-600" />

                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                Tech Stack
                            </h2>

                        </div>

                        <div className="space-y-4">

                            {selectedProject.techstack.map((tech) => (

                                <div
                                    key={tech.type}
                                    className="flex flex-col gap-2 sm:flex-row sm:items-start"
                                >

                                    <h3 className="w-24 shrink-0 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        {tech.type}
                                    </h3>

                                    <div className="flex flex-wrap gap-2">

                                        {tech.techs.map((item) => (

                                            <span
                                                key={item}
                                                className="
                                                    rounded-lg
                                                    border border-gray-200
                                                    bg-gray-50
                                                    px-3 py-1.5
                                                    text-xs font-medium
                                                    text-gray-700
                                                    dark:border-gray-700
                                                    dark:bg-gray-900
                                                    dark:text-gray-300
                                                "
                                            >
                                                {item}
                                            </span>

                                        ))}

                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>


                    {/* My Role */}
                    <section className="mt-10">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-6 w-1 rounded-full bg-blue-600" />

                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                My Role
                            </h2>

                        </div>

                        <div>

                            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                Full-Stack Developer
                            </h3>

                            <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
                                {selectedProject.role_description}
                            </p>

                        </div>

                    </section>


                    {/* Key Features */}
                    <section className="mt-10">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-6 w-1 rounded-full bg-blue-600" />

                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                Key Features
                            </h2>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            {selectedProject.key_features.map((feature) => (

                                <div
                                    key={feature.id}
                                    className="
                                        rounded-xl
                                        border border-gray-200
                                        bg-white
                                        p-4
                                        transition
                                        hover:border-gray-300
                                        hover:shadow-sm
                                        dark:border-gray-800
                                        dark:bg-gray-900
                                        dark:hover:border-gray-700
                                    "
                                >

                                    <div className="flex gap-3">

                                        <span
                                            className="
                                                flex h-7 w-7 shrink-0
                                                items-center justify-center
                                                rounded-lg
                                                bg-blue-50
                                                text-xs font-bold
                                                text-blue-600
                                                dark:bg-blue-950
                                                dark:text-blue-400
                                            "
                                        >
                                            {String(feature.id).padStart(2, "0")}
                                        </span>

                                        <div>

                                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                                {feature.title}
                                            </h3>

                                            <p className="mt-1.5 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                                {feature.description}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>


                    {/* Technical Highlight */}
                    <section className="mt-10">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-6 w-1 rounded-full bg-blue-600" />

                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                Technical Highlight
                            </h2>

                        </div>

                        <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5 dark:border-blue-950 dark:bg-blue-950/20">

                            <div className="space-y-3">

                                {selectedProject.tech_highlight.map((highlight, index) => (

                                    <p
                                        key={index}
                                        className="text-sm leading-7 text-gray-600 dark:text-gray-300"
                                    >
                                        {highlight}
                                    </p>

                                ))}

                            </div>

                        </div>

                    </section>


                </div>

            </div>
        </div>
    );


}