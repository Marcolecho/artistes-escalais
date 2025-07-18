import {drawBase} from "./modules/drawBase.js";
import {drawHome, manageCarroussel} from "./modules/drawHome.js";
import {drawNews} from "./modules/drawNews.js";
import {drawGallerie} from "./modules/drawGallerie.js";
import {drawContact} from "./modules/drawContact.js"


const main = () => {
    drawBase();
    window.addEventListener('resize', () => clean());
    const pathName = window.location.pathname;
    switch(pathName){
        case "/":
            drawHome();
            manageCarroussel();
            break;
        case "/pages/news.html":
            drawNews();
            break;
        case "/pages/gallerie.html":
            drawGallerie();
            break;
        case "/pages/contact.html":
            drawContact();
            break;
        default:
            break;
    }
}

const clean = () => {
    const elements = document.querySelectorAll('.redraw');
    elements.forEach(el => el.remove());
  
    drawBase();
    const pathName = window.location.pathname;

    switch(pathName){
        case "/":
            drawHome();
            manageCarroussel();
            break;
        case "/pages/news.html":
            drawNews();
            break;
        case "/pages/gallerie.html":
            drawGallerie();
            break;
        default:
            break;
    }
};
  

main();