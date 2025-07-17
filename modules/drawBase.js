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
    node.setAttribute("class", "redraw");
    svg.appendChild(node);
}

const drawNavBar = () => {
    const node = rc.rectangle(0, 0, vw(100), vh(5), {
        roughness: 1.5,
        stroke: '',
        strokeWidth: 2,
        fill: 'black',
        fillStyle: 'hachure',
        hachureGap: 0.4,      
        hachureAngle: 50,   
        fillWeight: 0.6,     
      });
    
    node.setAttribute("id", "navBar");
    node.setAttribute("class", "redraw");
    svg.appendChild(node);
}

const drawSndNavBar = () => {
    const node = rc.rectangle(vw(0.1), vh(5), vw(99.7), vh(8), {
        roughness: 1,
        stroke: 'gray',
        strokeWidth: 1,
        fill: '#F1F1EE',
        fillStyle: 'hachure',
        hachureGap: 1,      
        hachureAngle: 50,   
        fillWeight: 0.6,     
      });
    
    node.setAttribute("id", "sndnavBar");
    node.setAttribute("class", "redraw");
    svg.appendChild(node);
}


const drawTextNavBar = () => {
    const textEmplacement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textEmplacement.setAttribute("id", "textEmplacement");
    textEmplacement.setAttribute("x", vw(10));
    textEmplacement.setAttribute("y", vh(3));
    textEmplacement.setAttribute("class", "text-NavBar redraw");
    textEmplacement.textContent = "Chapelle des Cléments, Place des Cléments";
    
    const imgEmplacement = document.createElementNS("http://www.w3.org/2000/svg", "image");
    imgEmplacement.setAttribute("id", "imgEmplacement");
    imgEmplacement.setAttributeNS(null, "href", "https://marcolecho.github.io/artistes-escalais/img/emplacement.png"); 
    imgEmplacement.setAttribute("x", vw(8));
    imgEmplacement.setAttribute("y", vh(1));
    imgEmplacement.setAttribute("width", vw(2));
    imgEmplacement.setAttribute("height", vh(3));
    imgEmplacement.setAttribute("class", "redraw");

    const textMail = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textMail.setAttribute("id", "textMail");
    textMail.setAttribute("x", vw(35.5));
    textMail.setAttribute("y", vh(3));
    textMail.setAttribute("class", "text-NavBar redraw");
    textMail.textContent = "maurice.lopes230@orange.fr";
    
    const imgMail = document.createElementNS("http://www.w3.org/2000/svg", "image");
    imgMail.setAttribute("id", "imgMail");
    imgMail.setAttributeNS(null, "href", "../img/mail.png"); 
    imgMail.setAttribute("x", vw(33));
    imgMail.setAttribute("y", vh(1));
    imgMail.setAttribute("width", vw(2));
    imgMail.setAttribute("height", vh(3));
    imgMail.setAttribute("class", "redraw");

    const imgReseaux = document.createElementNS("http://www.w3.org/2000/svg", "image");
    imgReseaux.setAttribute("id", "imgReseaux");
    imgReseaux.setAttributeNS(null, "href", "../img/reseaux.png"); 
    imgReseaux.setAttribute("x", vw(93));
    imgReseaux.setAttribute("y", vh(1));
    imgReseaux.setAttribute("width", vw(6));
    imgReseaux.setAttribute("height", vh(3));
    imgReseaux.setAttribute("class", "redraw");

    svg.appendChild(imgReseaux);
    svg.appendChild(textMail);
    svg.appendChild(imgMail);
    svg.appendChild(textEmplacement);
    svg.appendChild(imgEmplacement);
}

const drawTextSubNavBar = () => {
    const textAsso1part = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textAsso1part.setAttribute("id", "textAsso1part");
    textAsso1part.setAttribute("x", vw(10));
    textAsso1part.setAttribute("y", vh(8));
    textAsso1part.setAttribute("class", "text-NavSubBar1part redraw");
    textAsso1part.textContent = "Association des";

    const textAsso2part = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textAsso2part.setAttribute("id", "textAsso2part");
    textAsso2part.setAttribute("x", vw(10));
    textAsso2part.setAttribute("y", vh(11));
    textAsso2part.setAttribute("class", "text-NavSubBar2part redraw");
    textAsso2part.textContent = "Artistes Escalais";

    const imgLogo = document.createElementNS("http://www.w3.org/2000/svg", "image");
    imgLogo.setAttribute("id", "imgLogo");
    imgLogo.setAttributeNS(null, "href", "../img/logo.png"); 
    imgLogo.setAttribute("x", vw(2.5));
    imgLogo.setAttribute("y", vh(5.5));
    imgLogo.setAttribute("width", vw(10));
    imgLogo.setAttribute("height", vh(7));
    imgLogo.setAttribute("class", "redraw");
    
    svg.appendChild(imgLogo);
    svg.appendChild(textAsso1part);
    svg.appendChild(textAsso2part);
}

const drawNavBarMenu = () => {
    const menuItems = [
        { id: "textAccueil", label: "Accueil", x: 50, href: "/" },
        { id: "textNews", label: "News", x: 57, href: "/pages/news.html" },
        { id: "textGallerie", label: "Gallerie", x: 62.5, href: "/pages/gallerie.html" },
        { id: "textCours", label: "Cours", x: 69.5, href: "/pages/cours.html" },
        { id: "textContact", label: "Contact", x: 76, href: "/pages/contact.html" }
    ];

    menuItems.forEach(item => {
        const btnMenu = document.createElementNS("http://www.w3.org/2000/svg", "text");
        btnMenu.setAttribute("id", item.id);
        btnMenu.setAttribute("x", vw(item.x));
        btnMenu.setAttribute("y", vh(10));
        if(localStorage.getItem("selectedPage") == item.label) {
            btnMenu.setAttribute("class", "text-NavSubBar2part redraw text-NavSubBar2partSelected");

            const node = rc.ellipse(vw(item.x + ((item.label).length/2) - 0.3), vh(9), vw((item.label).length), vh(7), {
                fill: "black",
                fillWeight: 4
            });
            
            node.setAttribute("class", "redraw");
            svg.appendChild(node);
        } 
        else btnMenu.setAttribute("class", "text-NavSubBar2part redraw")
        btnMenu.textContent = item.label;

        btnMenu.style.cursor = "pointer";
        btnMenu.addEventListener("click", () => {
            localStorage.setItem("selectedPage", item.label)
            window.location.href = item.href;
        });

        svg.appendChild(btnMenu);
    });
};


const drawBase = () => {
    drawContour();
    drawNavBar();
    drawSndNavBar();
    drawTextNavBar();
    drawTextSubNavBar();
    drawNavBarMenu();
}

export {drawBase}