document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".opt");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.disabled = true);

            const isCorrect = button.dataset.answer === "true";

            if (isCorrect) {
                button.style.backgroundColor = "green";
                button.style.color = "white";
                alert("Correct Answer!");

                // ✅ Increment score
                let score = parseInt(localStorage.getItem("quiz_score")) || 0;
                localStorage.setItem("quiz_score", score + 1);
            } else {
                button.style.backgroundColor = "red";
                button.style.color = "white";
                alert("Wrong Answer! Try Again.");
            }

            localStorage.setItem("Q1_Answer", button.textContent.trim());
        });
    });
});
