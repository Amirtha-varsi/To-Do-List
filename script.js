// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Task cannot be empty!");
        return;
    }

    // Create task element
    const li = document.createElement("li");

    // Add input to edit the task
    const input = document.createElement("input");
    input.type = "text";
    input.value = taskValue;
    input.readOnly = true;

    // Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
        if (input.readOnly) {
            input.readOnly = false;
            editButton.textContent = "Save";
        } else {
            input.readOnly = true;
            editButton.textContent = "Edit";
        }
    };

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        li.remove();
    };

    // Add input and buttons to the task
    li.appendChild(input);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Append the new task to the list
    document.getElementById("task-list").appendChild(li);

    // Clear the input
    taskInput.value = "";
}
