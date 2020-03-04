// Trivia Game
console.log(questions);

var startScreen = $("#startScreen"),
  gameScreen = $("#gameScreen"),
  gameScreen2 = $("#gameScreen2"),
  gameScreen3 = $("#gameScreen3"),
  scoreScreen = $("#scoreScreen");

var timerEl = $("#timer"),
  incorrectEl = $("#incorrect"),
  correctEl = $("#correct"),
  questionEl = $("#question"),
  questionEl2 = $("#question2"),
  questionEl3 = $("#question3"),
  choicesEl = $("#choices");
choicesEl2 = $("#choices2");
choicesEl3 = $("#choices3");

var startBtn = $("#startBtn"),
  submitBtn1 = $("#submitBtn1");
submitBtn2 = $("#submitBtn2");
submitBtn3 = $("#submitBtn3");
var timerLeft, correct, incorrect, intervalId, qIndex;

startBtn.on("click", startGame);
submitBtn1.on("click", checkAnswer);
submitBtn2.on("click", checkAnswer2);
submitBtn3.on("click", checkAnswer3);

function startGame() {
  timerLeft = 30;
  correct = 0;
  incorrect = 0;
  qIndex = 0;

  startScreen.hide();
  gameScreen.show();
  gameScreen2.hide();
  gameScreen3.hide();

  scoreScreen.hide();

  displayQuestion(questions[qIndex]);
  startTimer();
}
function startTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(function() {
    timerLeft--;
    timerEl.text(timerLeft);

    if (timerLeft === 0) {
      clearInterval(intervalId);

      endGame();
    }
  }, 1 * 1000);
}
// var questionObj = value passed to function call
// var questionObj === questions[qIndex]
function displayQuestion(questionObj) {
  questionEl.text(questionObj.question);
  for (var i = 0; i < questionObj.answers.length; i++) {
    var div = $("#choices");

    var choice = $("<input type='radio' name='choice' >");
    choice.val(questionObj.answers[i]);

    var text = $("<span>");
    text.text(questionObj.answers[i]);
    text.addClass("ml-2");

    div.append(choice, text);
    choicesEl.append(div);
  }
}

function displayQuestion2(questionObj) {
  questionEl2.text(questionObj.question);
  for (var i = 0; i < questionObj.answers.length; i++) {
    var div2 = $("#choices2");

    var choice = $("<input type='radio' name='choice' >");
    choice.val(questionObj.answers[i]);

    var text = $("<span>");
    text.text(questionObj.answers[i]);
    text.addClass("ml-2");

    div2.append(choice, text);
    choicesEl2.append(div2);
  }
}

function displayQuestion3(questionObj) {
  questionEl3.text(questionObj.question);
  for (var i = 0; i < questionObj.answers.length; i++) {
    var div3 = $("#choices3");

    var choice = $("<input type='radio' name='choice' >");
    choice.val(questionObj.answers[i]);

    var text = $("<span>");
    text.text(questionObj.answers[i]);
    text.addClass("ml-2");

    div3.append(choice, text);
    choicesEl3.append(div3);
  }
}

function checkAnswer() {
  chosenAnswer = $("input[name='choice']:checked").val();
  console.log("correct answer", questions[0].correct);
  console.log($("input[name='choice']:checked").val());
  if (chosenAnswer === questions[qIndex].correct) {
    correct++;
  } else {
    incorrect++;
  }
  console.log(correct);
  console.log(incorrect);
  // if correct add correct++, if incorrect add incorrect ++
  // if (($("input[name='choice']:checked").val() = correct)) {
  //   correct++;
  // }
  // if answer is correct load  <div id="correctScreen"
  // if answer is correct load  <div id="incorrectScreen"
  // make sure these screens only stay up for 3 sec
  //then load next question
  // might need to copypasta this function 3x for each submit button
  startScreen.hide();
  gameScreen.hide();
  gameScreen2.show();
  gameScreen3.hide();

  scoreScreen.hide();
  displayQuestion2(questions[1]);
  // displayQuestion(questions[qIndex]);<--doesnt work because it prints question to "choiceEl" which is in game screen 1. need to create a new element choiceEl2 for gamescreen 2 etc...
}
function checkAnswer2() {
  console.log("correct answer", questions[1].correct);
  console.log($("input[name='choice']:checked").val());
  if (chosenAnswer === questions[qIndex].correct) {
    correct++;
  } else {
    incorrect++;
  }
  console.log(correct);
  console.log(incorrect);
  // if correct add correct++, if incorrect add incorrect ++
  // if (($("input[name='choice']:checked").val() = correct)) {
  //   correct++;
  // }
  // if answer is correct load  <div id="correctScreen"
  // if answer is correct load  <div id="incorrectScreen"
  // make sure these screens only stay up for 3 sec
  //then load next question
  // might need to copypasta this function 3x for each submit button
  startScreen.hide();
  gameScreen.hide();
  gameScreen2.hide();
  gameScreen3.show();

  scoreScreen.hide();
  displayQuestion3(questions[2]);
}
function checkAnswer3() {
  console.log("correct answer", questions[2].correct);
  console.log($("input[name='choice']:checked").val());
  if (chosenAnswer === questions[qIndex].correct) {
    correct++;
  } else {
    incorrect++;
  }
  console.log(correct);
  console.log(incorrect);

  // if correct add correct++, if incorrect add incorrect ++
  // if (($("input[name='choice']:checked").val() = correct)) {
  //   correct++;
  // }
  // if answer is correct load  <div id="correctScreen"
  // if answer is correct load  <div id="incorrectScreen"
  // make sure these screens only stay up for 3 sec
  //then load next question
  // might need to copypasta this function 3x for each submit button
  startScreen.hide();
  gameScreen.hide();
  gameScreen2.hide();
  gameScreen3.hide();

  scoreScreen.show();
  endGame();
}

function endGame() {
  gameScreen.hide();
  startScreen.hide();
  gameScreen2.hide();
  gameScreen3.hide();
  timerEl.hide();
  scoreScreen.show();

  correctEl.text(correct);
  incorrectEl.text(incorrect);
}
