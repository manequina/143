        function botaosim() { 

    var boby = document.body;


    // Verifica e remove os elementos se existirem
    removeElement('#sim');
    removeElement('#nao');
    removeElement('#texo');

    boby.style.background = '#ff3b8a';

    // Cria nova div e adiciona o texto
    let divtexo2 = createDiv('diva');
    let textobonito = createText('texo2', 'Então Minha princesa saiba q as vezes, fico pensando em como a vida ficou mais feliz desde que vc entrou nela. Cada sorriso seu ilumina meu dia, e cada palavra que você diz soa como uma melodia que eu não posso parar de ouvir. Você é a pessoa que transforma até os momentos mais simples em algo especial. Eu te amo mais a cada dia, minha princesa. Você é a razão do meu sorriso e o motivo de eu querer ser uma pessoa cada vez melhor.');

    divtexo2.appendChild(textobonito);

    // Cria e adiciona novo botão
    let novobutao = createButton('butao1', 'eu tbm te amo');
    novobutao.onclick = function() {
        window.location.href = 'https://www.tiktok.com/@raio_astronomico/video/7187902766184942853';
        alert('😍🥰😍🥰😍');
        return;
    };
    document.body.appendChild(novobutao);
}

function botaonao(){
    var boby = document.body;

    // Verifica e remove os elementos se existirem
    removeElement('#sim');
    removeElement('#nao');
    removeElement('#texo');

    boby.style.background = '#746dc9';

    // Cria e adiciona título e botões
    let titulotriste = createText('titulo3', 'N me ama?');
    document.body.appendChild(titulotriste);

    let butaofeliz = createButton('butaofeliz', 'Amo simmm');
    butaofeliz.onclick = function() {
        handleAmoSim();
    };
    document.body.appendChild(butaofeliz);

    let butaotriste = createButton('butaotriste', 'n amo');
    butaotriste.onclick = function() {
        handleNaoAmo();
    };
    document.body.appendChild(butaotriste);
}

// Funções auxiliares
function removeElement(selector) {
    var element = document.querySelector(selector);
    if (element) element.remove();
}

function createDiv(id) {
    let div = document.createElement('div');
    div.id = id;
    document.body.appendChild(div);
    return div;
}

function createText(id, text) {
    let p = document.createElement("p");
    p.id = id;
    p.innerText = text;
    return p;
}

function createButton(id, text) {
    let button = document.createElement("button");
    button.id = id;
    button.innerText = text;
    return button;
}

function handleAmoSim() {
    var boby = document.body;
    removeElement('#titulo3');
    removeElement('#butaofeliz');
    removeElement('#butaotriste');
    boby.style.background = '#ff3b8a';

    alert('To de olho viu rum');

    let emojidesconfiado = createText('emojidesconfiado', '🤨');
    document.body.appendChild(emojidesconfiado);

    let divtexo2 = createDiv('diva');
    let textobonito = createText('texo2', 'Então Minha princesa saiba q as vezes, fico pensando em como a vida ficou mais feliz desde que vc entrou nela. Cada sorriso seu ilumina meu dia, e cada palavra que você diz soa como uma melodia que eu não posso parar de ouvir. Você é a pessoa que transforma até os momentos mais simples em algo especial. Eu te amo mais a cada dia, minha princesa. Você é a razão do meu sorriso e o motivo de eu querer ser uma pessoa cada vez melhor');
    divtexo2.appendChild(textobonito);
}

function handleNaoAmo() {
    var boby = document.body;
    removeElement('#titulo3');
    removeElement('#butaofeliz');
    removeElement('#butaotriste');
    boby.style.background = '#394142';

    // Corrigindo o nome do ID do emoji
    let emojitriste = createText('emojitriste', '🥺');
    document.body.appendChild(emojitriste);

    alert('ele vai ficar sabendo😭😠');
}

    <