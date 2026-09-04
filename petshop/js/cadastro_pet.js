function mostrarPet(event) {
  event.preventDefault() 
  let especie = document.getElementById('especie_pet').value;
let raca = document.getElementById('raca_pet').value;
let nomePet = document.getElementById('nome_pet').value;
let nomeDono = document.getElementById('dono_pet').value;
let telefone = document.getElementById('telefone_dono').value;

let dadosPet = {NomeDono: nomeDono, NomePet: nomePet, Telefone: telefone, Raça: raca, 
  Especie: especie };


  
 
  if ( telefone.length < 11) {
    alert(  'Por favor, preencha o telefone corretamente (com DDD).');
    return false
  } 

  else{
    localStorage.setItem('pet_cadastrado',  JSON.stringify(dadosPet))
    alert(nomePet+ ' cadastrado com sucesso!')
    return true
  }
  
}

document.getElementById('form_cadastro_pet').addEventListener('submit', mostrarPet);

 async function consultarCEP(numeroCEP){

  let cep = document.getElementById('cep_dono').addEventListener('blur').value;



let cepLimpo = cep.replace("-", "")


   let resposta = await fetch (`https://viacep.com.br/ws/${cepLimpo}/json/`)
   let dados = await resposta.json()

document.getElementById('rua_dono').value = dados.logradouro;
document.getElementById('bairro_dono').value = dados.bairro
document.getElementById('cidade_dono').value = dados.localidade
document.getElementById('uf_dono').value = dados.uf

}

async function carregarEstados(){

    let resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    let estados = await resposta.json()
    let i
    let selectEstados = document.getElementById('select_estado_dono')
    let selectCidades = document.getElementById('select_cidade_dono')

    for(i = 0; i < estados.length; i++){
        selectEstados.innerHTML += `<option value="${estados[i].sigla}">${estados[i].nome}</option>`;
    }

    selectEstados.addEventListener('change', async function(){

        let estado = selectEstados.value

        document.getElementById('uf_dono').value = selectEstados.value;

        selectCidades.innerHTML = '<option>Selecione a cidade</option>';

        if(estado !== ""){

            let resp = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
            let cidades = await resp.json()

            for(i = 0; i < cidades.length; i++){
                selectCidades.innerHTML += `<option value="${cidades[i].nome}">${cidades[i].nome}</option>`;
            }

        }

    })

    selectCidades.addEventListener('change', function(){

        document.getElementById('cidade_dono').value = selectCidades.value;

    })

}

carregarEstados();

