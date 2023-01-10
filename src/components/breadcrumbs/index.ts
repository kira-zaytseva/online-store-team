// import { pets } from '../../data/data';
import { BreadcrumbsInterface } from './types';

export const createBreadcrumbs = ({ name, category, pet, page }: BreadcrumbsInterface): HTMLElement => {
    const breadcrumbsArr = [
        {
            title: 'Main',
            link: window.location.pathname,
        },
    ];
    const link = `${window.location.pathname}#${page}`;

    if (pet) {
        breadcrumbsArr.push({
            title: pet,
            link: `${link}?pet=${pet}`,
        });
    }

    if (category) {
        breadcrumbsArr.push({
            title: category,
            link: `${link}?pet=${pet}&category=${category}`,
        });
    }

    if (name) {
        breadcrumbsArr.push({
            title: name,
            link: '/',
        });
    }

    const breadcrumbs = document.createElement('nav');
    breadcrumbs.className = 'breadcrumbs';
    const breadcrumbsList = document.createElement('ol');
    breadcrumbsList.className = 'breadcrumbs-list';

    breadcrumbs.appendChild(breadcrumbsList);

    breadcrumbsArr.forEach(({ title, link }, index) => {
        const breadcrumbsItem = document.createElement('li');
        breadcrumbsItem.className = 'breadcrumbs-item';
        const breadcrumbsLink = document.createElement('a');
        breadcrumbsLink.className = 'breadcrumbs-link';
        breadcrumbsLink.innerHTML = title;
        const breadcrumbsSeparator = document.createElement('li');
        breadcrumbsSeparator.className = 'breadcrumbs-separator';
        breadcrumbsList.appendChild(breadcrumbsItem);
        breadcrumbsItem.appendChild(breadcrumbsLink);
        if (index !== breadcrumbsArr.length - 1) {
            breadcrumbsList.appendChild(breadcrumbsSeparator);
            breadcrumbsLink.href = link;
        } else {
            breadcrumbsLink.classList.add('breadcrumbs-item--disable');
        }
    });

    return breadcrumbs;
};
