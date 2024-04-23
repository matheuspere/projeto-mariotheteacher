// Função para validar o formulário de login
function validarLogin() {
    // Obter os valores dos campos de email e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Validar o email
    if (!email || email.trim() === '') {
        alert('Por favor, digite um email válido.');
        return false;
    }

    // Validar a senha
    if (!senha || senha.trim() === '') {
        alert('Por favor, digite uma senha válida.');
        return false;
    }

    // Se os dados forem válidos, envie o formulário
    return true;
}

// Adicionar evento de submit ao formulário
const formLogin = document.querySelector('form');
formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validar o formulário
    if (!validarLogin()) {
        return;
    }

    // Simular o envio do formulário
    alert('Login efetuado com sucesso!');

    // Redirecionar para a página principal (opcional)
    // window.location.href = 'pagina-principal.html';
});
