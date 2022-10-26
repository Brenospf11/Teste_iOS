let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', buscarItems);

// Adiciona Item
function addItem(e) {
    e.preventDefault();

    // Pega o valor do <input>
    let newItem = document.getElementById('item').value;

    // Cria novo elemento <li>
    let li = document.createElement('li');

    // Adiciona classe
    li.className = 'list-group-item';

    //adiciona o texto no novo elemento com o valor armazenado no newItem
    li.appendChild(document.createTextNode(newItem));

    // Cria o elemnto para o botao para deletar um item
    let deleteBtn = document.createElement('button');

    // Adiciona classes para o botao de deletar
    deleteBtn.className = 'btn btn-danger btn- float-end delete';

    // Acrescenta o texto no novo elemento
    deleteBtn.appendChild(document.createTextNode('x'));

    // Acrescenta o botao no elemento li
    li.appendChild(deleteBtn);

    itemList.appendChild(li); // Adiciona o novo item na lista

    form.reset(); // Limpa o formulario
}

// Funcao Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

// Funcao buscarItems
function buscarItems(e) {
    // Converte o texto digitando para minusculo
    let text = e.target.value.toLowerCase();
    // Busca todos os itens
    let items = itemList.getElementsByTagName('li');
    // busca o primeiro item da lista 
    Array.from(items).forEach(function (item) {
        // Busca o primeiro item da lista 
        let itemName = item.firstChild.textContent;
        // Busca o item na lista que comeca com o mesmo texto digitando
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'; // exibeo item
        } else {
            item.style.display = 'none'; // oculta o item
        }
    });
}