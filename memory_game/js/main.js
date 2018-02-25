console.log("Up and running");
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped" + cardOne);
console.log("User flipped" + cardThree);*/
var cards=[
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png"
}
];
var cardsInPlay=[];
var checkForMatch=function()
{
this.setAttribute('src', cards[cardId].cardImage);
if(cardsInPlay.length===2)
 {
 	 if(cardsInPlay[0] === cardsInPlay[1])
 	 {
 	 	alert("You found a match!");
 	 }
 	 else
 	 {
 	 	alert("Sorry, try again");
 	 }
 }
}

var flipCard=function()
{
var cardId = this.getAttribute('data-id');
console.log("CardID is : "+ this.getAttribute('data-id'));
console.log("Rank is: "+cards[0].rank);
console.log("User Flipped "+cards[cardId].rank);
console.log("User Flipped "+cards[cardId].suit);
console.log("User Flipped "+cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
/*var cardOne=cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped"  +  " " + cardOne);
 var cardTwo=cards[2];
 cardsInPlay.push(cardTwo);
 console.log("User flipped" + " " + cardTwo);*/
checkForMatch();
 
}

//flipCard(0);
//flipCard(2);


var createBoard=function()
{
for(var i=0;i<cards.length;i++)
{
var cardElement=document.createElement('img');
cardElement.setAttribute('src',"images/back.png");
cardElement.setAttribute('data-id',i);
document.getElementsByTagName('body')[0].addEventListener('click',flipCard);
document.getElementById('game-board').appendChild(cardElement);
}
};
createBoard();
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
