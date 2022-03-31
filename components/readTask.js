
import { createTask } from "./addTasks.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const displayTasks = () => {
    //console.log(uuid.v4()) libreir que genera id aleatorio
    const list = document.querySelector("[data-list]");
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    const dates = uniqueDates(taskList);
    orderDates(dates);
    dates.forEach((date) => {
        const dateMoment = moment(date, "DD/MM/YYYY"); //hacemos uso de la libreria moment
        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            if (diff == 0) {
                list.appendChild(createTask(task));                
            };
        });
    });


};