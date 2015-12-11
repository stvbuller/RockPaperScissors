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
    
    $("#star-five").addClass("star-five");

    //bind the stop button when rock, paper or
    //scissors button is clicked
    $("#playAgain").on("click", function(e){
      e.preventDefault();
      $("#myModal").modal('show');
      resetGame();
    });

    //th idea here is to change the stop button color to red
    //by changing class
    $("#playAgain").removeClass("btn-default");
    $("#playAgain").addClass("btn-danger");

    //the idea here is to fade the header text in and out
    $('#gameHeader').fadeOut(0);
    $("#gameHeader").html("Guess again!");
    $("#gameHeader").css("color","#FF0DFF");
    $("#gameHeader").fadeIn(1000);
    $("#instructionsList").css("color","#E80C7A");



    //the idea here is to fade out the text and fade it in
    $('#computer-guess').fadeOut(0).fadeIn(2000);
    $('#computer-guess').html("My guess is " + computerGuess);
    $('#computer-guess').css("color", "#FF530D");

   
    if (userGuess != computerGuess) {
      increaseUsersScore();
    } else if (userGuess === computerGuess) {
      increaseComputersScore();
    }

    if (roundNumber === 6) {
      $("#myModal").modal('show');
      resetGame();
    }
  });

  createAnimation();
   

  function createAnimation() {
    $(".userChoice").on("mouseenter", function() {
         $(this).addClass("slideDown");
    }); 
    $(".userChoice").on("mouseleave", function() {
         $(this).removeClass("slideDown");
    });  
  }

  function increaseComputersScore() {
    computerScore++;
    roundNumber++;
    $('#computer-score').html(computerScore);
    $('#round-number').html(roundNumber);
    $('#who-wins').fadeOut(0);
    $('#who-wins').fadeIn(2000);
    $('#who-wins').html("I win");
    $('#who-wins').css("color", "#FF530D");

  }

  function increaseUsersScore(){
    userScore++;
    roundNumber++;
    $('#user-score').html(userScore);
    $('#round-number').html(roundNumber);
    $('#who-wins').fadeOut(0);
    $('#who-wins').fadeIn(2000);
    $('#who-wins').html("You win");
    $('#who-wins').css("color", "#FF530D");
  }

  function resetGame() {
    $('#user-score').html(0);
    $('#computer-score').html(0);
    $('#round-number').html(0);
    $('#computer-guess').html("My guess");
    $('#computer-guess').css("color", "black");
    $('#who-wins').html("Let's play again!")
    $('#who-wins').css("color", "black");
    $("#gameHeader").html("Play Rock, Paper, or Scissors");
    $("#gameHeader").css("color","black");
    //the end button is changed back to default
    $("#playAgain").removeClass("btn-danger");
    $("#playAgain").addClass("btn-default");
    //unbind the stop button
    $("#playAgain").off("click");
    $("#instructionsList").css("color","black");
    userGuess ="";
    userScore = 0;
    computerScore = 0;
    roundNumber = 0;
  }


});