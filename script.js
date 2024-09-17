// Gift box falling and shaking effect
const giftBox = document.getElementById('gift-box');
const passwordContainer = document.getElementById('password-container');
let continueAnimation = true;

// Function to drop the gift box
function dropGiftBox() {
  giftBox.style.display = 'block';
  giftBox.animate(
    [{ transform: 'translateY(-1000px)' }, { transform: 'translateY(0)' }],
    { duration: 2000, easing: 'ease-out', fill: 'forwards' }
  ).onfinish = () => {
    shakeGiftBox();
  };
}

// Function to shake the gift box
function shakeGiftBox() {
  giftBox.animate(
    [
      { transform: 'translateX(-10px)' },
      { transform: 'translateX(10px)' },
      { transform: 'translateX(-10px)' },
      { transform: 'translateX(10px)' },
      { transform: 'translateX(0)' }
    ],
    { duration: 500, easing: 'ease-in-out', fill: 'forwards' }
  ).onfinish = () => {
    passwordContainer.style.display = 'block'; // Show the password field after shaking
  };
}
document.getElementById('gift-box').addEventListener('click', shakeGiftBox);
// Verify password function
function verifyPassword() {
  const passwordInput = document.getElementById('password-input').value;
  const errorMessage = document.getElementById('error-message');
  
  if (passwordInput === 'U+1F44D') {
    errorMessage.textContent = 'Great!!';
    window.location.href = 'letter.html';
    // Navigate to func.js execution

  } else {
    errorMessage.textContent = 'Nah!Nah!Nah !!';
  }
}
window.onload = function () {
  setTimeout(dropGiftBox, 1000); // Delay before starting the drop
};


