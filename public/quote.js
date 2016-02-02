var Quote = function(text, author){
  this.text = text;
  this.author = author;
}

Quote.prototype = {
  addToArray: function(){
    allQuotes.push(this);
  }
}