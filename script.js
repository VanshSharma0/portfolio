function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('copyText').addEventListener('click', function() {
  var text = this.innerText; // Get the text inside the element
  var textarea = document.createElement('textarea'); // Create a textarea element
  textarea.value = text; // Set its value to the text we want to copy
  document.body.appendChild(textarea); // Append it to the body
  textarea.select(); // Select the text inside the textarea
  document.execCommand('copy'); // Copy the selected text
  document.body.removeChild(textarea); // Remove the textarea
  alert('Text copied to clipboard: ' + text); // Alert the user
});
