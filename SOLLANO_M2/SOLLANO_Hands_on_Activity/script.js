document.addEventListener("DOMContentLoaded", loadTasks);

        function addTask() {
            let input = document.getElementById("taskInput");
            let taskText = input.value.trim();
            if (taskText === "") return;

            let taskList = document.getElementById("taskList");
            let li = document.createElement("li");
            li.innerHTML = `<span onclick="toggleComplete(this)">${taskText}</span>
                            <button onclick="removeTask(this)">❌</button>`;
            taskList.appendChild(li);
            input.value = "";
            saveTasks();
        }

        function toggleComplete(task) {
            task.classList.toggle("completed");
            saveTasks();
        }

        function removeTask(button) {
            button.parentElement.remove();
            saveTasks();
        }

        function saveTasks() {
            let tasks = [];
            document.querySelectorAll("#taskList li").forEach(li => {
                tasks.push({ text: li.textContent.replace("❌", "").trim(), completed: li.querySelector("span").classList.contains("completed") });
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        function loadTasks() {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            let taskList = document.getElementById("taskList");
            tasks.forEach(task => {
                let li = document.createElement("li");
                li.innerHTML = `<span onclick="toggleComplete(this)" class="${task.completed ? 'completed' : ''}">${task.text}</span>
                                <button onclick="removeTask(this)">❌</button>`;
                taskList.appendChild(li);
            });
        }