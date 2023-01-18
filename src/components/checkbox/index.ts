import { CheckboxInterface } from './types';

export const createCheckbox = ({ title, checkboxId, checkboxSet, store }: CheckboxInterface): HTMLDivElement => {
    const checkbox = document.createElement('div');
    checkbox.className = 'checkbox';
    const checkboxTitle = document.createElement('h2');
    checkboxTitle.innerText = title;
    checkboxTitle.className = 'checkbox-title';
    checkbox.appendChild(checkboxTitle);
    let index = 0;
    for (const item of checkboxSet) {
        index++;
        const checkboxItem = document.createElement('div');
        checkboxItem.className = 'checkbox-item';
        const checkboxLabel = document.createElement('label');
        checkboxLabel.className = 'checkbox-label';
        checkboxLabel.innerText = item.value;
        const onClick = (e: MouseEvent) => {
            const target = e.target as HTMLInputElement;
            const isCheked = target.checked;

            if (isCheked) {
                store.add(checkboxId, item.value);
            } else {
                store.remove(checkboxId, item.value);
            }
        };
        checkboxLabel.id = `${checkboxId}${index}`;
        const checkboxInput = document.createElement('input');
        checkboxInput.checked = item.isActive;
        checkboxInput.type = 'checkbox';
        checkboxInput.className = 'checkbox-input';
        checkboxInput.id = `${checkboxId}${index}`;
        checkboxItem.appendChild(checkboxInput);
        checkboxItem.appendChild(checkboxLabel);
        checkbox.appendChild(checkboxItem);
        checkboxInput.addEventListener('click', onClick);
    }
    return checkbox;
};
