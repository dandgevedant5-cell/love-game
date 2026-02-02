let count = 0;

const messages = [
  "You stole my heart day by day 💘",
  "Beautiful 🌸",
  "Cutiepie 🧸",
  "29 December 📅",
  "2 months & so many beautiful qualities ❤️"
];

const heart = document.getElementById("heart");
const messageBox = document.getElementById("message");
const button = document.getElementById("shootBtn");

button.addEventListener("click", () => {
  if (count < messages.length) {
    messageBox.innerText = messages[count];
    heart.style.transform = "scale(1.1)";
    setTimeout(() => {
      heart.style.transform = "scale(1)";
    }, 200);
    count++;
  } else {
    heart.innerText = "💥";
    messageBox.innerText = "I LOVE YOU ❤️❤️❤️";
    button.disabled = true;
    button.innerText = "Forever Yours 💕";
  }
});
