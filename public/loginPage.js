'use strict'

const userForm = new UserForm();

userForm.loginFormCallback = () => {
    const formData = userForm.getData(userForm.loginForm)
    
    ApiConnector.login(formData, (response) => {
        console.log(response);

        if (response.success) {
                location.reload();

        } else {
            console.log(response.error);
        }
    })
}
userForm.registerFormCallback = () => {
    const formData = userForm.getData(userForm.loginForm)

    ApiConnector.register(data, (response) => {
        console.log(response);

        if (response.success) {
            location.reload();

        } else {
            console.log(response.error);
        }
    })
}


