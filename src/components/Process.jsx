import { ChartNoAxesCombined, CodeXml, PencilSparkles, Search } from "lucide-react"

export default function Process({id}){


    const processes = [
        {
            id: 1,
            icon: Search,
            type: "Discover",
            description: "Understand the business process and identify the actual problem."
        },
        {
            id: 2,
            icon: PencilSparkles,
            type: "Plan",
            description: "Design the database, system flow, and user experience."
        },
        {
            id: 3,
            icon: CodeXml,
            type: "Build",
            description: "Develop the application using modern web technologies."
        },
        {
            id: 4,
            icon: ChartNoAxesCombined,
            type: "Improve",
            description: "Test, refine, and improve the system based on user feedback."
        },
    ]



    return(

        <div className="w-full mt-22 scroll-mt-24" id={id}>

            <div>
                <h2 className="mt-3 text-4xl font-semibold text-blue-500">
                    How I Build Solutions.
                </h2>
            </div>

            
            <div className="mx-auto mt-12 flex flex-col gap-y-5 items-center md:flex-row md:items-start">

                {processes.map((process, index) => (
                    <div
                        key={process.id}
                        className="flex w-full flex-col items-center md:flex-1 md:flex-row md:items-start"
                    >
                        {/* Process */}
                        <div className="flex w-full flex-col items-center text-center md:w-56 md:shrink-0">
                            
                            {/* Icon */}
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                                <process.icon size={30} />
                            </div>

                            {/* Content */}
                            <div className="mt-4">
                                <span className="font-mono text-2xl font-semibold text-blue-500">
                                    0{process.id}
                                </span>

                                <h3 className="mt-2 text-2xl font-bold">
                                    {process.type}
                                </h3>

                                <p className="mx-auto mt-2 max-w-64 text-lg leading-5 text-gray-500">
                                    {process.description}
                                </p>
                            </div>
                        </div>

                        {/* Connector */}
                        {index < processes.length - 1 && (
                            <div className="h-10 w-0.5 bg-blue-200 mt-5 md:mt-7 md:h-0.5 md:w-full" />
                        )}
                    </div>
                ))}
            </div>


        </div>

    )

}