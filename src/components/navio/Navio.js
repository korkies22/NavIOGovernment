import './navio.css'
import React, { useRef, useEffect } from "react";
import navio from 'navio'
function Navio(props) {
    const navioRef = useRef(null)
    useEffect(() => {
        console.log(navioRef)
        const nv = navio(navioRef.current);
        console.log(props.url)
        fetch(props.url)
            .then(function (response) {
                return response.json()
            })
            .then(function (response) {
                console.log(response)
                nv.data(response);
                nv.addAllAttribs();
            })

    }, [props.url]);
    return (
        <div className="navio">
            <div ref={navioRef}></div>
            <button onClick={() => props.setUrl('')}>Volver</button>
        </div>

    )
}

export default Navio;