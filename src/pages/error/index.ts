import { pets } from '../../data/data';
import Page from '../../models/page';

export const enum ErrorTypes {
    NotFound = 404,
}

class ErrorPage extends Page {
    private errorType: ErrorTypes | string;

    constructor(id: string, errorType: ErrorTypes | string) {
        super(id);
        this.errorType = errorType;
    }

    createErrorPage(): HTMLElement {
        const errorSection = document.createElement('section');
        errorSection.className = 'error-section';
        const title = document.createElement('h1');
        title.innerHTML = 'Page not found';
        title.className = 'error-title';
        const petsList = document.createElement('ul');
        petsList.className = 'pets-list';
        const errorText = document.createElement('p');
        errorText.innerHTML = 'Look products for your pet';
        errorText.className = 'error-text';
        pets.forEach(({ title, link }) => {
            const petsListElement = document.createElement('li');
            petsListElement.className = 'list-item';
            const petsLink = document.createElement('a');
            petsLink.innerHTML = title;
            petsLink.href = link;
            petsLink.className = 'pets-link';
            petsList.appendChild(petsListElement);
            petsListElement.appendChild(petsLink);
        });
        const errorDogBg = document.createElement('img');
        errorDogBg.src = 'https://i.imgur.com/dru2tAG.png';
        errorDogBg.className = 'error-dog-bg';
        errorSection.appendChild(title);
        errorSection.appendChild(errorText);
        errorSection.appendChild(petsList);
        errorSection.appendChild(errorDogBg);
        return errorSection;
    }

    render() {
        this.container.append(this.createErrorPage());
        return this.container;
    }
}

export default ErrorPage;
