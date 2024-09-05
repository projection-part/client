import { useState } from "react";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoForm = ()=>{

    const [text, setText] = useState("");

    const dispatch = useDispatch();
    const onFormSubmit = (e)=>{
        e.preventDefault();
        dispatch(addNewTodo(text));

        setText('');

    }

    const onInputChange = (e)=>{
        setText(e.target.value);
    }





    return(
        <form className="form">
            <input
                placeholder="Enter a todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
            <button type="submit" className="add-todo" onClick={onFormSubmit}>Add</button>
        </form>
    );
}

export default TodoForm;