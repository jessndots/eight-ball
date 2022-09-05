import React, { useState } from "react";
import Text from "./Text"
import msgArray from "./msgArray";
import "./Ball.css";

const Ball = ()=> {
    const randIndex = (length) => {
        return Math.floor((Math.random() * length))
    }

    const [color, setColor] = useState("black");
    const [txt, setTxt] = useState("Ask me a question");

    const handleClick = () => {
        const msg = msgArray[randIndex(msgArray.length)];
        setColor(msg.color);
        setTxt(msg.txt)
    }
    return (
        <button className="Ball" onClick={handleClick} style={{ backgroundColor: color }}>
            <Text  text={txt}></Text>
        </button>
    )
}

export default Ball;