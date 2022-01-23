import { useState, useEffect } from 'react';


const Item = ({item}) => {

    const [url, setURL] = useState("");

    useEffect(() => {
        if (typeof(item.ImageFile) === "string") {setURL(item.ImageFile);}
        else {
            const reader = new FileReader();  
            reader.addEventListener("load", () => {setURL(reader.result);}, false);
            reader.readAsDataURL(item.ImageFile[0]);
        }
        setTagColor();
    }, [item]);

    const setTagColor = () => {
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
        
        let element = document.getElementById(item.id).querySelector(".Item-Tag");
        element.style.background = background;
    }

    const onEnter = () => {
        let element = document.getElementById(item.id);

        if (element.getClientRects()[0].x < 0) {element.style.marginLeft = '175px';}
        else if (element.getClientRects()[0].x > 500) {element.style.marginRight = '175px';}
        element.getElementsByClassName("Item-Description")[0].style.display = "flex";
    }

    const onLeave = () => {
        let element = document.getElementById(item.id);
        element.style.margin = '0';
        element.getElementsByClassName("Item-Description")[0].style.display = "none";
    }

    return(
        <div className="Item-Container">
            <div className="Item" id={item.id} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <img className="Item-Image" src={url} alt=""/>
                <div className="Item-Tag" id={item.id}>{item.Tag}</div>
                <div className="Item-Details">
                    <h1 className="Item-Name">{item.Name} </h1>
                    <div className="Item-Description">{item.Description}</div>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '95%', height: '50px'}}>
                        <div className="Item-Price">
                            Price: <span style={{fontSize: "22px", color: "rgb(4, 165, 4)", fontWeight: 'bold'}}>$</span>
                            <span style={{color: "rgb(4, 165, 4)", fontSize: '20px'}}>{item.Price}</span>
                        </div>
                        <div className="Item-Stock">
                            Stock: <span style={{color: "navy", fontSize: '20px', fontWeight: 'bold'}}>{item.Stock}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;