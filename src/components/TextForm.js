import React, { useState } from "react";

export default function TextForm(props) {
  let commonStyle = { color: props.mode === "dark" ? "white" : "black" };

  const [text, setText] = useState(" ");

  const handleUpClick = () => {
    // setText("handle up click was pressed");
    let Uppertext = text.toUpperCase();
    setText(Uppertext);
    props.showAlert("Converted to uppercase","Success")
};
const handleLoClick = () => {
    let Lowertext = text.toLowerCase();
    setText(Lowertext);
    props.showAlert("Converted to lowercase","Success")
};
const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
};
const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard","Success")
};
const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    newText = newText.join(" ");
    setText(newText);
    props.showAlert("Extra space removed","Success")
  };

  return (
    <>
      <h1 style={commonStyle}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <button className="btn btn-info" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-info mx-3" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-info " onClick={handleCopy}>
        Copy text
      </button>
      <button className="btn btn-info mx-3 " onClick={handleExtraspaces}>
        Remove extra spaces
      </button>

      <h2 style={commonStyle}>Your text summary</h2>
      <p style={commonStyle}>
        {text.split(" ").length} Words and {text.length} Characters{" "}
      </p>
      <h2 style={commonStyle}>Preview</h2>
      <p style={commonStyle}>
        {text.length > 2 ? text : "Enter something in above text box"}
      </p>
    </>
  );
}
