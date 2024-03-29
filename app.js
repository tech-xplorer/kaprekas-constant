//Define global variables we will modify later
let stepsCounter = 0,
    subtractionResult = 0,
    biggestNumber = 0,
    smallestNumber = 0,
    inputField = document.querySelector('input');
//Function to verify user input
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
const createDOMNodes = (condition) => {
    //creating the dynamic DOM nodes
    //clearing the DOM...
    let nodeToClear = document.querySelector('main div').firstChild;
    nodeToClear.remove();

    let div = document.createElement('div');
    let appendPosition = document.querySelector('div#main-div');
    appendPosition.appendChild(div);
    if(condition === 'less-digits') {
        let p = document.createElement('p');
        let innerHtml = 'Oops!<br>Your number should be four-digit!';

        //p.appendChild(innerHtml);
        p.insertAdjacentHTML('beforeend', innerHtml);
        div.appendChild(p);
    }
    else if(condition === 'digits-identical') {
        let p = document.createElement('p');
        let innerHtml = 'Oops!<br>Your number should have at least<br>two none-identical digits!';

        //p.appendChild(innerHtml);
        p.insertAdjacentHTML('beforeend', innerHtml);
        div.appendChild(p);
    }
    else {

        return div;
    }
}

//Function to run the Kaprekar's Constant algorithm.
const kaprekarsAlgo = (numberValue) => {
    let stringOfNumbers = '' + numberValue, //conv numberValue param into string...

        //Convert stringOfNumbers into array for sorting
        arrayOfNumbers = stringOfNumbers.split('');

    //Sort array in deescending order...
    //Slice creates a copy of original array so that it is not modified by sort...
    let biggestArray = arrayOfNumbers.slice().sort((a, b) => {
        return(b-a);
    });
    //Sort original array in ascending order...
    let smallestArray = arrayOfNumbers.slice().sort((a, b) => {
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
             let p = document.createElement('p');
             let innerHtml = `Step ${stepsCounter}: ${biggestNumber} - ${smallestNumber} = ${subtractionResult}`;
             //p.innerHTML = innerHtml;
             p.insertAdjacentHTML('beforeend', innerHtml);
             createDOMNodes('all-good').appendChild(p);
        }
        let p = document.createElement('p');
        let innerHtml = `Yesss!<br>Took your number ${stepsCounter} steps to reach its Kaprekar's constant!<br> Have a look.`;

        //p.innerHTML = innerHtml;
        p.insertAdjacentHTML('beforeend', innerHtml);
        let div = document.querySelector('main div div');
        div.insertBefore(p, div.childNodes[0]);
    }
};

//Function to set event listeners
const eventListeners = () => {
    let button = document.querySelector('div button'),
        inputField = document.querySelector('div input');

    inputField.addEventListener('keyup', (event) => {
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