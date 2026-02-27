document.addEventListener("DOMContentLoaded", function () {
    const savedOrigin = localStorage.getItem("origin");

    if (savedOrigin) {
        document.getElementById("welcome").textContent =
            "Радий тебе бачити, мандрівнику з " + savedOrigin + "!";
    }
});

function saveOrigin() {
    const origin = document.getElementById("origin").value;

    if (origin.trim() !== "") {
        localStorage.setItem("origin", origin);

        document.getElementById("welcome").textContent =
            "З " + origin + "? Дивно… Я ніколи не чув про це королівство";
    }
}

document.getElementById("next").addEventListener("click", function() {
    window.location.href = "../Game and History/4.html";
});