import React, {useState}from 'react';
import TodoList from './TodoList';

function App() {
  //const [todos,setTodos]=useState() 
  // const [todos, setTodos]=useState(["Todo1","Todo2"])
  const [todos, setTodos]=useState([{id:1, name:"Todo1", Complete:true}])
                  /*call useState function and we want to pass it our default state for Todo's
                  the default is going to be an empty array
                  so the first time our app loads   
                  we are going to use empty array of Todo's ,bcoz we have no Todo's.
                  set useState to a variable  
                  */
/* 

useState actually returns an array --> const []=useState()

const [todos,setTodos]=useState()

here in array 2nd element is a function that allows us to update the state.


Object D structuring with default data 
const [todos,setTodos]=useState(['Todo1','Todo2])


now we can pass to <TodoList todos={todos}/>
                    here totos are called props 


*/
  return (
    <>
    <TodoList todos={todos}/>
    <input type="text"/>
    <button>Add Todo</button>
    <button>Clear Complete </button>
    <div>0  left to do</div>
    </>
  )
    
}

export default App;


/* 
<>
</> empty element is a fragment which allows one thing 
which is this fragment which contains two things which we actually want to 
return 

first we need to set up the state for our application because the 
the way react works is it manage State inside of your application 
ans when that state changes it rerender things 

and we want to store all our todo's inside of a state 
so we can actually render those to Todo's and every time we change it to do 
add it to do deletedto do it'll actually rerender our entire component tree 



so inorder to use UseState in function component
we need to use called useState hook
so we cam import {useState} */