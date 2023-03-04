function Insert_Number(number)
{

    console.log("Adicionando o número: " + number);

    document.getElementById("calculation").innerHTML += number;

}

function Insert_Symbol(symbol)
{

    /*var valor = document.getElementById("calculation").innerHTML;

    if(valor == "")
    {



    }

    else
    {

        if(valor.substring(valor.length, 0) == "+" || valor.substring(valor.length, 0) == "-" 
        || valor.substring(valor.length, 0) == "x" || valor.substring(valor.length, 0) == "/")
        {



        }

        else
        {

            console.log("Adicionando a operação: " + symbol);

            document.getElementById("calculation").innerHTML += symbol;

        }

    }*/

    console.log("Adicionando a operação: " + symbol);

    document.getElementById("calculation").innerHTML += symbol;

}

function Remove()
{

    var valor = document.getElementById("calculation").innerHTML;

    document.getElementById("calculation").innerHTML = valor.substring(0, valor.length - 1);

}

function Delete()
{

    console.log("Deletando toda a operação.");

    document.getElementById("calculation").innerHTML = "";

}

function Calculate()
{

    var operation = document.getElementById("calculation").innerHTML;

    if(operation)
    {

        resultado = eval((operation.replace(",", ".").replace("x", "*")));

        document.getElementById("calculation").innerHTML = resultado;

        console.log("Calculando... Resultado = " + resultado.replace(".", ","));

    }

    else
    {

        console.log("Não foi possível efetuar o cálculo.");

    }

}