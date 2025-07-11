import {drawBase} from "./modules/drawBase.js";
import {drawHome, manageCarroussel} from "./modules/drawHome.js";
import {drawNews} from "./modules/drawNews.js";

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
        default:
            break;
    }
};
  

main();