import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {editTodo} from '../../Store/TodoSlice';


function EditTodoForm({ item, onClose }) {
  const [text, setText] = useState(item.title);
  const dispatch = useDispatch();

  const save = () => {
    // console.log("kjhioh");
    dispatch(editTodo({
      ...item,
      title:text,
    }));
    onClose();
  };

  return (
    <form >
      <input
        type="text"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new todo text"
      />
      <button onClick={save} type="button">Save</button>
      <button onClick={onClose}>Cancel</button>
    </form>
  );
}

export default EditTodoForm;