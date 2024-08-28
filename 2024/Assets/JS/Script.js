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

    // console.log(botoes_calculadora);

    for(var i = 4; i < botoes_calculadora.length - 1; i++)
    {

        const botao = botoes_calculadora[i];

        botao.addEventListener("click", () => {

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

        var qnt_caracteres_operacao = visor.innerText.length;

        visor.innerText = visor.innerText.substring(0, qnt_caracteres_operacao - 1);

        qnt_caracteres_operacao--;
        
        ultimo_caractere_inserido = visor.innerText.substring(qnt_caracteres_operacao - 1, qnt_caracteres_operacao);

    }

});

document.getElementById("calculate").addEventListener("click", () => {

    if(visor.innerText != "")
    {

        if(!caracteres_especiais.includes(ultimo_caractere_inserido))
        {

            const expressao = visor.innerText;

            const resultado = eval(visor.innerText.replace(",", "."));

            visor.innerText = resultado.toString().replace(".", ",");

            setTimeout(() => {

                alert("Operação: " + expressao + ".\n\nResultado: " + resultado + ".");

            }, 1000);

        }

        else
        {

            alert("Uma operação matemática não pode terminar com um símbolo matemático! Corrija a expessão.");

        }

    }

});