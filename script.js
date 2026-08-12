const qna = document.querySelectorAll(".qna");

qna.forEach((q) => {
  const button = q.querySelector(".question");
  const answer = q.querySelector(".answer");
  let buttonIcon = button.querySelector(".button-icon");
  button.addEventListener("click", () => {
    if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        answer.classList.add('hide');
        buttonIcon.setAttribute('src', 'assets/images/icon-plus.svg')

    } else {
        answer.classList.remove('hide');
        answer.classList.add('show');
        buttonIcon.setAttribute('src', 'assets/images/icon-minus.svg')
    }
  });
  button.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
    event.preventDefault();
        if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        answer.classList.add('hide');
        buttonIcon.setAttribute('src', 'assets/images/icon-plus.svg')

    } else {
        answer.classList.remove('hide');
        answer.classList.add('show');
        buttonIcon.setAttribute('src', 'assets/images/icon-minus.svg')
    }
  }
  })
});
