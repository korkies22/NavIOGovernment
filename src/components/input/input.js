import './input.css'
import React, { useState } from "react";

function Main(props) {
    const [urlInput, setUrlInput] = useState('')
    const setUrl = () => {
        props.setUrl(urlInput)
    }
    return (
        <div className="input">
            <input className="input__input" placeholder="Introduce URL" value={urlInput.value} onChange={e=> setUrlInput(e.target.value)}></input>
            <button className="input__button" onClick={setUrl}>Mostrar datos</button>
        </div>
    )
}

export default Main;