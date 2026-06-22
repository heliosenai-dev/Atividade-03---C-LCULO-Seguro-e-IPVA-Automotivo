
import { calcularIPVA } from './script_calculo.js';

let form = document.getElementById("formVeiculo");
let lista = document.getElementById("lista");

//Verifica se os elementos existem antes de adicionar o evento
if (form && lista) {
    form.addEventListener("submit", function(event){
        event.preventDefault();

        let marca = document.getElementById("marca").value;
        let modelo = document.getElementById("modelo").value;
        let placa = document.getElementById("placa").value;
        let ano = Number(document.getElementById("ano").value);
        let valor = Number(document.getElementById("valor").value);

        // Captura o elemento antes de pedir o ".value"
        let combustivelElemento = document.querySelector('input[name="combustivel"]:checked');
        
        // Se o usuário não selecionou nenhum botão, avisa e para o código
        if (!combustivelElemento) {
            alert("Por favor, selecione o tipo de combustível.");
            return; 
        }
        
        let combustivel = combustivelElemento.value;

        let seguro = valor * 0.10;
        let ipva = calcularIPVA(valor, combustivel, ano);

        let textoIPVA = ipva === "Isento" ? "Isento" : "R$ " + ipva.toFixed(2);

        let item = document.createElement("div");
        item.className = "item";

        item.innerHTML = `
            <p><b>Marca:</b> ${marca}</p>
            <p><b>Modelo:</b> ${modelo}</p>
            <p><b>Placa:</b> ${placa}</p>
            <p><b>Ano:</b> ${ano}</p>
            <p><b>Seguro:</b> R$ ${seguro.toFixed(2)}</p>
            <p><b>IPVA:</b> ${textoIPVA}</p>
        `;

        lista.appendChild(item);

        form.reset();
    });
}