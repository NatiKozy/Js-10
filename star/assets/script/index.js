const button = document.querySelector('#btn');
const btnContainer = document.querySelector('.btn_container');

function calculateTotalPrice(quantity = 2, price = 15000000) {
    const result = quantity*price;
    const formattedResult = result.toLocaleString('ru-RU');
    return formattedResult;
}

function showMessage() {
    alert(`Стоимость покупки: ${calculateTotalPrice(4,5500)} рублей`);
    const divMessage = document.createElement('div');
    divMessage.classList.add('message')
    divMessage.innerHTML =
    `Стоимость покупки: ${calculateTotalPrice(4,5500)} рублей`;
    btnContainer.append(divMessage);

}

button.addEventListener('click', showMessage);

