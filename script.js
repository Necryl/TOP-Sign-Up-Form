const button = document.querySelector('.submitBtn');
const actualBtn = document.querySelector('#actualBtn');
const pswdElem = document.querySelector('#pswd');
const confirmElem = document.querySelector('#confirm');
const pswdErrorElem = document.querySelector('.pswdError');
const firstName = document.querySelector('#firstName');
const email = document.querySelector('#email');

function checkRequiredValid() {
    console.log('hello');
    let result = false;
    [firstName, email, pswdElem, confirmElem].forEach(item => {
        if (item.value === '') {
            result = true;
        } else if ([...document.querySelectorAll('.formControls input:invalid')].includes(item)) {
            result = true;
        }
    })
    return result;
}

button.addEventListener('click', event => {
    let pswdMatch = pswdElem.value === confirmElem.value ? true:false;
    if (pswdMatch || pswdElem.value === '' || confirmElem.value === '') {
        pswdErrorElem.style.display = 'none';
        [pswdElem, confirmElem].forEach(item => {
            item.removeAttribute('invalid');
        })
    } else {
        pswdErrorElem.style.display = 'initial';
        [pswdElem, confirmElem].forEach(item => {
            item.setAttribute('invalid', 'true');
        })
        click = false;
    }
    if (pswdMatch || checkRequiredValid()) {
        actualBtn.click();
    }
});