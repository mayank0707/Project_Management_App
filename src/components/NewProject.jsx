import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd, onCancel}){
    const modal = useRef();

    const title= useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
 
        //validation
        if(enteredTitle.trim()==='' || enteredDescription.trim()==='' || enteredDueDate.trim()===''){
            //error modal display
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops... value is mandatory in all fields</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field</p>
            </Modal>
            <div className="w-[35rem] mt-8">
                <menu className="flex items-center justify-end gap-16 my-4">
                    <li>
                        <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button className= "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}>
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title"></Input>
                    <Input ref={description} label="Description" textarea></Input>
                    <Input type="date" ref={dueDate} label="Due Date"></Input>
                </div>
            </div>
        </>
    );
}