$(document).ready(function () {


var userGuess ="";
var userScore = 0;
var computerScore = 0;
var roundNumber = 0;
var rockPaperScissors = ['rock', 'paper', 'scissors'];
var computerGuessNumber = 0;
var computerGuess = 0;


  $(".userChoice").on("click", function(e){
    e.preventDefault();
    userGuess = $(this).data('value');
    computerGuessNumber = Math.floor(Math.random()*rockPaperScissors.length)
    computerGuess = rockPaperScissors[computerGuessNumber];
    //here a modal could launch that diaplay's the computers guess
    //and who wins

    //alert("the users guess is : " + userGuess);
    //alert("computers guess is " + computerGuess);
    $('#computer-guess').html("My guess is " + computerGuess);
   
    if (userGuess != computerGuess) {
      increaseUsersScore()
    } else if (userGuess === computerGuess) {
      increaseComputersScore()
    }

    if (roundNumber === 5) {
      //alert("The game is over, let's play again!")
      resetGame();
    }
  });

  $("#playAgain").on("click", function(e){
    e.preventDefault();
    //alert("Let's play again?")
    resetGame();
  });

  function increaseComputersScore() {
    computerScore++;
    roundNumber++;
    $('#computer-score').html(computerScore);
    $('#round-number').html(roundNumber);
    $('#who-wins').html("I win");

  }

  function increaseUsersScore(){
    userScore++;
    roundNumber++;
    $('#user-score').html(userScore);
    $('#round-number').html(roundNumber);
    $('#who-wins').html("You win")
  }

  function resetGame() {
    $('#user-score').html(0);
    $('#computer-score').html(0);
    $('#round-number').html(0);
    $('#computer-guess').html("My guess");
    $('#who-wins').html("Let's play again!")
    userGuess ="";
    userScore = 0;
    computerScore = 0;
    roundNumber = 0;
  }

});