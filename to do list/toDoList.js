//criação de variáveis para a lista, botão e label
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//cração de um array para as informações da lista
var todos = JSON.parse(localStorage.getItem('list_todos'))||[];//json.parse transforma em array

//função para renderizar os elementos da lista
function renderTodos() {
    listElement.innerHTML = '';//pega a lista anterior e apaga

    for (todo of todos) {
      
      //criação da elemento li da lista e atribuido texto
      var todoElement = document.createElement('li');
      var todoText = document.createTextNode(todo);
    
      //criação do elemento do botão excluir, atribuidoção do texto excluir e elemento href
      var linkElement = document.createElement('a');
      var linkText = document.createTextNode('excluir');
      linkElement.setAttribute('href', '#');
      //indexOf para apagar o alemento anterior ao botão
      var pos = todos.indexOf(todo);
      linkElement.setAttribute('onclick','deleteTodo(' + pos + ')');
      
      
      //criação de elementos filhos
      linkElement.appendChild(linkText);
      todoElement.appendChild(todoText);
      todoElement.appendChild(linkElement);
      listElement.appendChild(todoElement);
    }
}

renderTodos();//cria a lista de to do

//adicionar um alemento a lista e limpar o label
function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();

}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));//stringfy transforma um vetor em uma string
}

