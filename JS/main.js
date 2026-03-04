document.addEventListener("DOMContentLoaded", function() {

    const playBtn = document.getElementById("playBtn");
    const continueBtn = document.getElementById("continueBtn");
    const settingsBtn = document.getElementById("settingsBtn");

    if (playBtn) {
        playBtn.addEventListener("click", function() {
            window.location.href = "Game and History/1.html";
        });
    }

    if (settingsBtn) {
        settingsBtn.addEventListener("click", function() {
            window.location.href = "settings.html";
        });
    }

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
        "Game and History/12.html",
        "Game and History/12.1H.html",
        "Game and History/12.2.html",
        "Game and History/13.1.html",
        "Game and History/14.html",
        "Game and History/15.html",
        "Game and History/16.html",
        "Game and History/17.html",
        "Game and History/18.html",
        "Game and History/19.html",
        "Game and History/20H.html",
        "Game and History/21.html",
        "Game and History/22.html",
        "Game and History/23.html"
    ]);

    let continuePath = "";

    if (lastScene && allowedScenes.has(lastScene)) {
        continuePath = lastScene;
    }

    continueBtn.disabled = continuePath === "";

    continueBtn.addEventListener("click", function() {
        if (continuePath) {
            window.location.href = continuePath;
        }
    });

});