import { mudarTema } from "./MudarTema.js";
import { btnChangeTheme } from "./script.js";
import { MostrarBandeira } from "./MostrarInformacoesBandeira.js";

mudarTema(btnChangeTheme);

MostrarBandeira()

window.addEventListener('mostrarBandeira', (evento) => {
    console.log(evento.detail.meuDado);
});