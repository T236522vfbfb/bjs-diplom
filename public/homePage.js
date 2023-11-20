'use strict'
const logoutButton = new LogoutButton();
logoutButton.action = () => {
    ApiConnector.logout( (response) => {
        if (response.success) {
            location.reload();
        } else {
            console.log(response.error);
        }
    })
}

ApiConnector.current( (response) => {
    if (response.success) {
        ProfileWidget.showProfile(response.data)
    } else {
        console.log(response.error);
    }
})

ApiConnector.getStocks( (response) => {
    const ratesBoard = new RatesBoard();
    if (response.success) {        
        ratesBoard.clearTable()
        ratesBoard.fillTable(response.data)
    } else {
        console.log(response.error);
    }
})

const moneyManager = new MoneyManager();
moneyManager.addMoneyCallback = () => {
    moneyManager.addMoneyAction()

    moneyManager.addMoneyCallback( (response) =>{
        if (response.success) {
            console.log(response.data)
            ProfileWidget.showProfile(response.data)
        } else {
            console.log(response.error);
        }
    } )
}