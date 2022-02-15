document.querySelector("#quantidade").addEventListener("click",atualizarPreco)
document.querySelector("#js").addEventListener("click",atualizarPreco)
document.querySelector("#layout-sim").addEventListener("click",atualizarPreco)
document.querySelector("#layout-nao").addEventListener("click",atualizarPreco)
document.querySelector("#prazo").addEventListener("click",function(){
    const prazo = document.querySelector("#prazo").value
    
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} Semanas`
    atualizarPreco()
})



function atualizarPreco(){
    const qtd = document.querySelector("#quantidade").value
    const temjS = document.querySelector("#js").checked
    const layoutSim = document.querySelector("#layout-sim").checked
    let preco = qtd  * 100;
    const prazo = document.querySelector("#prazo").value
    
    if(temjS){
        preco = preco * 1.1
    }
    if(layoutSim){
        preco += 500
    }

    let taxaUrgencia = 1 - prazo *0.1;
    preco = preco + (preco * taxaUrgencia)
    document.querySelector("#preco").innerHTML ="R$ " + preco.toFixed(2)
}
