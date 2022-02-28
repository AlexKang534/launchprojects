const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

//Using selectors inside element
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  //   console.log(question);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
//transverse DOM work (referencing parentElement twice)
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
