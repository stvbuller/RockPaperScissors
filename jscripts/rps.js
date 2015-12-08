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

    alert("the users guess is : " + userGuess);
    alert("computers guess is " + computerGuess);
   
    if (userGuess != computerGuess) {
      userScore++;
      roundNumber++;
      $('#user-score').html(userScore);
      $('#round-number').html(roundNumber);
      alert("user score is " + userScore);
    } else if (userGuess === computerGuess) {
      computerScore++;
      roundNumber++;
      $('#computer-score').html(computerScore);
      $('#round-number').html(roundNumber);
      alert("computer score is " + computerScore);
    }

    if (roundNumber === 5) {
      $('#user-score').html(0);
      $('#computer-score').html(0);
      $('#round-number').html(0);
      userGuess ="";
      userScore = 0;
      computerScore = 0;
      roundNumber = 0;
      alert("The game is over")
    }

  });

  $("#playAgain").on("click", function(){
    $('#user-score').html(0);
    $('#computer-score').html(0);
    $('#round-number').html(0);
    alert("would you like to play again?")
    userGuess ="";
    userScore = 0;
    computerScore = 0;
    roundNumber = 0;
  })
  
  //The event handler gets the button by class=userChoice when it is clicked, then userGuess is set
  //to rock, paper, scissors depending on the users button selection
  //userGuess is compared to computerGuess, if they are the same the computer wins and 
  //computerScore is incremented and roundNumber is incremented, if they are not the
  //same the user wins, userScore is incremented and the roundNumber is incremented
  //when roundNumber is >= 5 the games ends, and userScore, computerScore, and roundNumber
  //are set to zero

  //if (userGuess === computerGuess){
    //display computer wins the round
    //computerScore++;
    //roundNumber++;
    //$('#computer-score').html(computerScore);
    //$('#round-number').html(roundNumber);
  //}

  //else if (userGuess != computerGuess){
    //diplay user wins the round
    //increment userScore and roundNumber
    //$('#user-score').html(userScore);
    //$('#round-number').html(roundNumber);
    //}

  //if (roundNumber >= 5) {
    //display the game is over
    //if (userScore > computerScore){
      //display user wins the game
      //$('#user-score').html(0);
      //$('#computer-score').html(0);
      //$('#round-number').html(0);
      //alert("would you like to play again?")
    //}


});