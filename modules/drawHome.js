import rough from "https://cdn.skypack.dev/roughjs@4.3.1";
import {vw, vh} from "./converter.js";

const svg = document.getElementById('sketch');
const rc = rough.svg(svg);

const drawLeftDiv = () => {
    const node = rc.rectangle(vw(3), vh(20), vw(30), vh(75), {
        roughness: 1,
        stroke: 'gray',
        strokeWidth: 2,
        fill: '#F1F1EE',
        fillStyle: 'hachure',
        hachureGap: 1,      
        hachureAngle: 50,   
        fillWeight: 0.6,     
      });
    
    node.setAttribute("id", "sndnavBar");

    svg.appendChild(node);
}

const drawRightDiv = () => {
    const node = rc.rectangle(vw(40), vh(20), vw(57), vh(75), {
        roughness: 1,
        stroke: 'gray',
        strokeWidth: 2,
        fill: '#F1F1EE',
        fillStyle: 'hachure',
        hachureGap: 1,      
        hachureAngle: 50,   
        fillWeight: 0.6,     
      });
    
    node.setAttribute("id", "sndnavBar");

    svg.appendChild(node);
}

const drawHome = () => {
    drawLeftDiv();
    drawRightDiv();
}

export {drawHome}