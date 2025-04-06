document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".opt");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.disabled = true);
            if (button.dataset.answer === "true") {
                button.style.backgroundColor = "green";
                button.style.color = "white";
                alert("Correct Answer!");
            } else {
                button.style.backgroundColor = "red";
                button.style.color = "white";
                alert("Wrong Answer! Try Again.");
            }
            localStorage.setItem("Q1_Answer", button.textContent.trim());
        });
    });
});
