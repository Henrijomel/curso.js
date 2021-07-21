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

//Exercicio2: Verificar se a lista de class de uma taag se já possue uma determinada class caso sim remover e adicionar outra caso não fazer um imverso.
function trocar(){
    if (document.querySelectorAll("button")[4].classList.contains("preto")) {
        document.querySelectorAll("button")[4].classList.remove("preto");
        document.querySelectorAll("button")[4].classList.add("branco"); 
    }
    else{
            document.querySelectorAll("button")[4].classList.add("preto");
            document.querySelectorAll("button")[4].classList.remove("branco"); 
    }
}
// exercicio3 : Definição de função sem paramtro e sem valor de retorno.
function alterar(){
    document.getElementById("titulo").innerHTML="Alterei o titulo";
    document.getElementById("campo").value ="Alterei o campo";
}
alterar()

// Definição de uma função com um parametro ex:
function mudar(titulo){
    document.getElementById("MudarTitulo").innerHTML= titulo;
    document.getElementById("texto").value= titulo;
  
}

// Definição de função com mais parametros ex:
function soma (x, y){
    let valor = x + y;
    document.getElementById("soma").value = valor;
  
}
soma(20, 5);
// Definação de função com valor de retorno ex:
function razão(x, y){
    let quoiciente = x/y;
    return(quoiciente);
}
function TrocarAnimal(imagemAnimal, nomeAnimal){
    document.querySelector(".imagem").setAttribute("src", 'imagem/'+imagemAnimal);
    document.querySelector(".imagem").setAttribute("data-animal", nomeAnimal);
}
function NomeAnimal(){
    let nome = document.querySelector(".imagem").getAttribute("data-animal");
   
    alterar(nome)
}
