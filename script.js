const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function search() {
    const searchInput = document.getElementById('search-item').value.toLowerCase();
    const products = document.querySelectorAll('.product');
  
    products.forEach((product) => {
      const productName = product.querySelector('.p-details h2').textContent.toLowerCase();
      if (productName.includes(searchInput)) {
        product.style.display = 'flex';
      } else {
        product.style.display = 'none';
      }
    });
  }