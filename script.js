function openModal(productId) {
  // Obter elementos do modal
  var modal = document.getElementById("modal");
  var modalTitle = document.getElementById("modal-title");
  var modalImage = document.getElementById("modal-image");
  var modalDescription = document.getElementById("modal-description");
  var modalPrice = document.getElementById("modal-price");

  // Definir os dados do produto no modal
  if (productId === 1) {
    modalTitle.textContent = "Blusa bordada";
    modalImage.src = "ft1.jpg";
    modalDescription.textContent = "Tamanho: P & M";
    modalPrice.textContent = "R$30,00";
  } else if (productId === 2) {
    modalTitle.textContent = "Vestido midi canelado Vinho";
    modalImage.src = "ft2.jpg";
    modalDescription.textContent = "Tamanho: P ao GG";
    modalPrice.textContent = "R$40,00";
  } else if (productId === 3) {
    modalTitle.textContent = "Body gola";
    modalImage.src = "ft3.jpg";
    modalDescription.textContent = "Tamanho: P ao G";
    modalPrice.textContent = "R$30,00";
  } else if (productId === 4) {
    modalTitle.textContent = "Saia Midi";
    modalImage.src = "ft4.jpg";
    modalDescription.textContent = "Tamanho: P ao G";
    modalPrice.textContent = "R$30,00";
  } else if (productId === 5) {
    modalTitle.textContent = "Short de Academia";
    modalImage.src = "ft5.jpg";
    modalDescription.textContent = "Tamanho: M ao GG";
    modalPrice.textContent = "R$30,00";
  } else if (productId === 6) {
    modalTitle.textContent = "Blusa com detalhes nas mangas";
    modalImage.src = "ft6.jpg";
    modalDescription.textContent = "Tamanho: P ao G";
    modalPrice.textContent = "R$30,00";
  } else if (productId === 7) {
    modalTitle.textContent = "Short Leve";
    modalImage.src = "ft7.jpg";
    modalDescription.textContent = "Tamanho: M ao GG";
    modalPrice.textContent = "R$30,00";
  } else if (productId === 8) {
    modalTitle.textContent = "Blusa com renda";
    modalImage.src = "ft8.jpg";
    modalDescription.textContent = "Tamanho: P & M";
    modalPrice.textContent = "R$30,00";
  }

  // Exibir o modal
  modal.style.display = "block";
}

// Resto do código
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function performAction() {
  function performAction(productId) {
  // Ação específica para cada produto
  if (productId === 1) {
    alert("Ação realizada para o Produto 1!");
  } else if (productId === 2) {
    alert("Ação realizada para o Produto 2!");
  }
  }
  window.open('https://chat.whatsapp.com/BrLzW3rRh1fH7ZC0o9UR7i', '_blank');
}