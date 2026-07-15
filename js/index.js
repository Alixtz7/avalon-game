function startGame() {
    const count = document.getElementById("player-count").value;
    localStorage.setItem("playerCount", count);
    window.location.href = "game.html";
}

function showRoleList() {
    window.location.href = "roles.html";
}

