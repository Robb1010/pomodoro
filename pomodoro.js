var breakTime = parseInt($("#left_slide").html());
var workTime = parseInt($("#right_slide").html());
var secounds = parseInt($("#seconds").html());
var minutes = parseInt($("#minutes").html());
var status = "inactive";
// Assigning buttons

$("#minus_break").click(function () {
  if (breakTime > 5) {
  $("#left_slide").html(breakTime - 5);
  breakTime = parseInt($("#left_slide").html());
}
});

$("#plus_break").click(function () {
   if (breakTime < workTime - 5) {
  $("#left_slide").html(breakTime + 5);
  breakTime = parseInt($("#left_slide").html());
}
});

$("#minus_work").click(function () {
  if (workTime > breakTime) {
    $("#right_slide").html(workTime - 5);
    workTime = parseInt($("#right_slide").html());
  }
});

$("#plus_work").click(function () {
  if (workTime < 185) {
    $("#right_slide").html(workTime + 5);
    workTime = parseInt($("#right_slide").html());
  }
});

// --------------------

// Timer function

function continueCount() {
  seconds = parseInt($("#seconds").html());
  timing = setInterval(countdownTimer, 1000);
  timing;
  clearInterval(timing);
  mainTimer;
}

function mainTimer() {
  status = "active";
  firstSecond();
  seconds = parseInt($("#seconds").html());
  timing = setInterval(countdownTimer, 1000);
}

function countdownTimer() {
    $("#seconds").html(seconds-1);
    seconds = parseInt($("#seconds").html());
    if (seconds < 10) {
      $("#seconds").prepend("0");
    }
    if (seconds === -1) {
      $("#seconds").html("59");
      $("#minutes").html(minutes-1);
      minutes = parseInt($("#minutes").html());
      clearInterval(timing);
      mainTimer();
    }
}

function firstSecond() {
  $("#seconds").html("59");
  seconds = parseInt($("#seconds").html());
}


// ----------------------

$("#click_me").click(startIt);

function startIt () {
  minutes = workTime;
  $("#minutes").html(workTime -1);
  minutes = parseInt($("#minutes").html());
  if (status === "active") {
    clearInterval(timing);
    mainTimer();
  } else mainTimer();
}
