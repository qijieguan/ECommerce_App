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
                    {item.Name} <div className="Item-Category">{item.Category}</div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '95%'}}>
                    <div className="Item-Price">
                        Price: <span style={{fontSize: "22px", color: "rgb(4, 165, 4)"}}>$</span>
                        {item.Price}
                    </div>
                    <div className="Item-Stock">Stock: {item.Stock}</div>
                </div>
            </div>
        </div>
    );
}

export default Item;