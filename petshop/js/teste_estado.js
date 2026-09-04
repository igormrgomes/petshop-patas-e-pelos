async function buscarDados(){

    let resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    let estados = await resposta.json()
    let i
    let select = document.getElementById('select_estados_teste')
    let selectCidades = document.getElementById('select_cidades_teste')

    for(i = 0; i < estados.length; i++){
        select.innerHTML += `<option value="${estados[i].sigla}">${estados[i].nome}</option>`;
    }

    select.addEventListener('change', async function() { 

        let estado = select.value

        selectCidades.innerHTML = '<option value="">Selecione a cidade</option>';

        if (estado !== "") {

            let resp = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
            let cidades = await resp.json()

            for(i = 0; i < cidades.length; i++){
                selectCidades.innerHTML += `<option value="${cidades[i].nome}">${cidades[i].nome}</option>`;
            }

        }

    })
}

buscarDados();