let editingTask = null;

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    let taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    let checkmark = document.createElement("span");
    checkmark.innerHTML = "✔";
    checkmark.classList.add("checkmark");

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("task-buttons");

    let doneButton = document.createElement("button");
    doneButton.textContent = "Selesai";
    doneButton.classList.add("btn-done");
    doneButton.onclick = function () {
        taskTextElement.classList.toggle("completed");
        let isCompleted = taskTextElement.classList.contains("completed");
        checkmark.style.display = isCompleted ? "inline" : "none";
        doneButton.classList.toggle("completed-btn", isCompleted);
    };

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn-edit");
    editButton.onclick = function () {
        document.getElementById("popupEdit").style.display = "block";
        document.getElementById("editTaskInput").value = taskTextElement.textContent;
        editingTask = taskTextElement; // Simpan referensi elemen yang sedang diedit
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.classList.add("btn-delete");
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
    };

    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    taskItem.appendChild(checkmark);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(buttonContainer);
    taskList.appendChild(taskItem);

    taskInput.value = "";
}

// **Fungsi untuk menyimpan hasil edit**
function saveEdit() {
    if (editingTask) {
        let newText = document.getElementById("editTaskInput").value.trim();
        if (newText !== "") {
            editingTask.textContent = newText; // Perbarui teks tugas yang sedang diedit
        }
        closePopup();
    }
}

// **Fungsi untuk menutup popup edit**
function closePopup() {
    document.getElementById("popupEdit").style.display = "none";
    editingTask = null;
}
