//Exercicio1 (adicionado e removendo taag usando o comendo classList.Add e calssList.Remove)
function CorAzul(){
    document.querySelector("#principal").classList.remove("Amarelo");
    document.querySelector("#principal").classList.remove("Verde");
    document.querySelector("#principal").classList.add("Azul");
}
function CorAmarelo() {
    document.querySelector("#principal").classList.remove("Azul");
    document.querySelector("#principal").classList.remove("Verde");
    document.querySelector("#principal").classList.add("Amarelo");
}
function CorVerde() {
    document.querySelector("#principal").classList.remove("Amarelo");
    document.querySelector("#principal").classList.remove("Azul");
    document.querySelector("#principal").classList.add("Verde");
}
function Limpar() {
    document.querySelector("#principal").classList.remove("Amarelo");
    document.querySelector("#principal").classList.remove("Azul");
    document.querySelector("#principal").classList.remove("Verde");
}


