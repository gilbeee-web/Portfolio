export default function HeaderText({text}){


    return (


        <div className="flex gap-x-3 items-center">
            
            <div className="rounded-full w-4 h-4 md:h-5 md:w-5 bg-gray-300 flex items-center justify-center" >
                <div className="rounded-full bg-blue-500 h-2 w-2 md:h-3 md:w-3" />
            </div>

            <h1 className="text-sm md:text-md lg:text-lg font-mono font-semibold uppercase">{text}</h1>

        </div>
    )

}