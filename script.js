function addTask() {
    let task = document.getElementById("task").value;

    if (task != "") {
        let li = document.createElement("li");

        li.innerHTML = task +
        " <button onclick='this.parentElement.remove()'>Delete</button>";

        li.onclick = function() {
            li.style.textDecoration = "line-through";
        };

        document.getElementById("list").appendChild(li);
        document.getElementById("task").value = "";
    }
}