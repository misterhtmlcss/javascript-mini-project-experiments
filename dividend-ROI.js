// My favourite version:
var myLIQ = function(stockPrice, divYield, keepTime) {
    this.stockPrice = stockPrice;
    this.divYield = divYield;
    this.keepTime = keepTime;
	return stockPrice * divYield * keepTime;
}
var stockPrice = parseInt(prompt("What is the stock price? " + ""));
var divYield = parseInt(prompt("How many shares do you get granted? " + ""));
var keepTime = parseInt(prompt("What time period will you hold these shares? " + ""));

var totalReturn = myLIQ(stockPrice, divYield, keepTime); 
document.write(totalReturn);

/* --------------------- variation line ---------------------- */

// Here is variation b (I just tried it and it works...Not sure it's the best way though):
var myLIQ = function(stockPrice, divYield, keepTime) {
    this.stockPrice = stockPrice;
    this.divYield = divYield;
    this.keepTime = keepTime;
	return stockPrice * divYield * keepTime;
}
var totalReturn = myLIQ(parseInt(prompt("What is the stock price? " + "")), parseInt(prompt("How many shares do you get granted? " + "")), parseInt(prompt("What time period will you hold these shares? " + "")));
document.write(totalReturn);
