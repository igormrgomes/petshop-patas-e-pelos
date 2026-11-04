const ENDERECO_BACKEND = 'https://petshop-servidor-igor-gomes.onrender.com';

document.getElementById('form_login').addEventListener('submit', async function(evento) {
    evento.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem_login');

    mensagem.textContent = '';

    try {
        const resposta = await fetch(`${ENDERECO_BACKEND}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });
        const dados = await resposta.json();

        if (!resposta.ok) {
            mensagem.textContent = dados.mensagem || 'Email ou senha inválidos.';
            return;
        }

        localStorage.setItem('token', dados.token);
        localStorage.setItem('email', dados.usuario.email);
        window.location.href = 'index.html';
    } catch (erro) {
        mensagem.textContent = 'Erro de conexão. Tente novamente.';
    }
});
