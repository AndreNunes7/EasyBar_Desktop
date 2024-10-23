const dishes = [
    { id: 1, name: "Suco de Laranja", price: 5.90, category: "bebidas" },
    { id: 2, name: "Batata Frita", price: 12.90, category: "fritos" },
    { id: 3, name: "Coxinha", price: 6.90, category: "salgados" },
    // Adicione mais pratos conforme necessário
];

let cart = [];

function renderMenu(filteredDishes) {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // Limpa o menu atual
    filteredDishes.forEach(dish => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                    <img src="https://via.placeholder.com/350x150" class="card-img-top" alt="${dish.name}">
                    <div class="card-body">
                        <h5 class="card-title">${dish.name}</h5>
                        <p class="font-weight-bold">R$ ${dish.price.toFixed(2)}</p>
                        <button class="btn btn-primary" onclick="addToCart(${dish.id})">Adicionar ao Pedido</button>
                    </div>
                </div>
            </div>
        `;
        menu.innerHTML += card;
    });
}

// Função para filtrar pratos por categoria
function filterDishes(category) {
    if (category === 'todas') {
        renderMenu(dishes);
    } else {
        const filteredDishes = dishes.filter(dish => dish.category === category);
        renderMenu(filteredDishes);
    }
}

// Chame renderMenu inicialmente com todos os pratos
renderMenu(dishes);
