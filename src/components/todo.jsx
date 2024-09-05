import { useState } from "react";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.data);
    const dispatch = useDispatch();

    const handleToggle = (e) => {
        if (!editing) {
            dispatch(toggleTodo(todo._id));
        }
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
        dispatch(updateTodo(todo._id, text));
    };

    const handleEditClick = (e) => {
        e.stopPropagation();
        setEditing(true);
    };

    const handleSaveClick = (e) => {
        e.stopPropagation();
        onFormSubmit(e);
    };

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        dispatch(deleteTodo(todo._id));
    };

    return (
        <li
            className="task"
            onClick={handleToggle}
            style={{
                textDecoration: todo.done ? "line-through" : "",
                color: todo.done ? "#bdc3c7" : "#34495e"
            }}
        >
            {!editing ? (
                <span>{todo.data}</span>
            ) : (
                <form onSubmit={onFormSubmit} style={{ display: "inline" }}>
                    <input
                        type="text"
                        value={text}
                        className="edit-todo"
                        onChange={(e) => setText(e.target.value)}
                    />
                </form>
            )}

            <span className="icon" onClick={handleDeleteClick}>
                <i className="fa fa-trash"></i>
            </span>

            {editing ? (
                <span className="icon" onClick={handleSaveClick}>
                    <i className="fa fa-save"></i>
                </span>
            ) : (
                <span className="icon" onClick={handleEditClick}>
                    <i className="fa fa-edit"></i>
                </span>
            )}
        </li>
    );
};

export default Todo;
