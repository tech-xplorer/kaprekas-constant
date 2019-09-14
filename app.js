//Define global variables we will modify later
let stepsCounter = 0,
    subtractionResult = 0,
    biggestNumber = 0,
    smallestNumber = 0;
//Function to verify user input. Preventing all non-integer values
const checkUserInput = () => {
    let condition = '';
        if (inputField.value.length < 4) {
            condition = 'less-digits';
        }
        else if (inputField.value[0] === inputField.value[1] && 
            inputField.value[0] === inputField.value[2] && 
            inputField.value[0] === inputField.value[3]) {
            condition = 'digits-identical';
        }
        else {
            condition = 'all-good';
        }
    return condition;
};

//Function to create dynamic DOM Nodes
const createDOM = (condition) => {
    //creating the dynamic DOM nodes
    if(condition === 'less-digits') {
        
    }
    else if(condition === 'digits-identical') {

    }
    else {

    }
}

//Function to run the Kaprekar's Constant algorithm.
const kaprekarsAlgo = (numberValue, subtractionResult) => {
    let stringOfNumbers = '' + numberValue, //conv numberValue param into string...

        //Convert stringOfNumbers into array for sorting
        arrayOfNumbers = stringOfNumbers.split('');

    //Sort array in deescending order...
    //Slice creates a copy of original array so that it is not modified by sort...
    let biggestArray = arrayOfNumbers.slice().sort((a, b) => {
        return(b-a);
    });
    //Sort original array in ascending order...
    let smallestArray = arrayOfNumbers.sort((a, b) => {
        return(a-b);
    });
    //use parseint and join to convert sorted arrays into numbers
    smallestNumber = parseInt(smallestArray.join(''));
    biggestNumber = parseInt(biggestArray.join(''));

    subtractionResult = biggestNumber - smallestNumber;
    return subtractionResult; //this will be re-used later by this function.
};

//Function to append nodes to the DOM
const appendDOMNodes = () => {
    //clearing the DOM...

    let userInput = document.querySelector('input').value;

    if(checkUserInput() === 'less-digits') {
        createDOMNodes(checkUserInput());
    }
    else if(checkUserInput() === 'digits-identical') {
        createDOMNodes(checkUserInput());
    }
    else {
        while(subtractionResult !== 6174) {
            if(subtractionResult === 0) {
                kaprekarsAlgo(userInput);
            }
            else {
                kaprekarsAlgo(subtractionResult);
            }
            stepsCounter++;
            //Dom nodes...Create global 
            //create the <p> elements and append to the Div returned by the nodes function.


        }
        //Appending the results to the DOM manually

    }
};

//Function to set event listeners
const eventListeners = () => {
    let button = document.querySelector('div button'),
        inputField = document.querySelector('div input');

    inputField.addEventListener('keydown', (event) => {
        if (!Number.isInteger(+inputField.value) && (event.key !== 'Backspace' || event.key !== 'Delete' ||
            event.key !== 'Tab' || event.key !== 'Arrow Left' ||
            event.key !== 'Arrow Right' || event.key === 'Enter')) {
            event.preventDefault();
        }
        else if (event.key === 'Enter' && event.target.value !== ''){
            appendDOMNodes();
        }
    });

    button.addEventListener('click', appendDOMNodes);
};

//Function to start the app...
const startApp = () => {
    eventListeners();
};

//Starting the app now...
startApp();



/*
NOTES
append leading zeroes to result if its less tha four digits
the node function will append every div to the DOM...

*/