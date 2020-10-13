const question = document.getElementById('question');
const choiceElement = document.getElementById('choice1');
const choiceElement2 = document.getElementById('choice2');
const choices = document.getElementById('choices');


var scenario = 0;  //Scenario tracker

var bitchPoints = 0; //Point system

//Event listeners for choices made
choiceElement.addEventListener('click', displayChoices);
choiceElement2.addEventListener('click', displayChoices2);
question.addEventListener('click', displayQuestion);

//Function for starting the game and state the game starts in after restart function
function startGame() {
    question.textContent =  "Karen sits in a parking lot in her champagne gold minivan waiting for her daughter Meg to get out of " +
    "soccer practice. While waiting in the parking lot, Karen is on the phone yelling at her husband, telling him " +
    "how useless he is because he should have left work early to pick her up. Karen has no job mind you, but " +
    "she thinks that he should be the one to do it because she has a migraine and so she's not late to her " +
    "book club at Kim's house at 5:00. (Click here to begin)";
    choiceElement.textContent = "Objective: There's not really one, just be the best Karen you can be and see where it takes you!" +
    "Don't think too much about it being realistic like I did (in the real world, most of the choices presented won't fly)" +
    "Be the best Karen you can be by earning points. Points will result in different endings.";
    choiceElement2.textContent = "";
    choiceElement.style.backgroundImage = null
    choiceElement2.style.backgroundImage = "url(https://m.betootaadvocate.com/wp-content/uploads/2020/06/karen-karen.jpg)"
    //To take out being able to click on choices before game actually begins
    choiceElement.removeEventListener('click', displayChoices);
    choiceElement2.removeEventListener('click', displayChoices2);
    bitchPoints = 0;
    scenario = 0;
}

//Start of first scenario
function displayQuestion(){
    switch(scenario){
            case 0: question.textContent =  "Clearly distraught from complaining about her husband and how hard her life is," +
                                            "Karen puts a little bit too much gas on her pedal as she thinks she\'s about to speed off... and rams into Kathy's car. " +
                                            "Kathy then gets out of her car.\n\nWhat should Karen do?";
                    choiceElement.textContent = "Get out of the car and threaten to sue Kathy."; //change button text based on current scenario
                    choiceElement2.textContent = "Hand Kathy a $20 and tell her that should be enough to cover that" + " ding.";
                    choiceElement.style.backgroundImage = "url(https://img.particlenews.com/img/id/4YLSrH_0PYomLdf00?type=thumbnail_512x288)"
                    choiceElement2.style.backgroundImage = "url(https://static-16.sinclairstoryline.com/resources/media/a86378c6-3879-40a9-bdc9-b463ab0b1787-large16x9_GettyImages451333971.jpg?1541529429320)"
                    //Re-added click event listener other wise game can't be played
                    choiceElement.addEventListener('click', displayChoices);
                    choiceElement2.addEventListener('click', displayChoices2);
                    scenario = 1;
                    break;
    }
}

