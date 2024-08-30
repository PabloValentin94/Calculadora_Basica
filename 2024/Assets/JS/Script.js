// Constantes e variáveis:

const visor_calculadora = document.getElementById("display");

const botao_tema_claro = document.getElementById("light");

const botao_tema_escuro = document.getElementById("dark");

var ultimo_caractere_inserido = "";

const caracteres_especiais = ["+", "-", "*", "/", ",", "(", ")"];

var parenteses_abertos = 0;

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

    if(ultimo_caractere_inserido === caracteres_especiais[6] && parenteses_abertos === 0)
    {

        permissao = true;

    }

    return permissao;

}

function Verificar_Repeticao_Caractere_Especial()
{

    // Verificando se há na expressão matemática caracteres especiais inseridos de forma consecutiva.

    let repeticao = false;

    const caracteres_visor_calculadora = visor_calculadora.innerText;

    for(let k = 0; k < caracteres_visor_calculadora.length - 1 && !repeticao; k++)
    {

        caracteres_especiais.forEach(primeiro_caractere_especial => {

            if(caracteres_visor_calculadora[k] === primeiro_caractere_especial && primeiro_caractere_especial !== caracteres_especiais[6])
            {

                caracteres_especiais.forEach(segundo_caractere_especial => {

                    if(caracteres_visor_calculadora[k + 1] === segundo_caractere_especial && segundo_caractere_especial !== caracteres_especiais[5])
                    {

                        repeticao = true;

                    }

                });

            }

        });

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

    for(let i = 4; i < botoes_calculadora.length - 1; i++)
    {

        const botao = botoes_calculadora[i];

        botao.addEventListener("click", () => {

            const caractere_digitado = botao.innerText;

            if(parenteses_abertos - 1 < 0 && caractere_digitado === ")")
            {

                alert("Certifique-se de abrir um parênteses antes de inserir um fechamento!");

            }

            else
            {

                ultimo_caractere_inserido = caractere_digitado;
    
                if(ultimo_caractere_inserido === caracteres_especiais[5])
                {

                    parenteses_abertos++;

                }

                else if(ultimo_caractere_inserido === caracteres_especiais[6])
                {

                    parenteses_abertos--;

                }

                visor_calculadora.innerText += ultimo_caractere_inserido;

            }

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

    ultimo_caractere_inserido = ""

    parenteses_abertos = 0;

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

            parenteses_abertos = 0;

        }

        else
        {

            if(ultimo_caractere_inserido === caracteres_especiais[5])
            {

                parenteses_abertos--;

            }

            else if(ultimo_caractere_inserido === caracteres_especiais[6])
            {

                parenteses_abertos++;

            }

            ultimo_caractere_inserido = visor_calculadora.innerText.substring(qnt_caracteres_operacao - 1);

        }

    }

});

document.getElementById("calculate").addEventListener("click", () => {

    if(visor_calculadora.innerText !== "")
    {

        if(parenteses_abertos > 0)
        {

            alert("Há uma abertura de parêntese sem fechamento! Corrija a expressão matemática.");

        }

        else if(Validar_Expressao_Matematica())
        {

            const resultado = eval(visor_calculadora.innerText.replace(",", ".")).toFixed(2).toString().replace(".", ",");

            visor_calculadora.innerText = resultado;

            ultimo_caractere_inserido = "";

        }

        else
        {

            alert("Não foi possível realizar o cálculo da expressão! Possíveis causas:\n\n" +
                  "- O último caractere da expressão não é um número;\n\n" +
                  "- Há caracteres especiais consecutivos na expressão;\n\n" +
                  "- Há na expressão algum parênteses sem nenhuma expressão interna.\n\n");

        }

    }

    else
    {

        alert("Digite uma expressão matemática antes de prosseguir.");

    }

});