import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

ColorBox.propTypes = {};

function ColorBox() {
    const [color, setColor] = useState("red");
    return (
        <div className="color-box" style={{ backgroundColor: color }}>
            COLOR BOX
        </div>
    );
}

export default ColorBox;
