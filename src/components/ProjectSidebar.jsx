import Button from "./Button.jsx";

export default function ProjectSidebar(){
    return <aside className="w-1/3 px-16 py-12 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold md:text-xl uppercase text-stone-200">
            Your Project
        </h2>
        <div>
           <Button>
                +Add Project
            </Button>
        </div>
        <ul>

        </ul>
    </aside>
}