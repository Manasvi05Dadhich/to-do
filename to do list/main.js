const enterTask = document.getElementById('tasks');
const listTask = document.getElementById('list-tasks');
const addTask = document.getElementById('button');

addTask.addEventListener('click', function () {

  if (enterTask.value === "") {
    alert('kindly enter a task');
  } else {
    const li = document.createElement("li");
    li.textContent = enterTask.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", function () {
      li.remove();  
    });

    li.appendChild(deleteBtn);
    listTask.appendChild(li);
    enterTask.value = "";
  }
});
