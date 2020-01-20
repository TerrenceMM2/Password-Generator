const button = document.getElementById("generate");
const display = document.getElementById("results");
const copy = document.getElementById("copy");
const copies = document.getElementById("copied");

// Criteria Elements
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const special = document.getElementById("special");
const slider = document.getElementById("slider");

// Available Characters
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const specialChars = "!@#$%^&*";

// Function to change page value shown based on slider range
const rangeValue = () => {
    let newValue = slider.value;
    const target = document.getElementById("range-value");
    target.innerHTML = newValue;
}

slider.addEventListener("input", rangeValue);

button.onclick = () => {
    let criteria = [];
    let generatedArray = [];

    if (lowercase.checked) {
        addToArray(lowerChars, criteria);
    };

    if (uppercase.checked) {
        addToArray(upperChars, criteria);
    };

    if (numbers.checked) {
        addToArray(numberChars, criteria);
    };

    if (special.checked) {
        addToArray(specialChars, criteria);
    };

    randomizer(criteria, generatedArray, slider.value);

    display.innerHTML = generatedArray
        .join('')
        .toString();
};

copy.onclick = () => {
    let value = document
        .getElementById("results")
        .innerHTML;
    copyToClipboard(value);
    animateCSS("#copy", "heartBeat")
}

const addToArray = (str, arr) => {
    for (var i = 0; i < str.length; i++) {
        arr.push(str.charAt(i));
    };
};

const randomizer = (arr, arr2, num) => {
    for (var i = 0; i < num; i++) {
        let val = Math.floor(Math.random() * arr.length) + 1;
        arr2.push(arr[val])
    };
};

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document
        .body
        .appendChild(el);
    el.select();
    document.execCommand('copy');
    document
        .body
        .removeChild(el);
};

const animateCSS = (element, animationName, callback) => {
    const node = document.querySelector(element)
    node
        .classList
        .add('animated', animationName)

    function handleAnimationEnd() {
        node
            .classList
            .remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') 
            callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}