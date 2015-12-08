$(document).ready(function () {


var userGuess ="";
var userScore = 0;
var computerScore = 0;
var roundNumber = 0;

var rockPaperScissors = ['rock', 'paper', 'scissors'];
var computerGuessNumber = Math.floor(Math.random()*rockPaperScissors.length)
var computerGuess = rockPaperScissors[computerGuessNumber];


  $("#rock").on("click", function(){
    var userGuess ="";
    var userScore = 0;
    //var computerScore = 0;
    //var roundNumber = 0;
    var rockPaperScissors = ['rock', 'paper', 'scissors'];
    var computerGuessNumber = Math.floor(Math.random()*rockPaperScissors.length)
    var computerGuess = rockPaperScissors[computerGuessNumber];

    userGuess = "rock";
    userScore = userScore + 1;
    alert("computer guess is " + computerGuess);
    alert("the user score is: " + userScore);
    $('#user-score').html(userScore) ;
  });


  
  //The event handler gets the button by id when it is clicked, then userGuess is set
  //to rock, paper, scissors depending on the users button selection
  //userGuess is compared to computerGuess, if they are the same the computer wins and 
  //computerScore is incremented and roundNumber is incremented, if they are not the
  //same the user wins, userScore is incremented and the roundNumber is incremented
  //when roundNumber is >= 5 the games ends, and userScore, computerScore, and roundNumber
  //are set to zero

  //if (userGuess === computerGuess){
    //display computer wins the round
    //increment computerScore and roundNumber
    ////$('#computer-score').html('Me: '+computerScore);
  //}

  //else if (userGuess != computerGuess){
    //diplay user wins the round
    //increment userScore and roundNumber
    //$('#user-score').html('You: '+userScore);
    //}

  //if (roundNumber >= 5) {
    //display the game is over
    //if (userScore > computerScore){
      //display user wins the game
      //set userScore = 0
      //set computerScore = 0
      //set roundNumber = 0
    //}


});