//Function to change scenarios using switch
//All the left side choices
function displayChoices() {
    if(this == choiceElement) {
        switch(scenario) {
            case 1:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        question.innerText = "Karen gets out of the car and goes off on Kathy for coming out of nowhere and says that Meg has celiac disease" +
                        "(which has nothing to do with the car accident), and that she could've been hurt badly. Karen goes on to threaten" +
                        "her for child endangerment. Kathy then points out that Karen is at fault, and that " +
                        "Karen's daughter isn't even in the car. Karen don't have time for this and tosses " +
                        "a card with a phone number on it at Kathy. Karen then gets Meg and leaves the scene of the accident.\n\nWhere is Karen going now?";
                        //clicking the left button during scenario 1 loads scenario 2, with options C and D
                        choiceElement.textContent = "Screw book club, Karen wants to go home and drink box wine by herself.";  //Option C
                        choiceElement2.textContent = "Go to the supermarket.";  //Option D
                        choiceElement.style.backgroundImage = "url(https://i.pinimg.com/originals/9f/de/65/9fde659c9da77b79fde0ddd6466631b8.gif)"
                        choiceElement2.style.backgroundImage ="url(https://imagez.tmz.com/image/cb/1by1/2020/06/28/cb9a8f5d80244c108ca24688fa879af0_xl.jpg)"
                        scenario = 2; //adjust to new scenario
                        bitchPoints += 4;
                        break; //exit switch statement                        
            case 2:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        question.textContent = "Karen goes home and pops open a box of Franzia. It really makes no difference since she already finished an entire box " +
                        "earlier in the day. Karen sees some children playing in the street in the cul-de-sac. Those kids look like little troublemakers, what does Karen do?";
                        //During scenario 2 clicking the left button loads options G and H
                        choiceElement.textContent = "Go out there and give the kids a piece of your mind.";  //Option G
                        choiceElement2.textContent = "Call the cops on the children.";  //Option H
                        choiceElement.style.backgroundImage = "url(https://images.toofab.com/image/a2/4by3/2020/07/07/a2b49efa20614cbd9b19bbb38d498c8c_xl.jpg)"
                        choiceElement2.style.backgroundImage = "url(https://ca-times.brightspotcdn.com/dims4/default/c4f16fa/2147483647/strip/true/crop/1424x748+0+6/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc3%2Ff9%2F7ed606878669fb9268c33fb1e908%2Fsd-oakland-bbq-controversy-20180521)"
                        scenario = 4;
                        bitchPoints += 2;
                        break;
            case 3:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        question.textContent = "Karen makes a stop at Coldstone to get some ice cream to shut Meg up. While ordering, Karen realizes that " +
                        "her favorite flavor, Strawberry Daquiri, is out of order. Feeling her face starting to get hot because she's " +
                        "had SUCH a rough day. Karen decides to...";
                        //During scenario 3 clicking the left button loads options K and L
                        choiceElement.textContent = "Complain and try to get free ice cream.";  //Option K
                        choiceElement2.textContent = "Ask to speak to the manager about how inept they are at keeping one flavor in stock.";  //Option L
                        choiceElement.style.backgroundImage = "url(https://www.ivgreenhouse.com/wp-content/uploads/2016/08/strawbice3.jpg)"
                        choiceElement2.style.backgroundImage = "url(https://cdn.upworthy.com/450960/uploads/4566bac0-b7b7-11ea-b772-81eb58577e70_450_250.jpeg)"
                        scenario = 6;
                        bitchPoints += 4;
                        break;
            case 4:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        choiceElement2.removeEventListener('click', displayChoices2);
                        question.textContent = "Karen goes out and yells at the children for playing too close to her driveway, and threatens to call the cops on them anyway. " +
                        "One of the neighboring parents decides to intervene and decides she's had enough of Karen and punches her in the face.";
                        choiceElement.textContent = "Click to see what kind of Karen you are!";
                        choiceElement2.textContent = "";
                        choiceElement2.style.backgroundImage = "url(https://static.ffx.io/images/$zoom_0.157%2C$multiply_0.4431%2C$ratio_1.5%2C$width_756%2C$x_129%2C$y_67/t_crop_custom/q_86%2Cf_auto/bfbaeae2cb505070236b00578e00794e06f7afbc)"
                        scenario = 8;
                        bitchPoints += 2;
                        break;
            case 5:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        choiceElement2.removeEventListener('click', displayChoices2);
                        question.textContent = "Karen asks to speak to the manager about not having the exact brand of butter she wants, even though there's dozens " +
                        "of other kinds to choose from. The manager calmly asks her if there's any other brand that would work for her or if there'so " +
                        "anything that can be done to satisfy her, but no, when Karen doesn't get her way, there's no end in sight. Karen yells " +
                        "at the manager exclaiming that she's been a customer there for years, and that this is just the result of pure laziness. " +
                        "A random woman steps in and punches Karen in the face.";
                        choiceElement.textContent = "Click to see what kind of Karen you are!";
                        choiceElement2.textContent = "";
                        choiceElement2.style.backgroundImage = "url(https://www.errenskitchen.com/wp-content/uploads/2018/04/butter.jpg)"
                        scenario = 10;
                        bitchPoints += 10;
                        break;
            case 6:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        choiceElement2.removeEventListener('click', displayChoices2);
                        question.textContent = "Karen cuts to the front of the line, and while paying for Meg's ice cream, shegoes on to say that it's not that hard to " +
                        "serve ice cream, and asks why she has to do everything, and how she has places to be, and that she might as well be " +
                        "behind that counter, and that she should get the ice cream for free. A young girl comes from the middle of the line " +
                        "and slams Karen's face into the counter and knocks her out.";
                        choiceElement.textContent = "Click to see what kind of Karen you are!";
                        choiceElement2.textContent = "";
                        choiceElement2.style.backgroundImage = "url(https://nypost.com/wp-content/uploads/sites/2/2019/10/woman-attacks-line-cutter-wp-thumb.jpg?quality=80&strip=all)"
                        scenario = 12; 
                        bitchPoints += 3;
                        break;
            case 7:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        choiceElement2.removeEventListener('click', displayChoices2);
                        question.textContent = "Karen interrupts Susan after barging in and being 40 minutes late and starts talking about how Daniel is useless, and that " +
                        "Kathy crashed into her, and that she almost died. Karen goes on about how hard her life is and how she has to do everything. " +
                        "Susan then punches Karen for interrupting her (and she's wanted to do that for a long time).";
                        choiceElement.textContent = "Click to see what kind of Karen you are!";
                        choiceElement2.textContent = "";
                        choiceElement2.style.backgroundImage = "url(https://www.bravotv.com/sites/bravo/files/styles/amp_metadata_content_image_min_696px_wide/public/legacy/images/promote/2014/04/dish-040314-tbt-an-epic-fight.jpg?itok=oSJUm-pi)"
                        scenario = 14;
                        bitchPoints += 4;
                        break;
            default:    choiceElement.textContent = "";
                        choiceElement2.textContent = "";
                        choiceElement.removeEventListener('click', displayChoices);
                        choiceElement2.removeEventListener('click', displayChoices2);
                        win();
                    }
                    
            }
    }

