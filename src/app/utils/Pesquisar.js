export const inputPesquisarPais = document.querySelector('#input-pesquisar-pais');
export const selectFilterRegion = document.querySelector('.pesquisar select');

export function pesquisarInput(bandeiras) {
    inputPesquisarPais.addEventListener('input', () => {
        const valorDoInput = inputPesquisarPais.value.toLowerCase();

        bandeiras.forEach(bandeira => {
            const nomeDoPais = bandeira.querySelector('h2').textContent.toLowerCase();
            const bandeiraVisivel = nomeDoPais.includes(valorDoInput);

            if (bandeiraVisivel) {
                bandeira.style.display = 'block';
            } else {
                bandeira.style.display = 'none';
            }
        });

    });
}

export function pesquisarSelect(bandeiras) {
    selectFilterRegion.addEventListener('change', () => {
        const valorDoSelect = selectFilterRegion.value.toLowerCase();

        bandeiras.forEach(bandeira => {
            const regiao = bandeira.querySelector('#region').textContent.toLowerCase();
            if (regiao == valorDoSelect || valorDoSelect === 'todos') {
                bandeira.style.display = 'block';
            } else {
                bandeira.style.display = 'none';
            }

        })

    })
}
