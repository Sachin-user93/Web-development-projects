// script.js

document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("showTasksBtn").addEventListener("click", showTasks);

function addTask() {
    const task = document.getElementById("task").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;

    if (task === "" || day === "" || time === "") {
        alert("Please fill in all fields.");
        return;
    }

    const taskObj = {
        task,
        day,
        time,
    };

    let tasks = localStorage.getItem("tasks");
    if (tasks === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(tasks);
    }

    tasks.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("task").value = "";
    document.getElementById("day").value = "";
    document.getElementById("time").value = "";

    alert("Task added successfully!");
}

function showTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let tasks = localStorage.getItem("tasks");
    if (tasks === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(tasks);
    }

    tasks.forEach((taskObj, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task");

        const taskContent = document.createElement("div");
        taskContent.classList.add("task-content");
        taskContent.innerText = `${taskObj.task} - ${taskObj.day} - ${taskObj.time}`;
        taskItem.appendChild(taskContent);

        const taskActions = document.createElement("div");
        taskActions.classList.add("task-actions");

        const changeBtn = document.createElement("button");
        changeBtn.classList.add("change-btn");
        changeBtn.innerText = "Change";
        changeBtn.addEventListener("click", () => changeTask(index));
        taskActions.appendChild(changeBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => deleteTask(index));
        taskActions.appendChild(deleteBtn);

        taskItem.appendChild(taskActions);
        taskList.appendChild(taskItem);
    });
}

function changeTask(index) {
    let tasks = localStorage.getItem("tasks");
    tasks = JSON.parse(tasks);

    const taskObj = tasks[index];

    document.getElementById("task").value = taskObj.task;
    document.getElementById("day").value = taskObj.day;
    document.getElementById("time").value = taskObj.time;

    deleteTask(index);
}

function deleteTask(index) {
    let tasks = localStorage.getItem("tasks");
    tasks = JSON.parse(tasks);

    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();
}
