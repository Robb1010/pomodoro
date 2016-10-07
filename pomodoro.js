var breakTime = parseInt($("#left_slide").html());
var workTime = parseInt($("#right_slide").html());
var secounds = parseInt($("#seconds").html());
var minutes = parseInt($("#minutes").html());
var status = "inactive";
var audioBreak = new Audio("break.wav");
var cycle = "work";
// Assigning buttons and status changes

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
  status = "changed";
  if (workTime > breakTime) {
    $("#right_slide").html(workTime - 5);
    workTime = parseInt($("#right_slide").html());
  }
});

$("#plus_work").click(function () {
  status = "changed";
  if (workTime < 185) {
    $("#right_slide").html(workTime + 5);
    workTime = parseInt($("#right_slide").html());
  }
});

// --------------------

// Timer function

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
    if (seconds === 0 && minutes === 0) {
      clearInterval(timing);
      audioBreak.play();
      if (cycle === "work") {
      $("#minutes").html(breakTime -1);
      minutes = parseInt($("#minutes").html());
      mainTimer();
      cycle = "break";
    } else {
      $("#minutes").html(workTime -1);
      minutes = parseInt($("#minutes").html());
      mainTimer();
      cycle = "work";
    }
  }
}

function firstSecond() {
  $("#seconds").html("59");
  seconds = parseInt($("#seconds").html());
}

// ----------------------

// Assing pause and start functions to the main timer area

$("#click_me").click(startIt);

function startIt () {
  minutes = workTime;
  if (status === "inactive") {
  $("#minutes").html(workTime -1);
  minutes = parseInt($("#minutes").html());
  mainTimer();
  } else if (status === "active") {
    status = "paused";
    clearInterval(timing);
  } else if (status === "changed") {
    if (typeof timing !== "undefined") {
    clearInterval(timing);}
    status = "active";
    $("#minutes").html(workTime -1);
    minutes = workTime -1;
    mainTimer();
  } else if (status === "paused") {
    status = "active";
    timing = setInterval(countdownTimer, 1000);
    timing;
  } else mainTimer();
}

//-----------------------
