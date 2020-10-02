const question = document.getElementById('question');
const choiceElement = document.getElementById('choice1');
const choiceElement2 = document.getElementById('choice2');
var scenario = 0;  //scenario tracker

//add an event handler to the 'click' event on the button
//each function only supports one line, add extra listeners to cover multiple events per click
choiceElement.addEventListener('click', function() {
       choiceElement.setAttribute(choiceElement.style.backgroundImage = "");
    })

//add a defined function instead of an anonymous function as an event
//don't include parenthesis in the function name or the return value is used instead of attaching the event
choiceElement.addEventListener('click', displayChoices);
choiceElement2.addEventListener('click', displayChoices2);
question.addEventListener('click', displayScenario);

//function to change scenarios
function displayChoices() {
    switch(scenario) {
        case 0:     question.innerText = "What should Karen do?";
                    choiceElement.innerText = "Get out of the car and threaten to sue Kathy."; //change button text based on current scenario
                    choiceElement2.innerText = "Hand Kathy a $20 and tell her that should be enough to cover that \"ding\.";
                    scenario = 1; //adjust to new scenario
                    break; //exit switch statement
        case 1:     choiceElement.innerText = "Get out of the car and threaten to sue Kathy."; 
                    scenario = 1; 
                    break;
        case 2:     choiceElement.innerText = "Forget book club, Karen wants to go home and drink box wine by herself."; 
                    scenario = 2;
                    break;
    }
}

function displayChoices2() {
    switch(scenario){
    }
}

//Function to display the scenario before changing to the question
function displayScenario() {
    question.innerText =  
}

//Function for starting the game
function start() {
     choiceElement.click();
}


//Function that will take every choice that is selected
function selectedOption(option) {
    var choice = option.target;
    document.getElementById("question").innerText =  '';
}

startGame()