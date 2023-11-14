'use strict'

const { response } = require("express");

class UserForm {
    constructor(){
        this.loginFormCallback = this.loginFormCallback.bind(this)
        this.registerFormCallback =  this.registerFormCallback.bind(this)
    }
    
    loginFormCallback(data) {
        ApiConnector.login(data, (response) => {
            console.log(response);

            if (response.succcess) {
                location.reload();

            } else {
                console.log(response.error);
            }
        })
    }
    registerFormCallback(data) {
        ApiConnector.register(data, (response) => {
            console.log(response);

            if (response.succcess) {
                location.reload();

            } else {
                console.log(response.error);
            }
        })
    }
};

const userForm = new UserForm();