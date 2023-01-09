import { createButton } from '../../components/button';

export const createModal = () => {
    const modalWindow = document.createElement('div');
    modalWindow.className = 'modal-window';
    const modalBg = document.createElement('div');
    modalBg.className = 'modal-bg';
    const modalForm = document.createElement('form');
    modalForm.className = 'modal-form';

    const formName = document.createElement('div');
    formName.className = 'form-name';
    const nameLabel = document.createElement('label');
    nameLabel.id = 'name';
    nameLabel.innerText = 'Name, Surname';
    const nameInput = document.createElement('input');
    nameInput.id = 'name';
    nameInput.className = 'name-input modal-input';
    nameInput.placeholder = 'Enter your name, surname';
    nameInput.required = true;
    nameInput.type = 'text';
    const regex = /^(?:\b\w{3,}\b\s*){2,}$/gm;
    nameInput.pattern = String(regex);
    nameInput.addEventListener('change', () => {
        console.log(validateName(nameInput.value));
        if (validateName(nameInput.value)) {
            nameInput.classList.add('valid');
            nameInput.classList.remove('invalid');
        } else {
            nameInput.classList.add('invalid');
            nameInput.classList.remove('valid');
        }
    });

    const formPhone = document.createElement('div');
    formPhone.className = 'form-phone';
    const phoneLabel = document.createElement('label');
    phoneLabel.id = 'phone';
    phoneLabel.innerText = 'Phone number';
    const phoneInput = document.createElement('input');
    phoneInput.id = 'phone';
    phoneInput.className = 'phone-input modal-input';
    phoneInput.placeholder = 'Enter your phone number';
    phoneInput.type = 'tel';
    phoneInput.required = true;
    phoneInput.addEventListener('change', () => {
        if (validatePhone(phoneInput.value)) {
            phoneInput.classList.add('valid');
            phoneInput.classList.remove('invalid');
        } else {
            phoneInput.classList.add('invalid');
            phoneInput.classList.remove('valid');
        }
    });
    phoneInput.title = 'Use format: +375333333333';

    const formAddress = document.createElement('div');
    formAddress.className = 'form-address';
    const addressLabel = document.createElement('label');
    addressLabel.id = 'address';
    addressLabel.innerText = 'Address';
    const addressInput = document.createElement('input');
    addressInput.id = 'address';
    addressInput.className = 'address-input modal-input';
    addressInput.placeholder = 'Enter your address';
    addressInput.type = 'text';
    addressInput.required = true;
    addressInput.addEventListener('change', () => {
        if (validateAddress(addressInput.value)) {
            addressInput.classList.add('valid');
            addressInput.classList.remove('invalid');
        } else {
            addressInput.classList.add('invalid');
            addressInput.classList.remove('valid');
        }
    });

    const formEmail = document.createElement('div');
    formEmail.className = 'form-email';
    const emailLabel = document.createElement('label');
    emailLabel.id = 'mail';
    emailLabel.innerText = 'Email';
    const emailInput = document.createElement('input');
    emailInput.id = 'mail';
    emailInput.className = 'mail-input modal-input';
    emailInput.placeholder = 'Enter your email';
    emailInput.type = 'email';
    emailInput.required = true;
    emailInput.addEventListener('change', () => {
        if (validateEmail(emailInput.value)) {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
        } else {
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
        }
    });

    const paymentTitle = document.createElement('span');
    paymentTitle.innerText = 'Payment method';
    const paymentCard = document.createElement('div');
    paymentCard.className = 'payment-card';

    const cardNumberInfo = document.createElement('div');
    cardNumberInfo.className = 'number-info';
    const cardNumber = document.createElement('div');
    cardNumber.className = 'card-number';
    const cardNumberLabel = document.createElement('label');
    cardNumberLabel.className = 'number-label';
    cardNumberLabel.id = 'card-number';
    cardNumberLabel.innerText = 'Card number';

    const cardNumberInput = document.createElement('input');
    cardNumberInput.className = 'number-input modal-input';
    cardNumberInput.id = 'card-number';
    cardNumberInput.max = '16';
    cardNumberInput.placeholder = 'xxxx xxxx xxxx xxxx';
    cardNumberInput.type = 'number';
    cardNumberInput.required = true;
    cardNumberInput.addEventListener('change', () => {
        if (validateCardNumber(cardNumberInput.value)) {
            cardNumberInput.classList.add('valid');
            cardNumberInput.classList.remove('invalid');
        } else {
            cardNumberInput.classList.add('invalid');
            cardNumberInput.classList.remove('valid');
            cardNumberInput.setCustomValidity('Check card number');
        }
    });
    cardNumberInput.addEventListener('keyup', () => {
        switch (cardNumberInput.value[0]) {
            case '3': {
                cardSystem.src = 'https://i.imgur.com/eJ0rnsb.jpg';
                break;
            }
            case '4': {
                cardSystem.src = 'https://i.imgur.com/AnoQOai.png';
                break;
            }
            case '5': {
                cardSystem.src = 'https://i.imgur.com/GheZvKe.png';
                break;
            }
            default: {
                cardSystem.src = 'https://i.imgur.com/XMTFa3y.jpg';
            }
        }
    });

    const cardSystem = document.createElement('img');
    cardSystem.className = 'card-system';
    cardSystem.src = 'https://i.imgur.com/XMTFa3y.jpg';

    const validity = document.createElement('div');
    validity.className = 'validity';
    const validityLabel = document.createElement('label');
    validityLabel.innerText = 'Valid through';
    validityLabel.id = 'validity';
    const validityInput = document.createElement('input');
    validityInput.id = 'validity';
    validityInput.maxLength = 5;
    validityInput.className = 'validity-input';
    validityInput.type = 'text';
    validityInput.required = true;
    validityInput.addEventListener('keyup', function (e) {
        const currentValue = validityInput.value;
        if (currentValue.length % 2 === 0 && !currentValue.includes('/') && e.code !== 'Backspace') {
            validityInput.value = currentValue + '/';
        }
    });
    validityInput.addEventListener('change', () => {
        if (validateExpiration(validityInput.value)) {
            validityInput.classList.add('valid');
            validityInput.classList.remove('invalid');
        } else {
            validityInput.classList.add('invalid');
            validityInput.classList.remove('valid');
        }
    });
    const cvc = document.createElement('div');
    cvc.className = 'cvc';
    const cvcLabel = document.createElement('label');
    cvcLabel.innerText = 'CVC';
    cvcLabel.id = 'cvc';
    const cvcInput = document.createElement('input');
    cvcInput.className = 'cvc-input modal-input';
    cvcInput.id = 'cvc';
    cvcInput.type = 'number';
    cvcInput.required = true;
    cvcInput.max = '3';
    cvcInput.addEventListener('change', () => {
        if (validateCvc(cvcInput.value)) {
            cvcInput.classList.add('valid');
            cvcInput.classList.remove('invalid');
        } else {
            cvcInput.classList.add('invalid');
            cvcInput.classList.remove('valid');
        }
    });

    const catOnBtn = document.createElement('img');
    catOnBtn.src = 'https://i.imgur.com/FKsjdhR.png';
    catOnBtn.alt = '';
    catOnBtn.className = 'cat-btn';

    modalBg.addEventListener('click', () => modalWindow.remove());

    modalWindow.appendChild(modalForm);
    modalWindow.appendChild(modalBg);
    modalForm.appendChild(formName);
    formName.appendChild(nameLabel);
    formName.appendChild(nameInput);
    modalForm.appendChild(formPhone);
    formPhone.appendChild(phoneLabel);
    formPhone.appendChild(phoneInput);
    modalForm.appendChild(formAddress);
    formAddress.appendChild(addressLabel);
    formAddress.appendChild(addressInput);
    modalForm.appendChild(formEmail);
    formEmail.appendChild(emailLabel);
    formEmail.appendChild(emailInput);
    modalForm.appendChild(paymentTitle);
    modalForm.appendChild(paymentCard);
    paymentCard.appendChild(cardNumberInfo);
    cardNumberInfo.appendChild(cardNumber);
    cardNumberInfo.appendChild(cardSystem);
    cardNumber.appendChild(cardNumberLabel);
    cardNumber.appendChild(cardNumberInput);
    paymentCard.appendChild(validity);
    validity.appendChild(validityLabel);
    validity.appendChild(validityInput);
    paymentCard.appendChild(cvc);
    cvc.appendChild(cvcLabel);
    cvc.appendChild(cvcInput);
    modalForm.appendChild(catOnBtn);
    modalForm.appendChild(createButton({ buttonText: 'Pay', type: 'submit', classNames: 'modal-btn' }));
    document.body.appendChild(modalWindow);
    // return modalWindow;
};

function validateName(name: string) {
    const regex = /^(?:\b\w{3,}\b\s*){2,}$/gm;
    return regex.test(name);
}

function validatePhone(number: string) {
    const regex = /^\+\d{9,}$/gm;
    return regex.test(number);
}

function validateAddress(address: string) {
    const regex = /^(?:\b\w{5,}\b\s*){3,}$/gm;
    return regex.test(address);
}

function validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;
    return regex.test(email);
}

function validateCardNumber(number: string) {
    const regex = /^\d{16}$/gm;
    return regex.test(number);
}

function validateExpiration(date: string) {
    const validDate = date
        .split('')
        .filter((el) => el !== '/')
        .join('');
    const regex = /^(0[1-9]|1[0-2])[0-9]{2}$/gm;
    return regex.test(validDate);
}

function validateCvc(number: string) {
    const regex = /^\d{3}$/gm;
    return regex.test(number);
}
