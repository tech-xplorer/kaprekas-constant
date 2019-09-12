
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
const kaprekarsAlgo = (inputValue, subtractionResult, stepsCounter) => {
    let numArray = [];
    if(typeof inputValue === "string") {
        
    }
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
                kaprekarsAlgo(subtractionResult, subtractionResult, stepsCounter);
            }
        }
    }
    return stepsCounter;
};

//Function to create the DOM nodes.
const createDOMNodes = () => {
    if(checkUserInput() === 'less-digits') {

    }
    else if(checkUserInput() === 'digits-identical') {

    }
    else {

    }
};

//Function to set event listeners
const eventListeners = () => {
    let button = document.querySelector('button'),
        inputField = document.querySelector('input');

    button.addEventListener('click', createDOMNodes);
    inputField.addEventListener('keydown', (event) => {
        if(event.key === 'Enter') {
            createDOMNodes();
        }
    })
};

//Function to start the app...
const startApp = () => {
    eventListeners();
};

//Starting the app now...
//startApp();