'use strict'

const { response } = require("express");

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
moneyManager.addMoneyCallback = (response) => {
    moneyManager.addMoneyAction( (response) =>{
        if (response.success) {
            console.log(response.data)
            ProfileWidget.showProfile(response.data)
        } else {
            console.log(response.error);
        }
    } )
}

const favoritesWidget = new FavoritesWidget();
ApiConnector.getFavorites( (response) => {
    if (response.success) {        
        favoritesWidget.clearTable()
        favoritesWidget.fillTable(response.data)
        moneyManager.updateUsersList(response.data)
    } else {
        console.log(response.error);
    }
})

favoritesWidget.addUserCallback = () => {
    ApiConnector.addUserToFavorites( data, (response) => {
        if (response.success) {      
            favoritesWidget.clearTable()
            favoritesWidget.fillTable(response.data)
            moneyManager.updateUsersList(response.data)
            favoritesWidget.setMessage(response.data)
        } else {
            favoritesWidget.setMessage(response.error)
            console.log(response.error);
        }
    } )
}

favoritesWidget.addUserCallback = () => {
    ApiConnector.removeUserFromFavorites( data, (response) => {
        if (response.success) {
            favoritesWidget.clearTable()
            favoritesWidget.fillTable(response.data)
            moneyManager.updateUsersList(response.data)
            favoritesWidget.setMessage(response.data)
        } else {
            console.log(response.error);
        }
    })
}