//calculadora if e else aninhados dentro de uma função
function acaoBotao(){
    var valor1, valor2, resultado, operacao
    
    valor1 = prompt("digite o primeiro valor :")
    operacao = prompt("selecione sua operação :")
    valor2 = prompt("digite o segundo valor :")

    if (operacao == "+"){
        resultado = parseInt(valor1) + parseInt(valor2) 
    }
    else if(operacao == "-"){
        resultado = parseInt(valor1) - parseInt(valor2)
    }
    else if(operacao == "*"){
        resultado = parseInt(valor1) * parseInt(valor2)
    }
    else if(operacao == "/"){
        resultado = parseInt(valor1) / parseInt(valor2)
    }

    document.getElementById("paragrafo").innerText = resultado
    } 

//calculadora case
   /* function acaoBotao(){
        var valor1, valor2, resultado, operacao
        
        valor1 = prompt("digite o primeiro valor :")
        operacao = prompt("selecione sua operação :")
        valor2 = prompt("digite o segunacaoBotaodo valor :")

        switch (operacao){
            case "+":
                resultado = parseInt(valor1) + parseInt(valor2)
                break;
                
            case "-":
                resultado = parseInt(valor1) - parseInt(valor2)
                break;
            
             case "*":
                resultado = parseInt(valor1) * parseInt(valor2)
                break;
            
             case "/":
                resultado = parseInt(valor1) / parseInt(valor2)
                break;
        }
        document.getElementById("paragrafo").innerText = resultado
    } */

/*calcular o número ftorial
    function iniciar(){
        var numero, fatorial
        numero = prompt ("digite o número para calclar o fatorial : ")
        fatorial = 1
        for(contador=1; contador<=numero; contador++){
            fatorial = fatorial * contador
        }
        
        document.getElementById("paragrafo").innerText = "O fatorial de "+ numero + " é : " + fatorial
    } */

    /*var nome, limite, contador

    limite = prompt ("digite a quantidade de vezes que vai ser verificado a idade : ")
    contador = 0
    while(contador < limite){
        nome = prompt("digite o nome da pessoa : ")
        idade = prompt("digite a idade de ", nome, ": ")
        if(idade > 18)
            document.getElementById("paragrafo").innerText = nome + "você é maior de idade"
            else
                document.getElementById("paragrafo").innerText = nome + "você é menor de idade "
            contador++
    }*/

/*function iniciar(){
    var sairLoop, valor1, valor2
    do{
        valor1 = prompt("digite o primeiro valor: ")
        valor2 = prompt("digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "resultado: " + (paragrafo)
        sairLoop = prompt("deseja sair S/N")
    }
    while(sairLoop == "N")
}*/

/*<p id="paragrafo">resultado :</p>
    <button onclick="iniciar()">iniciar</button>*/