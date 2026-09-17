import { CodeXml, HardDriveUpload, MonitorCog, Store } from "lucide-react"

export default function Services({id}){

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


    return(

        <div className="max-w-[80%] mx-auto mt-22 scroll-mt-24" id={id}>

            <div className="text-center">
                <h2 className="mt-3 text-4xl font-semibold text-blue-500">
                    What I can help with.
                </h2>
            </div>


            <div className="mt-16 flex justify-center items-center">
                <div className="grid grid-cols-2 gap-10">

                    {
                        services.map((service)=> (
                            <div className="bg-blue-50 rounded-md p-5" key={service.id}>
                                
                                <div className="flex gap-x-[16px]">

                                    <div>
                                        <service.icon size={40} color="blue" strokeWidth={2}/>
                                    </div>

                                    <div>
                                        <h1 className="text-2xl font-bold text-blue-600">{service.title}</h1>
                                        <p className="mt-5 text-lg text-gray-500">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))
                    }


                </div>
            </div>



        </div>

    )


}