import "./App.css";
import React, { useState } from "react";
import Input from "./components/input/input";
import Navio from "./components/navio/Navio";
function App() {
  const [urls, setUrls] = useState([]);

  const setUrl = (urlInput) => {
    if (!urlInput) return;
    const urlsTemp = [...urls];
    urlsTemp.push({ id: findNextId(), url: urlInput, data: [] });
    setUrls(urlsTemp);
  };

  const findNextId = () => {
    let maxId = 0;
    urls.forEach(element => {
      if (element.id > maxId) maxId = element.id;
    });
    return maxId + 1;
  };

  const deleteNavio = (index) => {
    const urlsTemp = [...urls];
    urlsTemp.splice(index, 1);
    setUrls(urlsTemp);
  };

  const setDataView = (index, data) => {
    const urlsTemp = [...urls];
    urlsTemp[index].data = data;
    setUrls(urlsTemp);
  };

  return (
    <div className="main">
      <h1>Mostrando datos de navio</h1>
      {urls.length > 0 ? <h2>Número de navios mostrandose: {urls.length}</h2> : null}
      {
        urls.map((item, index) => {
          return <Navio url={item.url} key={item.id} delete={()=> deleteNavio(index)} setData={e => setDataView(index, e)} data={item.data}></Navio>;
        })
      }
      <Input urls={urls} setUrl={setUrl}></Input>

      <p>Créditos del spinner a https://loading.io/css/</p>
    </div>


  );
}

export default App;