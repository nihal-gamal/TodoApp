import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    {id:1 ,title:"work",desc:"fgbdfh",archived:"false",checkedAt:"",createdAt:"",finishedAt:""},
    {id:2 ,title:"homeTime",desc:"fgbdfh",archived:"false",checkedAt:"",createdAt:"",finishedAt:""},
    {id:3 ,title:"homeTime",desc:"fgbdfh",archived:"false",checkedAt:"",createdAt:"",finishedAt:""},
    
    {id:4 ,title:"homeTime",desc:"fgbdfh",archived:"false",checkedAt:"",createdAt:"",finishedAt:""},
    
    {id:5 ,title:"homeTime",desc:"fgbdfh",archived:"false",checkedAt:"",createdAt:"",finishedAt:""},
    
    

],
  reducers: {
    addTodo: (state, action) => {
        state.push(action.payload);
      },
    deleteTodo: (state, action) => {
        return state?.filter(todo => todo.id !== action.payload)
      // console.log("deletedItem",state);
        // const index = state.find((todo) => todo.id === action.payload);
        // console.log("index",index);
        // if (index !== -1) {
        //   state.splice(index, 1);
        // }
      },
      editTodo: (state, action) => {
        console.log("state",state);
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        console.log("index",index);
        if (index !== -1) {
          state[index] = action.payload;
        }
      },
      archiveTodo: (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload);
        if (index !== -1) {
          state[index].archived = true;
        }
      },
  },
});

export const { addTodo, deleteTodo ,editTodo ,archiveTodo} = todoSlice.actions;

export default todoSlice.reducer;