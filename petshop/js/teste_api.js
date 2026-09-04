
async function consultarCEP(numeroCEP) {

   let resposta = await fetch (`https://viacep.com.br/ws/${numeroCEP}/json/`)
   let dados = await resposta.json()

    console.log(dados.logradouro)
    console.log(dados.bairro)
    console.log(dados.localidade)


}

 consultarCEP("01001000");