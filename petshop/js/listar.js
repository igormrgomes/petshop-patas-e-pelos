let tabela = document.getElementById('tabela_corpo');
let salvos = localStorage.getItem('agendamentos_petshop');
let lista = salvos ? JSON.parse(salvos) : [];

if (lista.length === 0) {
    alert("Nenhum agendamento encontrado");
}

tabela.innerHTML = "";

let faturamentoTotal = 0;

lista.forEach(function(item, indice) {

     if (item.servico == "Banho") {
        faturamentoTotal += 50;
    }

    if (item.servico == "Tosa") {
        faturamentoTotal += 60;
    }

    if (item.servico == "Banho e tosa") {
        faturamentoTotal += 90;
    }
    

    tabela.innerHTML += `
        <tr>
            <td>${item.pet}</td>
            <td>${item.servico}</td>
            <td>${item.data}</td>
            <td>${item.hora}</td>
            <td>${item.obs}</td>
            <td>
    <button onclick="deletarAgendamento(${indice})">Excluir</button>
</td>
        </tr>
    `;

}
);

document.getElementById('faturamento_total').innerText =
    "Faturamento total: R$ " + faturamentoTotal;

    
function deletarAgendamento(indice) {

    lista.splice(indice, 1);

    localStorage.setItem('agendamentos_petshop', JSON.stringify(lista));

    location.reload();

}