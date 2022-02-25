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
    Source: "Louisa May Alcott",
    Citation: "Little Women - Book"
  },
  {
    quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate, only love can do that.",
    Source: "Martin Luther King Jr.",
    Year: "Nov. 17, 1957"
  },
  {
    quote: "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
    Source: "Eleanor Roosevelt"
  },
  {
    quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    Source: "Winston Churchill"
  },
  {
    quote: "I’m a greater believer in luck, and I find the harder I work the more I have of it.",
    Source: "Thomas Jefferson"
  },

]
/***
 * getRandomQuote function
***/
function getRandomQuote() {
  let rand = Math.floor(Math.random() * 4);
  return quotes[rand];
}

//function that prints final quote on screen
function printQuote() {
  //grabs random quote and assigns to variable
let randQuote = getRandomQuote();
let quoteOnScreen = 
 `<p class="quote">${randQuote.quote}</p>` +
  `<p class="source">${randQuote.Source}`;
  //used hasOwnProperty to checks for property of 'Citation'
  if(randQuote.hasOwnProperty('Citation')){
    quoteOnScreen += `<span class="citation"> -${randQuote.Citation}</span>`;
    quoteOnScreen += "</p>";
  }
  //used hasOwnProperty to check property of Year in object
  if(randQuote.hasOwnProperty('Year')){
    quoteOnScreen += `<span class="year"> -${randQuote.Year}</span>`;
    quoteOnScreen += "</p>";
  }
  //inserts text on the screen from the function
  document.getElementById('quote-box').innerHTML = quoteOnScreen;

}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
//WHen button clicked, loads new quote
document.getElementById('load-quote').addEventListener("click", printQuote, false);