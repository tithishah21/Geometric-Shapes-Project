document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".eg");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.classList.add("expanded");
        });

        card.addEventListener("mouseleave", function () {
            this.classList.remove("expanded");
        });
    });
});
