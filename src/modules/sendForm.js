const sendForm = () => {
    const form1 = document.getElementById('feedback1'),
        form2 = document.getElementById('feedback2'),
        form3 = document.getElementById('feedback3'),
        form4 = document.getElementById('feedback4'),
        form5 = document.getElementById('feedback5'),
        form6 = document.getElementById('feedback6');
    // const style = document.querySelector('style');
    // style.textContent = style.textContent + `
    //     .send_form {
    //         position:absolute;
    //         border: 4px solid #e7e7e7;
    // font-size: 20px;
    // position: absolute;
    // color: #fff;
    // z-index: 999;
    // width: 300px;
    // top: 50%;
    // border-radius: 50%;
    // left: 50%;
    // background: orange;
    // transform: translate(-50%,-50%);
    // height: 300px;
    // display: flex;
    // align-items: center;
    // font-family: sans-serif;
    //     }`

    const forms = [];
    forms.push(form1, form2, form3, form4, form5, form6);
    forms.forEach(item => {
        const phoneInput = item.querySelector('.feedback__input-input') || item.querySelector('.feedback-block__form-input_phone');
        const nameInput = item.querySelector('.feedback-block__form-input_name');
        const checkboxInput = item.querySelector('.checkbox__input');
        const btn = item.querySelector('button');

        item.addEventListener('submit', (e) => {
            e.preventDefault();
            if (phoneInput.value.trim() === '') {
                check(btn);
                return;
            }
            if (phoneInput.value.length < 18) {
                const message = document.createElement('div');
                message.classList.add('send_form');
                message.textContent = 'Номер телефона введен некорректно';
                btn.append(message);
                btn.disabled = true;
                setTimeout(() => {
                    btn.disabled = false;
                    message.parentNode.removeChild(message);
                }, 2000);
                return;
            }
            if (nameInput !== null) {
                if (nameInput.value.trim() === '') {
                    check(btn);
                    return;
                }
            }
            if (!checkboxInput.checked) {
                const message = document.createElement('div');
                message.classList.add('send_form');
                message.textContent = 'Для отправки данных, необходимо поставить галочку';
                btn.append(message);
                btn.disabled = true;
                setTimeout(() => {
                    btn.disabled = false;
                    message.parentNode.removeChild(message);
                }, 2000);
                return;
            }
            const formData = new FormData(item);

            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body).then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network is not 200');
                }
                popupThank();
                phoneInput.value = '';
                if (nameInput !== null) {
                    nameInput.value = '';
                }
            }).catch((error) => console.error(error));
        });
    });

    const check = (btn) => {
        const message = document.createElement('div');
        message.classList.add('send_form');
        message.textContent = 'Заполните ВСЕ поля ввода перед отправкой';
        btn.append(message);
        btn.disabled = true;
        setTimeout(() => {
            btn.disabled = false;
            message.parentNode.removeChild(message);
        }, 2000);
    };

    const postData = (body) => fetch('server.php', {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(body)
    });
};

export default sendForm;