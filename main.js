import { addTask } from "./components/addTasks.js";
import { displayTasks } from "./components/readTask.js";

//(() => { //IIFE expresión de función inmediatamente invocada. También conocido cómo función autoejecutable. Oculta las variables y funciones


const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", addTask);
displayTasks();
//})()
