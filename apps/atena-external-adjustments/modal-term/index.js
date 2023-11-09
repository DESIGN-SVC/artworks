function handleModalClose() {
  const modal = document.querySelector('#modal-term');
  modal.style.display = 'none';
}

document.getElementById('button-close').addEventListener('click', handleModalClose);