//All the right side choices
function displayChoices2()  
{
    if(this == choiceElement2)
    {
        switch(scenario)
        {
            case 1:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        question.textContent = "Without saying sorry, or having remorse of any kind (or exchanging insurance info), Karen shoves Meg " +
                        "into her car and takes off. On the way home, Meg says she wants to stop and get ice cream. Karen is late for her book club. What should she do?";
                        //clicking the right button during scenario 1 loads Options E and F
                        choiceElement.textContent = "Get your daughter ice cream so she stops whining.";  //Option E
                        choiceElement2.textContent = "Go to book club!";  //Option F
                        choiceElement.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdMhO05JBEuvrOhA_vkmPT1X7PS5aAWf3aPg&usqp=CAU)"
                        choiceElement2.style.backgroundImage = "url(https://assets.readitforward.com/wp-content/uploads/2017/07/How-to-Choose-the-Best-Wine-for-Book-Club-900x675.jpg)"
                        scenario = 3;
                        bitchPoints += 3;
                        break;
            case 2:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        question.textContent = "Karen goes to the supermarket and is there to pick up a few things to throw together for dinner. While shopping, " +
                        "Karen realizes that the exact brand of butter she uses is not in stock. Obviously, life is hard. What does Karen do?";
                        //clicking right during scenario 2 loads options I and J
                        choiceElement.textContent = "Karen asks to speak to the manager."; //Option I
                        choiceElement2.textContent = "Karen finds the nearest store employee and takes action!";  //Option J
                        choiceElement.style.backgroundImage = "url(https://qph.fs.quoracdn.net/main-qimg-cdca39eb3f778d4a6a38d2b1d8596519)"
                        choiceElement2.style.backgroundImage = "url(https://s.hdnux.com/photos/01/01/13/00/17084458/4/920x920.jpg)"
                        scenario = 5;
                        bitchPoints += 4;
                        break;
            case 3:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        question.textContent = "After dropping Meg off at home, it is now 5:40pm and Karen is late for book club at Kim's. She walks in " +
                        "and finds the girls have started wine 'o clock without her. The girls couldn't wait, they're already busy complaining about their husbands instead of talking about books. So Karen " +
                        "decides to...";
                        //clicking right during scenario 3 loads options M and N
                        choiceElement.textContent = "Interrupt Susan's story and talk about how that bitch Kathy crashed into her.";  //Option M
                        choiceElement2.textContent = "Make a big deal about how they got started without her.";  //Option N
                        choiceElement.style.backgroundImage = "url(https://howtomanup.files.wordpress.com/2012/03/women-fighting-4.jpg)"
                        choiceElement2.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS0vECGn8qbouRKwpcE9zVVx9CRyXeG2vApg&usqp=CAU)"
                        scenario = 7;
                        bitchPoints += 2;
                        break;
            case 4:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        choiceElement.removeEventListener('click', displayChoices);
                        question.textContent = "Karen calls the cops and tells them the kids outside look like they're too poor to be residents of the neighborhood. " +
                        "She fears for her safety, and believes that those kids are dealing drugs and planning a break in to her home. She also " +
                        "believes that all the children are probably vaccinated and that's why they turned out to be bad seeds. The doorbell rings. " +
                        "Karen opens the door and gets a punch to the face by Kathy, who had unfinished business.";
                        choiceElement.textContent = "";
                        choiceElement2.textContent = "Click to see what kind of Karen you are!";
                        choiceElement.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlP0FuEIuJmUtRJ33RU3Pj3m2VEC4O0CpclQ&usqp=CAU)"
                        scenario = 9;
                        bitchPoints += 5;    
                        break;
            case 5:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        choiceElement.removeEventListener('click', displayChoices);
                        question.textContent = "Karen spots one of the nearest courtesy clerks and immediately begins to yell at her without a face mask on. " +
                        "She says that she needs this butter to serve a proper dinner and that no other kind will do. She asks the girl \"what kind " +
                        "of essential worker are you?\" It has to be the easiest job in the world to keep butter on the shelf, but obviously no one " +
                        "here can do that. The clerk begins to cry as she pleads that it isn't even her job to stock the butter. Overhearing " +
                        "the tirade, one of the clerk's coworkers comes up and angrily shoves Karen from behind into the canned vegetables " +
                        "causing all the shelves to fall on top of Karen.";
                        choiceElement.textContent = "";
                        choiceElement2.textContent = "Click to see what kind of Karen you are!";
                        choiceElement.style.backgroundImage = "url(https://miro.medium.com/max/720/1*qdyANfSIrcYqD-jh4MILlA.jpeg)"
                        scenario = 11;
                        bitchPoints += 4;    
                        break;
            case 6:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        choiceElement.removeEventListener('click', displayChoices);
                        question.textContent = "Karen asks to speak to the manager and goes on about how hard it could possibly be to keep strawberry daquiri in stock, " +
                        "it's just one among many. The manager explains that that flavor is in high demand and that they will get a new stock " +
                        "again tomorrow. Karen goes on about how she's gonna leave this Coldstone a horrible review on Yelp and urges everyone else that's " +
                        "in line to do the same. Karen turns around and gets a swift punch to the face from the woman behind her. ";
                        choiceElement.textContent = "";
                        choiceElement2.textContent = "Click to see what kind of Karen you are!";
                        choiceElement.style.backgroundImage = "url(https://nextshark.com/wp-content/uploads/2018/08/crap-1280x720.jpg)"
                        scenario = 13;
                        bitchPoints += 5;
                        break;
            case 7:     choiceElement.style.backgroundImage = null
                        choiceElement2.style.backgroundImage = null
                        choiceElement.removeEventListener('click', displayChoices);
                        question.textContent = "Karen barges into Kim's house ready to ask why they started without her. But wait, there aren't any essential oils in sight. " +
                        "Instead, she insists that there should be oils present the use will prevent the spread of covid-19, even though in the " +
                        "past she has clearly stated that she believes that it's a hoax. Everyone stops and stares at her for a moment. Kim then " +
                        "gets up and punches Karen in the face.";
                        choiceElement.textContent = "";
                        choiceElement2.textContent = "Click to see what kind of Karen you are!";                        
                        choiceElement.style.backgroundImage = "url(https://pbs.twimg.com/media/DlDRVXeXoAMsXAR.jpg)"
                        scenario = 15;
                        bitchPoints += 2;    
                        break;
            default:    choiceElement.textContent = "";
                        choiceElement2.textContent = "";
                        choiceElement.removeEventListener('click', displayChoices);
                        choiceElement2.removeEventListener('click', displayChoices2);
                        win();
        }
    }
}

