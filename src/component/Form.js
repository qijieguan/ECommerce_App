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

    const handleChange = event => {
        if (event.target.name === "name") {setName(event.target.value);}
        else if (event.target.name === "description") {setDesc(event.target.value);}
        else if (event.target.name === "stock") {setStock(event.target.value);}
        else {setPrice(event.target.value);}
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!file || document.getElementById("Input-Tag").value === "Default") {
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
            Tag: document.getElementById("Input-Tag").value
        }
        setFile("");
        setPreview("");
        setName("");
        setDesc("");
        setStock("");
        setPrice("");
        
        document.getElementById("Input-Tag").value = "Default";
        document.getElementsByClassName("Error-Msg")[0].style.display = "none";

        dispatch(addList(addItem));
        setSubmit(!isSubmit);
    }

    return (
        <form onSubmit={handleSubmit} className="Form-Container">
            <div className="Error-Msg">*Missing image or input fields are empty*</div>
            <div className="Image-Section">
                <div className="Image-Label"
                    style={Object.assign({textShadow: '2px 2px rgb(90, 90, 90)', color: 'orange'}, fontStyle)}
                >
                    Add Item Image 
                    <AiOutlineCamera size={45} style={{marginLeft: '10px'}}/>
                </div>
                <div style={{display: 'flex'}}>
                    <div className="Dropzone-Panel"><MyDropzone getFiles={getFiles}/></div>
                    <div className="Preview-Display">
                        {preview ?
                            <img className="Preview-Image" src={preview} alt=""/>
                            :
                            <div className="Preview-Default">Item Preview Here</div>
                        }       
                    </div> 
                </div>
            </div>
            <div className="Input-Section">
                <div className="Input-Label" style={Object.assign({textShadow: '2px 2px gray'}, fontStyle)}>
                    Fill In Item Fields 
                    <BsPencilSquare size={45} style={{marginLeft: '10px'}}/>
                </div>
                <div className="Input-Fields">

                    <div className="Name-Label">Name<span style={dotStyle}>*</span></div>
                    <input className="Input-Name" name="name" style={Object.assign({height: '50px'}, inputStyle)} 
                        value={name}
                        placeholder="Enter name here..."
                        onChange={handleChange}
                        required
                    />

                    <div className="Description-Label">Description<span style={dotStyle}>*</span></div>
                    <textarea className="Input-Description" name="description" 
                        style={Object.assign({height: '200px'}, inputStyle)} 
                        value={description}
                        placeholder="Enter description here..."
                        onChange={handleChange} 
                        required
                    />

                    <div className="Stock-Label">Stock<span style={dotStyle}>*</span></div>
                    <input className="Input-Stock" name="stock" type="number" min="0"
                        style={Object.assign({width: '25%'}, inputStyle)}
                        value={stock}
                        placeholder="0"
                        onChange={handleChange}
                        required
                    />

                    <div className="Price-Label">Price<span style={dotStyle}>*</span></div>
                    <input className="Input-Price" name="price" type="number" min="0.00" step=".01"
                        style={Object.assign({width: '25%'}, inputStyle)}
                        value={price}
                        placeholder="$0.00"
                        onChange={handleChange}
                        required
                    />

                    <div className="Tag-Label">Tag<span style={dotStyle}>*</span></div>
                    <select id="Input-Tag" className="Input-Tag" required> 
                        <option value="">----Please Select a Tag For The Item-----</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Clothed">Clothed</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Furnature">Furnature</option>
                        <option value="Food">Food</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Toy">Toy</option>
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
    fontSize: '50px', 
    padding: '80px 0 40px 50px', 
    display: 'flex',
    justifyContent: 'unset',
}

const dotStyle = { fontSize: '20px',  color: 'red', }

const inputStyle = { fontSize: '20px', background: 'rgb(236,236,236)' }

