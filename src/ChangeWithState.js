import React,{useState} from 'react'

const ChangeWithState = ()=> {

    const [eventData, setEventData] = useState({
        eventNumber: '5',
        eventDay: 'Mañana',
        eventLocation: 'La casa de Nolasco'
      })
      
    const [titleValue, setTitleValue] = useState('Mi titulo 2')
    const changeTitle = ()=>{
        setTitleValue('Nuevo titulo ahora si funciona')
    }
    const changeEventPlace = () =>{
        setEventData(
            {   
                ...eventData,
                eventLocation: 'Mi casa',
            }
        ) 
        
    }
    return (
        <div>
            <p>{titleValue}</p>
            <button onClick={changeTitle}>Cambiar titulo</button>
            <p>El evento</p>
            <p>Dia del evento {eventData.eventDay}</p>
            <p>Lugar del evento {eventData.eventLocation}</p>
            <p>Numero de evento {eventData.eventNumber}</p>
            <button onClick={changeEventPlace}>Cambiar lugar</button>
        </div>
    )
}

export default ChangeWithState