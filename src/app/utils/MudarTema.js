const imagemBtnChangeTheme = document.querySelector('.botao-change-theme i');
const textoBotaoChangeTheme = document.querySelector('.botao-change-theme span');
const body = document.body;

export function mudarTema(botao) {
    botao.addEventListener('click', () => {
        let iconSolLua = imagemBtnChangeTheme.classList.contains('fa-moon') ? 'fa-sun' : 'fa-moon';
        let textoBotao = textoBotaoChangeTheme.textContent == 'Dark Mode' ? 'Light Mode' : 'Dark Mode';
        body.classList.toggle('body-alternative');
    
        imagemBtnChangeTheme.classList.replace(imagemBtnChangeTheme.classList[1], iconSolLua);
        textoBotaoChangeTheme.innerHTML = textoBotao;
    });
}