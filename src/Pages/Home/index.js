import {Box, Button, Card, CardActions, CardContent, IconButton, Paper, Typography} from '@material-ui/core';
import React ,{useState}from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {addTodo,archiveTodo,deleteTodo, editTodo} from "../../Store/TodoSlice";
import EditTodoForm from './EditedForm';
import {  InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 400,
    height: '40px',
    padding: theme.spacing(0, 2),
    margin: "50px auto",
  },
  input: {
    display:"block",
    flex: 1,
    width: '50%',
    marginLeft: theme.spacing(1),
  },
  iconButton: {
    padding: 10,
    
  },
}));

const Home = ({ placeholder, onSearch }) => {
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
    };
    const handleCloseEditForm = () => {
      setEditFormOpen(false);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addTodo( 
        {id:Date.now() ,title:text ,desc:"fgbdfh",archivedAt:"s",checkedAt:"",createdAt:"",finishedAt:""}));
      setText('');
    };

    const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
        <IconButton className={classes.iconButton} aria-label="search" onClick={handleSubmit}>
        Add Todo
      </IconButton>
    </Paper>
    <Box marginTop="50px"   display="flex" flexWrap="wrap" flexDirection="row" justifyContent="space-evenly" alignItems="center">
   {todo?.map(item =><Box key={item?.id}  marginTop="50px" > <Card >
      <CardContent>
        <Typography variant="h5" component="h2">
        {item?.title}
        </Typography>
        <Typography variant="body2" component="p">
        {item?.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>dispatch(deleteTodo(item?.id))}>
          Delete
        </Button>
        <Button size="small" onClick={()=>handleEdit(item?.id)}>
          Edit
        </Button>
        { editFormOpen && id === item?.id && (
        <EditTodoForm item={item} onClose={handleCloseEditForm} />
        
      )}
       <Button size="small" onClick={()=>{dispatch(archiveTodo(item.id))
          navigate('/archived',{state:{item}})
      }}>
       Archive
        </Button>
      </CardActions>
    </Card>
   </Box>
    )}
     </Box>
    </div>
    
  )
}

export default Home