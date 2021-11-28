import { useState, useEffect } from 'react';
import MyDropzone from './Dropzone.js';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import setList from './actions/index.js';
import uuid from "react-uuid"; 

export default function Form() {
    
    const [preview, setPreview] = useState("");
    const [file, setFile] = useState("");
    const [name, setName] = useState("");
    const [description, setDesc] = useState("")
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const [isSubmit, setSubmit] = useState(false);

    const items = useSelector(state => state.itemList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPreview(reader.result);
            }, false);
            reader.readAsDataURL(file[0]);
        }
        console.log(items);
    }
    , [file, preview, isSubmit]);
    
    const getFiles = (img) => {
        setFile(img);
    }

    const handleChange = event => {
        event.preventDefault();
        if (event.target.name === "name") {
            setName(event.target.value);
        }
        else if (event.target.name === "description") {
            setDesc(event.target.value);
        }
        else if (event.target.name === "stock") {
            setStock(event.target.value);
        }
        else {
            setPrice(event.target.value);
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const addItem = {
            id: uuid(),
            ImageFile: file, 
            Name: name,
            Description: description,
            Stock: stock,
            Price: price
        }
        setName("");
        setDesc("");
        setStock("");
        setPrice("");
        dispatch(setList(addItem));
        setSubmit(!isSubmit);
    }

    return (
        <form onSubmit={handleSubmit} className="Form-Container">
            <div className="Image-Section">
                <div className="Image-Label"
                    style={fontStyle}
                >
                    Add Item Image(s) <AiOutlineCamera
                        size={45}
                        style={{marginLeft: '10px'}}
                    />
                </div>
                <div className="Dropzone-Panel"><MyDropzone getFiles={getFiles}/></div>
                <div className="Preview-Display">
                    {
                        preview ?
                        <img className="Preview-Image" src={preview} alt=""/>
                        :
                        <div className="Preview-Default">
                            Item Preview Here
                        </div>
                    }       
                </div> 
            </div>
            <div className="Input-Section">
                <div className="Input-Label"
                    style={fontStyle}
                >
                    Fill In Item Fields <BsPencilSquare
                        size={45}
                        style={{marginLeft: '10px'}}
                    />
                </div>
                <div className="Input-Name">
                    <div style={{fontSize: '18px'}}>Name</div>
                    <input 
                        name="name"
                        style={inputStyle_1} 
                        placeholder="Ex. Crispy Banana Chips, 10 Pack, etc..."
                        value={name}
                        onChange={handleChange}
                    />
                </div>  
                <div className="Input-Description">
                    <div style={{fontSize: '18px'}}>Description</div>
                    <textarea
                        name="description"
                        style={textAreaStyle} 
                        placeholder="Ex. 10 bags of crunchy chips..."
                        value={description}
                        onChange={handleChange} 
                    />
                </div>
                <div className="Input-Stock"> 
                    Stock  
                        <input 
                            name="stock"
                            type="number"
                            min="0"
                            style={Object.assign({width: '12%'}, inputStyle_2)}
                            placeholder="0"
                            value={stock}
                            onChange={handleChange}
                        />
                </div>
                <div className="Input-Price">
                    Price 
                    <span style={{fontSize: "24px", marginLeft: '10px'}}>$</span>
                    <input 
                        name="price"
                        type="number"
                        min="0.00"
                        step=".01"
                        style={Object.assign({width: '15%'}, inputStyle_2)}
                        placeholder="0.00"
                        value={price}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="Submit-Form">
                <button className="btn">Cancel</button>
                <button type="submit" className="btn" style={{color: 'white', background: 'limegreen'}}>Finish</button>
            </div>
        </form>
    );
}

const fontStyle = {
    fontSize: '40px', 
    padding: '80px 0 40px 75px', 
    fontFamily: 'Copperplate',
    display: 'flex',
    justifyContent: 'unset'
}

const inputStyle_1 = {
    height: '50px',
    border: '2px inset grey',
    borderRadius: '5px',
    fontSize: '20px',
    backgroundColor: 'rgb(236,236,236)'
}

const inputStyle_2 = {
    marginLeft: '10px',
    border: '2px inset gray', 
    borderRadius: '5px', 
    fontSize: '20px',
    backgroundColor: 'rgb(236,236,236)'
}

const textAreaStyle = {
    height: '200px',
    border: '2px inset grey',
    borderRadius: '5px',
    fontSize: '18px',
    backgroundColor: 'rgb(236,236,236)'
}
