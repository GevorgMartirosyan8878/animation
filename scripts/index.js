"use strict";
// import { createElement } from "./helpers/helpers";
exports.__esModule = true;
exports.createElement = void 0;
function createElement(elem) {
    return document.createElement(elem);
}
exports.createElement = createElement;
var animationArea = document.querySelector('.areaOfAnimation');
var circle = createElement('div');
appendStyles(circle, {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    transition: '1.5s all',
    position: 'absolute'
});
// circle.classList.add('circle');
setPosition(circle, generateRandomNumber(240));
circle.style.animation = 'bubble-effect 4s infinite';
animationArea.append(circle);
function generateRandomNumber(number) {
    return Math.floor(Math.random() * number);
}
function appendStyles(elem, styles) {
    var properties = (Object.keys(styles));
    properties.forEach(function (param) {
        elem.style[param] = styles[param];
    });
    // animationArea.append(elem);
}
function setPosition(elem, number) {
    elem.style.top = "".concat(number, "px");
    elem.style.left = "".concat(number, "px");
}
