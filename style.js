document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelector('.cart');
    const totalPriceElement = document.getElementById('total-price');
  
    function updateTotalPrice() {
      let total = 0;
      document.querySelectorAll('.cart-item').forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseInt(item.dataset.price);
        total += quantity * price;
      });
      totalPriceElement.textContent = total;
    }
  
    cart.addEventListener('click', (e) => {
      if (e.target.classList.contains('increment')) {
        const item = e.target.closest('.cart-item');
        const quantityElement = item.querySelector('.quantity');
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        updateTotalPrice();
      }
  
      if (e.target.classList.contains('decrement')) {
        const item = e.target.closest('.cart-item');
        const quantityElement = item.querySelector('.quantity');
        const quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
          quantityElement.textContent = quantity - 1;
          updateTotalPrice();
        }
      }
  
      if (e.target.classList.contains('delete')) {
        const item = e.target.closest('.cart-item');
        item.remove();
        updateTotalPrice();
      }
  
      if (e.target.classList.contains('heart')) {
        e.target.classList.toggle('liked');
      }
    });
  
    updateTotalPrice();
  });
  