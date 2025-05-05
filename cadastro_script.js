document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        //Validação de senhas - pega os valores dos inputs senha e confirmar senha
        const senha = document.getElementById('password').value;
        const confirmSenha = document.getElementById('confirm-password').value;

        //Verifica se as senhas são iguais.
        if (senha !== confirmSenha) {
            alert('❌ As senhas não coincidem!');
            return;
        }

        // Validação do reCAPTCHA
        const recaptchaResponse = grecaptcha.getResponse();
        if (recaptchaResponse.length === 0) {
            alert("Por favor, confirme que você não é um robô.");
            return;
        }

        // Se tudo estiver OK, redireciona
        window.location.href = "formulario.html";
    });
});