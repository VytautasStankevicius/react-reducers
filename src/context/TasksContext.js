import React, { useContext, useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";
import { newTask } from "../actions/TodoActions";
import { deleteTask } from "../actions/TodoActions";
import { openForm } from "../actions/TodoActions";


const AppContext = React.createContext() //Context'as kuriame viskas judes

const initialState = {
    tasks:[
        {
            id:1,
            title:"Test task 1",
            description: "Test tas 1 description"
        },
        {
            id:2,
            title:"Test task 1",
            description: "Test tas 2 description"
        },
        {
            id:3,
            title:"Test task 1",
            description: "Test tas 3 description"
        }
    ],
    isOpen:false
}

const AppProvider = ({children})=>{ //Tiekejas kuris kazka tiekia
    const [state, dispatch] = useReducer(TodoReducer, initialState)
    const addTask = (data)=>{
        dispatch(newTask(data))
    }

    const handleForm = (formStatus)=>{
        dispatch(openForm(formStatus))
    }

    const removeTask = (id)=>{
        dispatch(deleteTask(id))
    }
    return(
        <AppContext.Provider value={{
            ...state,
            addTask,
            handleForm,
            removeTask
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}