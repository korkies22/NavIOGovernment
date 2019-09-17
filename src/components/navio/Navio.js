import "./navio.css";
import React, { useRef, useEffect } from "react";
import navio from "navio";
import PropTypes from "prop-types";
function Navio(props) {
  const navioRef = useRef(null);
  useEffect(() => {
    const nv = navio(navioRef.current);
    fetch(props.url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        nv.data(response);
        nv.addAllAttribs();
      });

  }, [props.url]);
  return (
    <div className="navio">
      <h2>Mostrando navio de: {props.url}</h2>
      <div ref={navioRef}></div>
      <div className="button__container">
        <button onClick={() => props.delete(props.index)} className="navioButton">Borrar</button>
      </div>
    </div>

  );
}

Navio.propTypes = {
  setUrl: PropTypes.any,
  delete: PropTypes.any,
  index: PropTypes.any,
  url: PropTypes.any
};
export default Navio;