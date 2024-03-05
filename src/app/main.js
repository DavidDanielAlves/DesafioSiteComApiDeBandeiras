import { mudarTema } from "./utils/MudarTema.js";
import { pegarEMostrarPaises } from "./utils/MostrarPaisesNaTela.js";

// import { MostrarBandeira } from "./utils/MostrarInformacoesBandeira.js";

export const secaoBandeiras = document.querySelector('.bandeiras');
export const btnChangeTheme = document.getElementById('changeTheme');

if (secaoBandeiras) {
    pegarEMostrarPaises();
}

if (btnChangeTheme) {
    mudarTema(btnChangeTheme);
}

// function MostrarBandeira () {
//     document.querySelectorAll('.bandeira').forEach(bandeira => {
//         document.querySelectorAll('.bandeira').addEventListener('click', (e) => {
//             if (window.location) {
//                 console.log(bandeira)
//             }
//         })
//     })
// }

// MostrarBandeira()
