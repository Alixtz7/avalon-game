const playerCount = parseInt(localStorage.getItem('playerCount')) || 7;

const missionSettings = {
5: [2, 3, 2, 3, 3],
6: [2, 3, 4, 3, 4],
7: [2, 3, 3, 4, 4],
8: [3, 4, 4, 5, 5],
9: [3, 4, 4, 5, 5],
10: [3, 4, 4, 5, 5],
}[playerCount] || [2, 3, 3, 4, 4];

console.log("實際玩家人數：", playerCount);
console.log("任務配置：", missionSettings);

let currentRound = 0;
let currentPlayerIndex = 0;
let playerChoices = [];
let selecting = false;
let selectedChoice = null;
let revealed = false;
let readyToReveal = false;

const roundText = document.getElementById("roundText");
const successButton = document.getElementById("successButton");
const failButton = document.getElementById("failButton");
const confirmButton = document.getElementById("confirmButton");
const nextPlayerButton = document.getElementById("nextPlayerButton");
const selectionButtons = document.getElementById("selectionButtons");
const passPrompt = document.getElementById("passPrompt");
const resultText = document.getElementById("resultText");
const revealButton = document.getElementById("revealButton");

function updateButtonStyles() {
successButton.style.opacity = selectedChoice === true ? 0.5 : 1.0;
failButton.style.opacity = selectedChoice === false ? 0.5 : 1.0;
}

function updateUI() {
const totalPlayers = missionSettings[currentRound];
roundText.textContent = `第 ${currentRound + 1} 局（玩家 ${currentPlayerIndex + 1} / ${totalPlayers}）`;

if (selecting) {
    selectionButtons.style.display = "flex";
    confirmButton.style.display = "inline-block";
    confirmButton.disabled = selectedChoice === null;
    passPrompt.style.display = "none";
    nextPlayerButton.style.display = "none";
    revealButton.style.display = "none";
    resultText.textContent = "";
} else {
    selectionButtons.style.display = "none";
    confirmButton.style.display = "none";
    passPrompt.style.display = "block";
    nextPlayerButton.style.display = "inline-block";
    passPrompt.textContent = currentPlayerIndex === 0 ? "請選擇" : "請交給下一位玩家";
    revealButton.style.display = "none";
    resultText.textContent = "";
}
}

successButton.onclick = () => {
selectedChoice = true;
updateButtonStyles();
confirmButton.disabled = false;
};

failButton.onclick = () => {
selectedChoice = false;
updateButtonStyles();
confirmButton.disabled = false;
};

confirmButton.onclick = () => {
if (selectedChoice !== null) {
    playerChoices.push(selectedChoice);
    selectedChoice = null;
    currentPlayerIndex++;
    showNextPlayerScreen();
}
};

nextPlayerButton.onclick = () => {
selecting = true;
updateUI();
};

function showNextPlayerScreen() {
const totalPlayers = missionSettings[currentRound];
if (currentPlayerIndex >= totalPlayers) {
    readyToReveal = true;
    updateRevealUI();
} else {
    selecting = false;
    updateUI();
    updateButtonStyles();
}
}

function updateRevealUI() {
if (readyToReveal) {
    revealButton.style.display = "inline-block";
    resultText.textContent = "所有玩家已完成任務";
    selectionButtons.style.display = "none";
    confirmButton.style.display = "none";
    passPrompt.style.display = "none";
    nextPlayerButton.style.display = "none";
    roundText.textContent = `第 ${currentRound + 1} 局`;
}
}

revealButton.onclick = () => {
if (!revealed) {
    const failCount = playerChoices.filter(c => c === false).length;
    const requiredFails = (playerCount >= 7 && playerCount <= 10 && currentRound === 3) ? 2 : 1;
    const result = failCount >= requiredFails ? "任務失敗 ❌" : "任務成功 ✅";
    resultText.textContent = `${result}\n\n失敗票數：${failCount}`;
    revealButton.textContent = "繼續";
    revealed = true;
} else {
    currentRound++;
    if (currentRound < missionSettings.length) {
    currentPlayerIndex = 0;
    playerChoices = [];
    selecting = false;
    selectedChoice = null;
    revealed = false;
    readyToReveal = false;
    revealButton.textContent = "任務結果";
    resultText.textContent = "";
    updateUI();
    updateButtonStyles();
    } else {
    alert("所有任務已結束！");
    window.location.href = "index.html";
    }
}
};

showNextPlayerScreen();