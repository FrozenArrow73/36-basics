import React from "react";
import { useState } from "react";

const Form = (props) => {
    const [userInput, setUserInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTask(userInput)
        setUserInput("")
    }

    const handleChange = (e) => setUserInput(e.target.value)

    return (
        <form className='card' onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={userInput}/>
            <button>add Task</button>
        </form>
    )
}

export default Form