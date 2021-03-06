import './styles/item.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Item = ({item}) => {

    const [url, setURL] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (typeof(item.ImageFile) === "string") {setURL(item.ImageFile);}
        else {
            const reader = new FileReader();  
            reader.addEventListener("load", () => {setURL(reader.result);}, false);
            reader.readAsDataURL(item.ImageFile[0]);
        }
        setTagColor(item);
    }, [item]);

    const setTagColor = (item) => {
        let background;
        if (item.Tag === "Beauty") {background = "plum"}
        else if (item.Tag === "Cleaning") {background = "royalblue"}
        else if (item.Tag === "Cloth") {background = "black";}
        else if (item.Tag === "Electronic") {background = "yellow";}
        else if (item.Tag === "Furnature") {background = "brown";}
        else if (item.Tag === "Food") {background = "olive";}
        else if (item.Tag === "Drinks") {background = "dimgrey";}
        else if (item.Tag === "Toy") {background = "limegreen";}
        else {background = "red";}
        
        let element = document.getElementById(item.id).querySelector(".item-tag");
        if (element) { element.style.background = background; }
    }

    const onEnter = () => {
        let element = document.getElementById(item.id);
        if (element.getClientRects()[0].x < 50) {element.style.marginLeft = '11rem';}
        else if (element.getClientRects()[0].x > 850) {element.style.marginRight = '11rem';}
        element.getElementsByClassName("item-description")[0].style.display = "flex";
    }

    const onLeave = () => {
        let element = document.getElementById(item.id);
        element.style.margin = '0';
        element.getElementsByClassName("item-description")[0].style.display = "none";
    }

    const handleClick = () => {
        sessionStorage.setItem('item', JSON.stringify(item));
        history.push(`/Store/${item.id}`);
    }

    return(
        <div className="item-wrapper flex" onClick={handleClick}>
            <div className="item" id={item.id} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <img className="item-image" src={url} alt=""/>
                <div className="item-tag">{item.Tag}</div>
                <div className="item-details flex">
                    <h1 className="item-name">{item.Name} </h1>
                    <div className="item-description">{item.Description}</div>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '95%', height: '3.2rem'}}>
                        <div className="item-price">
                            Price: <span style={{color: "rgb(4, 165, 4)"}}>$</span>
                            <span style={{color: "rgb(4, 165, 4)"}}>
                                {parseFloat(item.Price).toFixed(2)}
                            </span>
                        </div>
                        <div className="item-stock">
                            Stock: <span style={{color: "navy"}}>{item.Stock}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;