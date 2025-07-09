import rough from "https://cdn.skypack.dev/roughjs@4.3.1";
import {vw, vh} from "./converter.js";

const svg = document.getElementById('sketch');
const rc = rough.svg(svg);

const drawContour = () => {
    const node = rc.rectangle(0, 0, vw(100), vh(100), {
        roughness: 2, 
        stroke: '#7C7C7C',
        strokeWidth: 5,
        fill: 'none',
    });
    
    node.setAttribute("id", "contour");

    svg.appendChild(node);
}

const drawNavBar = () => {
    const node = rc.rectangle(0, 0, vw(100), vh(7), {
        roughness: 1.5,
        stroke: 'gray',
        strokeWidth: 2,
        fill: '#7C7C7C',
        fillStyle: 'hachure',
        hachureGap: 0.6,      
        hachureAngle: 50,   
        fillWeight: 0.6,     
      });
    
    node.setAttribute("id", "navBar");

    svg.appendChild(node);
}

const drawSndNavBar = () => {
    const node = rc.rectangle(vw(0.1), vh(7), vw(99.7), vh(8), {
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

const cleaningBase = () => {
    document.getElementById("contour").remove();
    document.getElementById("navBar").remove();
    document.getElementById("sndnavBar").remove();
}

const drawBase = () => {
    drawContour();
    drawNavBar();
    drawSndNavBar();
}

export {cleaningBase, drawBase}