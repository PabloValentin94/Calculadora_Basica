function Insert_Number(number)
{

    console.log("Adicionando o número: " + number);

    document.getElementById("calculation").innerHTML += number;

}

function Insert_Symbol(symbol)
{

    // A condição não está funcionando.

    /*var valor = document.getElementById("calculation").innerHTML;

    if(valor)
    {

        if(valor.substring(valor.length, 0) == "+" || valor.substring(valor.length, 0) == "-" 
        || valor.substring(valor.length, 0) == "x" || valor.substring(valor.length, 0) == "/")
        {

            if(valor.substring(valor.length - 1, 0) == "+" || valor.substring(valor.length - 1, 0) == "-" 
            || valor.substring(valor.length - 1, 0) == "x" || valor.substring(valor.length - 1, 0) == "/")
            {

                console.log("Um símbolo já foi adicionado! Tente um número.");

            }

        }

        else
        {

            console.log("Adicionando a operação/símbolo: " + symbol);

            document.getElementById("calculation").innerHTML += symbol;

        }

    }

    else
    {

        console.log("Erro!");

        alert("Erro!");

    }*/

    console.log("Adicionando a operação: " + symbol);

    document.getElementById("calculation").innerHTML += symbol;

}

function Remove()
{

    var valor = document.getElementById("calculation").innerHTML;

    console.log("Removendo um campo.");

    document.getElementById("calculation").innerHTML = valor.substring(0, valor.length - 1);

}

function Delete()
{

    console.log("Limpando o display.");

    document.getElementById("calculation").innerHTML = "";

}

function Calculate()
{

    var operation = document.getElementById("calculation").innerHTML.replace("x", "*");

    if(operation)
    {

        var resultado = eval(operation.replace(",", "."));

        document.getElementById("calculation").innerHTML = resultado;

        console.log("Calculando... Resultado = " + resultado);

    }

    else
    {

        console.log("Não foi possível efetuar o cálculo.");

        alert("Erro! Não foi possível efetuar o cálculo.");

    }

}