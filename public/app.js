var allQuotes = [];

var Quote = function(text, author){
  this.text = text;
  this.author = author;
  allQuotes.push(this);
}

var jayQuote = new Quote("Visual Basic is the way forward, I don't know why we are doing Javascript.", "Jay Chetty");
var rickQuote = new Quote("The only CSS you need to know is background-color: tomato", "Rick");
var keithQuote = new Quote("No Blockers *smug tone*", "Keith");
var valQuote = new Quote("Scaffold is nothing but a fiery hell.", "Valerie");

console.log("All Quotes Array:", allQuotes);