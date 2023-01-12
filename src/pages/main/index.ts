import Page from '../../models/page';
import { createNavCard } from '../../components/navCard';
import { pets } from '../../data/data';

class MainPage extends Page {
    constructor(id: string) {
        super(id);
    }

    createMainPage(): HTMLElement {
        const mainSection = document.createElement('section');
        mainSection.className = 'main-section';
        const title = document.createElement('h1');
        title.innerHTML = 'Choose products for your pet';
        title.className = 'mainpage-title';
        const catImage = document.createElement('img');
        catImage.alt = '';
        catImage.src = 'https://i.imgur.com/pJp3NcT.png';
        catImage.className = 'cat-bg';
        const dogImage = document.createElement('img');
        dogImage.alt = '';
        dogImage.src = 'https://i.imgur.com/XkkbmAu.png';
        dogImage.className = 'dog-bg';
        const fishImage = document.createElement('img');
        fishImage.alt = '';
        fishImage.src = 'https://i.imgur.com/2kwchiN.png';
        fishImage.className = 'fish-bg';
        const navCards = document.createElement('div');
        navCards.className = 'mainpage-cards';
        mainSection.appendChild(title);
        pets.forEach(({ title, image, link }) => {
            navCards.appendChild(
                createNavCard({
                    cardImageLink: image,
                    cardTitle: title,
                    cardLink: link,
                })
            );
        });
        mainSection.appendChild(navCards);
        mainSection.appendChild(catImage);
        mainSection.appendChild(dogImage);
        mainSection.appendChild(fishImage);
        return mainSection;
    }

    render() {
        this.container.append(this.createMainPage());
        return this.container;
    }
}

export default MainPage;
