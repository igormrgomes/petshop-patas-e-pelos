function darBoasVindas() {
  alert('Bem-vindo à Barbearia Gomes!');
}
function mostrarNome() {
  var nome = document.getElementById('nome_cliente').value;
  var telefone = document.getElementById('telefone_cliente').value;
  var campoMensagem = document.getElementById('mensagem-boas-vindas');


  if (nome == '' || telefone == '' || telefone.length < 11) {
    campoMensagem.innerText = 'Por favor, preencha o nome e o telefone corretamente (com DDD).';
    campoMensagem.style.color = 'red';
  }
  else {
    campoMensagem.innerText = 'Cliente ' + nome + ' cadastrado com sucesso!';
    campoMensagem.style.color = 'green';
  }
}


let nomeLoja = 'Barbearia Gomes';
let nomeLimpo = nomeLoja.trim();

localStorage.setItem('nomeBarbearia', nomeLimpo);
nomeLimpo = localStorage.getItem('nomeBarbearia');
console.log(localStorage.getItem('nomeBarbearia'));

let cliente = {
  nome: "Seu Nome",
  telefone: "12345678"
};
let clienteString = JSON.stringify(cliente);
localStorage.setItem('dadosCliente', clienteString);
let dadosCliente = localStorage.getItem('dadosCliente');
let clienteFinal = JSON.parse(dadosCliente);
// Consegui enxergar os dados gravados no Local Storage.
console.table(clienteFinal);



let listaAgendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

let nomeUsuario = " fULANO de tAL ";
let telUsuario = " (11) 99999-8888 ";

 nomeLimpo = nomeUsuario.trim();
nomeLimpo = nomeLimpo.charAt(0).toUpperCase() + nomeLimpo.slice(1).toLowerCase();

let telefoneLimpo = telUsuario.replace(/\D/g, '');

let novoAgendamento = {
    cliente: nomeLimpo,
    telefone: telefoneLimpo,
    servico: "Corte",
    valor: 40
};

let clienteDuplicado = listaAgendamentos.some(item => item.cliente === novoAgendamento.cliente);

if (clienteDuplicado) {
    alert("Cliente já cadastrado!");
} 
else {
    listaAgendamentos.push(novoAgendamento);
    localStorage.setItem('agendamentos', JSON.stringify(listaAgendamentos));
    alert("Agendamento realizado com sucesso!");
}

console.table(listaAgendamentos);