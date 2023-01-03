import Page from '../../types/page';

class MainPage extends Page {
    static TextObject = {
        MainTitle: 'Main Page',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}

export default MainPage;
