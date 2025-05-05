let botao = window.document.querySelector('#botao');

// Formatação e verificação dinâmica do CPF
document.querySelector('#cpf').addEventListener('input', function () {
    let cpfOriginal = this.value; // Obtém o valor digitado
    let cpfNumeros = cpfOriginal.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpfNumeros.length > 11) cpfNumeros = cpfNumeros.slice(0, 11); // Limita a quantidade de números do CPF

    // Formatação ao digitar utilizando RegEx
    let cpfFormatado = cpfNumeros;
    cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/, '$1.$2');
    cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/, '$1.$2');
    cpfFormatado = cpfFormatado.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    this.value = cpfFormatado; // Atualiza o campo de CPF com a formatação correta

    const res = document.querySelector('#res'); // Elemento para exibir o status da verificação
    const ia = document.querySelector('.area-ia-cpf'); // Área onde a IA será exibida
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // RegEx para verificar se o formato do CPF está correto

    if (cpfNumeros.length === 0) {
        res.innerHTML = ''; // Se o campo estiver vazio, limpa a área de resultados
        ia.style.display = 'none'; // Esconde a área de IA
        return;
    }

    ia.style.display = 'flex'; // Exibe a área de IA

    if (!regexCPF.test(cpfFormatado)) {
        res.innerHTML = 'IA: CPF em formato incorreto ❌, por favor digite novamente'; 
        res.style.color = 'red';
        return;
    }

    res.innerHTML = '⏳ IA analisando seu CPF...'; 
    res.style.color = 'orange';

    // Simulação de verificação por IA
    setTimeout(() => {
        if (!validarCPF(cpfNumeros)) {
            res.innerHTML = '❌ CPF inválido. Verificação com IA falhou.'; 
            res.style.color = 'red';
        } else {
            res.innerHTML = '✅ Documento verificado com sucesso! IA aprovou sua identidade.'; 
            res.style.color = 'green';
        }
    }, 1500); // Atraso para simular processamento
});

/*
Função de validação de CPF real  
Cálculo dos dígitos verificadores do CPF
*/
function validarCPF(cpf) {
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Verifica se o CPF tem 11 dígitos e não são todos iguais

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i); // Soma para o primeiro dígito verificador
    let digito1 = 11 - (soma % 11);
    if (digito1 >= 10) digito1 = 0;
    if (digito1 !== parseInt(cpf.charAt(9))) return false; // Valida o primeiro dígito verificador

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i); // Soma para o segundo dígito verificador
    let digito2 = 11 - (soma % 11);
    if (digito2 >= 10) digito2 = 0;
    return digito2 === parseInt(cpf.charAt(10)); // Valida o segundo dígito verificador
}

// Formatação Dinâmica CEP - RegEx
document.querySelector('#cep').addEventListener('input', function () {
    let cep = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos do CEP

    if (cep.length > 8){
        cep = cep.slice(0, 8); // Limita o CEP a 8 caracteres
    }  

    cep = cep.replace(/^(\d{5})(\d)/, '$1-$2'); // Formata o CEP

    this.value = cep; // Atualiza o campo com o CEP formatado
});

// Verificação de documentos (selfie e documento)
document.querySelector('#selfie').addEventListener('change', verificarArquivos);
document.querySelector('#documento').addEventListener('change', verificarArquivos);

function verificarArquivos() {
    let selfie = document.querySelector('#selfie').files[0]; // Arquivo selfie
    let documento = document.querySelector('#documento').files[0]; // Arquivo documento

    const areaIAArquivo = document.querySelector('.area-ia-arquivo p'); // Área onde a mensagem será exibida

    if (selfie && documento) {
        areaIAArquivo.textContent = '✅ Arquivos verificados com sucesso! IA aprovou sua identidade.'; // Se os arquivos foram enviados, mostra sucesso
        areaIAArquivo.style.color = 'green';
    } else {
        areaIAArquivo.textContent = '⏳ Aguardando upload dos arquivos...'; // Caso contrário, informa que está aguardando
        areaIAArquivo.style.color = 'orange';
    }
}

// Validação de link
document.querySelector('#validarLink').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do botão (enviar formulário)

    let link = document.querySelector('#link').value;
    let mensagemValidade = document.querySelector('#mensagemValidade');

    if (!link) {
        mensagemValidade.textContent = '❌ Por favor, insira um link.'; // Se o link estiver vazio, informa o erro
        mensagemValidade.style.color = 'red';
        return;
    }

    // Simulando a verificação de link relevante para o perfil (com IA)
    mensagemValidade.textContent = '⏳ IA analisando o link...'; 
    mensagemValidade.style.color = 'orange';

    // Simulação de delay para "análise da IA"
    setTimeout(() => {
        // Listar alguns sites de e-sports ou games para validar o link (simulação de relevância)
        const linksRelevantes = ['esports', 'games', 'streaming'];

        let linkValido = false;
        linksRelevantes.forEach(termo => {
            if (link.toLowerCase().includes(termo)) {
                linkValido = true;
            }
        });

        if (linkValido) {
            mensagemValidade.textContent = '✅ Link válido e relevante para e-sports e games!'; // Se o link for válido
            mensagemValidade.style.color = 'green';
        } else {
            mensagemValidade.textContent = '❌ Link não é relevante. Tente novamente.'; // Se o link não for válido
            mensagemValidade.style.color = 'red';
        }
    }, 1500); // Simula o tempo de processamento da IA
});

// Evento de click para coletar os dados do formulário
botao.addEventListener('click', (event) => {
    //event.preventDefault(); // Impede que a página recarregue

    // X ---- Dados Pessoais ---- X
    let nome = document.querySelector('#nome').value;
    let genero = document.querySelector('#genero').value;

    // Limpa a formatação de CPF
    let cpf = document.querySelector('#cpf').value.replace(/\D/g, '');

    let estado = document.querySelector('#estado').value;
    let bairro = document.querySelector('#bairro').value;

    // Limpa a formatação de CEP
    let cep = document.querySelector('#cep').value.replace(/\D/g, '');

    // X ---- Interesses ---- X
    let interessesMarcados = [];
    document.querySelectorAll('input[name="interesse"]:checked').forEach((checkbox) => {
        interessesMarcados.push(checkbox.value);
    });

    // X ---- Redes Sociais ---- X
    let instagram = document.querySelector('#insta').value;
    let twitter = document.querySelector('#twitter').value;
    let facebook = document.querySelector('#face').value;

    // Links
    let link = document.querySelector('#link').value;

    // Exibe os dados no console para fins de depuração
    console.log('Nome:', nome);
    console.log('Gênero:', genero);
    console.log('CPF:', cpf);
    console.log('Estado: ', estado);
    console.log('Bairro: ', bairro);
    console.log('CEP: ', cep);
    console.log('Interesses selecionados:', interessesMarcados);
    console.log('Instagram: ', instagram);
    console.log('Twitter: ', twitter);
    console.log('Facebook: ', facebook);
    console.log('Link: ', link);
});