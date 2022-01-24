import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

const ItemExpand = () => {

    const item = useLocation().state.item;
    const [url, setURL] = useState("");


    useEffect(() => {
        if (typeof(item.ImageFile) === "string") {setURL(item.ImageFile);}
        else {
            const reader = new FileReader();  
            reader.addEventListener("load", () => {setURL(reader.result);}, false);
            reader.readAsDataURL(item.ImageFile[0]);
        }
    }, [item]);
 
    return(
        <div className="Expand-Item">
            <img className="Expand-Image" src={url} alt=""/>
            <div className="Expand-Details">
                <h1 className="Expand-Name Expand-Li">{item.Name}</h1>
                <h1 className='Expand-Description Expand-Li'>{item.Description}</h1><br/>
                <button className='Add-Cart'>Add to Cart</button>
                <div className='Expand-Li'>Price ${item.Price}</div>
                <div className='Expand-Li'>Stock: {item.Stock}</div>
                <div className='Expand-Li'>Tag: {item.Tag}</div>
            </div>
        </div>
    );
}

export default ItemExpand;