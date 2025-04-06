document.addEventListener("DOMContentLoaded", () => {
    const score = localStorage.getItem("quiz_score") || 0;
    const scoreDiv = document.querySelector(".score");
    scoreDiv.textContent = `SCORE: ${score}`;

    // Optional: Clear the score if you want a fresh start next time
    // localStorage.removeItem("quiz_score");
});
