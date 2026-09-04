let listaAgendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];


function renderizar(lista) {

    let corpoTabela = document.getElementById('tabelaResultados');

    corpoTabela.innerHTML = "";

    let somaFaturamento = 0;

    if (lista.length === 0) {

        corpoTabela.innerHTML = "<tr><td colspan='4'>Nenhum agendamento encontrado.</td></tr>";

    } else {

        lista.forEach((item, index) => {

            somaFaturamento += item.valor;

            corpoTabela.innerHTML +=
                "<tr>" +
                "<td>" + item.cliente + "</td>" +
                "<td>" + item.servico + "</td>" +
                "<td>" + item.valor + "</td>" +
                "<td><button onclick='removerAgendamento(" + index + ")'>Excluir</button></td>" +
                "</tr>";
        });
    }

    let valorTotal = document.getElementById('valorTotal');

    valorTotal.innerHTML = "R$ " + somaFaturamento;
}


function filtrarTabela() {

    let textoBusca = document.getElementById('campoBusca').value.toLowerCase();

    let listaFiltrada = listaAgendamentos.filter(item =>
        item.cliente.toLowerCase().includes(textoBusca)
    );

    renderizar(listaFiltrada);
}


function removerAgendamento(posicao) {

    listaAgendamentos.splice(posicao, 1);

    localStorage.setItem('agendamentos', JSON.stringify(listaAgendamentos));

    renderizar(listaAgendamentos);
}


renderizar(listaAgendamentos);