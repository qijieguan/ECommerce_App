import './styles/form.css';
import { useState, useEffect } from 'react';
import MyDropzone from './Dropzone.js';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addList } from './actions/index.js';
import uuid from "react-uuid"; 

export default function Form() {
    
    const [preview, setPreview] = useState("");
    const [file, setFile] = useState("");
    const [name, setName] = useState("");
    const [description, setDesc] = useState("")
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState(0);
    const [isSubmit, setSubmit] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        document.getElementById("header").style.background = 'teal';
        document.getElementById("search").style.display = 'none';
        if (!file) {return}

        const reader = new FileReader();
        reader.addEventListener("load", () => {setPreview(reader.result);}, false);
        reader.readAsDataURL(file[0]);  
    }, [file, preview, isSubmit]);
    
    const getFiles = (img) => {setFile(img);}

    const handleChange = event => {
        if (event.target.name === "name") {setName(event.target.value);}
        else if (event.target.name === "description") {setDesc(event.target.value);}
        else if (event.target.name === "stock") {setStock(event.target.value);}
        else {setPrice(event.target.value);}
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!file || document.getElementById("input-tag").value === "Default") {
            document.getElementById("error-msg").style.display = "flex";
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
            Tag: document.getElementById("input-tag").value
        }
        setFile("");
        setPreview("");
        setName("");
        setDesc("");
        setStock("");
        setPrice("");
        
        document.getElementById("input-tag").value = "Default";
        document.getElementById("error-msg").style.display = "none";

        dispatch(addList(addItem));
        setSubmit(!isSubmit);
    }

    return (
        <form onSubmit={handleSubmit} id="form-container">
            <div id="error-msg">*Missing image or input fields are empty*</div>
            <div id="image-section">
                <div id="image-label"
                    style={{ color: 'yellow'}}
                >   Add Item Image 
                    <AiOutlineCamera size={45} style={{marginLeft: '10px'}}/>
                </div>
                <div>
                    <div className="Dropzone-Panel"><MyDropzone getFiles={getFiles}/></div>
                    <div id="preview-display">
                        {preview ?
                            <img id="preview-image" src={preview} alt=""/>
                            :
                            <div id="preview-default">Item Preview Here</div>
                        }       
                    </div> 
                </div>
            </div>
            <div id="input-section">
                <div id="input-label">
                    Fill In Item Fields 
                    <BsPencilSquare size={45} style={{marginLeft: '10px'}}/>
                </div>
                <div id="input-fields">

                    <div id="name-label">Name<span style={dotStyle}>*</span></div>
                    <input id="input-name" name="name" style={Object.assign({height: '50px'}, inputStyle)} 
                        value={name}
                        placeholder="Enter name here..."
                        onChange={handleChange}
                        required
                    />

                    <div id="description-label">Description<span style={dotStyle}>*</span></div>
                    <textarea id="input-description" name="description" 
                        style={Object.assign({height: '200px'}, inputStyle)} 
                        value={description}
                        placeholder="Enter description here..."
                        onChange={handleChange} 
                        required
                    />

                    <div id="stock-label">Stock<span style={dotStyle}>*</span></div>
                    <input id="input-stock" name="stock" type="number" min="0"
                        style={Object.assign({width: '25%'}, inputStyle)}
                        value={stock}
                        placeholder="0"
                        onChange={handleChange}
                        required
                    />

                    <div id="price-label">Price<span style={dotStyle}>*</span></div>
                    <input id="input-price" name="price" type="number" min="0.00" step=".01"
                        style={Object.assign({width: '25%'}, inputStyle)}
                        value={price}
                        placeholder="$0.00"
                        onChange={handleChange}
                        required
                    />

                    <div id="tag-label">Tag<span style={dotStyle}>*</span></div>
                    <select id="input-tag" required> 
                        <option value="">---- Please Select a Tag For The Item -----</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Clothed">Clothed</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Food">Food</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Toy">Toy</option>
                    </select>
                </div>  
            </div>
            <div id="submit-form">
                <button className="btn">Cancel</button>
                <button type="submit" className="btn" style={{color: 'white', background: 'teal'}}>Add</button>
            </div>
        </form>   
    );
}

const dotStyle = { fontSize: '20px',  color: 'red', }

const inputStyle = { fontSize: '20px', background: 'rgb(236,236,236)' }

