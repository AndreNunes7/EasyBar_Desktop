
        // Funções do carrinho
        function openCart() {
            document.getElementById('cart').style.width = '300px';
            renderCartItems();
        }

        function closeCart() {
            document.getElementById('cart').style.width = '0';
        }

        function renderCartItems() {
            const cartItemsContainer = document.getElementById('cart-items');
            cartItemsContainer.innerHTML = ''; // Limpa itens existentes
            cart.forEach(item => {
                const itemDiv = `<div>${item.name} - R$ ${item.price.toFixed(2)}</div>`;
                cartItemsContainer.innerHTML += itemDiv;
            });
            updateTotalPrice();
        }

        function updateTotalPrice() {
            const totalPrice = cart.reduce((total, item) => total + item.price, 0);
            document.getElementById('total-price').innerText = totalPrice.toFixed(2);
        }

        function confirmPurchase() {
            alert("Compra confirmada!");
            cart = []; // Limpa o carrinho
            closeCart();
            renderCartItems(); // Atualiza a visualização
        }
   