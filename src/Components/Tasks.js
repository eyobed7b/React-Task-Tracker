
import Task from './task'

const Tasks = ({tasks,onDelete,onToggleReminder}) => {
    
    return (
        <div>
           {tasks.map((tasks,index)=>(<Task key={index}  task={tasks} onDelete={onDelete} onToggleReminder={onToggleReminder}/>))} 
        </div>
    )
}

export default Tasks
