
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "🌙 Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "30px";
    toggleButton.style.right = "180px";
    toggleButton.style.padding = "10px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.color="white";
    toggleButton.style.borderRadius="19px";
    toggleButton.style.borderColor="white";
    toggleButton.style.backgroundColor="#008080";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

