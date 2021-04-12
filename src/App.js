import {useState ,useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 import Header from './Components/Header'
 import Tasks from './Components/Tasks'
 import AddTask from './Components/AddTask'
import Footer from './Components/Footer'
import About from './Components/About'
 
 function App(){
const [tasks,setState] = useState([])

useEffect(()=>{
const getTask = async()=>{
    const taskFormServer = await fetchTask()
     
   setState(taskFormServer)
   
}

 getTask() 

},[])
const fetchTask = async()=>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data)
    return data
    
}

const [showForm,setShowForm]= useState(false)
const addTask= async (task)=>{
const res = await fetch('http://localhost:5000/tasks',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(task)})
const data = await res.json()

setState([...tasks,data])
// const id = Math.floor(Math.random*1000)+1
// const newTask = {id,...task}
// setState([...tasks,newTask])

}
const deleteTask= async (id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
 setState(tasks.filter((task)=>task.id!==id))
}

const onToggleReminder = async(id)=>{
  const taskToggled = await fetch(id)
  const update = {...taskToggled,reminder:!taskToggled.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers:{
     'Content-type':'appliction/json' 
    },
    body:JSON.stringify(update)
  })
  
  const data = await res.json()


setState(tasks.map((task)=>(task.id===id?{...task,reminder:!data.reminder}:task)))
}
   return (
   <Router>
   <div className="container">

   <Header  onShow ={()=>setShowForm(!showForm)} showAdd={showForm} title = "Task Tracker" />
  {showForm && <  AddTask onAddTask={addTask} />}
  { tasks.length>0?<Tasks tasks ={tasks} onDelete ={deleteTask} onToggleReminder ={onToggleReminder}/>:'NO Tasks to show'}
  <Route Path='/about' component={About} />
  <Footer/>
   </div>
   </Router>
 )
 }
export default App;
