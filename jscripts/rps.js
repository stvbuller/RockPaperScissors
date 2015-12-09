$(document).ready(function () {


var userGuess ="";
var userScore = 0;
var computerScore = 0;
var roundNumber = 0;
var rockPaperScissors = ['rock', 'paper', 'scissors'];
var computerGuessNumber = 0;
var computerGuess = 0;


  $(".userChoice").on("click", function(){
    userGuess = $(this).data('value');
    computerGuessNumber = Math.floor(Math.random()*rockPaperScissors.length)
    computerGuess = rockPaperScissors[computerGuessNumber];

    //alert("the users guess is : " + userGuess);
    alert("computers guess is " + computerGuess);
   
    if (userGuess != computerGuess) {
      userScore++;
      roundNumber++;
      $('#user-score').html(userScore);
      $('#round-number').html(roundNumber);
    } else if (userGuess === computerGuess) {
      computerScore++;
      roundNumber++;
      $('#computer-score').html(computerScore);
      $('#round-number').html(roundNumber);
    }
    if (roundNumber === 5) {
      alert("The game is over")
      $('#user-score').html(0);
      $('#computer-score').html(0);
      $('#round-number').html(0);
      userGuess ="";
      userScore = 0;
      computerScore = 0;
      roundNumber = 0;
      
    }
  });

  $("#playAgain").on("click", function(){
    $('#user-score').html(0);
    $('#computer-score').html(0);
    $('#round-number').html(0);
    alert("Would you like to play again?")
    userGuess ="";
    userScore = 0;
    computerScore = 0;
    roundNumber = 0;
  })

});