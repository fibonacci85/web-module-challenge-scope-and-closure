// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 variable declaration is in function / counter2 is outside function 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 / there's a function within a function 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter 1 would be preferable if we only wanted to use the return within the fuction / 
 * counter 2 would be preferable if you needed to use a variable with global scope.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();



// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number 
of points that a team scored in an inning. 
This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() *3) 
}

console.log (inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts 
the callback function `inning` (from above) and a number of innings 
and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inningFunc, numInnings){
  let home = 0
  let away = 0
  for (let i = 0; i < numInnings; i++){
    home = home + inningFunc();
    away = away + inningFunc();
  }
   return {"Home": home, "Away":away};
  }

  // console.log (finalScore(inning, 9));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(inningPam) {
  return {
    'home':inningPam(), 
    'away':inningPam()
  }
}
// console.log ("im outside of the function", getInningScore(inning))

function scoreboard (getInningScore, inningFunc, numInning) {
  let container = []

  let homeScore = 0
  let awayScore = 0
  
  for (let i = 0; i < numInning; i++){
    
    // console.log("I'm in the function", getInningScore (inningFunc)) 
    let currentInningScore = getInningScore(inningFunc)
    console.log (currentInningScore)

  homeScore = homeScore + currentInningScore.home;
  awayScore = awayScore + currentInningScore.away;
  container.push(`inning ${i+1}: Home:${currentInningScore.home} - Away:${currentInningScore.away}`)
  }
  container.push(`Final Score: Home:${homeScore} - Away:${awayScore}`)
  return container;
}

console.log (scoreboard(getInningScore, inning, 9))









// function scoreboard(getInningScore, inning, numInning) {
//   for (let i = 0; i < numInnings; i++){
//     getInningScore = finalScore (inning, 1);
//   }
//   return ${}
// }

// console.log (scoreboard())

// function scoreboard () {

// }
// fuction getInningScore (inning){
//   let home = inning();
//   let away = inning();
// }


