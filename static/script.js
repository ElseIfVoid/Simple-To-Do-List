function add(){
    const input = document.getElementById("inputtask");
    const text = input.value.trim();
    if(text === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="done(this)">${text}</span>
        <button onclick="done(this.parentElement.firstElementChild)">Done</button>
        <button onclick="deltask(this)">X</button>
    `;

    document.getElementById("tasklist").appendChild(li);
    input.value = "";
}

function done(x){
    x.style.textDecoration =
        x.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
}

function deltask(btn){
    btn.parentElement.remove();
}
document.getElementById("inputtask")
.addEventListener("keydown", function(e){
    if(e.key === "Enter") add();
});