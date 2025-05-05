

# Desafio 2 - Documentação

## Como funciona

O projeto consiste em uma solução para coleta de informações sobre o fã de esports, com o objetivo de oferecer uma experiência personalizada. Abaixo, estão explicadas as funcionalidades principais do sistema. a solução foi feita em Mobile First (dispotivos móveis) e possui media-querie para tablet e desktop.

### Tela inicial de cadastro

- O preenchimento dos campos é obrigatório, incluindo a verificação do reCaptcha, para garantir que o usuário não é um robô. Após o preenchimento, o usuário é redirecionado ao formulário de coleta de dados.

### Formulário

No formulário, o usuário deverá preencher as seguintes categorias:

### **Dados Pessoais**

- O formulário coleta dados como Nome completo, CPF, Gênero, e outros.
- **Diferenciais**: O CPF é verificado por uma IA simulada, que utiliza a máscara de formatação e o cálculo dos dígitos verificadores do CPF. A IA está simulada, mas mostra como funcionaria uma verificação real.

### **Documentos**

- Aqui, a IA simulada faz a verificação de documentos como fotos e documentos oficiais. Se a foto e o documento forem considerados consistentes, a IA confirmará a identidade do usuário. Esta é uma simulação de IA de verificação utilizada por bancos, por exemplo.

### **Interesses**

- O usuário pode marcar seus interesses, como jogos, produtos, e-sports, etc. Esses dados são armazenados e poderiam ser usados futuramente para fornecer recomendações personalizadas, caso o sistema tivesse um algoritmo para sugerir assuntos relevantes.

### **Redes Sociais**

- Nesta área, o usuário poderia vincular suas redes sociais através de APIs como OAuth2. Infelizmente, por questões de tempo, essa funcionalidade não foi implementada.

### **Links**

- Foi implementada uma simulação de validação com IA, que identifica se o link contém palavras-chave relacionadas ao universo gamer. Essa lógica serve como exemplo de como uma IA real poderia analisar a relevância dos conteúdos vinculados ao perfil do usuário.

## Documentação do código

Todo o código do projeto está bem documentado e dividido em seções, explicando o que cada parte do código faz. A documentação está organizada para facilitar o entendimento de como cada funcionalidade foi implementada.

---

## Considerações finais

Esse projeto tem como objetivo simular uma solução de coleta e verificação de dados de fãs de e-sports. Embora algumas funcionalidades não tenham sido integradas devido a limitações de tempo, a estrutura está preparada para suportar essas integrações.

Espero que o projeto tenha ficado claro e que você consiga entender como ele funciona. Fico à disposição para dúvidas!


### Para testar a solução:

- Acesse: [https://viniciusvilla.github.io/desafio-2-furia/](https://viniciusvilla.github.io/desafio-2-furia/)

Ou acesse meu GitHub: [https://github.com/viniciusvilla/desafio-2-furia](https://github.com/viniciusvilla/desafio-2-furia)

