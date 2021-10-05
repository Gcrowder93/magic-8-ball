// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


  import { answers } from './answers.js';

const colors = ['red', 'white', 'blue'];

const getRandomNumber = (max)=>{
  return Math.floor(Math.random() * max);
}

const randomAnswer = getRandomNumber(answers.length);
console.log(answers[randomAnswer]);




//html elements = paragraph for question, button for submit, 
//states = answer; randomIdx

//using this to create random answers for magic 8 ball
//input to ask a question
//button to ask for random answer
//maybe add shake effects
//style. fonts, centering, shape of box(triangle), etc
//button click event listener, generate random index, get value of answer, display answer on page.




//have answers in seperate file, then import into apps.js
