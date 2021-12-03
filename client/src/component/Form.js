import { useState, useEffect } from 'react';
import MyDropzone from './Dropzone.js';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setList } from './actions/index.js';
import uuid from "react-uuid"; 

export default function Form() {
    
    const [preview, setPreview] = useState("");
    const [file, setFile] = useState("");
    const [name, setName] = useState("");
    const [description, setDesc] = useState("")
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const [isSubmit, setSubmit] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPreview(reader.result);
            }, false);
            reader.readAsDataURL(file[0]);
        }
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
        if (!file || !name || !description || !stock || !price || document.getElementById("Input-Category").value === "default") {
            document.getElementsByClassName("Error-Msg")[0].style.display = "flex";
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            return;
        }
        const addItem = {
            id: uuid(),
            ImageFile: file, 
            Name: name,
            Description: description,
            Stock: stock,
            Price: price,
            Category: document.getElementById("Input-Category").value
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
            <div className="Error-Msg">Missing image or input fields are empty!</div>
            <div className="Image-Section">
                <div className="Image-Label"
                    style={Object.assign({textShadow: '2px 2px rgb(90, 90, 90)'}, fontStyle)}
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
                    style={Object.assign({textShadow: '2px 2px gray'}, fontStyle)}
                >
                    Fill In Item Fields <BsPencilSquare
                        size={45}
                        style={{marginLeft: '10px'}}
                    />
                </div>
                <div className="Input-Name">
                    <div>
                        Name<span style={{fontSize: '20px', color: 'red'}}>*</span>
                    </div>
                    <input 
                        name="name"
                        style={Object.assign({height: '50px'}, inputStyle)} 
                        placeholder="Ex. Crispy Banana Chips, 10 Pack, etc..."
                        value={name}
                        onChange={handleChange}
                    />
                </div>  
                <div className="Input-Description">
                    <div>
                        Description<span style={{fontSize: '20px', color: 'red'}}>*</span>
                    </div>
                    <textarea
                        name="description"
                        style={Object.assign({height: '200px'}, inputStyle)} 
                        placeholder="Ex. 10 bags of crunchy chips..."
                        value={description}
                        onChange={handleChange} 
                    />
                </div>
                <div className="Input-Stock"> 
                    Stock<span style={{fontSize: '20px', color: 'red'}}>*</span>
                        <input 
                            name="stock"
                            type="number"
                            min="0"
                            style={Object.assign({marginLeft: '10px', width: '25%'}, inputStyle)}
                            placeholder="0"
                            value={stock}
                            onChange={handleChange}
                        />
                </div>
                <div className="Input-Price">
                    Price<span style={{fontSize: '20px', color: 'red'}}>*</span>
                    <span style={{fontSize: "24px", marginLeft: '8px'}}>$</span>
                    <input 
                        name="price"
                        type="number"
                        min="0.00"
                        step=".01"
                        style={Object.assign({marginLeft: '5px',  width: '30%'}, inputStyle)}
                        placeholder="0.00"
                        value={price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Category<span style={{fontSize: '20px', color: 'red', marginRight: '10px'}}>*</span>
                    <select id="Input-Category" className="Input-Category">
                        <option value="default">--Select--</option>
                        <option value="cloth">Cloth</option>
                        <option value="electronic">Electronic</option>
                        <option value="furnature">Furnature</option>
                        <option value="food">Food</option>
                    </select>
                </div>
            </div>
            <div className="Submit-Form">
                <button className="btn">Cancel</button>
                <button type="submit" className="btn" style={{color: 'white', background: 'limegreen'}}>Add</button>
            </div>
        </form>   
    );
}

const fontStyle = {
    fontSize: '40px', 
    padding: '80px 0 40px 50px', 
    fontFamily: 'copperplate',
    display: 'flex',
    justifyContent: 'unset',
}

const inputStyle = {
    border: '2px inset grey',
    borderRadius: '5px',
    fontSize: '20px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    backgroundColor: 'rgb(236,236,236)'
}

