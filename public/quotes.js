var allQuotes = require('./app.js');

var Quote = function(text, author){
  this.text = text;
  this.author = author;
  onNew = function(){
    allQuotes.push(this);
  }
}

module.exports = Quote;