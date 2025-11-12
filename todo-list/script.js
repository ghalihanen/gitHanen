const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const btn = document.querySelector(".btn");

function addTask() {
  let taskValue = inputTask.value;
  if (!taskValue) {
    alert("il faut entrer une tache");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.innerHTML = taskValue;
    taskList.appendChild(li);
    span.innerHTML = "&times;";
    li.appendChild(span);
  }
  inputTask.value = "";
  setTask();
}

btn.addEventListener("click", addTask);
taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    setTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    setTask();
  }
});
inputTask.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
function setTask() {
  localStorage.setItem("lists", taskList.innerHTML);
}
function loadTask() {
  taskList.innerHTML = localStorage.getItem("lists");
}
loadTask();

/*
const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const btn = document.querySelector(".btn");

// Charger les tâches au démarrage
window.addEventListener("load", () => {
  const data = localStorage.getItem("tasks");
  if (!data) return;
  data.split("|").forEach((t) => {
    if (t) {
      const li = document.createElement("li");
      if (t.startsWith("✔")) {
        li.classList.add("checked");
        t = t.slice(1);
      }
      li.textContent = t;
      const span = document.createElement("span");
      span.innerHTML = "&times;";
      li.appendChild(span);
      taskList.appendChild(li);
    }
  });
});

// Ajouter une tâche
function addTask() {
  const taskValue = inputTask.value.trim();
  if (!taskValue) {
    alert("⚠️ Il faut entrer une tâche !");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskValue;

  const span = document.createElement("span");
  span.innerHTML = "&times;";
  li.appendChild(span);

  taskList.appendChild(li);
  inputTask.value = "";

  saveTasks();
}

// Cocher/décocher ou supprimer
taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTasks();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTasks();
  }
});

// Ajouter tâche avec bouton
btn.addEventListener("click", addTask);

// Ajouter tâche avec touche Entrée
inputTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

// Sauvegarder les tâches dans localStorage
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach((li) => {
    let t = li.firstChild.textContent;
    if (li.classList.contains("checked")) t = "✔" + t;
    tasks.push(t);
  });
  localStorage.setItem("tasks", tasks.join("|"));
}  */
