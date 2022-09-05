import React from "react";
import "./Text.css"

const Text = ({ text }) => {
    return (
        <div className="Text">
            <h1>{text}</h1>
        </div>
    )
}

export default Text;