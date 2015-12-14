$(document).ready(function () {


var userGuess ="";
var userScore = 0;
var computerScore = 0;
var roundNumber = 0;
var rockPaperScissors = ['rock', 'paper', 'scissors'];
var computerGuessNumber = 0;
var computerGuess = 0;
var fbase = new Firebase("https://glowing-inferno-2059.firebaseio.com")
var randomReset = 0;

//update the label with the value of counter when the counter
//value changes
  fbase.child("counter").on("value", updateLabel);
  fbase.child("resetBy").on("value", updateUser);

  $("form").hide();

  $(".userChoice").on("click", function(e){
    e.preventDefault();
    userGuess = $(this).data('value');
    computerGuessNumber = Math.floor(Math.random()*rockPaperScissors.length)
    computerGuess = rockPaperScissors[computerGuessNumber];

    //increment counter on Firebase
    fbase.child("counter").transaction(function(currentValue) {
      return (currentValue || 0) + 1;
    }, function(err, committed, fbaseVal) {
      if(err) {
        throw err;
      }
    });

    //bind the stop button when rock, paper or
    //scissors button is clicked
    $("#playAgain").on("click", function(e){
      e.preventDefault();
      $("#myModal").modal('show');
      resetGame();
    });

    //the idea here is to change the stop button color to red
    //by changing class
    $("#playAgain").removeClass("btn-default");
    $("#playAgain").addClass("btn-danger");

    //the idea here is to change the header text and
    //fade text in and out
    $("#gameHeader").html("Guess again!");
    $("#gameHeader").css("color","#FF0DFF");
    
    
    //the idea here is to fade out the computer guess text and fade it in
    //and chage the color
    $('#computer-guess').fadeOut(0).fadeIn(2000);
    $('#computer-guess').html("My guess is " + computerGuess);
    $('#computer-guess').css("color", "#FF530D");

   
    if (userGuess != computerGuess) {
      increaseUsersScore();
      $(".result-symbol").attr("id", "triangle-up");

    } else {
      increaseComputersScore();
      $(".result-symbol").attr("id", "triangle-down");
    }

    if (roundNumber === 6) {
      $("#myModal").modal('show');
      resetGame();
    }
  });

   // Worldwide reset button shows the form
    $("#resetFirebase").on("click", function(e){
      e.preventDefault();
      $(this).hide();
      $("form").show();
    });

    //submitName sets the Firebase counter to 0
    //sets Firebase resetBy to the input value
    //of the text box
    $("#submitName").on("click", function(e){
      e.preventDefault();
      fbase.child("counter").set(0);
      $("#resetFirebase").show();
      fbase.child("resetBy").set($("input").val());
      $("form").hide();
    });

    //random Worldwide reset
    $("#randomReset").on("click", function(e){
      e.preventDefault();
      randomReset = Math.floor(Math.random() * 1000) - 500;
      fbase.child("counter").set(randomReset);
    });

  createAnimation();
  setInterval(loopHeader, 3000); 

  function updateLabel(fbaseVal){
    $("#labelWorldWide").html(fbaseVal.val());
  }

  function updateUser(fbaseVal){
    $("#updatedBy").html(fbaseVal.val())
  }

  function createAnimation() {
    $(".userChoice").on("mouseenter", function() {
         $(this).addClass("slideDown");
    }); 
    $(".userChoice").on("mouseleave", function() {
         $(this).removeClass("slideDown");
    });  
  }

  function loopHeader() {
    $('#gameHeader').fadeOut(500);
    $("#gameHeader").fadeIn(1000);
  }

  function increaseComputersScore() {
    computerScore++;
    roundNumber++;
    $('#computer-score').html(computerScore);
    $('#round-number').html(roundNumber);
    $('#who-wins').fadeOut(0);
    $('#who-wins').fadeIn(2500);
    $('#who-wins').html("I win");
    $('#who-wins').css("color", "#FF530D");

  }

  function increaseUsersScore(){
    userScore++;
    roundNumber++;
    $('#user-score').html(userScore);
    $('#round-number').html(roundNumber);
    $('#who-wins').fadeOut(0);
    $('#who-wins').fadeIn(2500);
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
    $(".result-symbol").attr("id", "");
    $("#resetFirebase").show()
    userGuess ="";
    userScore = 0;
    computerScore = 0;
    roundNumber = 0;
  }


});