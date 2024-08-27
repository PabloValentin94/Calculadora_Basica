// Constantes e variáveis:

const visor = document.getElementById("display");

const botao_tema_claro = document.getElementById("light");

const botao_tema_escuro = document.getElementById("dark");

var ultimo_caractere_inserido = "";

const caracteres_especiais = ["+", "-", "*", "/", ","];

// Funções:

function Mudar_Tema()
{

    document.querySelector("html").classList.toggle("dark_theme");

}

// Eventos:

window.onload = () => {

    const botoes_calculadora = document.getElementById("calculator").querySelectorAll("button");

    console.log(botoes_calculadora);

    for(var i = 4; i < botoes_calculadora.length - 1; i++)
    {

        const botao = botoes_calculadora[i];

        botao.addEventListener("click", () => {

            /*var simbolo_repetido = false;

            caracteres_especiais.forEach(elemento => {

                if(elemento == ultimo_caractere_inserido)
                {

                    simbolo_repetido = true;

                }

            });*/

            ultimo_caractere_inserido = botao.innerText;

            visor.innerText += botao.innerText;

        });

    }

};

botao_tema_claro.addEventListener("click", () => {

    botao_tema_claro.style.display = "none";

    botao_tema_escuro.style.display = "flex";

    Mudar_Tema();

});

botao_tema_escuro.addEventListener("click", () => {

    botao_tema_escuro.style.display = "none";

    botao_tema_claro.style.display = "flex";

    Mudar_Tema();

});

document.getElementById("clear").addEventListener("click", () => {

    visor.innerText = "";

});

document.getElementById("backspace").addEventListener("click", () => {

    if(visor.innerText.length > 0)
    {

        visor.innerText = visor.innerText.substring(0, visor.innerText.length - 1);

    }

});

document.getElementById("calculate").addEventListener("click", () => {

    if(visor.innerText != "")
    {

        visor.innerText = eval(visor.innerText.replace(",", "."));

    }

});