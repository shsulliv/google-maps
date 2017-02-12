const error = document.querySelector('.overlay');

const hideError = () => {
  error.style.display = 'none';
};

module.exports = () => {
  error.style.display = 'flex';
  setTimeout(hideError, 3000);
};
