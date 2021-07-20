function trocar(){
    if (document.querySelector("button").classList.contains("principal")){
        document.querySelector("button").classList.remove("principal");
        document.querySelector("button").classList.add("principal1");
     
    }
    else{
        document.querySelector("button").classList.remove("principal1");
        document.querySelector("button").classList.add("principal"); 
       
    }
}


