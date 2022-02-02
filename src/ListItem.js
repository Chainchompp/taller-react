const ListItem = ({ productData}) => {
    return (
        <li >
            <p>{productData.name}</p>
            <p>{productData.price}</p>
        </li>
    )
}

export default ListItem