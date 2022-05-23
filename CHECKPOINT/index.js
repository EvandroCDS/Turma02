 console.log ( `
 "Escolha sua a comida: "
     1 - Pipoca 
     2 - Macarrão
     3 - Carne
     4 - Feijão
     5 - Brigadeiro
     `)

let opcao = "Escolha sua comida";

function microondas(opcao,tempo){
if (opcao == '1'){
if (tempo >= 10 && tempo <= 19){
console.log("Prato pronto, bom apetite!!!")}
else if (tempo >= dobro(10) && tempo <=  29){
console.log("Prato pronto, bom apetite!!! Comida Queimou")
}else if (tempo >= triplo(10) ){
console.log ("Prato pronto, bom apetite!!! Kabumm")
}else if (tempo < 10 ){
console.log (" Prato pronto, bom apetite!!! Tempo insuficiente")}
}

else if (opcao == '2'){
if (tempo >= 8 && tempo <= 15 ){
console.log("Prato pronto, bom apetite!!!")
}else if (tempo >= dobro(8) && tempo <= 23 ){
console.log("Prato pronto, bom apetite!!! Comida Queimou")
}else if (tempo >= triplo(8)){
console.log ("Prato pronto, bom apetite!!! Kabumm")
}else if (tempo < 8){
console.log ("Prato pronto, bom apetite!!! Tempo insuficiente")}
}

else if (opcao =='3'){
if (tempo >= 15 && tempo <= 29){
console.log("Prato pronto, bom apetite!!!")
}else if (tempo >= dobro(15) && tempo <= 44 ){
console.log("Prato pronto, bom apetite!!! Comida Queimou")
}else if (tempo >= triplo(15)){
console.log ("Prato pronto, bom apetite!!! Kabumm")
}else if (tempo < 15){
console.log("Prato pronto, bom apetite!!! Tempo insuficiente")
}
}
else if (opcao == '4' ){
if (tempo >= 12 && tempo <= 23){
console.log("Prato pronto, bom apetite!!!")
}else if (tempo >= dobro(12) && tempo <= 35){
console.log("Prato pronto, bom apetite!!! Comida Queimou")
}else if (tempo >= triplo(12)){
console.log ("Prato pronto, bom apetite!!! Kabumm")
}else if (tempo < 12){
console.log ("Prato pronto, bom apetite!!! Tempo insuficiente")
}
}
else if (opcao == '5'){
if (tempo >= 8 && tempo <= 15){
console.log("Prato pronto, bom apetite!!!")
}else if (tempo >= dobro(8) && tempo <= 23){
console.log("Prato pronto, bom apetite!!! Comida Queimou")
}else if (tempo >= triplo(8)){
console.log ("Prato pronto, bom apetite!!! Kabumm")
}else if (tempo < 8){
console.log ("Prato pronto, bom apetite!!! Tempo insuficiente")
}
}else { 
console.log("Prato inexistente")
}


}

microondas (1,9)



function dobro (num1){
return num1*2
}

function triplo (num1){
return num1*3
}
// Boom apetite //
