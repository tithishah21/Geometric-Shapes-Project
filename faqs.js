document.addEventListener("DOMContentLoaded", () => {
    const faqs = [
        { question: "How can I subscribe to updates?", answer: "You can subscribe to updates by signing up with your email on our homepage." },
        { question: "What is the course duration?", answer: "The course duration varies but typically lasts 6 to 12 weeks, depending on the topic." },
        { question: "How do I contact support?", answer: "You can contact support via email at support@example.com or through our 24/7 live chat." },
        { question: "Can I access the content offline?", answer: "Yes! You can download materials for offline access after enrolling in the course." },
        { question: "Are there assessments or tests included?", answer: "Yes, every course includes quizzes and assessments to track your progress." },
        { question: "How do I request additional resources?", answer: "You can request additional resources through our 'Request Resources' section in the dashboard." },
        { question: "What are the payment methods?", answer: "We accept credit/debit cards, PayPal, and bank transfers for payments." }
    ];


    const questions = document.querySelectorAll(".p");

    questions.forEach((question, index) => {
        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        answerDiv.textContent = faqs[index].answer;
        answerDiv.style.display = "none";  
        question.insertAdjacentElement("afterend", answerDiv);

        question.addEventListener("click", () => {
            if (answerDiv.style.display === "none") {
                answerDiv.style.display = "block";
                answerDiv.style.opacity = "0";
                setTimeout(() => { answerDiv.style.opacity = "1"; }, 10); 
            } else {
                answerDiv.style.opacity = "0";
                setTimeout(() => { answerDiv.style.display = "none"; }, 300);
            }
        });
    });
});
