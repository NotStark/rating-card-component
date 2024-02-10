// write your JavaScript here

const starsList = document.querySelectorAll("svg");

function removeFill(elements) {
  elements.forEach((el) => {
    const pathNode = el.querySelector("path");
    pathNode.style.fill = "#E2E8F0";
  });
}

const paras = [
  "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
  "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
  "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
  "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
  "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform",
];

function addFill(elements) {
  elements.forEach((el) => {
    const pathNode = el.querySelector("path");
    pathNode.style.fill = "yellow";
  });
}

starsList.forEach((el, index) => {
  el.addEventListener("click", () => {
    removeFill(starsList);
    let fillTo = Array.from(starsList).slice(0, index + 1);
    addFill(fillTo);
    document.querySelector(".rating-card p").textContent = paras[index];
  });
});
