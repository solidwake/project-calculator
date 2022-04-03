//DOM Elements
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const displayElement = document.querySelector('.display');

const acElement = document.querySelector('.ac');
const pmElement = document.querySelector('.pm');
const percentElement = document.querySelector('.percent');

const additionElement = document.querySelector('.addition');
const subtractionElement = document.querySelector('.subtraction');
const multiplicationElement = document.querySelector('.multiplication');
const divisionElement = document.querySelector('.division');
const equalElement = document.querySelector('.equal');

const decimalElement = document.querySelector('.decimal');
const num0Element = document.querySelector('.number-0');
const num1Element = document.querySelector('.number-1');
const num2Element = document.querySelector('.number-2');
const num3Element = document.querySelector('.number-3');
const num4Element = document.querySelector('.number-4');
const num5Element = document.querySelector('.number-5');
const num6Element = document.querySelector('.number-6');
const num7Element = document.querySelector('.number-7');
const num8Element = document.querySelector('.number-8');
const num9Element = document.querySelector('.number-9');
const numElementArray = [
    num0Element, num1Element, num2Element, num3Element, num4Element, 
    num5Element, num6Element, num7Element, num8Element, num9Element
];


//Functions
const getDisplayValue = () => displayElement.textContent.split(',').join('');

const getDisplayNumber = () => {
    return parseFloat(getDisplayValue());
};

const setDisplayValue = (valueString) => {
    if (valueString[valueString.length - 1] === '.') {
        displayElement.textContent += '.';
        return;
    }

    const [wholeNumString, decimalNumString] = valueString.split('.');
    if (decimalNumString) {
        displayElement.textContent = parseFloat(wholeNumString).toLocaleString() + '.' + decimalNumString;
    } else {
        displayElement.textContent = parseFloat(wholeNumString).toLocaleString();
    }
};

const handleNumClick = (numString) => {
    const currentDisplayString = getDisplayValue();
    if (currentDisplayString === '0') {
        setDisplayValue(numString);   
    } else {
        setDisplayValue(currentDisplayString + numString);
    }
};

//Add Event Listeners to functions
acElement.addEventListener('click', () => {
    setDisplayValue('0');
});
pmElement.addEventListener('click', ()=> {
    const currentNumValue = getDisplayNumber();
    const currentDisplayString = getDisplayValue();
    if (currentDisplayString === '-0') {
        setDisplayValue('0');
        return;
    }
    if (currentNumValue >= 0) {
        setDisplayValue('-' + currentDisplayString);
    } else {
        setDisplayValue(currentDisplayString.substring(1));
    }
});
percentElement.addEventListener('click', () => {
    const currentNumValue = getDisplayNumber();
    const newNumValue = currentNumValue / 100;
    setDisplayValue(newNumValue.toString());
});


//Add Event Listeners to numbers and decimal
for (let i = 0; i < numElementArray.length; i++) {
    const numElement = numElementArray[i];
    numElement.addEventListener('click', () => {
        handleNumClick(i.toString());
    });
}
decimalElement.addEventListener('click', () => {
    const currentDisplayString = getDisplayValue();
    if (!currentDisplayString.includes('.')) {
        setDisplayValue(currentDisplayString + '.');
    }
});


//Set up the time
const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (currentHour > 12) {
        currentHour -= 12;
    } else if (currentHour == 0) {
        currentHour += 12;
    }

    hourElement.textContent = currentHour.toString();
    minuteElement.textContent = currentMinute.toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();