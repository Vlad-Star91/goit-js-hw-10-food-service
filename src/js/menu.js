import menuTemplate from "../templates/menu-tmp.hbs"
import menuItems from "../menu.json"

const menuMarkup = createMenuItems(menuItems);
const menuRef = document.querySelector('.js-menu');


function createMenuItems(menuItems) {
    return menuTemplate(menuItems);
    }

menuRef.insertAdjacentHTML("beforeend", menuMarkup);

