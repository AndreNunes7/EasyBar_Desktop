function login() {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar sua lógica de autenticação
    if (username === 'admin' && password === '123') { // Exemplo simples
        alert('Login bem-sucedido!');
        // Redirecionar para a página de gerenciamento
        window.location.href = 'admin.html';
    } else {
        alert('Usuário ou senha inválidos.');
    }
}
