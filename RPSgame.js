const selectRock = document.getElementById('roc');
const selectPaper = document.getElementById('pa');
const selectScissors = document.getElementById('sci');
var scoreBoard = document.getElementById('scoreBoard');
var userScore = document.getElementById('userScore').innerHTML = 0;
var computerScore = document.getElementById('computerScore').innerHTML = 0; 
var status = document.getElementById('status')




function win() {
	userScore++;
	console.log('You Win')
	console.log(userScore)
	if (userScore === 1 ) {
		return document.getElementById('userScore').innerHTML = 1
	}
	else if (userScore === 2){
		return document.getElementById('userScore').innerHTML = 2
	}
	else if (userScore === 3 && computerScore === 0){
		return document.getElementById('scoreBoard').innerHTML = 'Game Over',
		document.getElementById('status').innerHTML = 'You Win'
	}
	else if (userScore === 3 && computerScore === 1){
		return document.getElementById('scoreBoard').innerHTML = 'Game Over',
		document.getElementById('status').innerHTML = 'You Win'
	}
	else if (userScore === 3 && computerScore === 2){
		return document.getElementById('scoreBoard').innerHTML = 'Game Over',
		document.getElementById('status').innerHTML = 'You Win'
	}
	
	
	
	
};
function lose() {
	computerScore++;
	console.log('You Lose')
	console.log(computerScore)
	if (computerScore === 1) {
		return document.getElementById('computerScore').innerHTML = 1
	}
	else if (computerScore === 2){
		return document.getElementById('computerScore').innerHTML = 2
	}
	else if (computerScore === 3 && userScore === 0){
		return document.getElementById('scoreBoard').innerHTML = 'Game Over',
		document.getElementById('status').innerHTML = 'You Lose'
	}
	else if (computerScore === 3 && userScore === 1){
		return document.getElementById('scoreBoard').innerHTML = 'Game Over',
		document.getElementById('status').innerHTML = 'You Lose'
	}
	else if (computerScore === 3 && userScore === 2){
		return document.getElementById('scoreBoard').innerHTML = 'Game Over',
		document.getElementById('status').innerHTML = 'You Lose'
	}
	
	
	
	

};


function main() {
	function computerChoice() {
		choices = ['r','p','s']
		randnum = (Math.floor(Math.random()*3));
		return choices[randnum];

	}
function game(userChoice) {
	cpu = computerChoice();
	ro = scoreBoard
	console.log('userchoice : ' + userChoice)
	console.log('computerchoice: ' + cpu)


	if (userChoice === 'r' && cpu === 's'){
			win()

	}

	else if (userChoice === 'p' && cpu === 'r'){
		win()
	}
	else if (userChoice === 's' && cpu === 'p'){
		win() 
	}
	else if (userChoice === 's' && cpu === 'r'){
		lose()
	}
	else if (userChoice === 'r' && cpu === 'p'){
		lose()
	}
	else if (userChoice === 'p' && cpu === 's'){
		lose()
	}
	else 
		return tie()
	
	
	

};



selectRock.addEventListener('click', function() {
		game('r')
});
selectPaper.addEventListener('click', function () {
		game('p')
});

selectScissors.addEventListener('click', function () {
	game('r')
});
}


main();