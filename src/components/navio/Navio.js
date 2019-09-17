import "./navio.css";
import React, { useRef, useEffect, useCallback } from "react";
import navio from "navio";
import Spinner from "../spinner/spinner";
import PropTypes from "prop-types";
function Navio(props) {
  const navioRef = useRef(null);
  const fetchData = useCallback(async () => {
    const timeoutP = async () => {
      return new Promise((resolve) => {
        setTimeout(resolve(), 100);
      });
    };
    let finish = false;
    let totalData = [];
    let curOffset = 0;
    while (!finish) {
      const data = await ((await fetch(props.url + "?$limit=100&$offset=" + curOffset)).json());
      console.log("hola", data);
      curOffset += 100;
      if (data.length === 0) finish = true;
      else {
        totalData = totalData.concat(data);
        await timeoutP();
      }
    }
    console.log("b",totalData);
    return totalData;
  }, [props.url]);

  const setData = props.setData;

  useEffect(() => {
    if (props.data.length===0) {
      fetchData().then((response) => {
        console.log("hola2");
        setData(response);
      });
    }
    else {
      console.log(props.data);
      const nv = navio(navioRef.current);
      nv.data(props.data);
      nv.addAllAttribs();
    }

  }, [props.url, setData, fetchData, props.data]);
  return props.data.length>0 ? (<div className="navio">
    <h2>Mostrando navio de: {props.url}</h2>
    <div ref={navioRef}></div>
    <div className="button__container">
      <button onClick={() => props.delete()} className="navioButton">Borrar</button>
    </div></div>)
    : <Spinner ></Spinner>;
}

Navio.propTypes = {
  setUrl: PropTypes.any,
  delete: PropTypes.any,
  url: PropTypes.any,
  setData: PropTypes.any,
  data: PropTypes.any
};
export default Navio;