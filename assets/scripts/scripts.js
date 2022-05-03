// const NAME = prompt("E qual a sua graça?");

function getDataFromAPI() {
    const promiseAPI = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    const recentOrders = []

    promiseAPI.then( (answer) => { 
        for(let i = 0; i < answer.data.length; i++) recentOrders.push(answer.data[i]);
        console.log(answer);
        addDataOnTheScreen(recentOrders);
    });
}

function addDataOnTheScreen(recentOrders) {
    const apiRow = document.querySelector(".api-row");

    for(let i = 0; i < recentOrders.length; i++) {
        apiRow.innerHTML += `<div class="api-item ${i}">
            <img src="${recentOrders[i].image}" alt="">
            <p class="apiItemName"><strong>Criador: </strong>${recentOrders[i].owner}</p>
        </div>
        `
    }
}

function selectItem(type) {
    const type = type;
}

getDataFromAPI();