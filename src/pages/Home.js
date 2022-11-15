import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

export default function Home(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Successfully converted to uppercase", "success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    console.log("Clear was clicked:" + clear);
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    var newText = text.split(/[]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label"></label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: "#dee2e6",
              color: "black ",
            }}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove ExtraSpace
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpaces}>
          Remove ExtraSpace
        </button>
      </div>

      <div className="container">
        <h2>Your text summary </h2>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split("").length} Minutes read </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview it"}</p>
      </div>
    </>
  );
}

import React from "react";
import { Text, View } from "react-native";
import { Header } from "./Header";
import { heading } from "./Typography";

const WelcomeScreen = () => (
  <>
    <Header title="Welcome to React Native" />
    <Text style={heading}>Step One</Text>
    <Text>Edit App.js to change this screen and turn it into your app.</Text>
    <Text style={heading}>See Your Changes</Text>
    <Text>Press Cmd + R inside the simulator to reload your app’s code.</Text>
    <Text style={heading}>Debug</Text>
  