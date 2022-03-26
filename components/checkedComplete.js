const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
}

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas"); //toggle cambia la clase (CSS) si es que es diferente.
    element.classList.toggle("completeICon"); //solo puede ser una. 
    element.classList.toggle("far"); //alterna entre una clase y la otra
};

export default checkComplete;