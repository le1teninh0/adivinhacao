function jogomain() {
    document.addEventListener("DOMContentLoaded", function () {
        const input = document.getElementById("num-prompt");
        input.addEventListener("input", function () {
            let valor = this.value.replace(/[^0-9]/g, ""); // Remove caracteres não numéricos
            this.value = valor;
        });
    });

    let randomNumber = Math.floor(Math.random() * 20) + 1; // Gera número entre 1 e 20
    let attempts = 1;
    const maxAttempts = 6;

    function tentativas(userguess) {
        let tip = document.getElementById("tip");
        let main = document.getElementById("main");
        let resultText = document.getElementById("result-text");
       
        if (userguess < 1 || userguess > 20 || isNaN(userguess)) {
            tip.innerHTML = '<p>Insira um número válido entre 1 e 20</p>';
            return;
        }

        if (userguess === randomNumber) {
            result.style.display = "flex";  // Mostra resultado
            main.style.display = "none";   // Esconde tela principal
            resultText.innerHTML = `<h2>Parabéns! Você acertou em ${attempts} tentativas.</h2>`;
        } else {
            tip.innerHTML = `<p>${userguess < randomNumber ? "Muito baixo!" : "Muito alto!"} Tente novamente.</p>`;
            attempts++;

            if (attempts > maxAttempts) {
                result.style.display = "flex"; // Mostra mensagem final
                main.style.display = "none";  // Esconde jogo
                resultText.innerHTML = `<h2>Fim de jogo! O número correto era ${randomNumber}.</h2>`;
            }
        }
    }

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 20) + 1; // Novo número aleatório
        attempts = 1;
        document.getElementById("num-prompt").value = "";
        document.getElementById("tip").innerHTML = "";
        document.getElementById("main").style.display = "block";
        document.getElementById("result").style.display = "none";
    }

    document.getElementById("meu-submit").onclick = function (e) {
        e.preventDefault(); // Evita que a página recarregue
        let userguess = parseInt(document.getElementById("num-prompt").value);
        tentativas(userguess);
    };

    document.getElementById("reset-button").onclick = resetGame; // Botão de reset
}

jogomain();
