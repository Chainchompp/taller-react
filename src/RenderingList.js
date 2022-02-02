import ListItem from "./ListItem"
const RenderingList = () => {

    const normalArray = [{key:1,name:'Hamburguesa',price:30},{key:2,name:'Pizza',price:40}]

    return (
        <div>
            <p>Mi lista</p>
            <ul>
                {normalArray.map((value) => {
                    return (<ListItem
                    key={value.key}
                    productData={value}
                    ></ListItem>)
                })}
            </ul>
        </div>
    )
}

export default RenderingList