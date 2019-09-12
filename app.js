
//Function to verify user input.
const checkUserInput = () => {
    let userInput = document.querySelector('input').value;

    if(userInput.length < 4) {
        return 'less-digits';
    }
    else if(userInput[0] === userInput[1] && userInput[0] === userInput[2] && userInput[0] === userInput[3]) {
        return 'digits-identical';
    }
    else {
        return 'all-good';
    }
};

//Function to run the Kaprekar's Constant algorithm.
const kaprekarsAlgo = (numberValue, subtractionResult, stepsCounter) => {
    let stringOfNumbers = '' + numberValue,
        bigNumbersString = '',
        smallNumbersString = '',
        arrayOfNumbers = [];
    for(let i = 0; i < stringOfNumbers.length; i++) {
        arrayOfNumbers.push(+stringOfNumbers[i]);
    }

    let biggestArray = arrayOfNumbers.sort((a, b) => {
        return(b-a);
    });
    let smallestArray = arrayOfNumbers.sort((a, b) => {
        return(a-b);
    });

    biggestArray.forEach((item) => {
        bigNumbersString += item;
    });
    biggestNumber = (+bigNumbersString);

    smallestArray.forEach((item) => {
        smallNumbersString += item;
    });
    smallestNumber = (+smallNumbersString);

    subtractionResult = biggestNumber - smallestNumber;
    stepsCounter += 1;
};

//Function to generate the number of steps taken, etc...
const generateStepsTaken = () => {
    let userInput = document.querySelector('input').value,
        stepsCounter = 0,
        subtractionResult = 0,
        kaprekarsConstant = 6174;
   
    if(checkUserInput() === 'all-good') {
        while(subtractionResult !== kaprekarsConstant) {
            if (stepsCounter === 0) {
                kaprekarsAlgo(userInput, stepsCounter);
            }
            else {
                kaprekarsAlgo(subtractionResult, stepsCounter);
            }
        }
    }
    return stepsCounter;
};

//Function to create the DOM nodes.
const createDOMNodes = () => {
    console.log('hello');
};

//Function to set event listeners
const eventListeners = () => {
    let button = document.querySelector('div button'),
        inputField = document.querySelector('div input');

    button.addEventListener('click', createDOMNodes);
    inputField.addEventListener('keydown', (event) => {
        if(event.key === 'Enter') {
            createDOMNodes();
        }
    })
    console.log('hello');
};

//Function to start the app...
const startApp = () => {
    eventListeners();
    console.log('hello');
};

//Starting the app now...
startApp();