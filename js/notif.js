const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

let submit = false;
form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    if(!password.value) {
        alert('Поле "Пароль" не заполнено');
        return;
    }

    if(!email.value) {
        alert('Поле "Почта" не заполнено');
        return;
    }

    submit = true;
    this.submit();
});

document.querySelector('#auth_submit').onclick = function notificationFunc(){
    if(submit){
        new Notification("Вы прошли авторизацию!",
            {
                icon: "images/icon.png",
                vibrate: [200,100,200],
                body: "Благодарим за прохождение авторизации, надеемся вы найдете автомобиль по вкусу!"
            });
    }
}

document.querySelector('#auth_recover').onclick = function notificationFunc(){
    new Notification("Забыли пароль?",
        {
            icon: "images/icon.png",
            vibrate: [200,100,200],
            body: "Не проблема, сейчас мы поможем вам вернуть доступ к своему аккаунту!"
        });
}

document.querySelector('#auth_registration').onclick = function notificationFunc(){
    new Notification("Желаете пройти регистрацию?",
        {
            icon: "images/icon.png",
            vibrate: [200,100,200],
            body: "Отлично, сейчас мы поможем вам пройти регистрацию, после чего вы сможете найти машину своей мечты!"
        });
}