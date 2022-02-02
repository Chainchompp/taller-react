import { useState } from "react"
const ConditionalRendering = () => {

    const [inputIsValid, setInputIsValid] = useState(false)
    
    const renderValidationWarning = () =>{
        if(!inputIsValid){
            return <p>Please enter a valid username.</p>
        }
    }
    return (
        <div>
            <label>USERNAME</label>
            <input></input>
            {renderValidationWarning()}
            <button>Enter value</button>
        </div>)
}

export default ConditionalRendering