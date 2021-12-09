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
        if (!file) {return}

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setPreview(reader.result);
        }, false);
        reader.readAsDataURL(file[0]);  
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
        setFile("");
        setPreview("");
        setName("");
        setDesc("");
        setStock("");
        setPrice("");
        
        document.getElementById("Input-Category").value = "default";
        document.getElementsByClassName("Error-Msg")[0].style.display = "none";

        dispatch(setList(addItem));
        setSubmit(!isSubmit);
    }

    return (
        <form onSubmit={handleSubmit} className="Form-Container">
            <div className="Error-Msg">*Missing image or input fields are empty*</div>
            <div className="Image-Section">
                <div className="Image-Label"
                    style={Object.assign({textShadow: '2px 2px rgb(90, 90, 90)'}, fontStyle)}
                >
                    Add Item Image(s) <AiOutlineCamera
                        size={45}
                        style={{marginLeft: '10px'}}
                    />
                </div>
                <div style={flexStyle}>
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
                <div className="Input-Fields">

                    <div className="Name-Label">Name<span style={dotStyle}>*</span></div>
                    <input className="Input-Name" name="name"
                        style={Object.assign({height: '50px'}, inputStyle)} 
                        value={name}
                        placeholder="Enter name here..."
                        onChange={handleChange}
                    />

                    <div className="Description-Label">Description<span style={dotStyle}>*</span></div>
                    <textarea className="Input-Description" name="description"
                        style={Object.assign({height: '200px'}, inputStyle)} 
                        value={description}
                        placeholder="Enter description here..."
                        onChange={handleChange} 
                    />

                    <div className="Stock-Label">Stock<span style={dotStyle}>*</span></div>
                    <input className="Input-Stock" name="stock" type="number" min="0"
                        style={Object.assign({width: '25%'}, inputStyle)}
                        value={stock}
                        placeholder="0"
                        onChange={handleChange}
                    />

                    <div className="Price-Label">Price<span style={dotStyle}>*</span></div>
                    <input className="Input-Price" name="price" type="number" min="0.00" step=".01"
                        style={Object.assign({width: '25%'}, inputStyle)}
                        value={price}
                        placeholder="$0.00"
                        onChange={handleChange}
                    />

                    <div className="Category-Label">Category<span style={dotStyle}>*</span></div>
                    <select id="Input-Category" className="Input-Category"> 
                        <option value="default">----Please Select a Category For The Item-----</option>
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

const dotStyle = {
    fontSize: '20px', 
    color: 'red',
}

const flexStyle = {
    display: 'flex',
    justifyContent: 'space-around'
}

const inputStyle = {
    fontSize: '20px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    backgroundColor: 'rgb(236,236,236)'
}

