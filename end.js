const usurname = document.getElementById("usurname");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || []; //json ile parse dönüşümü yaparak js e veriyi aldık.. 1 skor varsa verecek ya da dizi şeklinde verecek
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

usurname.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !usurname.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: usurname.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    
    localStorage.setItem("highScores",JSON.stringify(highScores));
    window.location.assign("/");
};
