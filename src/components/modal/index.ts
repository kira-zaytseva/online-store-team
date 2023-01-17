import { Routes } from '../../types';
import { createButton } from '../../components/button';
import CartStore from '../../store/cart';

export const createModal = () => {
    const modalWindow = document.createElement('div');
    modalWindow.className = 'modal-window';
    const modalBg = document.createElement('div');
    modalBg.className = 'modal-bg';
    const modalForm = document.createElement('form');
    modalForm.className = 'modal-form';
    const onSubmit = (e: MouseEvent) => {
        e.preventDefault();
        if (
            validateName(nameInput.value) &&
            validatePhone(phoneInput.value) &&
            validateAddress(addressInput.value) &&
            validateEmail(emailInput.value) &&
            validateCardNumber(cardNumberInput.value) &&
            validateExpiration(validityInput.value) &&
            validateCvc(cvcInput.value)
        ) {
            modalForm.innerHTML = '<p>Congratulations! Purchase completed</p>';
            setTimeout(() => {
                modalWindow.remove();
                window.location.href = `${window.location.pathname}#${Routes.CatalogPage}`;
            }, 5000);
            CartStore.removeAll();
        }
    };
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
    nameInput.addEventListener('change', (e: Event) => {
        const currentElement = <HTMLElement>e.target;
        if (validateName(nameInput.value)) {
            nameInput.classList.add('valid');
            nameInput.classList.remove('invalid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: none');
        } else {
            nameInput.classList.add('invalid');
            nameInput.classList.remove('valid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: block');
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
    phoneInput.addEventListener('change', (e: Event) => {
        const currentElement = <HTMLElement>e.target;
        if (validatePhone(phoneInput.value)) {
            phoneInput.classList.add('valid');
            phoneInput.classList.remove('invalid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: none');
        } else {
            phoneInput.classList.add('invalid');
            phoneInput.classList.remove('valid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: block');
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
    addressInput.addEventListener('change', (e: Event) => {
        const currentElement = <HTMLElement>e.target;
        if (validateAddress(addressInput.value)) {
            addressInput.classList.add('valid');
            addressInput.classList.remove('invalid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: none');
        } else {
            addressInput.classList.add('invalid');
            addressInput.classList.remove('valid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: block');
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
    emailInput.addEventListener('change', (e: Event) => {
        const currentElement = <HTMLElement>e.target;
        if (validateEmail(emailInput.value)) {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: none');
        } else {
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: block');
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
    cardNumberInput.placeholder = 'xxxx xxxx xxxx xxxx';
    cardNumberInput.type = 'number';
    cardNumberInput.required = true;
    cardNumberInput.addEventListener('change', (e: Event) => {
        const currentElement = <HTMLElement>e.target;
        if (validateCardNumber(cardNumberInput.value)) {
            cardNumberInput.classList.add('valid');
            cardNumberInput.classList.remove('invalid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: none');
        } else {
            cardNumberInput.classList.add('invalid');
            cardNumberInput.classList.remove('valid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: block');
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
    validityInput.addEventListener('change', (e: Event) => {
        const currentElement = <HTMLElement>e.target;
        if (validateExpiration(validityInput.value)) {
            validityInput.classList.add('valid');
            validityInput.classList.remove('invalid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: none');
        } else {
            validityInput.classList.add('invalid');
            validityInput.classList.remove('valid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: block');
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
    cvcInput.addEventListener('change', (e: Event) => {
        const currentElement = <HTMLElement>e.target;
        if (validateCvc(cvcInput.value)) {
            cvcInput.classList.add('valid');
            cvcInput.classList.remove('invalid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: none');
        } else {
            cvcInput.classList.add('invalid');
            cvcInput.classList.remove('valid');
            currentElement.nextElementSibling?.setAttribute('style', 'display: block');
        }
    });

    const catOnBtn = document.createElement('img');
    catOnBtn.src = 'https://i.imgur.com/FKsjdhR.png';
    catOnBtn.alt = '';
    catOnBtn.className = 'cat-btn';

    modalBg.addEventListener('click', () => modalWindow.remove());

    const createErroeSpan = (): HTMLSpanElement => {
        const errorSpan = document.createElement('span');
        errorSpan.innerText = 'Error';
        errorSpan.className = 'error-span';
        return errorSpan;
    };

    modalWindow.appendChild(modalForm);
    modalWindow.appendChild(modalBg);
    modalForm.appendChild(formName);
    formName.appendChild(nameLabel);
    formName.appendChild(nameInput);
    formName.appendChild(createErroeSpan());
    modalForm.appendChild(formPhone);
    formPhone.appendChild(phoneLabel);
    formPhone.appendChild(phoneInput);
    formPhone.appendChild(createErroeSpan());
    modalForm.appendChild(formAddress);
    formAddress.appendChild(addressLabel);
    formAddress.appendChild(addressInput);
    formAddress.appendChild(createErroeSpan());
    modalForm.appendChild(formEmail);
    formEmail.appendChild(emailLabel);
    formEmail.appendChild(emailInput);
    formEmail.appendChild(createErroeSpan());
    modalForm.appendChild(paymentTitle);
    modalForm.appendChild(paymentCard);
    paymentCard.appendChild(cardNumberInfo);
    cardNumberInfo.appendChild(cardNumber);
    cardNumberInfo.appendChild(cardSystem);
    cardNumber.appendChild(cardNumberLabel);
    cardNumber.appendChild(cardNumberInput);
    cardNumber.appendChild(createErroeSpan());
    paymentCard.appendChild(validity);
    validity.appendChild(validityLabel);
    validity.appendChild(validityInput);
    validity.appendChild(createErroeSpan());
    paymentCard.appendChild(cvc);
    cvc.appendChild(cvcLabel);
    cvc.appendChild(cvcInput);
    cvc.appendChild(createErroeSpan());
    const pyamentBtn = createButton({ buttonText: 'Pay', type: 'submit', classNames: 'modal-btn', onClick: onSubmit });
    modalForm.appendChild(catOnBtn);
    modalForm.appendChild(pyamentBtn);
    document.body.appendChild(modalWindow);
};

function validateName(name: string) {
    const regex = /^(?:\b\w{3,}\b\s*){2,}$/gm;
    return regex.test(name);
}

export function validatePhone(number: string) {
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

export function validateCardNumber(number: string) {
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

export function validateCvc(number: string) {
    const regex = /^\d{3}$/gm;
    return regex.test(number);
}
