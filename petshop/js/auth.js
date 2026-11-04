function obterToken() {
    return localStorage.getItem('token');
}

function cabecalhosComToken() {
    const token = obterToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
}

function obterUrlLogin() {
    return window.location.pathname.includes('/paginas/') ? '../login.html' : 'login.html';
}

function exigirAutenticacao() {
    if (obterToken()) {
        return true;
    }

    alert('Faça login para continuar.');
    window.location.href = obterUrlLogin();
    return false;
}

function tratarResposta401(resposta) {
    if (resposta.status !== 401) {
        return false;
    }

    alert('Sua sessão expirou ou é inválida. Faça login novamente.');
    window.location.href = obterUrlLogin();
    return true;
}

function sair() {
    localStorage.clear();
    window.location.href = obterUrlLogin();
}

const menuAutenticacao = document.createElement('nav');
menuAutenticacao.setAttribute('aria-label', 'Autenticação');
menuAutenticacao.style.textAlign = 'right';

const linkAutenticacao = document.createElement('a');
if (obterToken()) {
    linkAutenticacao.href = obterUrlLogin();
    linkAutenticacao.textContent = `Sair (${localStorage.getItem('email') || 'usuário'})`;
    linkAutenticacao.addEventListener('click', function(evento) {
        evento.preventDefault();
        sair();
    });
} else {
    linkAutenticacao.href = obterUrlLogin();
    linkAutenticacao.textContent = 'Entrar';
}

menuAutenticacao.appendChild(linkAutenticacao);
document.body.insertBefore(menuAutenticacao, document.body.firstChild);
