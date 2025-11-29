document.querySelectorAll(".editBtn").forEach((btn) => {
    btn.onclick = function () {
        const li = this.parentElement;
        const span = li.querySelector("span");
        const newText = prompt("O'zgartirish:", span.innerText);
        if (newText && newText.trim() !== "") {
            span.innerText = newText;
        }
    };
});

document.querySelectorAll(".deleteBtn").forEach((btn) => {
    btn.onclick = function () {
        this.parentElement.remove();
    };
});

// Yangi task qo'shish
function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return alert("Iltimos task yozing!");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = text;

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "editBtn";
    editBtn.onclick = function () {
        const newText = prompt("O'zgartirish:", span.innerText);
        if (newText && newText.trim() !== "") {
            span.innerText = newText;
        }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}