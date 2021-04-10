 import{FaTimes}  from 'react-icons/fa'

const Task = ({task,key,onDelete}  ) => {
    return (
        <div key={key} className="task">
            <h3>{task.text} <FaTimes onClick={()=>onDelete(task.id)} style={{color:"red",cursor:"pointer"}}/></h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
