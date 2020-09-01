//impressão de um valor em tela
/*var nota;
nota = 100;
alert("resultado: " + nota);*/

//comentário em linha
/*comentário em bloco pode abranger mais de uma linha*/

//código recebe e imprime o valor digitado
var nome, idade;
nome = prompt("Digite seu nome: ")//leia no visualg, prompt é a janelinha
idade = prompt("Digite sua idade: ")
alert("o nome digitado foi:" + nome)//escreval no visualg 
alert("a idade digitada foi:" + idade)


/* media escolar  estrutura condicional
var nome, nota1, nota2, media;
nome = prompt("Digite o nome do aluno: ")
nota1 = prompt("Digite a primeira nota so aluno:")
nota2 = prompt("Digite a segunda nota so aluno:")

media = (parseInt(nota1) + parseInt(nota2))/2 //parseInt trasnforma uma string em um inteiro

if(media >= 60){
    alert("Aprovado " + nome)
}
else
    alert("Reprovado " + nome)*/


/* media escolar usando condicional    
var nome, nota1, nota2, passou;

passou = false;

nome = prompt("Digite o nome do aluno: ")
nota1 = prompt("Digite a primeira nota so aluno:")
nota2 = prompt("Digite a segunda nota so aluno:")

media = (parseInt(nota1) + parseInt(nota2))/2 //parseInt trasnforma uma string em um inteiro

if(media >= 60)
    passou = true;

if(passou)
    alert("Aprovado " + nome)

else
    alert("Reprovado " + nome) */

/* código de media escolar usando false
    var nome, nota1, nota2, passou;

    passou = false;
    
    nome = prompt("Digite o nome do aluno: ")
    nota1 = prompt("Digite a primeira nota so aluno:")
    nota2 = prompt("Digite a segunda nota so aluno:")
    
    media = (parseInt(nota1) + parseInt(nota2))/2 //parseInt trasnforma uma string em um inteiro
    
    if(media >= 60)
        passou = true;
    
    if(!passou && media>=70) //conjunção os dois tem que ser verdadeiro &&
                            //disjunção || ou um ou outro tem que ser verdadeiro
                            // disjunção exclusiva if (passou &&(media >=70 && media <=90))
        alert("Aprovado " + nome)
    
    else
        alert("Reprovado " + nome) */
    

/* calculadora if e else aninhados dentro de uma função
function iniciar(){
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
    } */

/* calculadora case
    function iniciar(){
        var valor1, valor2, resultado, operacao
        
        valor1 = prompt("digite o primeiro valor :")
        operacao = prompt("selecione sua operação :")
        valor2 = prompt("digite o segundo valor :")

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