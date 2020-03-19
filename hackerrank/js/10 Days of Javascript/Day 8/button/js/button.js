// https://www.hackerrank.com/challenges/js10-create-a-button/problem

const clickMeButton = document.createElement('button');
let btnCount = 0;
clickMeButton.id = 'btn';
clickMeButton.innerHTML = btnCount;
clickMeButton.addEventListener('click', () => {
  btnCount += 1;
  clickMeButton.innerHTML = btnCount;
});
document.body.appendChild(clickMeButton);
