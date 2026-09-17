export default function Stacks({id}) {

    const technologies = [
        {
            category: "Frontend",
            items: [
                {
                    name: "JavaScript",
                    icon: "/images/logo/technologies/frontend/javascript.png"
                },
                {
                    name: "ReactJS",
                    icon: "/images/logo/technologies/frontend/react.png"
                },
                {
                    name: "VueJS",
                    icon: "/images/logo/technologies/frontend/vue.png"
                },
                {
                    name: "Tailwind CSS",
                    icon: "/images/logo/technologies/frontend/tailwind.png"
                },
            ]
        },
        {
            category: "Backend",
            items: [
                {
                    name: "PHP",
                    icon: "/images/logo/technologies/backend/php.png"
                },
                {
                    name: "Laravel",
                    icon: "/images/logo/technologies/backend/laravel.png"
                },
                {
                    name: "REST APIs",
                    icon: "/images/logo/technologies/backend/api.png"
                },
            ]
        },
        {
            category: "Database & Tools",
            items: [
                {
                    name: "MySQL",
                    icon: "/images/logo/technologies/tools/mysql.png"
                },
                {
                    name: "Git & GitHub",
                    icon: "/images/logo/technologies/tools/github.png"
                }
            ]
        },
    ];

    function TechnologyGroup({ category, items }) {
        return (
            
            <div>
                <h2 className="font-mono text-lg font-semibold uppercase tracking-wider text-gray-500">
                    {category}
                </h2>

                <div className="mt-5 flex gap-x-8 items-center">
                    {items.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center gap-3 rounded-xl border border-gray-100 p-8 bg-blue-50"
                        >
                            <img
                                src={item.icon}
                                alt={`${item.name} icon`}
                                className="h-12 w-12 object-contain"
                            />

                            <span className="text-xl font-semibold font-mono">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        );
    }

    return (
        <section className="max-w-[80%] mx-auto mt-22 scroll-mt-24" id={id}>

            <div>
                <p className="font-mono text-lg font-semibold tracking-wider">
                    TECH STACK
                </p>

                <h2 className="mt-3 text-4xl font-semibold text-blue-500">
                    Tools I work with.
                </h2>
            </div>

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