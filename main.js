const btn = document.querySelector("[data-form-btn]");

const createTask = (event) => {
    event.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const task = document.createElement("li");
    task.classList.add("card")
    console.log("crear tarea", value);
    const list = document.querySelector("[data-list]");
    input.value = "";
    //backticks para buscar 
    const content =   `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>`;
  task.innerHTML = content;

  list.appendChild(task);

}

//console.log(input);

btn.addEventListener("click", createTask);