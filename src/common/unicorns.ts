import random from 'lodash-es/random';
import sample from 'lodash-es/sample';
import template from 'lodash-es/template';
import times from 'lodash-es/times';
import each from 'lodash-es/each';

const className = 'cornify';
const imageUrlTemplate = template('https://raw.github.com/akenn/cornify/master/images/<%= type %>/<%= id %>.gif');
const types = [
    {
        name: 'unicorn',
        count: 7,
    },
    {
        name: 'rainbow',
        count: 4,
    },
];

function getRandomImageSrc() {
    const randomType = sample(types)!;

    return imageUrlTemplate({
        type: randomType.name,
        id: random(1, randomType.count),
    });
}

function createRandomImage() {
    const img = document.createElement('img');

    img.src = getRandomImageSrc();
    img.className = className;
    img.style.top = random(100) + '%';
    img.style.left = random(100) + '%';
    img.style.position = 'fixed';
    img.style.transition = 'all .1s linear';

    img.onmouseover = function (this: any) {
        const size = Math.random() + 0.5;
        const angle = Math.random() * 15 + 1 + 'deg';
        this.style.transform = 'rotate(' + angle + ') scale(' + size + ',' + size + ')';
    };

    img.onmouseout = function (this: any) {
        this.style.transform = 'rotate(0deg) scale(1, 1)';
    };

    return img;
}

export function clear() {
    each(document.querySelectorAll('.' + className), node => node.parentNode && node.parentNode.removeChild(node));
}

export function add() {
    return document.body.appendChild(createRandomImage());
}

export function pizzazz(low: number = 1, high: number = 10) {
    times(random(low, high), add);
}
