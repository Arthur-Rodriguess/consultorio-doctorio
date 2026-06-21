fetch('/components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  });

fetch('/components/consultation-button.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('consultation-button').innerHTML = data;
  });