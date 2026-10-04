const ENDERECO_BACKEND = 'https://petshop-servidor-igor-gomes.onrender.com';

let idEmEdicao = null;


function mostrarPet(event) {
  const formulario = document.getElementById('form_cadastro_pet');

formulario.addEventListener('submit', async function(evento) {
    evento.preventDefault();

    // 1. Monte o objeto novoPet (IGUAL AO SEU CÓDIGO ATUAL)
    const novoPet = {
        nome_pet: document.getElementById('nome_pet').value,
        especie_pet: document.getElementById('especie_pet').value,
        raca_pet: document.getElementById('raca_pet').value,
        dono_pet: document.getElementById('dono_pet').value,
        telefone_dono: document.getElementById('telefone_dono').value,
        cep_dono: document.getElementById('cep_dono').value,
        rua_dono: document.getElementById('rua_dono').value,
        bairro_dono: document.getElementById('bairro_dono').value,
        cidade_dono: document.getElementById('cidade_dono').value,
        uf_dono: document.getElementById('uf_dono').value
    };

    // 2. ESTE É O NOVO BLOCO QUE SUBSTITUI O SEU TRY/CATCH:
    let url = `${ENDERECO_BACKEND}/pets`;
    let metodo = 'POST';

    if (idEmEdicao !== null) {
        url = `${ENDERECO_BACKEND}/pets/${idEmEdicao}`;
        metodo = 'PUT';
    }

    const resposta = await fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoPet)
    });

    const dados = await resposta.json();
    alert(idEmEdicao !== null ? 'Pet atualizado com sucesso!' : 'Pet cadastrado com sucesso!');
    window.location.href = 'lista_pets.html';
});
  
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

async function verificarModoEdicao() {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get('id');

    if (id === null) {
        return;
    }

    idEmEdicao = id;

    const resposta = await fetch(`${ENDERECO_BACKEND}/pets/${id}`);
    const pet = await resposta.json();

    document.getElementById('nome_pet').value = pet.nome_pet;
    document.getElementById('especie_pet').value = pet.especie_pet;
    document.getElementById('raca_pet').value = pet.raca_pet;
    document.getElementById('dono_pet').value = pet.dono_pet;
    document.getElementById('telefone_dono').value = pet.telefone_dono;
    document.getElementById('cep_dono').value = pet.cep_dono;
    document.getElementById('rua_dono').value = pet.rua_dono;
    document.getElementById('bairro_dono').value = pet.bairro_dono;
    document.getElementById('cidade_dono').value = pet.cidade_dono;
    document.getElementById('uf_dono').value = pet.uf_dono;

    document.querySelector('#form_cadastro_pet button[type="submit"]').textContent = 'Salvar alterações';
}


carregarEstados();

verificarModoEdicao();




