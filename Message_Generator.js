//Three different arrays of adjectives, verbs, and nouns to be selected from in the message
const pastTenseVerbs = ["Ran",'Caused','prolonged','jumped','logged','extinguished','protected',];
const nouns = ["Dog","Cat",'House','building','bottle','duck','cow','Screwdriver','Hammer','keyboard'];
const adjectives = ["tiny",'large','long','short','heavy','light','smelly','coarse'];

//random number that selects one of three message style
const styleNumber = Math.floor(Math.random() * 3); 

//displaying the message based on value of styleNumber
switch(styleNumber){
    case 0:
        console.log(`The ${adjectives[Math.floor(Math.random()*adjectives.length)]} bird ${pastTenseVerbs[Math.floor(Math.random()*pastTenseVerbs.length)]} the ${nouns[Math.floor(Math.random()*nouns.length)]}.`)
    break;

    case 1:
        console.log(`We ${pastTenseVerbs[Math.floor(Math.random()*pastTenseVerbs.length)]} when we ${pastTenseVerbs[Math.floor(Math.random()*pastTenseVerbs.length)]} at the ${adjectives[Math.floor(Math.random()*adjectives.length)]} ${nouns[Math.floor(Math.random()*nouns.length)]}.`)
    break;

    case 2:
        console.log(`I ${pastTenseVerbs[Math.floor(Math.random()*pastTenseVerbs.length)]} the ${nouns[Math.floor(Math.random()*nouns.length)]} because the ${nouns[Math.floor(Math.random()*nouns.length)]} was ${adjectives[Math.floor(Math.random()*adjectives.length)]}.`)
    break;
    default:
        console.log("AHHHHHHHHH SOMETHING IS BROKEN")


}//end switch