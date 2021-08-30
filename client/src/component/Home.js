import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from './actions/index';
import Item from './Item.js';
import MyDropzone from './Dropzone.js';

export default function Home() {

    const items = useSelector(state => state.itemList);
    const dispatch = useDispatch();
    const [preview, setPreview] = useState("");

    useEffect(() => {
    }
    , [preview]);

    const getFiles = (imgSrc) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setPreview(reader.result);
        }, false);
        reader.readAsDataURL(imgSrc[0]);
    }

    return (
        <div className="Home">
            <div style={customStyle}>On Sale!</div>
            <div className="Items-Display">
                {items.map(item => <Item key={item.id} item={item} />)}
            </div>
            <MyDropzone getFiles={getFiles}/>
            {
                preview ?
                <img className="Preview" src={preview} alt=""></img>
                :
                ""
            }
        </div>
    );
}

const customStyle = {
    margin: '100px 0 50px 20px',
    fontSize: '40px',
}