import { useGlobalContext } from "../../context/TasksContext";
import { useState } from "react";


const AddTask = ()=> {

    const {addTask, handleForm} = useGlobalContext();
    const [newTask, setNewTask] = useState({
        id:'',
        title:'',
        description:''
    })

    const handleChange = (e)=>{
        setNewTask({...newTask, [e.target.name]:e.target.value, id:1()})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        addTask(newTask)
    }


    return (
      <form className="form" onSubmit={handleSubmit}>
            <div className="form-group" >
                <input type="text" placeholder="title"  className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group" >
                <textarea placeholder="Description" className="form-control" onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Add</button>
            </div>
      </form>
    );
  }
  
  export default AddTask