// Selheciona o documento html e pega o Elemento onde o id = "input-item"
const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

//função de Retorno ou Função de Callback
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault(); //previne o comportamento padrão de um formulario

    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    listaDeCompras.appendChild(itemDaLista);

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
    });

    const data = new Date().toLocaleDateString("pt-BR");
    const dataCompleta = `${diaDaSemana} (${data})`;
    console.log(dataCompleta);
});
