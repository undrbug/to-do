import checkComplete from "./components/checkedComplete.js";
import deleteIcon from "./components/deleteICon.js";

(() => { //IIFE expresión de función inmediatamente invocada. También conocido cómo función autoejecutable. Oculta las variables y funciones
    const btn = document.querySelector("[data-form-btn]");

    const createTask = (event) => {
        event.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const value = input.value;
        const list = document.querySelector("[data-list]");
        const task = document.createElement("li");
        task.classList.add("card")
        input.value = "";

        const taskContent = document.createElement("div");
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerHTML = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        //taskContent.appendChild(deleteIcon());

        //backticks para buscar es como la comilla invertida

        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    }

    btn.addEventListener("click", createTask);
})()