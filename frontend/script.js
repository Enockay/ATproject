const button = document.querySelector(".btn1");
const buttonContent = document.querySelector(".btnContent");
const para = document.createElement("p");

const toggleButton = () => {
    para.textContent = "am the body happy coding"
    buttonContent.appendChild(para);

}

button.addEventListener("click",toggleButton);