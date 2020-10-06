import React from "react";
import { useState } from "react";
import './ColorBox.scss';

function getRandomColor() {
    const Color_list = ['pink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random()  * 5); // lay so nguyen trong cac so random tu 0-5 tru 5
    return Color_list[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState (() =>{
        const initColor = localStorage.getItem('box_color') || 'pink'; // neu ve trai co gia tri tra ve thi lay gia tri cua ve trai nguoc lai de mac dinh 'pink'
        return initColor;
    });
    function handleBoxClick() {
        // get random color -> set color 
        const newColor = getRandomColor();
        setColor (newColor);
         // lay du lieu tu client bang key va
        localStorage.setItem('box_color',newColor); // cap nhat lai sau khi load lai trang giu trang thai moi 
    }          
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;
