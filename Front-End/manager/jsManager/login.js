function login() {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'admin' && password === '123') { 
        alert('Login bem-sucedido!');
        // Redirecionar
        window.location.href = 'admin.html';
    } else {
        alert('Usuário ou senha inválidos.');
    }
}
