import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

    const [source, setSource] = useState("");

    useEffect(() => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setSource(reader.result);
        }, false);
        reader.readAsDataURL(item.ImageFile[0]);

        let backgroundColor;
        if (item.Category === "cloth") {
            backgroundColor = "navy";
        }
        else if (item.Category === "electronic") {
            backgroundColor = "yellow";
        }
        else if (item.Category === "furnature") {
            backgroundColor = "black";
        }
        else {
            backgroundColor = "red";
        }
        
        let element = document.getElementById(item.id).querySelector(".Item-Category");
        element.style.backgroundColor = backgroundColor;

    }, [item]);

    return(
        <Link to={{pathname: `/View/${item.id}`, state: {item: item}}} className="Item-Container" id={item.id}>
            <img className="Item-Image" src={source} alt=""/>
            <div className="Item-Details">
                <div className="Item-Name">
                    {item.Name} <div className="Item-Category" id={item.id}>{item.Category}</div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '95%'}}>
                    <div className="Item-Price">
                        Price: <span style={{fontSize: "22px", color: "rgb(4, 165, 4)"}}>$</span>
                        <span style={{color: "rgb(4, 165, 4)", fontSize: '20px'}}>{item.Price}</span>
                    </div>
                    <div className="Item-Stock">
                        Stock: <span style={{color: "blue", fontSize: '22px'}}>{item.Stock}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Item;