// 1. Função para tocar um elemento da tag "audio" do html com base no "id"
function tocaSom(idElementoAudio) {

    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.cloneNode(true).play();
    } else {
        console.log('Erro. Elemento não encontrado ou seletor inválido.')
    }
}

// 2. Executar sons a partir de eventos
// armazena elementos "button" do html com id "class" ".tecla" em um array
const listaDeTeclas = document.querySelectorAll('.tecla'); 

// iteração para adicionar escutadores de eventos (on click, onkeydown) a cada elemento do array 
for (let contador = 0; contador < listaDeTeclas.length; contador++) { 
    
    const tecla = listaDeTeclas[contador] // armazena um "button" da lista com base no contador

    const instrumento = tecla.classList[1]; // armazena o nome da 2ª classe do da referência "tecla"

    const idAudio = `#som_${instrumento}`; // armazena o nome do "id" do "button" (com base na classe)

    // adicionando escutadores nos elementos do array
    tecla.onclick = function () {     
        // função anônima para executar a função "tocaSom"
        // se a função fosse referenciada diretamente, seria executada direto pelo browser, o que é proibido
        tocaSom(idAudio)
    };

    tecla.onkeydown = function (evento) {
        // função anônima para executar som e manter botão vermelho com "tab"
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }

    }

    tecla.onkeyup = function () {
        // função anônima para retornar cor branca ao botão
        tecla.classList.remove('ativa')
    }

}
