
const Item = ({item}) => {
    return(
        <div className="Item-Container">
            <div className="Item-Img"></div>
            <div className="Item-Details">
                <div className="Item-Name">
                    {item.name}
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div className="Item-Price">Price: ${(item.price).toFixed(2)}</div>
                    <div className="Item-Stock">Stock Left: {item.stock}</div>
                </div>
            </div>
        </div>
    );
}

export default Item;