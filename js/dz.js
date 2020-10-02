// Remove parallax for avatar in mobile devices
const width = document.body.clientWidth;
const avatar = document.querySelector(".dz-section2_content-avatar");

if (width <= 500) {
    avatar.removeAttribute("uk-parallax");
}

// Validation script
let inputs = document.querySelectorAll("[data-rule]");

for (let input of inputs) {
    input.style.transition = ".5s";

    input.addEventListener("blur", function() {
        let rule = input.dataset.rule;
        let value = input.value;
        let check;

        switch(rule) {
            case "text":
                check = /^[a-zа-я]+$/i.test(value);
                break;
            case "email":
                check = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value);
                break;
            case "number":
                check = /^\+\d+$/g.test(value);
                break;
            case "message":
                check = /[А-яA-z]{10}/i.test(value);
                break;
        }

        if (check) {
            input.style.boxShadow = "5px 5px 0px #00b894";
        } else {
            input.style.boxShadow = "5px 5px 0px #ee5253";
        }
    });
}

// AJAX
$("#form").submit(function(event) {
    event.preventDefault();

    if ($(inputs).val() == "") {
        UIkit.notification({
            message: 'Заполните пожалуйста все поля!',
            status: 'danger',
            pos: 'top-center',
            timeout: 5000
        });
    } else {
        UIkit.notification({
            message: 'Спасибо за уделенное время =)',
            status: 'primary',
            pos: 'top-center',
            timeout: 5000
        });
        $.ajax({
            url: "mail.php",
            type: "POST",
            data: $("#form").serialize(),
            success: () => {
                UIkit.notification({
                    message: 'Заявка отправлена!',
                    status: 'primary',
                    pos: 'top-center',
                    timeout: 5000
                });
            },
            error: () => {
                UIkit.notification({
                    message: 'Заявка не отправлена!',
                    status: 'primary',
                    pos: 'top-center',
                    timeout: 5000
                });
            }
        });
    }
});

// 404 animation
// let arr = ['!', '#', '$', '%', '^', '&']; 
// let text404 = $('.text404');

// setInterval(function() {
//     for (let i = 0; i <= text404.length;  ) {
//         var rand = Math.floor(Math.random() * arr.length);
//         text404[i].innerHTML = arr[rand];
//         // text404[0].innerHTML = '4';
//         // text404[1].innerHTML = '0';
//         // text404[2].innerHTML = '4';

//         if(i >= text404.length) {
//             i = 0;
//         }
//         i++;
//     }
// }, 1000);

let arr0 = ['!', '#', '$', '%', '^', '&', '4', '4', '4']; 
let arr1 = ['!', '#', '$', '%', '^', '&', '0', '0', '0']; 
let text0 = $('#text0');
let text1 = $('#text1');
let text2 = $('#text2');

setInterval(function() {
    var rand0 = Math.floor(Math.random() * arr0.length);
    var rand1 = Math.floor(Math.random() * arr1.length);
    var rand2 = Math.floor(Math.random() * arr0.length);
    text0.html(arr0[rand0]);
    text1.html(arr1[rand1]);
    text2.html(arr0[rand2]);
}, 500);