let allProducts = [];
let visibleCount = 6;

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  allProducts = await res.json();
  showProducts();
}

function showProducts() {
  const container = document.getElementById('product-container');
  container.innerHTML = '';
  const toShow = allProducts.slice(0, visibleCount);
  toShow.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product';
    card.innerHTML = `
      <img src="${product.image}" width="100" height="100" alt="${product.title}"/>
      <h3>${product.title}</h3>
      <p>₹${product.price}</p>
      <p><em>${product.category}</em></p>`;
    container.appendChild(card);
  });

  const btn = document.getElementById('show-more');
  btn.style.display = visibleCount >= allProducts.length ? 'none' : 'block';
}

document.getElementById('show-more')?.addEventListener('click', () => {
  visibleCount += 6;
  showProducts();
});

fetchProducts();