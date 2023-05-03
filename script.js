// Pegar o valor 
// Gerar aleatorios 

// Gera os numeros de acordo com os criterios definidos 
function gerar(){

    // Entrada 
    let tamanho = parseInt(document.getElementById('tamanho').value)
    let quantidade = parseInt(document.getElementById('quantidade').value) 
    let maiusculo = document.getElementById('maiusculo').checked
    let especial = document.getElementById('especial').checked
    let numero = document.getElementById('numero').checked
    
    let caracteres = 'abcdefghijklmnopqrstuvwxyz'
    
    // Opções de seleção de senha 
    if (maiusculo){
        caracteres += caracteres.toUpperCase()
    }
    if (especial) {
        caracteres += '!@#$%&*()?' 
    }
    if (numero){
        caracteres += '0123456789'
    }
    
    // Loop que passa e pega aleatoriamente os valores de "caracteres" para construir a senha
    let senha = ''
    for (let qtd = 0; qtd < quantidade;qtd++){
        
        for (let len = 0; len < tamanho;len++){
            senha += caracteres[Math.floor(Math.random() * caracteres.length)]
        }
        senha += '\n'
    }
    document.getElementById('resultado').innerHTML = senha
}

// Limpa os valores digitados
function limpar(){
    document.getElementById('resultado').innerHTML = 'Senhas...'
}