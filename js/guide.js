const guideText = document.getElementById("guideText");
const audio = document.getElementById("guideAudio");
const playPause = document.getElementById("playPause");
const reset = document.getElementById("reset");
const next = document.getElementById("next");

const count = parseInt(localStorage.getItem("playerCount")) || 7;

const guides = {
5: {
    audio: "audio/guideaudio56.mp3",
    text: `5人局\n請所有人閉上眼睛\n單手握拳放在面前\n所有壞人舉起大拇指\n所有壞人睜開眼睛記住隊友\n5、4、3、2、1\n所有壞人閉上眼睛拇指繼續舉著\n梅林睜開眼睛確認壞人\n5、4、3、2、1\n梅林閉上眼睛\n所有壞人放下大拇指\n梅林與莫甘娜舉起大拇指\n派西維爾睜開眼睛確認兩人\n5、4、3、2、1\n派西維爾閉上眼睛\n梅林與莫甘娜放下大拇指\n遊戲開始`
},
6: {
    audio: "audio/guideaudio56.mp3",
    text: `6人局\n請所有人閉上眼睛\n單手握拳放在面前\n所有壞人舉起大拇指\n所有壞人睜開眼睛記住隊友\n5、4、3、2、1\n所有壞人閉上眼睛拇指繼續舉著\n梅林睜開眼睛確認壞人\n5、4、3、2、1\n梅林閉上眼睛\n所有壞人放下大拇指\n梅林與莫甘娜舉起大拇指\n派西維爾睜開眼睛確認兩人\n5、4、3、2、1\n派西維爾閉上眼睛\n梅林與莫甘娜放下大拇指\n遊戲開始`
},
7: {
    audio: "audio/guideaudio7.mp3",
    text: `7人局\n請所有人閉上眼睛\n單手握拳放在面前\n所有壞人舉起大拇指\n所有壞人睜開眼睛記住隊友\n5、4、3、2、1\n所有壞人閉上眼睛拇指繼續舉著\n莫德雷德放下大拇指\n梅林睜開眼睛確認壞人\n5、4、3、2、1\n梅林閉上眼睛\n所有壞人放下大拇指\n梅林與莫甘娜舉起大拇指\n派西維爾睜開眼睛確認兩人\n5、4、3、2、1\n派西維爾閉上眼睛\n梅林與莫甘娜放下大拇指\n遊戲開始`
},
8: {
    audio: "audio/guideaudio7.mp3",
    text: `8人局\n請所有人閉上眼睛\n單手握拳放在面前\n所有壞人舉起大拇指\n所有壞人睜開眼睛記住隊友\n5、4、3、2、1\n所有壞人閉上眼睛拇指繼續舉著\n莫德雷德放下大拇指\n梅林睜開眼睛確認壞人\n5、4、3、2、1\n梅林閉上眼睛\n所有壞人放下大拇指\n梅林與莫甘娜舉起大拇指\n派西維爾睜開眼睛確認兩人\n5、4、3、2、1\n派西維爾閉上眼睛\n梅林與莫甘娜放下大拇指\n遊戲開始`
},
9: {
    audio: "audio/guideaudio7.mp3",
    text: `9人局\n請所有人閉上眼睛\n單手握拳放在面前\n所有壞人舉起大拇指\n所有壞人睜開眼睛記住隊友\n5、4、3、2、1\n所有壞人閉上眼睛拇指繼續舉著\n莫德雷德放下大拇指\n梅林睜開眼睛確認壞人\n5、4、3、2、1\n梅林閉上眼睛\n所有壞人放下大拇指\n梅林與莫甘娜舉起大拇指\n派西維爾睜開眼睛確認兩人\n5、4、3、2、1\n派西維爾閉上眼睛\n梅林與莫甘娜放下大拇指\n遊戲開始`
},
10: {
    audio: "audio/guideaudio10.mp3",
    text: `10人局\n請所有人閉上眼睛\n單手握拳放在面前\n除了奧伯倫以外\n其他壞人舉起大拇指\n除了奧伯倫以外的壞人\n睜開眼睛確認隊友\n5、4、3、2、1\n所有壞人閉上眼睛拇指繼續舉著\n奧伯倫舉起大拇指\n莫德雷德放下大拇指\n梅林睜開眼睛確認壞人\n5、4、3、2、1\n梅林閉上眼睛\n所有壞人放下大拇指\n梅林與莫甘娜舉起大拇指\n派西維爾睜開眼睛確認兩人\n5、4、3、2、1\n派西維爾閉上眼睛\n梅林與莫甘娜放下大拇指\n遊戲開始`
}
};

const g = guides[count] || guides[7];
guideText.textContent = g.text;
audio.src = g.audio;

playPause.onclick = () => {
if (audio.paused) {
    audio.play();
    playPause.textContent = "暫停";
} else {
    audio.pause();
    playPause.textContent = "播放";
}
};

reset.onclick = () => {
audio.pause();
audio.currentTime = 0;
playPause.textContent = "播放";
};

audio.onended = () => {
playPause.textContent = "播放";
};

next.onclick = () => {
    window.location.href = "mission.html";
};