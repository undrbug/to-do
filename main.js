( () => { //IIFE expresión de función inmediatamente invocada. También conocido cómo función autoejecutable. Oculta las variables y funciones
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
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task")
    titleTask.innerHTML = value;
    taskContent.appendChild(titleTask);

    //backticks para buscar es como la comilla invertida
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
}

btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click", completeTask);
    return i;
}

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas"); //toggle cambia la clase (CSS) si es que es diferente.
    element.classList.toggle("completeICon"); //solo puede ser una. 
    element.classList.toggle("far"); //alterna entre una clase y la otra
};

}) ()