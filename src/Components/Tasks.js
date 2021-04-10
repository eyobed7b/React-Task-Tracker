
import Task from './task'

const Tasks = ({tasks,onDelete,onToggleReminder}) => {
    
    return (
        <div>
           {tasks.map((tasks)=>(<Task key={tasks.id}  task={tasks} onDelete={onDelete} onToggleReminder={onToggleReminder}/>))} 
        </div>
    )
}

export default Tasks
