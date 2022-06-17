const addToCartButtons = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');

for (let button of addToCartButtons) {
    button.addEventListener('click', e => {
        const product = button.closest('div.product');
        const cartProduct = cartHasProduct(product);
        if (!cartProduct) {
            console.log()
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('cart__product');
            resultDiv.dataset.id = product.dataset.id;
            
            const image = document.createElement('img');
            image.classList.add('cart__product-image');
            image.setAttribute('src', 
                product.querySelector('img').getAttribute('src'));
            resultDiv.appendChild(image);

            let count = document.createElement('div');
            count.classList.add('cart__product-count');
            count.innerText = 
                product.querySelector('.product__quantity-value').innerText;
            resultDiv.appendChild(count);

            cartProducts.appendChild(resultDiv);
            return;
        }
        let cartCount = Number.parseInt(cartProduct.querySelector('.cart__product-count').innerText);
        const productCount = Number.parseInt(product.querySelector('.product__quantity-value').innerText);

        cartCount += productCount;
        cartProduct.querySelector('.cart__product-count').innerText = cartCount;
    })
}

function cartHasProduct(product) {
    let cartProduct = cartProducts.querySelector(`[data-id = '${product.dataset.id}']`);
    if (cartProduct) return cartProduct;
    return false;
}