const btnNo = document.getElementById('btnNo');

btnNo.addEventListener('mouseover', () => {
  const newX = Math.random() * window.innerWidth; // Generate a random X-coordinate
  const newY = Math.random() * window.innerHeight; // Generate a random Y-coordinate

  btnNo.style.left = `${newX}px`; // Set the new X-coordinate
  btnNo.style.top = `${newY}px`; // Set the new Y-coordinate
});