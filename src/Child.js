import { useState } from "react"

const Child = (props) =>{

    const nameHandler = (event) =>{
       props.onNameChange(event.target.value)
    }

    return (
        <div>
            <form>
                <label>Tu nombre</label>
                <input
                type='text'
                value={props.name}
                onChange={nameHandler}></input>
            </form>
           
        </div>
    )
}

export default Child