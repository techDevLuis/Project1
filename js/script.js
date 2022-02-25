/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//These are my 5 quotes as of now
const quotes = [
  {
    quote: "I am not afraid of storms, for I am learning how to sail my ship.",
    source: "Louisa May Alcott",
    citation: "Little Women - Book"
  },
  {
    quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate, only love can do that.",
    source: "Martin Luther King Jr.",
    year: "Nov. 17, 1957"
  },
  {
    quote: "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    source: "Winston Churchill"
  },
  {
    quote: "I’m a greater believer in luck, and I find the harder I work the more I have of it.",
    source: "Thomas Jefferson",
    tag: "Favorite"
  },

]

//Function for Random Color EXTRA CREDIT
function randColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  document.body.style.backgroundColor= bgColor;
}
/***
 * getRandomQuote function
***/
//create variable to hold current value of current quote
let currentQuote = "";
//function to generate a random quote
function getRandomQuote() {
  let rand = Math.floor(Math.random() * quotes.length);
  return quotes[rand];
}

//function that prints final quote on screen
function printQuote() {
  //grabs random quote and assigns to variable
let randQuote = getRandomQuote();
//Check to see if color is the same as existing quote on screen
while(currentQuote === randQuote) {
  randQuote = getRandomQuote();
}
if (randQuote === currentQuote) {
  randQuote = getRandomQuote()
}
else {
  currentQuote = randQuote
}

let quoteOnScreen = 
 `<p class="quote">${randQuote.quote}</p>` +
  `<p class="source">${randQuote.source}`;
  //used hasOwnProperty to checks for property of 'Citation'
  if(randQuote.hasOwnProperty('citation')){
    quoteOnScreen += `<span class="citation"> -${randQuote.citation}</span>`;
    quoteOnScreen += "</p>";
  }
  //used hasOwnProperty to check property of Year in object
  if(randQuote.hasOwnProperty('year')){
    quoteOnScreen += `<span class="year"> -${randQuote.year}</span>`;
    quoteOnScreen += "</p>";
  }
  //used hasOwnProperty to check property of tag in object
  if(randQuote.hasOwnProperty('tag')){
    quoteOnScreen += `<span class="tag"> -${randQuote.tag}</span>`;
    quoteOnScreen += "</p>";
  }
  //inserts text on the screen from the function
  document.getElementById('quote-box').innerHTML = quoteOnScreen;
  randColor();

}
//setInterval EXTRA CREDIT
function quoteTimer() {
  printQuote();
}
setInterval(quoteTimer, 10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
//WHen button clicked, loads new quote
document.getElementById('load-quote').addEventListener("click", printQuote, false);