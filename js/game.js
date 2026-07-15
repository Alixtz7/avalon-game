const playerLabel = document.getElementById("playerLabel");
const roleText = document.getElementById("roleText");
const nextButton = document.getElementById("nextButton");

const playerCount = parseInt(localStorage.getItem("playerCount")) || 7;
const allRoles = {
    5: ["梅林", "派西維爾", "亞瑟的忠臣", "刺客", "莫甘娜"],
    6: ["梅林", "派西維爾", "亞瑟的忠臣", "刺客", "莫甘娜", "亞瑟的忠臣"],
    7: ["梅林", "派西維爾", "亞瑟的忠臣", "亞瑟的忠臣", "刺客", "莫德雷德", "莫甘娜"],
    8: ["梅林", "派西維爾", "亞瑟的忠臣", "亞瑟的忠臣", "刺客", "莫德雷德", "莫甘娜", "亞瑟的忠臣"],
    9: ["梅林", "派西維爾", "亞瑟的忠臣", "亞瑟的忠臣", "刺客", "莫德雷德", "莫甘娜", "亞瑟的忠臣", "亞瑟的忠臣"],
    10: ["梅林", "派西維爾", "亞瑟的忠臣", "亞瑟的忠臣", "亞瑟的忠臣", "亞瑟的忠臣", "刺客", "莫德雷德", "莫甘娜", "奧伯倫"]
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let roles = allRoles[playerCount] || Array(playerCount).fill("亞瑟的忠臣");
roles = shuffle([...roles]);

let currentIndex = 0;
let showRoleNow = false;

nextButton.addEventListener("click", () => {
    if (showRoleNow) {
    currentIndex++;
    if (currentIndex < playerCount) {
        showNextPlayerPrompt();
    } else {
        window.location.href = "guide.html";
    }
    showRoleNow = false;
    } else {
    showPlayerRole();
    showRoleNow = true;
    }
});

function showNextPlayerPrompt() {
    playerLabel.textContent = `第 ${currentIndex + 1} 位玩家`;
    roleText.textContent = "按下按鈕";
    nextButton.textContent = "顯示身份";
}

function showPlayerRole() {
    playerLabel.textContent = `玩家 ${currentIndex + 1} 的身份是：`;
    roleText.textContent = roles[currentIndex];
    nextButton.textContent = (currentIndex === playerCount - 1) ? "開始遊戲" : "隱藏";
}

showNextPlayerPrompt();