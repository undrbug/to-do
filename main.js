const btn = document.querySelector("[data-form-btn]");

const createTask = (event) => {
    event.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log("crear tarea", input.value);
    input.value = "";
}

//console.log(input);

btn.addEventListener("click", createTask);