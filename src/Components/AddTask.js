 import {useState} from 'react'

const AddTask = ({onAddTask}) => {
    const [text,setText] = useState('')
    const [date,setdate] = useState('')
    const [reminder,setreminder] = useState(false)
   const onSubmit = (e)=>{
     //  e.preventDefualt()
     e.preventDefault()
       if(!text)

       {
           alert('please insert text only')
           return
       }
       onAddTask({text,date,reminder})
       setText('')
       setdate('')
       setreminder(false)

   }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control ">
             <label>Add Task</label>
             <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)} />
            </div>

            <div className="form-control ">
             <label>Add date and Time</label>
             <input type="text" placeholder="Add date and Time" value={date}  onChange={(e)=>setdate(e.target.value)} />
            </div>

            <div className="form-control form-control-check ">
             <label>reminder</label>
             <input checked={reminder} type="CheckBox"value={reminder} onChange={(e)=>setreminder(e.target.value)}   />
            </div>
           
             
             <input type="submit" value="Save"  className="btn btn-block"  />
        

        </form>
    )
}

export default AddTask
