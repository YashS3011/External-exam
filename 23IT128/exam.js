let cart = [];
let totalAmount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        cart.push({ name, price });
        totalAmount += price;

        updateCart();
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - ruppes ${item.price}`;
        cartItems.appendChild(div);
    });

    document.getElementById('total-amount').textContent = `Total ruppes ${totalAmount}`;
}
