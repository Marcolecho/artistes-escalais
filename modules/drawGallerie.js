import rough from "https://cdn.skypack.dev/roughjs@4.3.1";
import {vw, vh} from "./converter.js";

const svg = document.getElementById('sketch');
const rc = rough.svg(svg);
let selectedNode = null;

const drawGallerie = () => {
    const node = rc.rectangle(vw(0), vh(13), vw(15), vh(86.7), {
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
    drawListeTypePaint();
};


const drawListeTypePaint = () => {
    const menuItems = [
        { label: "Aquarelle", x: 3.8, y: 20},
        { label: "Huile", x: 5.2, y: 28},
        { label: "Pastel", x: 5, y: 36},
        { label: "Dessin", x: 4.7, y: 44},
        { label: "Acrylique", x: 3.8, y: 52},
    ];

  menuItems.forEach(item => {
    const btnMenu = document.createElementNS("http://www.w3.org/2000/svg", "text");
    btnMenu.setAttribute("x", vw(item.x));
    btnMenu.setAttribute("y", vh(item.y));

    if (localStorage.getItem("selectedType") == item.label) {
      btnMenu.setAttribute("class", "text-NavSubBar2part redraw text-NavSubBar2partSelected");

      selectedNode = rc.ellipse(vw(item.x + (item.label.length / 2) - 0.3), vh(item.y - 1), vw(item.label.length), vh(7),
        {
          fill: "black",
          fillWeight: 4
        }
      );
      selectedNode.setAttribute("class", "redraw");
      svg.appendChild(selectedNode);
      cleanContainer();
      drawImgType();
    } else {
      btnMenu.setAttribute("class", "text-NavSubBar2part redraw");
    }

    btnMenu.textContent = item.label;
    btnMenu.style.cursor = "pointer";

    btnMenu.addEventListener("click", () => {
      localStorage.setItem("selectedType", item.label);
      if (selectedNode) selectedNode.remove();
      drawListeTypePaint();
    });

    svg.appendChild(btnMenu);
  });
};

const cleanContainer = () => {
    const elements = document.querySelectorAll('.imgGallerie');
    elements.forEach(el => el.remove());
}

const openModalDetails = (selectedType, imgPrint) => {
    const modale = document.createElement('div');
    modale.id = "modaleDetails";
    modale.innerHTML = `   
        <div id="details-container">
            <img src="${'../img/gallerie/' + selectedType +'/'+ imgPrint.label+'.jpg'}" alt="">
            <p class="details-text"> Crée par ${imgPrint.createur} </p>
        </div>`
    document.body.appendChild(modale);

    modale.addEventListener('click', () => {modale.remove()})
}

const drawImgType = () => {

    const peintureAcrylique = [
        { label: "imgAcr (1)", createur: 'test' },
        { label: "imgAcr (2)", createur: 'test' },
        { label: "imgAcr (3)", createur: 'test' },
        { label: "imgAcr (4)", createur: 'test' },
        { label: "imgAcr (5)", createur: 'test' },
        { label: "imgAcr (6)", createur: 'test' },
        { label: "imgAcr (7)", createur: 'test' },
        { label: "imgAcr (8)", createur: 'test' },
        { label: "imgAcr (9)", createur: 'test' },
        { label: "imgAcr (10)", createur: 'test' },
        { label: "imgAcr (11)", createur: 'test' },
        { label: "imgAcr (12)", createur: 'test' },
        { label: "imgAcr (13)", createur: 'test' },
        { label: "imgAcr (14)", createur: 'test' },
        { label: "imgAcr (15)", createur: 'test' },
        { label: "imgAcr (16)", createur: 'test' },
        { label: "imgAcr (17)", createur: 'test' },
        { label: "imgAcr (18)", createur: 'test' },
    ];
    const peintureHuile = [
        { label: "imgHui (1)", createur: 'test' },
        { label: "imgHui (2)", createur: 'test' },
        { label: "imgHui (3)", createur: 'test' },
        { label: "imgHui (4)", createur: 'test' },
        { label: "imgHui (5)", createur: 'test' },
        { label: "imgHui (6)", createur: 'test' },
        { label: "imgHui (7)", createur: 'test' },
        { label: "imgHui (8)", createur: 'test' },
        { label: "imgHui (9)", createur: 'test' },
        { label: "imgHui (10)", createur: 'test' },
        { label: "imgHui (11)", createur: 'test' },
        { label: "imgHui (12)", createur: 'test' },
        { label: "imgHui (13)", createur: 'test' },
        { label: "imgHui (14)", createur: 'test' },
        { label: "imgHui (15)", createur: 'test' },
        { label: "imgHui (16)", createur: 'test' },
        { label: "imgHui (17)", createur: 'test' },
        { label: "imgHui (18)", createur: 'test' },
    ];
    const peinturePastel = [
        { label: "imgPas (1)", createur: 'test' },
        { label: "imgPas (2)", createur: 'test' },
        { label: "imgPas (3)", createur: 'test' },
        { label: "imgPas (4)", createur: 'test' },
        { label: "imgPas (5)", createur: 'test' },
        { label: "imgPas (6)", createur: 'test' },
        { label: "imgPas (7)", createur: 'test' },
        { label: "imgPas (8)", createur: 'test' },
        { label: "imgPas (9)", createur: 'test' },
        { label: "imgPas (10)", createur: 'test' },
        { label: "imgPas (11)", createur: 'test' },
        { label: "imgPas (12)", createur: 'test' },
        { label: "imgPas (13)", createur: 'test' },
        { label: "imgPas (14)", createur: 'test' },
        { label: "imgPas (15)", createur: 'test' },
        { label: "imgPas (16)", createur: 'test' },
        { label: "imgPas (17)", createur: 'test' },
        { label: "imgPas (18)", createur: 'test' },
    ];
    const peintureAquarelle = [
        { label: "imgAqu (1)", createur: 'test' },
        { label: "imgAqu (2)", createur: 'test' },
        { label: "imgAqu (3)", createur: 'test' },
        { label: "imgAqu (4)", createur: 'test' },
        { label: "imgAqu (5)", createur: 'test' },
        { label: "imgAqu (6)", createur: 'test' },
        { label: "imgAqu (7)", createur: 'test' },
        { label: "imgAqu (8)", createur: 'test' },
        { label: "imgAqu (9)", createur: 'test' },
        { label: "imgAqu (10)", createur: 'test' },
        { label: "imgAqu (11)", createur: 'test' },
        { label: "imgAqu (12)", createur: 'test' },
        { label: "imgAqu (13)", createur: 'test' },
        { label: "imgAqu (14)", createur: 'test' },
        { label: "imgAqu (15)", createur: 'test' },
        { label: "imgAqu (16)", createur: 'test' },
        { label: "imgAqu (17)", createur: 'test' },
        { label: "imgAqu (18)", createur: 'test' },
        { label: "imgAqu (19)", createur: 'test' },
        { label: "imgAqu (20)", createur: 'test' },
        { label: "imgAqu (21)", createur: 'test' },
        { label: "imgAqu (22)", createur: 'test' },
        { label: "imgAqu (23)", createur: 'test' },
        { label: "imgAqu (24)", createur: 'test' },
        { label: "imgAqu (25)", createur: 'test' },
        { label: "imgAqu (26)", createur: 'test' },
        { label: "imgAqu (27)", createur: 'test' },
        { label: "imgAqu (28)", createur: 'test' },
        { label: "imgAqu (29)", createur: 'test' },
        { label: "imgAqu (30)", createur: 'test' },
        { label: "imgAqu (31)", createur: 'test' },
        { label: "imgAqu (32)", createur: 'test' },
        { label: "imgAqu (33)", createur: 'test' },
        { label: "imgAqu (34)", createur: 'test' },
        { label: "imgAqu (35)", createur: 'test' },
        { label: "imgAqu (36)", createur: 'test' },
        { label: "imgAqu (37)", createur: 'test' },
        { label: "imgAqu (38)", createur: 'test' },
        { label: "imgAqu (39)", createur: 'test' },
        { label: "imgAqu (40)", createur: 'test' },
        { label: "imgAqu (41)", createur: 'test' },
        { label: "imgAqu (42)", createur: 'test' },
        { label: "imgAqu (43)", createur: 'test' },
        { label: "imgAqu (44)", createur: 'test' },
        { label: "imgAqu (45)", createur: 'test' },
        { label: "imgAqu (46)", createur: 'test' },
        { label: "imgAqu (47)", createur: 'test' },
        { label: "imgAqu (48)", createur: 'test' },
        { label: "imgAqu (49)", createur: 'test' },
        { label: "imgAqu (50)", createur: 'test' }
    ];

    const peintureDessin = [
        { label: "imgDes (1)", createur: 'test' },
        { label: "imgDes (2)", createur: 'test' },
        { label: "imgDes (3)", createur: 'test' },
        { label: "imgDes (4)", createur: 'test' },
    ];

    const selectedType = localStorage.getItem("selectedType");
    let tabToForeach;
    switch(selectedType){
        case "Aquarelle":
            tabToForeach = peintureAquarelle;
            break;
        case "Huile":
            tabToForeach = peintureHuile
            break;
        case "Pastel":
            tabToForeach = peinturePastel
            break;
        case "Dessin":
            tabToForeach = peintureDessin;
            break;
        case "Acrylique":
            tabToForeach = peintureAcrylique
            break;
    }

    const container = document.getElementById('container-img');

    tabToForeach.forEach(img => {
        const imgPrint = document.createElement('img');
        imgPrint.src = '../img/gallerie/' + selectedType +'/'+img.label+'.jpg';
        imgPrint.className = "imgGallerie";
        container.appendChild(imgPrint);

        imgPrint.addEventListener('click', () => openModalDetails(selectedType, img));
    });
}


export {drawGallerie}