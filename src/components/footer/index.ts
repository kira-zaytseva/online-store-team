import Component from '../../models/component';

const footerData = [
    {
        text: 'saebiz',
        link: 'https://github.com/saebiz',
    },
    {
        text: 'kira-zaytseva',
        link: 'https://github.com/kira-zaytseva',
    },
];

export class Footer extends Component {
    footer: HTMLElement;
    constructor(tagName: string, className: string) {
        super(tagName, className);
        this.footer = document.createElement(tagName);
        this.footer.className = className;
        // this.container.append(this.footer);
    }
    createFooter() {
        const footerList = document.createElement('ul');
        footerList.className = 'footer-list';
        footerData.forEach(({ text, link }) => {
            const footerItem = document.createElement('li');
            footerItem.className = 'footer-item';
            const footerLink = document.createElement('a');
            footerLink.className = 'footer-link';
            footerLink.innerText = text;
            footerLink.href = link;
            footerList.appendChild(footerItem);
            footerItem.appendChild(footerLink);
        });
        const footerYear = document.createElement('span');
        footerYear.className = 'footer-year';
        footerYear.innerText = '2023';
        const footerImgLink = document.createElement('a');
        footerImgLink.href = 'https://rs.school/js/';
        const footerImg = document.createElement('img');
        footerImg.alt = '';
        footerImg.className = 'footer-img';
        footerImg.src = 'https://i.imgur.com/LHcgm4c.png';
        this.footer.appendChild(footerList);
        this.footer.appendChild(footerImgLink);
        footerImgLink.appendChild(footerImg);
        this.footer.appendChild(footerYear);
    }

    render() {
        this.createFooter();
        return this.footer;
    }
}
