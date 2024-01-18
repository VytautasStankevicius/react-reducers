const Task = (props)=>{
    return(
        <li className="list-group-item">{props.title}:{props.desc}<button>Salinti</button></li>
    )
}

export default Task