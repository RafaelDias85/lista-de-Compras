// Selheciona o documento html e pega o Elemento onde o id = "input-item"
const inputItem = document.getElementById("input-item");

const botaoAdicionar = document.getElementById("adicionar-item");

//função de Retorno ou Função de Callback
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();

    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container")


});
