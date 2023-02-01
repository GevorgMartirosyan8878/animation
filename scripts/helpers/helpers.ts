export function createElement(elem: string): HTMLElement {
    return document.createElement(elem);
}

export function generateRandomNumber(number: number): number {
    return Math.floor(Math.random() * number)
}