import {useState} from 'react'
 import Header from './Components/Header'
 import Tasks from './Components/Tasks'
 function App(){
  const [tasks,setState] = useState( [
    {
         id:1,
         text:"Hello world",
         date:"4-10-2021",
         reminder:true
    },
    {
        id:2,
        text:"Fract is going viral",
        date:"4-11-2021",
        reminder:true
    },
    {
        id:3,
        text:"Going to MIU",
        date:"4-12-2021",
        reminder:false
    }
])
const deleteTask= (id)=>{
 setState(tasks.filter((task)=>task.id!=id))
}
   return (<div className="container">
   <Header title = "Task Tracker" />
   <Tasks tasks ={tasks} onDelete ={deleteTask}/>
   </div>
 )
 }
export default App;
