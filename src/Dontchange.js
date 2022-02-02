const DontChange = ()=> {
    let title = 'Mi titulo'
    const changeTitle = ()=>{
        title = 'Nuevo titulo'
        console.log('cambiado')
    }
    return (
        <div>
            <p>{title}</p>
            <button onClick={changeTitle}>Cambiar titulo</button>
        </div>
    )
}

export default DontChange