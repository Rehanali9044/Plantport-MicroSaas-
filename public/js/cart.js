let cartItems = [];

async function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    let subtotal = 0;

    for (const productId of cart) {
        try {
            const response = await fetch(`/api/products/${productId}`);
            const product = await response.json();
            cartItems.push(product);
            
            subtotal += product.price;
            cartItemsDiv.innerHTML += `
                <div class="cart-item">
                    <img src="${product.image_url || '/images/placeholder.jpg'}" alt="${product.name}">
                    <div class="item-details">
                        <h3>${product.name}</h3>
                        <p>$${product.price.toFixed(2)}</p>
                    </div>
                    <button onclick="removeFromCart(${product.id})" class="remove-btn">
                        Remove
                    </button>
                </div>
            `;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    updateCartTotals(subtotal);
}

function updateCartTotals(subtotal) {
    const deliveryFee = 5.00;
    const total = subtotal + deliveryFee;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('delivery').textContent = `$${deliveryFee.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    document.getElementById('cartCount').textContent = cartItems.length;
}

function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const index = cart.indexOf(productId);
    if (index > -1) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
    }
}

function proceedToCheckout() {
    if (cartItems.length > 0) {
        window.location.href = '/checkout.html';
    } else {
        alert('Your cart is empty!');
    }
}

document.addEventListener('DOMContentLoaded', loadCartItems);