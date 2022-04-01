import deleteIcon from "./deleteICon.js"
import checkComplete from "./checkedComplete.js"
import {displayTasks} from "./readTask.js"
import { uniqueDates } from "../services/date.js";

export const addTask = (event) => {
    event.preventDefault();
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    const value = input.value;

    if (value == "" || date == ""){
        //alertar que faltan ingresar datos
        return
    }

    input.value = "";
    calendar.value = "";

    const complete = false;

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    };
    list.innerHTML = "";
    const taskList = JSON.parse(localStorage.getItem("task")) || []; 
    taskList.push(taskObj);
    localStorage.setItem("task", JSON.stringify(taskList));

    displayTasks()
};

export const createTask = ({value, dateFormat, complete, id}) => {
    const task = document.createElement("li");
    task.classList.add("card");

    const check = checkComplete(id)

if (complete){
    check.classList.toggle("fas"); //toggle cambia la clase (CSS) si es que es diferente.
    check.classList.toggle("completeICon"); //solo puede ser una. 
    check.classList.toggle("far"); //alterna entre una clase y la otra
}
    const taskContent = document.createElement("div"); 

    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerHTML = value;
    
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);
    
    //taskContent.appendChild(deleteIcon());
    
    /* const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat; */ //date element es que pone la fehca al lado de cada tarea

    //backticks para buscar es como la comilla invertida

    task.appendChild(taskContent);
    //task.appendChild(dateElement);
    task.appendChild(deleteIcon(id));
    return task;
};
