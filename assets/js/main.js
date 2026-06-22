// 1. Carrega o Header primeiro
fetch('/components/header.html')
  .then(response => response.text())
  .then(headerData => {
    // Injeta o HTML do header no placeholder dele
    document.getElementById('header-placeholder').innerHTML = headerData;
    
    // 2. SÓ DEPOIS que o header carregou, buscamos o HTML do botão
    return fetch('/components/consultation-button.html');
  })
  .then(response => response.text())
  .then(buttonHtml => {
    // Busca todos os locais que devem receber o botão (no header e nos cards)
    const placeholders = document.querySelectorAll('.consultation-button-placeholder');
    
    // Injeta o HTML do botão em cada um dos placeholders encontrados
    placeholders.forEach(placeholder => {
      placeholder.innerHTML = buttonHtml;
    });
    
    return fetch('/components/footer.html');
  })
  .then(response => response.text())
  .then(footerData => {
    document.getElementById('footer-placeholder').innerHTML = footerData;
  })
  .catch(error => {
    console.error('Erro ao carregar os componentes:', error);
  });