function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    document.getElementById('cartCount').textContent = cart.length;
}

// Fetch and display featured products
async function loadFeaturedProducts() {
    try {
        const response = await fetch('/api/products');
        const products = await response.json();
        const featuredDiv = document.getElementById('featuredProducts');
        
        featuredDiv.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image_url || '/images/placeholder.jpg'}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value;
    // Implement search logic here
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProducts();
    updateCartCount();
});