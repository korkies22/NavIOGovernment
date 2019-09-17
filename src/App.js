import './App.css'
import React, { useState } from "react";
import Input from './components/input/input'
import Navio from './components/navio/Navio'

function App() {
    const [curUrl, setCurUrl] = useState('')
    return (
        <div className="main">
            {curUrl?<Navio url={curUrl} setUrl={setCurUrl}></Navio>:<Input setUrl={setCurUrl}></Input>}
        </div>

    )
}

export default App;