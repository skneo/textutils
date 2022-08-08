import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Changed to uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text Changed to lowercase", "success");

    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared", "success");

    }

    const handleCopy = () => {
        // let elem = document.getElementById('myBox');
        // elem.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clip", "success");

    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    const countWords = (text) => {
        let wordLength = text.trim().split(/\s+/).length;
        if (text.trim().split(" ")[0] === "")
            wordLength = wordLength - 1;
        return wordLength;
    }

    const removeExreaSpace = () => {
        setText(text.replace(/\s+/g, ' ').trim());
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3" >
                    <textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : '#403939', color: props.mode === 'light' ? 'black' : 'white' }} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeExreaSpace}>Remove Extra Space</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{countWords(text)} words and {text.trim().length} characters</p>
                <p>{0.008 * countWords(text)} Minutes read</p>
                <h2>Preview</h2>
                <p style={{ whiteSpace: "pre" }}>{text.length > 0 ? text : "enter something in textbox to preview"}</p>
            </div>
        </>
    )
}
