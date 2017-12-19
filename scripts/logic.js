var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What is the capital of of the United States?", "What is the capital of Mexico?", "What Year did Battlefield 1 come out?", "What Year did Javascript come out?", "Who founded Microsoft?"];
var answerArray = [["Washington DC", "New York", "Texas", "California"], ["Mexico City","Oaxaca","Michoacan","Queretaro"], ["2016", "2017", "2015", "2014"], ["1996","1935","1995","1997"], ["Bill Gates", "Patrick Knowlan", "Savely Samoylov", "August Cesar"]];
var questionImages = [
	'./images/DC-FLY-IN_DeisgnElements_Final.png',
	'./images/Mexico_coat_of_arms.png',
	'./images/BF4_Scout_Elite-1.png',
	'./images/AAIA_wDGAAAAAQAAAAAAAA04AAAAJDNhYjk5YzI0LWFlMmMtNDdjYi1hODUyLTgwNDVmNmNlZmFmNw.png',
	'./images/bill-291x300.png'
]

var correctAnswers = ["A. Washington DC", "A. Mexico City", "A. 2016", "C. 1995", "A. Bill Gates"];
var questionCounter = 0;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var clickSound = new Audio("sound/button-click.mp3");


$(document).ready(function() {


function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();



$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	clickSound.play();
	generateHTML();

	timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
	
	clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		

		clearInterval(theClock);
		generateWin();
	}
	else {
		
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	clickSound.play();
	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + '<img src="'+questionImages[questionCounter]+'"/>';
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + '<img src="'+questionImages[questionCounter]+'"/>';
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 4) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}









/*var score;
score = 0;
alert("Welcome to the QUIZ!")
var q1;
q1 = prompt("What is the capital of the United States?")
if(q1 == "Washington DC") {
	score++;
	alert("Correct! your score is: "+score)
}

else {
	alert("Wrong! :(your score is:"+score)
}
q2 = prompt("What is the capital of Finland?")
if(q2 == "Helsinki") {
	score++;
	alert("Correct! your score is: "+score)
}

else {
	alert("Wrong! :(your score is:"+score)
}
q3 = prompt("What Year did Battlefield 1 come out?")
if(q3 == "2016") {
	score++;
	alert("Correct! your score is: "+score)
}

else {
	alert("Wrong! :(your score is:"+score)
}
q4 = prompt("What Year did Javascript come out?")
if(q4 == "1995") {
	score++;
	alert("Correct! your score is: "+score)
}

else {
	alert("Wrong! :(your score is:"+score)
}
q5 = prompt("Who founded Microsoft?")
if(q5 == "Bill Gates") {
	score++;
	alert("Correct! your score is: "+score)
}

else {
	alert("Wrong! :(your score is:"+score)
}

if(score == 5){
	alert("Your score is: "+score+" and You Won!!!")
}

else {
	alert("Your score is: "+score+" and You Lost :( ")
}
*/



















