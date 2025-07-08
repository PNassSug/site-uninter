    const mensagens = [
        "Seja bemvindo a minha primeira página!",
        "Com esforço e apoio, você sempre pode se superar.",
        "Se as coisas não estão boas, sempre temos o amanhã"
    ];
    
    // botão+container
    const botaoJS = document.getElementById('botao-container');
    
    const botao = document.createElement('button');
    botao.textContent = 'Clique para ver uma mensagem!';
    
    const mensagemDiv = document.createElement('div');
    mensagemDiv.id = 'mensagem';
    mensagemDiv.style.display = 'none';
    
    // Inserir os elementos na página
    botaoJS.appendChild(botao);
    botaoJS.appendChild(mensagemDiv);
    
    // Adicionar o evento de clique
    botao.addEventListener('click', function() {
        // Escolher uma mensagem aleatória
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        
        // Exibir a mensagem
        mensagemDiv.textContent = mensagemAleatoria;
        mensagemDiv.style.display = 'block';
    });