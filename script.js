document.getElementById('showButton').addEventListener('click', function() {
  var messageDiv = document.getElementById('message');
  messageDiv.classList.toggle('hidden');
  if (messageDiv.classList.contains('hidden')) {
    this.textContent = 'OPEN';
  } else {
    this.textContent = 'CLOSE';
  }
});

const noButton = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
noButton.addEventListener('mouseover', () => {
  moveButtonRandomly(noButton);
});

noButton.addEventListener('click', () => {
  moveButtonRandomly(noButton);
});

function moveButtonRandomly(button) {
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  
  button.style.position = 'absolute';
  button.style.left = newX + 'px';
  button.style.top = newY + 'px';
}

yesBtn.addEventListener('click', () => {
  alert("I love you :)");
})