document.getElementById("playBtn").addEventListener("click", function() {
    window.location.href = "Game and History/1.html";
});

document.getElementById("settingsBtn").addEventListener("click", function() {
    window.location.href = "settings.html";
});

const continueBtn = document.getElementById("continueBtn");
const lastScene = localStorage.getItem("lastScene");
const allowedScenes = new Set([
    "Game and History/1.html",
    "Game and History/2.html",
    "Game and History/2.1.html",
    "Game and History/2.2.html",
    "Game and History/3.html",
    "Game and History/4.html",
    "Game and History/5.html",
    "Game and History/6H.html",
    "Game and History/7H.html",
    "Game and History/8.html",
    "Game and History/8.1.html",
    "Game and History/8.2.html",
    "Game and History/9H.html",
    "Game and History/9.1.html",
    "Game and History/10.html",
    "Game and History/11.html",
    "Game and History/12.html"
]);

let continuePath = "";
if (lastScene && allowedScenes.has(lastScene)) {
    continuePath = lastScene;
}

continueBtn.disabled = continuePath === "";

continueBtn.addEventListener("click", function() {
    if (!continuePath) {
        return;
    }
    window.location.href = continuePath;
});
