
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
    const taskList = document.getElementById("taskList")
    taskList.innerHTML = "";

    let tasks = localStorage.getItem("tasks");
    if(!tasks) return;

    const taskArray = tasks.split(",");

    taskArray.forEach((task, index, type) => {
        const li = document.createElement("li")
        const btn = document.createElement("button")
        btn.textContent = "X";
        const checkBox = document.createElement("input");
        checkBox.type = 'checkbox';

        let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
        if (completedTasks.includes(index)) {
            checkBox.checked = true;  
            li.classList.add('completed');  
        }
        checkBox.addEventListener('change', function() {
            if (this.checked) {
                li.classList.add('completed');  
                updateCompletedTasks(index, true);  
            } else {
                li.classList.remove('completed');  
                updateCompletedTasks(index, false);  
            }
        });
        li.appendChild(checkBox);
        
    const taskText = document.createElement("span");
    taskText.textContent = task;
    li.appendChild(taskText);

    btn.onclick = function(){
        deleteTask(index);
    }

    li.appendChild(btn);
    taskList.appendChild(li);
    })
}

function addTask(){
    const input = document.getElementById("taskInput")
    const task = input.value.trim();

    if(task === ""){
        alert("Please enter a task!")
        return;
    }

    let tasks = localStorage.getItem("tasks");

    tasks = tasks ? tasks + "," + task : task;
    localStorage.setItem("tasks", tasks);
    input.value = "";

    loadTasks();
}

function updateCompletedTasks(index, isCompleted) {
    let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

    if (isCompleted) {
        // Add task index to the completedTasks array
        completedTasks.push(index);
    } else {
        // Remove task index from the completedTasks array
        completedTasks = completedTasks.filter(taskIndex => taskIndex !== index);
    }

    // Save the updated completed tasks to localStorage
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

function deleteTask(index) {
    let tasks = localStorage.getItem("tasks");
    if (!tasks) return;

    let taskArray = tasks.split(",")
    taskArray.splice(index, 1);

    localStorage.setItem("tasks", taskArray.join(","))
    loadTasks();
}