let kmPercorridos = 250 
let diasAlugados = 5 
const diariaCarro = 60 
const valorKmRodado = 0.15 

const precoPagar = (diasAlugados*diariaCarro) + (kmPercorridos*valorKmRodado)

console.log("o preço a pagar pelo carro alugado é R$ " + precoPagar)