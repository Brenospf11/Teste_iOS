// Metodo querySelector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA';

// Busca a tag e a classe
let perClasse = (document.querySelector('p.exemplo').innerHTML = 'Mudeio texto aqui');

// Busca somente a calsse 
let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');

// Funcao chamada pelo evento onclick
const Clique = () => {
    document.querySelector('#my-span').style.background = '#CEFBBA';
};

// Metodo querySelectorAll
let listaLi = document.querySelectorAll('li');
for (i = 0; i < listaLi.length; i++) {
    listaLi[i].style.border = '1px solid #0000FF';
    listaLi[i].style.padding = '3px';
}
console.log(listaLi);

// Busca por id
let myLi = document.querySelectorAll('#my-li');
myLi.forEach((li) => (li.innerHTML = 'Mudou aqui!'));

// Busca por classe
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.background = '#E7BAFB'));

// Busca por elmento e classe
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((elemento) => (elemento.style.color = '#FFF'));