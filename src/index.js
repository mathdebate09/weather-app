import "./styles/main.css";
import "./modules/icon.js";
import "./modules/skeleton.js";
import displayController from "./modules/domValues.js";

displayController.submitListner();

import getData from "./modules/apiLogic.js";
getData("mumbai");
