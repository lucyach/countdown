// JQUERY 3.4.1

$("button").click(callSetInterval);

var interval;

function callSetInterval() {
  interval = setInterval(findTime, 1000);
}

function findTime() {
  var year = $("#1").val();
  var month = $("#2").val();
  var day = $("#3").val();
  var time = $("#4").val();
  var hour = time.split(":")[0];
  var minute = time.split(":")[1];
  var today = new Date();
  var date = new Date();
  if (isNaN(parseInt(year))) {
    console.log("You screwed up!");
    clearInterval(interval);
    return;
  } else if (isNaN(parseInt(day))) {
    console.log("You screwed up!");
    clearInterval(interval);
    return;
  }
  date.setYear(parseInt(year));
  date.setMonth(parseInt(month));
  date.setDate(parseInt(day));
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(0);
  var timeUntil = date - today;
  if (timeUntil < 0.1) {
    console.log("Your time is up! Enjoy!");
  }
  var secondsUntil = Math.floor(timeUntil / 1000);
  var minutesUntil = Math.floor(secondsUntil / 60);
  secondsUntil = secondsUntil - (minutesUntil * 60);
  var hoursUntil = Math.floor(minutesUntil / 60);
  minutesUntil = minutesUntil - (hoursUntil * 60);
  var daysUntil = Math.floor(hoursUntil / 24);
  hoursUntil = hoursUntil - (daysUntil * 24);
  var yearsUntil = Math.floor(daysUntil / 365);
  daysUntil = daysUntil - (yearsUntil * 365);
  $("#until").empty();
  $("#until").append("Years: " + yearsUntil);
  $("#until").append(" Days: " + daysUntil);
  $("#until").append(" Hours: " + hoursUntil);
  $("#until").append(" Minutes: " + minutesUntil);
  $("#until").append(" Seconds: " + secondsUntil);
}
