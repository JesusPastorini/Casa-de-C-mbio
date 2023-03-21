import './style.css';

const coin = document.querySelector('#coin');
const botao = document.querySelector('#botao');
const moedaTitulo = document.querySelector('.coinTitulo');
const listaMoeda = document.querySelector('.listaCoin');

const executaClick = () => {
const moeda = coin.value;
const url = `https://api.exchangerate.host/latest?base=${moeda}`;
console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => renderisaRates(data.rates))  
    moedaTitulo.innerHTML = `Valores referente a 1 ${moeda.toUpperCase()}`;
};
botao.addEventListener('click', (executaClick));

const renderisaRates = (ratess) => {
    listaMoeda.innerHTML = '';
const ratesArray = Object.entries(ratess);
console.log(ratesArray);

ratesArray.forEach((rate) => {
    const [coinName, valor] = rate;

    const li = document.createElement('li');
    li.innerHTML = `${coinName} - ${valor}`;
    listaMoeda.appendChild(li);
});
};