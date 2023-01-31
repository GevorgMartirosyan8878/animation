import { createElement } from "./helpers/helpers";

const animationArea: HTMLElement = document.querySelector('.areaOfAnimation');
const circle = createElement('div');

appendStyles(circle, {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    transition: '1.5s all',
    position: 'absolute',
})

// circle.classList.add('circle');

setPosition(circle, generateRandomNumber(240))

circle.style.animation = 'bubble-effect 4s infinite';
animationArea.append(circle);

function generateRandomNumber(number: number): number {
    return Math.floor(Math.random() * number)
}

type cssAttributes = Omit<Partial<CSSStyleDeclaration>, 'length' | 'parentRule'>

function appendStyles(elem: HTMLElement, styles: cssAttributes): void {
    const properties = (Object.keys(styles));

    properties.forEach((param) => {
        elem.style[param] = styles[param]
    });

    // animationArea.append(elem);
}

function setPosition(elem: HTMLElement, number: number): void {
    elem.style.top = `${number}px`;
    elem.style.left = `${number}px`;
}