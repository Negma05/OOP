document.addEventListener('DOMContentLoaded', function () {
    function updateTotal() {
        let total = 0;
        const products = document.querySelectorAll('.card');
        
        products.forEach(product => {
            const unitPrice = parseFloat(product.querySelector('.unit-price').textContent.replace('$', '').trim());
            const quantity = parseInt(product.querySelector('.quantity').textContent);
            total += unitPrice * quantity;
        });

        document.querySelector('.total').textContent = `${total} $`;
    }

    document.querySelectorAll('.card').forEach(product => {
        const plusBtn = product.querySelector('.fa-plus-circle');
        const minusBtn = product.querySelector('.fa-minus-circle');
        const deleteBtn = product.querySelector('.fa-trash-alt');
        const likeBtn = product.querySelector('.fa-heart');
        const quantityElement = product.querySelector('.quantity');

        plusBtn.addEventListener('click', function () {
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent  = quantity + 1 ;
            updateTotal();
        });

        minusBtn.addEventListener('click', function () {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantityElement.textContent = quantity - 1;
                updateTotal();
            }
        });

        deleteBtn.addEventListener('click', function () {
            product.remove();
            updateTotal();
        });

        likeBtn.addEventListener('click', function () {
            if (likeBtn.classList.contains('liked')) {
                likeBtn.classList.remove('liked');
            } else {
                likeBtn.classList.add('liked');
            }
        });
    });

    updateTotal();
});
