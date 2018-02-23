console.log("Up and running");
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped" + cardOne);
console.log("User flipped" + cardThree);*/
var cards=["queen","queen","king","king"];
var cardsInPlay=[];
var checkForMatch=function()
{
if(cardsInPlay.length===2)
 {
 	 if(cardsInPlay[0]===cardsInPlay[1])
 	 {
 	 	alert("You found a match!");
 	 }
 	 else
 	 {
 	 	alert("Sorry, try again");
 	 }
 }
}

var flipCard=function(cardId){
console.log("User Flipped"+cards[cardId]);
cardsInPlay.push(cards[cardId]);
/*var cardOne=cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped"  +  " " + cardOne);
 var cardTwo=cards[2];
 cardsInPlay.push(cardTwo);
 console.log("User flipped" + " " + cardTwo);*/
checkForMatch();
 
}
flipCard(0);
flipCard(2);

/*cardsInPlay.push(cardOne);
console.log("User flipped"  +  " " + cardOne);
 var cardTwo=cards[2];
 cardsInPlay.push(cardTwo);
 console.log("User flipped" + " " + cardTwo);
 if(cardsInPlay.length===2)
 {
 	 if(cardsInPlay[0]===cardsInPlay[2])
 	 {
 	 	alert("You found a match!");
 	 }
 	 else
 	 {
 	 	alert("Sorry, try again");
 	 }
 }*/
