import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Text is converted to UpperCase", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Text is converted to LowerCase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  };

  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleClear = (event) => {
    setText("");
    props.showAlert("Text is cleared", "success");
  };

  const [text, setText] = useState("");

  return (
    <div
      className={`container bg-${props.cls} py-3`}
      style={{
        color: props.mode === "light" ? "#3A3B3C" : "white",
        backgroundColor: props.mode === "light" ? "white" : "#3A3B3C"
      }}
    >
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="6"
            value={text}
            onChange={handleOnChange}
            style={{
              color: props.mode === "light" ? "#3A3B3C" : "white",
              backgroundColor: props.mode === "light" ? "white" : "#3A3B3C"
            }}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
          Conver to UPPERCASE
        </button>
        <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>
          Conver to lowecase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleCopyText}>
          Copy text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleSpace}>
          Remove extra space
        </button>
        <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleClear}>
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((word) => word !== "").length} words and {text.length} chrachters
        </p>
        <p>{text.split(" ").filter((word) => word !== "").length * 0.008} minutes read</p>
        <h2>Preview</h2>
        <p>{text.split(" ").filter((word) => word !== "").length > 0 ? text : "Enter something to in the text-box to preview it here."}</p>
      </div>
    </div>
  );
}
