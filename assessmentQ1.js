document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".opt");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Disable all buttons after selection
            buttons.forEach(btn => btn.disabled = true);

            // Check if the selected answer is correct
            if (button.dataset.answer === "true") {
                button.style.backgroundColor = "green";
                button.style.color = "white";
                alert("✅ Correct Answer!");
            } else {
                button.style.backgroundColor = "red";
                button.style.color = "white";
                alert("❌ Wrong Answer! Try Again.");
            }

            // Store the selected answer in localStorage
            localStorage.setItem("Q1_Answer", button.textContent.trim());
        });
    });
});
