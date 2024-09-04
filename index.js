/*
create a string with the const operator to announce that the user will be given a security combination
with the equations listed using const numComb the answers will be the final combination given
the const lockComb is the three equation's answers in order  to be typed into vault

*/
const stringVar = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
// the first thing that will pop up when opeing html website
const numComb1 = 5 * 2;
// answer should be equal to 10
const numComb2 = 72 - 32;
// answer should be equal to 40
const numComb3 = 78 / 2;
// answer should be equal to 39

alert(stringVar);
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});