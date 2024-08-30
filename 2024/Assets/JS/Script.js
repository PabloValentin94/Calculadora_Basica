// Constantes e variáveis:

const visor_calculadora = document.getElementById("display");

const botao_tema_claro = document.getElementById("light");

const botao_tema_escuro = document.getElementById("dark");

var ultimo_caractere_inserido = "";

const caracteres_especiais = ["+", "-", "*", "/", ","];

// Funções:

function Mudar_Tema()
{

    document.querySelector("html").classList.toggle("dark_theme");

}

function Verificar_Ultimo_Caractere()
{

    // Verificando se o último caractere da expressão matemática não é um número.

    let permissao = true;

    for(let j = 0; j < caracteres_especiais.length && permissao; j++)
    {

        if(caracteres_especiais[j] === ultimo_caractere_inserido)
        {

            permissao = false;

        }

    }

    return permissao;

}

function Verificar_Repeticao_Caractere_Especial()
{

    // Verificando se há na expressão matemática caracteres inseridos de forma consecutiva, mas que não são números.

    let repeticao = false;

    const caracteres_visor_calculadora = visor_calculadora.innerText;

    for(let k = 0; k < caracteres_visor_calculadora.length && !repeticao; k++)
    {

        if(k < caracteres_visor_calculadora.length - 1)
        {

            caracteres_especiais.forEach(primeiro_caractere_especial => {

                if(caracteres_visor_calculadora[k] === primeiro_caractere_especial)
                {
    
                    caracteres_especiais.forEach(segundo_caractere_especial => {
    
                        if(caracteres_visor_calculadora[k + 1] === segundo_caractere_especial)
                        {
    
                            repeticao = true;
    
                        }
    
                    });
    
                }
    
            });

        }

    }

    return repeticao;

}

function Validar_Expressao_Matematica()
{

    if(Verificar_Ultimo_Caractere() && !Verificar_Repeticao_Caractere_Especial())
    {

        return true;

    }

    else
    {

        return false;

    }

}

// Eventos:

window.onload = () => {

    const botoes_calculadora = document.getElementById("calculator").querySelectorAll("button");

    for(let i = 4; i < botoes_calculadora.length; i++)
    {

        if(i !== 17)
        {

            const botao = botoes_calculadora[i];

            botao.addEventListener("click", () => {
    
                ultimo_caractere_inserido = botao.innerText;
    
                visor_calculadora.innerText += ultimo_caractere_inserido;
    
            });

        }

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

    ultimo_caractere_inserido = ""

    visor_calculadora.innerText = ultimo_caractere_inserido;

});

document.getElementById("backspace").addEventListener("click", () => {

    if(visor_calculadora.innerText.length > 0)
    {

        let qnt_caracteres_operacao = visor_calculadora.innerText.length - 1;

        visor_calculadora.innerText = visor_calculadora.innerText.substring(0, qnt_caracteres_operacao);

        if(visor_calculadora.innerText.length === 0)
        {

            ultimo_caractere_inserido = "";

        }

        else
        {

            ultimo_caractere_inserido = visor_calculadora.innerText.substring(qnt_caracteres_operacao - 1);

        }

    }

});

document.getElementById("calculate").addEventListener("click", () => {

    if(visor_calculadora.innerText !== "")
    {

        if(Validar_Expressao_Matematica())
        {

            const resultado = eval(visor_calculadora.innerText.replace(",", ".")).toString().replace(".", ",");

            visor_calculadora.innerText = resultado;

            ultimo_caractere_inserido = "";

        }

        else
        {

            alert("Não foi possível realizar o cálculo da expressão! Certifique-se de que o último caractere é " +
                  "um número e de que não há caracteres especiais consecutivos.");

        }

    }

    else
    {

        alert("Digite uma expressão matemática antes de prosseguir.");

    }

});