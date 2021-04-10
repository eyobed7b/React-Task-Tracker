
import Task from './task'

const Tasks = ({tasks,onDelete}) => {
    
    return (
        <div>
           {tasks.map((tasks)=>(<Task key={tasks.id}  task={tasks} onDelete={onDelete}/>))} 
        </div>
    )
}

export default Tasks
