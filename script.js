const products = [
  {
    name: "Wireless Headphones",
    price: 799,
    category: "electronics",
    img: "headphones.avif"
  },
  {
    name: "Smart Watch",
    price: 1999,
    category: "electronics",
    img: "smart watch.avif"
  },
  {
    name: "Cotton T-Shirt",
    price: 349,
    category: "fashion",
    img: "cotton T-shirt.avif"
  },
  {
    name: "Denim Jeans",
    price: 599,
    category: "fashion",
    img: "Denim Jeans.avif"
  },
  {
    name: "Modern Table Lamp",
    price: 999,
    category: "home",
    img: "Lamp.avif"
  },
  {
    name: "Wall Decor Art",
    price: 1299,
    category: "home",
    img: "Home Wall paper.avif"
  },
  {
    name: "Bluetooth Speaker",
    price: 899,
    category: "electronics",
    img: "Speaker.avif"
  },
  {
    name: "Woolen Scarf",
    price: 299,
    category: "fashion",
    img: "Woolen Scarf.avif"
  },
  {
    name: "Plant Pot Set",
    price: 749,
    category: "home",
    img: "Plant Pot Set.avif"
  },
  {
    name: "Wooden Chair",
    price: 1599,
    category: "home",
    img: "Wooden Chair.avif"
  },
  {
    name: "Bottle",
    price: 149,
    category: "home",
    img: "Bottle.avif"
  }
];

function renderProducts(productList = products) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p class="price">₹${product.price}</p>
      <button onclick="addToCart('${product.name}', ${product.price}, '${product.img}')">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

function filterProducts() {
  const search = document.getElementById("searchBar").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const priceRange = document.getElementById("priceFilter").value;

  const filtered = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = category === "all" || product.category === category;
    const [min, max] = priceRange === "all" ? [0, Infinity] : priceRange.split("-").map(Number);
    const matchesPrice = product.price >= min && product.price <= max;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  renderProducts(filtered);
}

function addToCart(name, price, img) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, img });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart!`);
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").textContent = cart.length;
}

// Run these when page loads
window.onload = () => {
  renderProducts();
  updateCartCount();
};
