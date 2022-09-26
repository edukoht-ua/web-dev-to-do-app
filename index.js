const input = document.getElementById("input");
const add_button = document.getElementById("addToDoButton");
const to_dos = document.getElementById("toDos");
const clear_all_button = document.getElementById("clear");

const delete_button_text = "Delete";


add_button.addEventListener("click", () => {
    createToDO(input.value);
    input.value = "";
});

clear_all_button.addEventListener("click", () => {
    for (let to_do of to_dos.children) {
        deleteToDo(to_do);
    }
});

function createToDO(inputValue) {
    const new_to_do = document.createElement("div");
    const new_to_do_text = document.createElement("div");
    const new_to_do_delete_button = document.createElement("button");

    new_to_do.classList.add("to-do");
    new_to_do_text.classList.add("to-do-text");
    new_to_do_delete_button.classList.add("delete-button");
    new_to_do_delete_button.classList.add("button");


    new_to_do_text.innerHTML = inputValue;
    new_to_do_delete_button.innerHTML = delete_button_text;

    new_to_do_delete_button.addEventListener("click", () => {
        deleteToDo(new_to_do);
    });

    new_to_do.appendChild(new_to_do_text);
    new_to_do.appendChild(new_to_do_delete_button);
    to_dos.appendChild(new_to_do);

    new_to_do.addEventListener("click", () => {
        if (!new_to_do.classList.contains("to-do-checked")) {
            checkToDo(new_to_do, new_to_do_text);
        } else {
            unCheckToDo(new_to_do, new_to_do_text);
        }
    });
}


function checkToDo(todoToCheck, to_do_text) {
    todoToCheck.classList.add("to-do-checked");
    to_do_text.classList.add("to-do-text-checked");
}

function unCheckToDo(todoToUnCheck, to_do_text) {
    todoToUnCheck.classList.remove("to-do-checked");
    to_do_text.classList.remove("to-do-text-checked");
}

function deleteToDo(todoToDelete) {
    to_dos.removeChild(todoToDelete);
}
