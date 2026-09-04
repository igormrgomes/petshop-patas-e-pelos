function atualizarPreco() {
  var escolhido = document.getElementById('agendar_servico').value;
  var preco = document.getElementById('valor_servico');
  var sintomas = document.getElementById('sintomas')
  
  
  if (escolhido == 'Banho') {
    preco.value = 'R$ 50,00';
  } else if (escolhido == 'Tosa') {
    preco.value = 'R$ 60,00';
  } else if (escolhido == 'Banho e tosa') {
    preco.value = 'R$ 90,00';
  } else if (escolhido == 'Consulta') {
    preco.value = 'R$ 120,00';
  } else {
    preco.value = '';
   
  }
   if (escolhido == "Consulta") {
        sintomas.style.display = "block";
        
    } else {
        sintomas.style.display = "none";
    }
}

function validarAgendamento(event) {
  var nome = document.getElementById('nome').value;
  var data = document.getElementById('data').value;

  
  if (nome == '' || data == '' ) {
    event.preventDefault(); 
    alert('Por favor, preencha o nome e a data!'); 
    return false
  }

 else{

    alert('Agendamento realizado com sucesso!')
return true

 }
 
 
}

function confirmarAgen(event){
event.preventDefault()

let pet = document.getElementById('agendar_pet').value;
let servico = document.getElementById('agendar_servico').value;
let data = document.getElementById('agendar_data').value;
let hora = document.getElementById('agendar_hora').value;
let obs= document.getElementById('agendar_obs').value

if (pet === "") {
    alert("Digite o nome do pet!");
    return;
}

let novoAgendamento = {

    pet: pet,
    servico: servico,
    data: data,
    hora: hora,
    obs: obs

}



let salvos = localStorage.getItem('agendamentos_petshop');

let lista = salvos ? JSON.parse(salvos) : [];

lista.push(novoAgendamento);

localStorage.setItem('agendamentos_petshop', JSON.stringify(lista));
}


  
