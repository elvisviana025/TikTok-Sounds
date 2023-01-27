// 1. Função para tocar um elemento da tag "audio" do html com base no "id"
function tocaSom(idElementoAudio) {

    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.cloneNode(true).play();
    } else {
        console.log('Erro. Elemento não encontrado ou seletor inválido.')
    }
}

// 2. Executar sons com evento de "click" do mouse ou com "tab"
// armazena elementos "button" do html com id "class" ".tecla"
const listaDeTeclas = document.querySelectorAll('.tecla'); 

// iteração para 
for (let contador = 0; contador < listaDeTeclas.length; contador++) { 
    
    const tecla = listaDeTeclas[contador] // armazena um "button" da lista com base no contador

    const instrumento = tecla.classList[1]; // armazena o nome da 2ª classe do da referência "tecla"

    const idAudio = `#som_${instrumento}`; // armazena o nome do "id" do "button" (com base na classe)

    // função anônima para executar a função "tocaSom"
    // se a função fosse referenciada diretamente, seria executada direto pelo browser, o que é proibido
    tecla.onclick = function () { 
        tocaSom(idAudio)
    };

    // função anônima para executar som e manter botão vermelho com "tab"
    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}

// 3. Executar sons pressionando teclas do teclado
