import React ,{useState}from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {addTodo,archiveTodo,deleteTodo, editTodo} from "../../Store/TodoSlice";
import EditTodoForm from './EditedForm'

const Home = () => {
    const todo = useSelector((state) => state.todo);
    console.log(todo);
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [id, setId] = useState('');
    const [editFormOpen, setEditFormOpen] = useState(false);
    const navigate = useNavigate()
    const handleEdit = (id) => {
      setEditFormOpen(true);
      setId(id)
      // dispatch(editTodo({
      //   ...item,
      //   text,
       
        
      // }));

    };
    // const open = () => {
   
    //   dispatch(editTodo({
    //     ...item,
    //     text,
       
        
    //   }));
    //   onClose();
    // };
  
    const handleCloseEditForm = () => {
      setEditFormOpen(false);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addTodo( 
        {id:Date.now() ,title:text ,desc:"fgbdfh",archivedAt:"s",checkedAt:"",createdAt:"",finishedAt:""}));
      setText('');
    };
    // const handleDelete = () => {
    //   dispatch(deleteTodo(todo?.id));
    // };
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo text"
      />
      <button type="submit">Add Todo</button>
    </form>

        {
            todo?.map(item => <div key={item?.id}>{item?.title}
                <button onClick={()=>dispatch(deleteTodo(item?.id))}>Delete</button>
                <button onClick={()=>handleEdit(item.id)}>Edit</button>
      { editFormOpen && id === item?.id && (
        <EditTodoForm item={item} onClose={handleCloseEditForm} />
      )}
      <button onClick={()=>{dispatch(archiveTodo(item.id))
          navigate('/archived',{state:{item}})
      }}>Archive</button>
                </div>
                )
        }
    </div>
  )
}

export default Home