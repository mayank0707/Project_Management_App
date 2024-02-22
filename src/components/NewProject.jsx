import Input from "./Input.jsx";

export default function NewProject(){
    return (
    <div className="w-[35rem] mt-8">
        <menu className="flex items-center justify-end gap-16 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950">Cancel</button>
            </li>
             <li>
                <button className= "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </li>
        </menu>
        <div>
            <Input label="Title"></Input>
            <Input label="Description" textarea></Input>
            <Input label="Due Date"></Input>
        </div>
    </div>
    );
}