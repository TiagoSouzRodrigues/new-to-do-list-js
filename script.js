const button = document.querySelector(".btn-task");
const input = document.querySelector(".task");
const listaCompleta = document.querySelector(".list-task");

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
  if(input.value == ''){
    alert('Insira um texto');
  }else{minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false,
  });
  input.value = "";
  mostrarTarefas();
}
  
  

}

function mostrarTarefas() {
  let novaLi = "";

  minhaListaDeItens.forEach((item, posicao) => {
    novaLi =
      novaLi +
      `
        <li class="task-item ${item.concluida && "done"}">
        <img class="check" src="img/check.png" alt="" onclick ="concluirTarefa(${posicao})"/><img class="check-gray" src="img/check-gray.png" alt="" onclick ="concluirTarefa(${posicao})"/>${
        item.tarefa
      }<img src="img/trash.png.png" alt="" onclick =" deletarItem(${posicao})"/>
      </li>
        `;
  });

  listaCompleta.innerHTML = novaLi;

  localStorage.setItem("lista", JSON.stringify(minhaListaDeItens));
}

function concluirTarefa(posicao) {
  minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;

  mostrarTarefas();
}

function deletarItem(posicao) {
  minhaListaDeItens.splice(posicao, 1);

  mostrarTarefas();
}

function recarregarTarefas() {
  const tarefasDoLocalStorage = localStorage.getItem("lista");

  if (tarefasDoLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage);
  }

  mostrarTarefas();
}

recarregarTarefas();
button.addEventListener("click", adicionarNovaTarefa);
document.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        adicionarNovaTarefa()
    }
})


