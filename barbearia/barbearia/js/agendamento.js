function atualizarPreco() {
  var servicoEscolhido = document.getElementById('servico').value;
  var campoPreco = document.getElementById('valor-servico');
  var campoOutro = document.getElementById('campo-outro'); 

  
  if (servicoEscolhido == 'Corte') {
    campoPreco.value = 'R$ 40,00';
  } else if (servicoEscolhido == 'Barba') {
    campoPreco.value = 'R$ 30,00';
  } else if (servicoEscolhido == 'Combo') {
    campoPreco.value = 'R$ 15,00';
  } else if (servicoEscolhido == 'Outro') {
    campoPreco.value = 'A combinar';
  } else {
    campoPreco.value = '';
  }

  if (servicoEscolhido == 'Outro') {
    campoOutro.style.display = 'block'; 
  } else {
    campoOutro.style.display = 'none'; 
  }
}

function validarAgendamento(event) {
  var servico = document.getElementById('servico').value;
  var descricao = document.getElementById('detalhe-servico').value;
  var dataDigitada = document.getElementById('data-agendamento').value;
    var hoje = new Date().toISOString().split('T');

  if (servico == 'Outro' && descricao == '') {
    event.preventDefault(); 
    alert('Por favor, descreva o serviço!'); 
    return false;
  }

 
  if (dataDigitada < hoje) { 
    event.preventDefault();
    alert('Você não pode agendar para uma data que já passou!'); 
    return false;
  }

  alert('Agendamento realizado com sucesso!');
  return true;
}

