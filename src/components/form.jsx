import React from 'react'

import moment from 'moment'

const Form = ({ input, setInput, task, setTask }) => {
    
    const handleTextInput = (e) => {
        setInput(e.target.value)
    }

    // const updateTask = (title, id, status) => {
    //     const newTask = task.map((item) => 
    //         item.id === id ? { title, id, status } : item
    //     )
    //     setTask(newTask)
    //     setEditTask("")
    // }

    // useEffect(() => {
    //     if(editTask) {
    //         setInput(editTask.title)
    //     } else {
    //         setInput("")
    //     }
    // }, [setInput, editTask])

    const handleSubmit = (e) => {
        e.preventDefault()

        let id = task.length
        let newId = id + 1

        setTask([
            ...task,
            { id: newId, title: input, description: "-", status: 0, createdAt: moment().format('YYYY-MM-DD HH:mm') }
        ])
        setInput("")

        // if(!editTask) {
        //     setTask([
        //         ...task,
        //         { id: newId, title: input, description: "-", status: 0, createdAt: moment().format('YYYY-MM-DD HH:mm') }
        //     ])
        //     setInput("")
        // } else {
        //     updateTask(input, editTask.id, editTask.status)
        // }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Create new task</h3>
                <div className="input-group">
                    <input
                        type="text"
                        name="task"
                        className="form-control task-input-form"
                        value={input}
                        required
                        onChange={handleTextInput}
                    />
                    <button className="btn btn-success btn-add" type="submit">
                        {/* { editTask ? 'Save' : <i className="fas fa-plus"></i> } */}
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </form>
        </>
    )
}

export default Form
