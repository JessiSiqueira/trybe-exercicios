let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function cliente(nome) {
    if(typeof nome === 'string') {
        return clientesTrybeBank.push(nome);
    } else {
        return 'O parâmetro passado deve ser uma string'
    }
}

console.log(cliente('Julio'));
console.log(clientesTrybeBank);