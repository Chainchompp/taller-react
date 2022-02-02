import { useState } from "react"
import Child from "./Child"

const Parent = ({parentName,color='white'}) => {

    const [yourName, setYourName] = useState('Giro')

    const changeYourName = (name) =>{
        setYourName(name)
    }
    return (
        <div style={ {backgroundColor: color}}>
            <p>Parent component</p>
            <p>{parentName}</p>
            <p>{yourName}</p>
            <Child onNameChange={changeYourName} name={yourName}/>
        </div>
    )
}

export default Parent