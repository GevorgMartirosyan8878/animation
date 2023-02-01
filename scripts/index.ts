import {
    createElement,
    generateRandomNumber
} from "./helpers/helpers.js";

const animationArea: HTMLElement = document.querySelector('.areaOfAnimation');
const circle = createElement('div');

appendStyles(circle, {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    transition: '1.5s all',
    position: 'absolute',
    animation: 'bubble-effect 4s infinite'
})

setElemPosition(circle, generateRandomNumber(250), animationArea)

animationArea.append(circle);

type cssAttributes = Omit<Partial<CSSStyleDeclaration>, 'length' | 'parentRule'>

function appendStyles(elem: HTMLElement, styles: cssAttributes): void {
    const properties = (Object.keys(styles));

    properties.forEach((param) => {
        elem.style[param] = styles[param]
    });
}

function setElemPosition(elem: HTMLElement, position: number, elemContainer?: HTMLElement): void {
    const container = elemContainer;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    if(position >= containerWidth || position >= containerHeight) {
        elem.style.top = `${containerHeight}px`;
        elem.style.left = `${containerWidth}px`;
        return
    }
    // todo need to work on moving keyframes from css to js/ts file
    console.log('position: --->', position);
    elem.style.top = `${position}px`;
    elem.style.left = `${position}px`;
}