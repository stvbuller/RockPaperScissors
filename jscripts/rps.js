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
    
    //the idea here is to slide down the button that is selected
    $(this).addClass("slideDown");


    //bind the stop button here, once the game starts
    $("#playAgain").on("click", function(e){
      e.preventDefault();
      $("#myModal").modal('show');
      resetGame();
    });

    //th idea here is to change the stop button color to red
    $("#playAgain").removeClass("btn-default");
    $("#playAgain").addClass("btn-danger");

    //the idea here is to delay the time that the text is shown
    //and fade it in
    $('#computer-guess').html("My guess is " + computerGuess);
   
    if (userGuess != computerGuess) {
      increaseUsersScore();
    } else if (userGuess === computerGuess) {
      increaseComputersScore();
    }

    if (roundNumber === 5) {
      $("#myModal").modal('show');
      resetGame();
    }
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
    //the end button is changed back to default
    $("#playAgain").removeClass("btn-danger");
    $("#playAgain").addClass("btn-default");
    //remove class slideDown from buttons
    $(".userChoice").removeClass("slideDown");
    //unbind the stop button
    $("#playAgain").off("click");
    userGuess ="";
    userScore = 0;
    computerScore = 0;
    roundNumber = 0;
  }


});