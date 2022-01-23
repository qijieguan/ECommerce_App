import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

const ItemExpand = () => {

    const item = useLocation().state.item;
    const [source, setSource] = useState("");

    useEffect(() => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {setSource(reader.result);}, false);
        reader.readAsDataURL(item.ImageFile[0]);
    }, [item]);
 
    return(
        <div className="Item-Expand">
            <img className="Expand-Image" src={source} alt=""/>
            <div>Name: {item.Name}</div>
            <div>Description: {item.Description}</div>
            <div>Price: ${item.Price}</div>
            <div>Stock: {item.Stock}</div>
            <div>Tag: {item.Tag}</div>
        </div>
    );
}

export default ItemExpand;