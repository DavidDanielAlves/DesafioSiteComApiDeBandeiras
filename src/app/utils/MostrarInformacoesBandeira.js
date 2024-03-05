const dados = sessionStorage.getItem('paisClicado') || [];
const dadosDoPaisClicado = JSON.parse(dados);

function adicionarElementoNoHtml (idElemento, dado) {
    const nomeElemento = document.getElementById(idElemento);
    nomeElemento.innerHTML = dado;
}

const imagemDoPais = document.querySelector('.mais-informacoes-bandeira img');
imagemDoPais.src = dadosDoPaisClicado.flag;

adicionarElementoNoHtml('nome-pais', dadosDoPaisClicado.name);
adicionarElementoNoHtml('nome-nativo', dadosDoPaisClicado.nativeName);
adicionarElementoNoHtml('populacao', dadosDoPaisClicado.population);
adicionarElementoNoHtml('sub-regiao', dadosDoPaisClicado.subregion);
adicionarElementoNoHtml('capital', dadosDoPaisClicado.capital);
adicionarElementoNoHtml('dominio', dadosDoPaisClicado.topLevelDomain);
adicionarElementoNoHtml('moeda', dadosDoPaisClicado.currencies[0].name);


const linguasDoPais = dadosDoPaisClicado.languages;
const linguas = document.getElementById('linguas');

linguasDoPais.forEach(lingua => {
    const listaDeLinguas = lingua.name + " ";

    linguas.innerHTML += listaDeLinguas
})

const paisesDaBorda = dadosDoPaisClicado.borders;
const containerPaisesBorda = document.querySelector('.container-botoes-borda');

paisesDaBorda.forEach(pais => {
    containerPaisesBorda.innerHTML += `<button class="pais-borda">${pais}</button>`
})