import { cleaningBase, drawBase } from "./modules/drawBase.js";
import { drawHome } from "./modules/drawHome.js";

const main = () => {
    drawBase();
    window.addEventListener('resize', () => {cleaningBase(); drawBase();});

    const pathName = window.location.pathname;

    switch(pathName){
        case "/":
            drawHome();
            break;
        default:
            break;
    }
}

main();