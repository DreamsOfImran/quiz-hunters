function populate() {
  if (quiz.isEnded()) {
    showScores();
  }
  else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("bt" + i, choices[i]);
    }

    showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  }
};

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

var questions = [
  new Question("Which of this is a Search Engine?", ["Google", "Youtube", "Facebook", "Apple"], "Google"),
  new Question("What is the source of solar energy?", ["Water", "Wind", "Oxygen", "Sun"], "Sun"),
  new Question("How many bones are there in human body?", ["306", "226", "206", "246"], "206"),
  new Question("Who invented the light bulb?", ["Nikola Tesla", "Thomas Edison", "Will Smith", "Isaac Newton"], "Thomas Edison"),
  new Question("How many planets are there in the solar system?", ["Ten", "Six", "Eight", "Twelve"], "Eight"),
];
var quiz = new Quiz(questions);
populate();
