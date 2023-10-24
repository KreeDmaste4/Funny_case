
let box = document.querySelector('.box');

box.addEventListener("click", function() {
  box.classList.add('ak');
});

// Отслеживаем окончание анимации
box.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler () {
  // Удаляем класс с анимацией
  box.classList.remove('ak');
  
}




