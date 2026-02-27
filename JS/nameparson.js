// Перевіряємо чи вже є збережене ім'я
document.addEventListener("DOMContentLoaded", function () {
    const savedName = localStorage.getItem("username");
    if (savedName) {
        document.getElementById("welcome").textContent = 
            "Радий тебе бачити, " + savedName + "!";
    }
});

function saveName() {
    const name = document.getElementById("username").value;

    if (name.trim() !== "") {
        localStorage.setItem("username", name);
        document.getElementById("welcome").textContent = 
            "Приємно познайомитися, " + name + "!";
    }
}
document.getElementById("next").addEventListener("click", function() {
    window.location.href = "../Game and History/2.html";
});