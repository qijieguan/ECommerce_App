import { useState, useEffect } from 'react';

const Item = ({item}) => {

    const [source, setSource] = useState("");

    useEffect(() => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setSource(reader.result);
        }, false);
        reader.readAsDataURL(item.ImageFile[0]);
    }, [item.ImageFile])

    return(
        <div className="Item-Container">
            <img className="Item-Img" src={source} alt=""/>
            <div className="Item-Details">
                <div className="Item-Name">
                    {item.Name}
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '75%'}}>
                    <div className="Item-Price">Price: ${item.Price}</div>
                    <div className="Item-Stock">Stock Left: {item.Stock}</div>
                </div>
            </div>
        </div>
    );
}

export default Item;