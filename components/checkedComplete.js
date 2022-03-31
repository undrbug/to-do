const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", (event) => completeTask(event, id));
    return i;
}

const completeTask = (event, id) => {
    //console.log("el id es:", id);
    const element = event.target;
    element.classList.toggle("fas"); //toggle cambia la clase (CSS) si es que es diferente.
    element.classList.toggle("completeICon"); //solo puede ser una. 
    element.classList.toggle("far"); //alterna entre una clase y la otra
    const tasks = JSON.parse(localStorage.getItem("task"));
    //console.log(tasks);
    const index = tasks.findIndex( item => item.id == id);
    //console.log(index);
    tasks[index]["complete"] = !tasks[index]["complete"]; //dos formas de acceder a una posicion en un array
    localStorage.setItem("task", JSON.stringify(tasks));
};

export default checkComplete;