//"Win" Scenario
function win() {
    if (bitchPoints <= 6 && scenario > 7) {
        question.textContent = "Karen gets arrested for fleeing the scene of the accident at the school and causing public disturbance." +
        " You think like a Karen, but a real Karen wouldn't have ended up in jail while being insufferable. (Karen Level: Weak)"
        choiceElement.style.backgroundImage = "url(https://i.ytimg.com/vi/zLAiIyf134o/maxresdefault.jpg)"
    }
    else if (bitchPoints > 7 && bitchPoints <= 15 && scenario > 7) {
        question.textContent = "You make a great Karen, but there are other choices a real Karen would approve of. (Karen Level: Medium)"
        choiceElement.style.backgroundImage = "url(https://nypost.com/wp-content/uploads/sites/2/2020/05/karen-hall-of-fame-01.jpg?quality=80&strip=all)"
    }
    else if (bitchPoints > 15 && bitchPoints <= 22 && scenario > 7) {
        question.textContent = "Congratulations! You think like a modern day Karen... And should get punched in the face. (Karen Level: High)"
        choiceElement.style.backgroundImage = "url(https://fox5sandiego.com/wp-content/uploads/sites/15/2020/09/karen-halloween-mask.jpg?w=1280)"
        }

    }



startGame()

//Restart function
document.querySelector('#button').addEventListener('click', startGame)