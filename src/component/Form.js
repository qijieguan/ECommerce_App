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
    const [price, setPrice] = useState("");
    const [isSubmit, setSubmit] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!file) {return}
        const reader = new FileReader();
        reader.addEventListener("load", () => {setPreview(reader.result);}, false);
        reader.readAsDataURL(file[0]);  
    }, [file, preview, isSubmit]);
    
    const getFiles = (img) => {setFile(img);}

    const handleChange = e => {
        if (e.target.name === "name") {setName(e.target.value);}
        else if (e.target.name === "description") {setDesc(e.target.value);}
        else if (e.target.name === "stock") {setStock(e.target.value);}
        else {setPrice(e.target.value);}
    }

    const handleSubmit = e => {
        e.preventDefault();

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
        <form onSubmit={handleSubmit} className="form-container flex">
            <div id="error-msg">*Missing image or input fields are empty*</div>
            <div id="image-section">
                <div className="image-label flex" style={{ color: 'yellow'}}>  
                    Add Item Image 
                    <AiOutlineCamera size={45} style={{marginLeft: '10px'}}/>
                </div>
                <div>
                    <div className="Dropzone-Panel"><MyDropzone getFiles={getFiles}/></div>
                    <div className="preview-display flex">
                        {preview ?
                            <img id="preview-image" src={preview} alt=""/>
                            :
                            <div className="preview-default">Item Preview Here</div>
                        }       
                    </div> 
                </div>
            </div>
            <div id="input-section">
                <div className="input-label flex">
                    Fill In Item Fields 
                    <BsPencilSquare size={45} style={{marginLeft: '10px'}}/>
                </div>
                <div className="input-fields grid">

                    <div id="name-label">Name<span style={dotStyle}>*</span></div>
                    <input id="input-name" name="name" style={{height: '3rem'}} 
                        value={name}
                        placeholder="Enter name here..."
                        onChange={handleChange}
                        required
                    />

                    <div id="description-label">Description<span style={dotStyle}>*</span></div>
                    <textarea id="input-description" name="description" 
                        style={{height: '15rem'}} 
                        value={description}
                        placeholder="Enter description here..."
                        onChange={handleChange} 
                        required
                    />

                    <div id="stock-label">Stock<span style={dotStyle}>*</span></div>
                    <input id="input-stock" name="stock" type="number" min="0"
                        style={{width: '25%'}}
                        value={stock}
                        placeholder="0"
                        onChange={handleChange}
                        required
                    />

                    <div id="price-label">Price<span style={dotStyle}>*</span></div>
                    <input id="input-price" name="price" type="number" min="0.00" step=".01"
                        style={{width: '25%'}}
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
            <div className="submit-form flex">
                <button className="btn">Cancel</button>
                <button type="submit" className="btn" style={{color: 'white', background: 'teal'}}>Add</button>
            </div>
        </form>   
    );
}

const dotStyle = { fontSize: '1.5rem',  color: 'red', }

