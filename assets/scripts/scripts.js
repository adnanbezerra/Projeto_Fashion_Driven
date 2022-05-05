// const NAME = prompt("E qual a sua graça?");
const SHIRT_TYPE = ['t-shirt', 'top-tank', 'long'];
const COLLAR_TYPE = ['v-neck', 'round', 'polo'];
const TISSUE_TYPE = ['polyester', 'silk', 'cotton'];
const recentOrders = []
const shirt = {
    model: "",
    neck: "",
    material: "",
    owner: "NAME",
    image: "",
}

function getDataFromAPI() {
    const promiseAPI = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');

    promiseAPI.then( (answer) => { 
        for(let i = 0; i < answer.data.length; i++) recentOrders.push(answer.data[i]);
        addDataOnTheScreen();
    });
}

function addDataOnTheScreen() {
    const apiRow = document.querySelector(".api-row");

    for(let i = 0; i < recentOrders.length; i++) {
        apiRow.innerHTML += `<div class="api-item ${i}">
            <img src="${recentOrders[i].image}" alt="">
            <p class="apiItemName"><strong>Criador: </strong>${recentOrders[i].owner}</p>
        </div>
        `
    }
}

function selectItem(type, order) {
    let lastSelect = document.querySelector(`.${type}.selected`);
    if(lastSelect) {
        lastSelect.classList.toggle("selected");
    }
    console.log(lastSelect);

    order.classList.toggle("selected")

    if(type==='tissue') shirt.material = order.innerText;
    if(type==='collar') shirt.neck = order.innerText;
    if(type==='shirt') shirt.model = order.innerHTML;
}

getDataFromAPI();