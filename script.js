document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.button');
    button.addEventListener('click', function() {
      alert('Thank you for booking an appointment!');
    });
  });

  function openLoginForm() {
    var loginContainer = document.getElementById("loginContainer");
    loginContainer.classList.add("show");
  }

  const toggleSwitch = document.getElementById('switch');
  const toggleLabel = document.getElementById('toggle-label');
  const body = document.querySelector('.body');

  toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
 });