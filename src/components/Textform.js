import React ,{useState} from 'react'
import {Typography, AppBar,Button,Switch,FormControlLabel } from '@material-ui/core';


// import { Configuration, OpenAIApi } from "openai";
export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" );
        let newText = text.toUpperCase();
        setText(newText);
    }  
    const handleDownClick = () => {
        console.log("lowercase was clicked" );
        let newText = text.toLowerCase();
        setText(newText);
    }   
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const Clearit = () => {
        setText("");
    }
    
    const DarkMode = () => {
        if(mode === "light"){
            setMode("dark");
            document.body.style.backgroundColor = "#042743";
            document.body.style.color = "white";
            setBtnText("Dark");
        }
        else{
            setMode("light");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "#042743";
            setBtnText("Light");
            
        }
    }
    const [text, setText] = useState("");
    const[mode, setMode] = useState("light");
    const[btnText, setBtnText] = useState("Light");
    
  return (
    <>
    <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="20"></textarea>
</div>
<Button size="medium" variant="contained" color="primary" style={{ margin: '5px' }} onClick={handleUpClick}>Convert to Uppercase</Button>
<Button size="medium" variant="contained" color="primary" style={{ margin: '05px' }}onClick={handleDownClick}>Convert to lowercase</Button>

<Button size="medium" variant="contained" color="primary" style={{ margin: '5px' }} onClick={Clearit}>Clear</Button>
<Button size="medium" variant="contained" color="primary" style={{ margin: '5px' }}>Learn More</Button>
<div className="container">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
</div>
<div>
    <FormControlLabel control={<Switch defaultunChecked onChange={DarkMode} color="default"/>} label={btnText} />
</div>
</>
  )
}
