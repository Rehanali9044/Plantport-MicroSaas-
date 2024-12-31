function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Buy now
function buyNow() {
    window.location.href = '/checkout.html';
}

// Load product details
async function loadProductDetails(productId) {
    try {
        const response = await fetch(`/api/products/${productId}`);
        const product = await response.json();
        
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('productImage').src = product.image_url || '/images/placeholder.jpg';
    } catch (error) {
        console.error('Error:', error);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
        loadProductDetails(productId);
    }
    updateCartCount();
});