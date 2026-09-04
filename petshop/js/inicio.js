function VerHorario() {
    var funcionamento = document.getElementById("ver-horario");
    funcionamento.innerText = "Segunda a Sábado, das 08h às 18h";
    funcionamento.style.display = "block";
}

localStorage.setItem( 'nome_unidade' , 'Unidade Central Patas & Pelos');
 let textoInicio = localStorage.getItem('nome_unidade');
document.getElementById('mensagem_unidade').innerText = textoInicio;


localStorage.setItem('pet_destaque', 'Frederico');
let nomeFred = localStorage.getItem('pet_destaque');
document.getElementById('nome_do_pet').innerText = nomeFred;
    
localStorage.setItem('servico_dia', 'Banho e tosa');
let nomeServico = localStorage.getItem('servico_dia');
document.getElementById('nome_servico').innerText = nomeServico;

localStorage.setItem('horario_abertura', 'Das 09:00 às 17:00');
let exibirHorario = localStorage.getItem('horario_abertura');
document.getElementById('exibir_horario').innerText = exibirHorario;

localStorage.setItem('slogan_loja', 'Onde seu pet é tratado como rei!');
let slogan = localStorage.getItem('slogan_loja');
document.getElementById('exibir_slogan').innerText = slogan;

localStorage.setItem('contato_loja', 'ajuda@patasepelos.com.br');
let contatoLoja = localStorage.getItem('contato_loja');
document.getElementById('email_contato').innerText = contatoLoja;

localStorage.setItem('recepcao_dia', 'Ana Paula');
let recepcaoDia = localStorage.getItem('recepcao_dia');
document.getElementById('nome_recepcao').innerText = recepcaoDia;
