let dishes = [];

// Função para listar pratos na tabela
function listDishes() {
    const tableBody = document.getElementById('dish-list');
    tableBody.innerHTML = ''; // Limpa o conteúdo atual

    dishes.forEach(dish => {
        const row = `
            <tr>
                <td>${dish.id}</td>
                <td>${dish.name}</td>
                <td>R$ ${dish.price.toFixed(2)}</td>
                <td>${dish.category}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editDish(${dish.id})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="removeDish(${dish.id})">Remover</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Função para adicionar um prato
function addDish() {
    const name = document.getElementById('dish-name').value;
    const price = parseFloat(document.getElementById('dish-price').value);
    const category = document.getElementById('dish-category').value;

    if (name && !isNaN(price) && category) {
        const newDish = {
            id: dishes.length + 1, // Simulação de ID
            name,
            price,
            category
        };
        dishes.push(newDish);
        listDishes(); // Atualiza a lista
        $('#addDishModal').modal('hide'); // Fecha o modal
        document.getElementById('add-dish-form').reset(); // Reseta o formulário
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}

// Função para editar um prato
function editDish(id) {
    const dish = dishes.find(d => d.id === id);
    if (dish) {
        const newName = prompt("Nome do prato:", dish.name);
        const newPrice = parseFloat(prompt("Preço do prato:", dish.price));
        const newCategory = prompt("Categoria do prato:", dish.category);

        if (newName && !isNaN(newPrice) && newCategory) {
            dish.name = newName;
            dish.price = newPrice;
            dish.category = newCategory;
            listDishes(); // Atualiza a lista
        }
    }
}

// Função para remover um prato
function removeDish(id) {
    dishes = dishes.filter(d => d.id !== id);
    listDishes(); // Atualiza a lista
}

// Exemplo de inicialização
function init() {
    // Adiciona dados de exemplo (substitua por dados reais)
    dishes.push({ id: 1, name: "Suco de Laranja", price: 5.90, category: "bebidas" });
    dishes.push({ id: 2, name: "Batata Frita", price: 12.90, category: "fritos" });
    listDishes();
}

// Chama a função de inicialização ao carregar o script
init();
