var allQuotes = [];

var Quote = function(text, author){
  this.text = text;
  this.author = author;
}

Quote.prototype = {
  addToArray: function(){
    allQuotes.push(this);
  }
}

var jayQuote = new Quote("Visual Basic is the way forward, I don't know why we are doing Javascript.", "Jay Chetty");
jayQuote.addToArray();
var rickQuote = new Quote("The only CSS you need to know is background-color: tomato", "Rick");
rickQuote.addToArray();
var keithQuote = new Quote("No Blockers *smug tone*", "Keith");
keithQuote.addToArray();
var valQuote = new Quote("Scaffold is nothing but a fiery hell.", "Valerie");
valQuote.addToArray();

console.log("All Quotes Array:", allQuotes);

window.onload = function(){
  var renderQuotes = function(){
    var quote = document.getElementById("quote");
    quote.innerHTML = "";
    for (var i = 0; i < allQuotes.length; i++) {
      var quoteArticle = document.createElement("article");
      var blockQuote = document.createElement("blockquote");
      var cite = document.createElement("cite");

      cite.innerText = allQuotes[i].author;
      blockQuote.innerText = this.allQuotes[i].text;
      quoteArticle.classList.add("quote");
      blockQuote.appendChild(cite);
      quoteArticle.appendChild(blockQuote);
      quote.appendChild(quoteArticle);
    };

  }

  var handleClick = function(event){
    console.log('I have been clicked')
    event.preventDefault();
    var quoteInputText = document.getElementById("newquote").value;
    console.log("Quote Text Input:", quoteInputText);
    var authorInputText = document.getElementById("newquoteauthor").value;
    console.log("Author Text Input:", authorInputText);

    var newQuote = new Quote(quoteInputText, authorInputText);
    console.log('newquote', newQuote);
    newQuote.addToArray();
    console.log(allQuotes);
    renderQuotes();

  }

  renderQuotes();

  var button = document.getElementById("addbutton");
  button.onclick = handleClick;

}












