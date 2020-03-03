// Trivia Game
console.log(questions);

// variables - start button
//             questions and answer Array
//             correct, incorrect
//             Timer
//             done button
//             score card
var startScreen = $("#startScreen"),
  gameScreen = $("#gameScreen"),
  gameScreen2 = $("#gameScreen2"),
  gameScreen3 = $("#gameScreen3"),
  scoreScreen = $("#scoreScreen");

var timerEl = $("#timer"),
  incorrectEl = $("#incorrect"),
  correctEl = $("#correct"),
  questionEl = $("#question"),
  choicesEl = $("#choices");

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

// var questionObj = value passed to function call
// var questionObj === questions[qIndex]
function displayQuestion(questionObj) {
  questionEl.text(questionObj.question);
  for (var i = 0; i < questionObj.answers.length; i++) {
    var div = $("<div>");

    var choice = $("<input type='radio' name='choice' >");
    choice.val(questionObj.answers[i]);

    var text = $("<span>");
    text.text(questionObj.answers[i]);
    text.addClass("ml-2");

    div.append(choice, text);
    choicesEl.append(div);
  }
}

function checkAnswer() {
  console.log("Check answer", questions[qIndex].correct);
  console.log($("input[name='choice']:checked").val());
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
}
function checkAnswer2() {
  console.log("Check answer", questions[qIndex].correct);
  console.log($("input[name='choice']:checked").val());
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
}
function checkAnswer3() {
  console.log("Check answer", questions[qIndex].correct);
  console.log($("input[name='choice']:checked").val());
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
}

function endGame() {
  gameScreen.hide();
  startScreen.hide();
  gameScreen2.hide();
  gameScreen3.hide();
  scoreScreen.show();

  correctEl.text(correct);
  incorrectEl.text(incorrect);
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

// functions -     populate questions and answers
//                 start Game and Timer
// //                 timer stops Game
// //                 score card appears and shows score

//     steps  -        press start
//                     questions generate, timer starts
//                     user clicks answers, one per question
//                     game ends when timer runs out or user clicks "done"
//                     score card shows "correct" "incorrect" and "unanswered"
