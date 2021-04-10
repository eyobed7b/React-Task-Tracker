 import{FaTimes}  from 'react-icons/fa'

const Task = ({task,key,onDelete,onToggleReminder}  ) => {
    return (
        <div key={key} className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>onToggleReminder(task.id)}>
            <h3>{task.text} <FaTimes onClick={()=>onDelete(task.id)} style={{color:"red",cursor:"pointer"}}/></h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
