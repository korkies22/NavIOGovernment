import "./input.css";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Main(props) {
  const [urlInput, setUrlInput] = useState("");

  const setUrl=()=>{
    props.setUrl(urlInput);
    setUrlInput("");
  };

  return (
    <div className="input">
      <input className="input__input" placeholder="Introduce URL" value={urlInput} onChange={e=> setUrlInput(e.target.value)}></input>
      <button className="input__button" onClick={setUrl}>Mostrar datos</button>
    </div>
  );
}

Main.propTypes = {
  urls: PropTypes.any,
  setUrl: PropTypes.any
};

export default Main;