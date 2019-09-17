import './App.css'
import React, { useState } from "react";
import Input from './components/input/input'
import Navio from './components/navio/Navio'

function App() {
  const [urls, setUrls] = useState([])

  const eliminarNavio=(index)=>{
    const urls=[...urls]
    urls.splice(index,1)
    setUrls(urls)
  }
  
  return (
    <div className="main">
      <h1>Mostrando datos de navio</h1>
      {
        urls.map((url,index) => {
          return <Navio url={url} setUrl={setUrls} key={index} delete={eliminarNavio}></Navio>
        })
      }
      <Input urls={urls} setUrl={setUrls}></Input>
    </div>

  )
}

export default App;