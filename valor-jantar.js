
const valorJantar = 100 //considere reais (R$)

const taxaGarcom = 10 

const valorTotal = valorJantar + (taxaGarcom*valorJantar/100)

const valorGarcom = taxaGarcom*valorJantar/100

console.log("a taxa do garçom é R$ " + taxaGarcom*valorJantar/100) 

console.log("o valor total da conta é R$ " + valorTotal)