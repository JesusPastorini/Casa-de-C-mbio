import './style.css';

const coin = document.querySelector('#coin');
const botao = document.querySelector('#botao');
const moedaDevolve = document.querySelector('.coinDevolve');
const listaMoeda = document.querySelector('.listaCoin');

const executaClick = () => {
const moeda = coin.value;
const url = `https://api.exchangerate.host/latest?base=${moeda}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))  

};
botao.addEventListener('click', (executaClick));