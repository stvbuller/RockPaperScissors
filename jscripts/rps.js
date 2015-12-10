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
    
    //bind the stop button here, once the game starts
    $("#playAgain").on("click", function(e){
      e.preventDefault();
      $("#myModal").modal('show');
      resetGame();
    });

    //th idea here is to change the stop button color to red
    $("#playAgain").removeClass("btn-default");
    $("#playAgain").addClass("btn-danger");
    $('#computer-guess').html("My guess is " + computerGuess);
   
    if (userGuess != computerGuess) {
      increaseUsersScore()
    } else if (userGuess === computerGuess) {
      increaseComputersScore()
    }

    if (roundNumber === 5) {
      $("#myModal").modal('show');
      resetGame();
    }
  });

  //unbind the end when the game begins, bind it when the game stars
  // and have the button change to btn-danger
  // $("#playAgain").on("click", function(e){
  //   e.preventDefault();
  //   $("#myModal").modal('show');
  //   resetGame();
  // });

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
    //the end button is changed back to default
    $("#playAgain").removeClass("btn-danger");
    $("#playAgain").addClass("btn-default");
    userGuess ="";
    userScore = 0;
    computerScore = 0;
    roundNumber = 0;
  }

  //here the html for the guess text fades in
  // function htmlFadeIn(){
  //   (.guessText).fadeIn(1000)
  // }

});