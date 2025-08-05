/* /*****************************************************************************************************
 * Objetivo: Realizar o calculo de Juros compostos
 * Autor: André Roberto Tavares
 * Data: 05/08/2025
 * Versão: 1.0
 * ***************************************************************************************************/

//Import da biblioteca para fazer entrada de dados via terminal
var readline = require ('readline') 

//Criando um objeto de entrada de dados para captar ou printar dados via terminal 
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entrada de dados do nome do cliente
entradaDeDados.question('Digite o nome do cliente: ', function(nome){
    let nomeCliente = String(nome).toUpperCase()

    if(nomeCliente == ''){
        console.log('ERRO: O campo nome não pode ser vazio!!!')
        entradaDeDados.close()

// Entrada de dados do nome do produto
}else{
    entradaDeDados.question('Digite o nome do Produto', function(nome){
        let nomeProduto = String(nome).toUpperCase()
        if(nomeProduto == ''){
            console.log('ERRO: O campo nome do produto não pode ser vazio')
            entradaDeDados.close
        }else{
            // Entrada de dados do juros anual
        entradaDeDados.question('Insira a taxa de juros anual em percentual: ', function(jurosAnual){
            let jurosAnual = jurosAnual

            if(jurosAnual == '' || Number(jurosAnual) < 0 {
                entradaDeDados.close()
        }else{
            // Entrada de dados do juros anual
        entradaDeDados.question('Insira o número de vezes que os juros são compostos por ano:' , function(jurosComposto){
            let jurosComposto = jurosComposto

            if(jurosComposto == '' || Number(jurosComposto) < 0 {
                entradaDeDados.close()
    }
}

})
