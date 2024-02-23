import Button from "./Button.jsx";

export default function ProjectSidebar({onStartAddProject, projects}){
    return <aside className="w-1/3 px-16 py-12 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold md:text-xl uppercase text-stone-200">
            Your Projects
        </h2>
        <div>
           <Button onClick={onStartAddProject}>
                +Add Project
            </Button>
        </div>
        <ul className="mt-6">
            {projects.map((project) => (
                <li key={project.id}>
                    <button className="w-full text-left px-2 py-1 rounded-sm my-1.5 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                        {project.title}
                    </button>
                </li>
            ))}
        </ul>
    </aside>
}