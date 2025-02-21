// carrega elementos da página antes de buscar algo
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("num-prompt")
    input.addEventListener("input", function () {
        let valor = this.value.replace(/[^0-9]/g, "")// revome qualquer caractere que não seja número
        
        this.value = valor
    } )
})




document.getElementById("meu-submit").onclick = function(e) {
    
    // evita que a página recarregue ao enviar o submit
    e.preventDefault();
}