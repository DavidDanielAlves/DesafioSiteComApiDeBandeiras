import { secaoBandeiras } from "../main.js";
import { pesquisarInput, pesquisarSelect, inputPesquisarPais, selectFilterRegion } from "./Pesquisar.js";

export async function pegarEMostrarPaises() {
    const url = `https://daviddanielalves.github.io/apiBandeiras/data.json`;
    const response = await fetch(url);
    const paises = await response.json();
    const listaDePaises = localStorage.setItem("paises", JSON.stringify(paises.dados)) || [];
    listaDePaises.push(paises.dados);
    const paisesNaTela = JSON.parse(localStorage.getItem("paises")) || [];

    paisesNaTela.forEach(pais => {
        secaoBandeiras.innerHTML +=
            `<a href="./src/pages/mais-informacoes.html">
                <div class="bandeira">
                    <div class='box'>
                        <img src="${pais.flag}" alt="pais: ${pais.name}">
                        <h2>${pais.name}</h2>
                    </div>

                    <div class="bandeira-descricao">
                        <p>
                            <span><strong>Population:</strong></span>
                            <span id="populacao">${pais.population}</span>
                        </p>

                        <p>
                            <span><strong>Region:</strong></span>
                            <span id="region">${pais.region}</span>
                        </p>

                        <p>
                            <span><strong>Capital:</strong></span>
                            <span id="capital">${pais.capital}</span>
                        </p>
                    </div>
                </div>
            </a>`;
    });

    const bandeiras = document.querySelectorAll('.bandeira');

    if (inputPesquisarPais) {
        pesquisarInput(bandeiras);
    }
    
    
    if (selectFilterRegion) {
        pesquisarSelect(bandeiras);
    }

    if (window.location) {
        bandeiras.forEach((bandeira, index) => {
            bandeira.addEventListener('click', () => {
                const paisClicado = paisesNaTela[index];

                sessionStorage.setItem('paisClicado', JSON.stringify(paisClicado));
            })
        })
    }


}