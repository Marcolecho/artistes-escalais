import rough from "https://cdn.skypack.dev/roughjs@4.3.1";
import {vw, vh} from "./converter.js";

const manageCarroussel = () => {
    const track = document.getElementById("carouselTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;

    const updateCarousel = () => {
        const width = track.clientWidth;
        track.style.transform = `translateX(-${index * width}px)`;
    };

    nextBtn.addEventListener("click", () => {
        if (index < track.children.length - 1) index++;
        else index = 0; // loop to start
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) index--;
        else index = track.children.length - 1; // loop to end
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
}

const svg = document.getElementById('sketch');
const rc = rough.svg(svg);

const drawLeftDiv = () => {
    const node = rc.rectangle(vw(3), vh(20), vw(25), vh(75), {
        roughness: 2,
        stroke: 'gray',
        strokeWidth: 1,
        fill: '#F1F1EE',
        fillStyle: 'hachure',
        hachureGap: 1,      
        hachureAngle: 50,   
        fillWeight: 0.6,     
    });

    const textTitle = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textTitle.setAttribute("x", vw(4));
    textTitle.setAttribute("y", vh(25));
    textTitle.setAttribute("class", "text-NavSubBar2part redraw");

    const line1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    line1.setAttribute("x", vw(7.5));          
    line1.textContent = "Bienvenue sur le site de";

    const line2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    line2.setAttribute("x", vw(5));           
    line2.setAttribute("dy", vh(4));
    line2.textContent = "l'association des artistes Escalais";

    textTitle.appendChild(line1);
    textTitle.appendChild(line2);

    svg.appendChild(textTitle);
    
    node.setAttribute("class", "redraw");

    svg.appendChild(node);
    svg.appendChild(textTitle);


    const textLeftDiv = document.createElement('div');
        textLeftDiv.innerHTML = `<p> Notre association est plutôt un atelier où se rencontrent des personnes qui peignent déjà, et des personnes qui ont envie d'apprendre.
        Toutes les techniques sont représentées : aquarelle, huile, pastel, dessin.
        Nous partageons nos connaissances et nous sommes conseillés par MM.
        Luis Clémente et Maurice Lopès, tous deux artistes peintres.
        Nous disposons d'une bibliotèque de plus d'une centaine d'ouvrages de référence.
        Nous accueilons aussi les jeunes à partir de 9 ans, avec des dérogations selon leur niveau.
        </p>
        `;
    textLeftDiv.id = "textLeftDiv";
    textLeftDiv.className = "redraw";
    
    document.body.appendChild(textLeftDiv);
}

const drawRightDiv = () => {
    const node = rc.rectangle(vw(33), vh(20), vw(64), vh(75), {
        roughness: 2,
        stroke: 'gray',
        strokeWidth: 1,
        fill: '#F1F1EE',
        fillStyle: 'hachure',
        hachureGap: 1,      
        hachureAngle: 50,   
        fillWeight: 0.6,     
      });
    
    node.setAttribute("class", "redraw");

    svg.appendChild(node);
}

const drawHome = () => {
    drawLeftDiv();
    drawRightDiv();
}
export {drawHome, manageCarroussel}