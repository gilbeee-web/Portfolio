import { ArrowUpRight } from "lucide-react"

export default function Projects({id}){


    function FeatureCardProject(){

        return (

            <div className="border border-gray-300 shadow-sm rounded-md grid grid-cols-2 gap-5 px-8 py-5">

                <div className="flex justify-center items-center">
                    <div>
                        <h2 className="font-mono">Featured Project | Personal Project</h2>

                        <h1 className="mt-5 font-bold text-4xl">
                            Order Management System
                        </h1>
                        
                        <p className="mt-8 text-lg text-gray-500">
                            A web-based order management system that helps businesses 
                            organize products, orders, payments, and shipping.
                        </p>


                        <ul className="mt-12 flex gap-x-3 text-sm text-gray-500 font-mono">
                            <li className="px-3 py-2 bg-blue-100 rounded-full">Laravel</li>
                            <li className="px-3 py-2 bg-blue-100 rounded-full">ReactJS</li>
                            <li className="px-3 py-2 bg-blue-100 rounded-full">Inertia</li>
                            <li className="px-3 py-2 bg-blue-100 rounded-full">Tailwind</li>
                        </ul>

                        <div className="mt-16 w-full flex justify-start">

                            <button className="flex gap-x-2 items-center cursor-pointer text-lg font-semibold hover:opacity-50">
                                View Project 
                                <span><ArrowUpRight size={25} strokeWidth={1} /></span>
                            </button>

                        </div>
                        


                    </div>
                </div>

                {/* cover image */}
                <div className="h-full">
                    <img
                        src="/images/projects/order-management-system/dashboard.png"
                        alt="Order Management System"
                        className="h-full w-full object-cover"
                    />
                </div>

            </div>

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

    return(

        <section className="max-w-[80%] mx-auto mt-22 scroll-mt-24" id={id}>

            <div className="text-center">
                <h1 className="text-lg font-bold">PROJECTS</h1>
        
                <h2 className="mt-3 text-[32px] font-semibold text-blue-500">
                    Things I've Built
                </h2>
            </div>
            

            <div className="mx-auto">

                <div className="mt-[32px] flex justify-center">
                    <FeatureCardProject />
                </div>

                <div className="mt-[32px] w-full flex justify-center">

                    <div className="flex justify-between items-center gap-x-10">
                        {
                            projects.map((project)=>(
                                <div className="rounded-lg border border-gray-300 shadow-sm" key={project.id}>
                                    
                                    <div className="h-80">
                                        <img 
                                            src={project.img} 
                                            alt={`${project.title} cover`} 
                                            className="object-cover h-full w-full object-cover rounded-t-lg"
                                        />
                                    </div>

                                    <div className="mt-5 p-5">

                                        <h1 className="font-bold text-2xl">
                                            {project.title}
                                        </h1>

                                        <p className="mt-5 text-lg text-gray-500 max-w-150">
                                            {project.description}
                                        </p>


                                        <div className="mt-12 flex justify-between items-center">
                                            <h1 className="text-lg font-mono">{project.type}</h1>

                                            <button className="flex gap-x-2 items-center cursor-pointer hover:opacity-50 text-lg font-semibold">
                                                View Project 
                                                <span><ArrowUpRight size={25} strokeWidth={1} /></span>
                                            </button>

                                        </div>

                                    </div>

                                </div>
                            ))
                        }
                    </div>

                    
                </div>  
            </div>

            

                
            
            

        </section>

    )

}