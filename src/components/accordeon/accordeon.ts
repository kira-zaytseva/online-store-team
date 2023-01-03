import { AccordeonObject, AnimationInterface } from './types';

const animation__config = {
    duration: 700,
    easing: 'ease-in-out',
    iterations: 1,
    fill: 'forwards',
    direction: '',
};

const EXPANDED = 'expanded';
const COLLAPSED = 'collapsed';
const ANIMATED = 'animated';

export function createAccordeon(information: Array<AccordeonObject>): HTMLDivElement {
    const accordeon: HTMLDivElement = document.createElement('div');
    accordeon.className = 'accordeon';
    const accordeonBtns: Array<HTMLButtonElement> = information.map(({ question, answer, id }) => {
        const btnId = `btn_${id}`;
        const accordeonBtn: HTMLButtonElement = document.createElement('button');
        accordeonBtn.id = btnId;
        accordeonBtn.className = 'accordeon_btn';
        const accordeonTitle: HTMLSpanElement = document.createElement('span');
        accordeonTitle.innerHTML = question;
        const accordeonContent: HTMLElement = document.createElement('section');
        accordeonContent.className = 'accordeon_content';
        accordeonContent.setAttribute('aria-labelledby', btnId);
        const accordeonAnswer: HTMLParagraphElement = document.createElement('p');
        accordeonAnswer.innerHTML = answer;
        accordeonAnswer.className = 'accordeon_answer';
        accordeon.appendChild(accordeonBtn);
        accordeon.appendChild(accordeonContent);
        accordeonBtn.appendChild(accordeonTitle);
        accordeonContent.appendChild(accordeonAnswer);
        return accordeonBtn;
    });

    function createAnimation(initialState: string = COLLAPSED): AnimationInterface {
        return {
            button: null,
            state: initialState,
            animation: null,
            init(el) {
                this.button = el;
                this.button.addEventListener('click', this.toggle.bind(this));
                this.content = accordeon.querySelector(`[aria-labelledby=${this.button.id}]`) as HTMLElement;

                if (this.state === EXPANDED) {
                    this.expand();
                }
            },
            toggle() {
                switch (this.state) {
                    case EXPANDED: {
                        this.collapse();
                        break;
                    }
                    case COLLAPSED: {
                        this.expand();
                        break;
                    }
                    default:
                        break;
                }
            },

            expand() {
                this.state = ANIMATED;
                this.animateContent(true, EXPANDED);
                this.button.classList.add('expand');
                this.button.classList.remove('collapse');
                this.button.setAttribute('aria-expanded', 'true');
            },
            collapse() {
                this.state = ANIMATED;
                this.animateContent(false, COLLAPSED);
                this.button.classList.add('collapse');
                this.button.classList.remove('expand');
                this.button.setAttribute('aria-expanded', 'false');
            },

            animateContent(isReversed, endState) {
                const config = { ...animation__config };
                config.direction = isReversed ? 'reverse' : 'normal';

                if (this.animation) {
                    this.animation.cancel();
                }

                this.animation = this.content.animate({ height: [`${this.content.scrollHeight}px`, '0px'] }, config);

                this.animation.addEventListener('finish', () => {
                    this.animation = null;
                    this.state = endState;

                    if (endState === EXPANDED) {
                        this.content.setAttribute('aria-hidden', 'false');
                    }
                    if (endState === COLLAPSED) {
                        this.content.setAttribute('aria-hidden', 'true');
                    }
                });
            },
        };
    }

    accordeonBtns.map((btn) => {
        const animate = createAnimation();
        animate.init(btn);
    });

    return accordeon;
}
