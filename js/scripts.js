//business logic
var name;
var day;
var startTime;
var endTime;
var urgency;
//event constructor
function task(name, day, startTime, endTime, urgency) {
  this.name = name;
  this.day = day;
  this.startTime = startTime;
  this.endTime = endTime;
  this.urgency = urgency;
};
//info prototype
task.prototype.print = function() {
  return this.name + " from " + this.startTime + " to " + this.endTime;
};

//user interface logic
$(document).ready(function() {
  $("#newEvent").submit(function(event) {
    event.preventDefault();

    name = $("#event").val();
    day = $("#day").val();
    startTime = $("#startTime").val();
    endTime = $("#endTime").val();
    urgency = $("input:radio[name=urgency]:checked").val();

    var newEvent = new task(name, day, startTime, endTime, urgency);

    if (day === "Sunday" && urgency === "high") {
      $("#sun").text(newEvent.print());
      $("#sun").css("background-color", "red");
    } else if (day === "Sunday" && urgency === "medium") {
      $("#sun").text(newEvent.print());
      $("#sun").css("background-color", "blue");
    } else if (day === "Sunday" && urgency === "low") {
      $("#sun").text(newEvent.print());
      $("#sun").css("background-color", "orange");

    } else if (day === "Monday" && urgency === "high") {
      $("#mon").text(newEvent.print());
      $("#mon").css("background-color", "red");
    } else if (day === "Monday" && urgency === "medium") {
      $("#mon").text(newEvent.print());
      $("#mon").css("background-color", "blue");
    } else if (day === "Monday" && urgency === "low") {
      $("#mon").text(newEvent.print());
      $("#mon").css("background-color", "orange");

    } else if (day === "Tuesday" && urgency === "high") {
      $("#tues").text(newEvent.print());
      $("#tues").css("background-color", "red");
    } else if (day === "Tuesday" && urgency === "medium") {
      $("#tues").text(newEvent.print());
      $("#tues").css("background-color", "blue");
    } else if (day === "Tuesday" && urgency === "low") {
      $("#tues").text(newEvent.print());
      $("#tues").css("background-color", "orange");

    } else if (day === "Wednesday" && urgency === "high") {
      $("#wed").text(newEvent.print());
      $("#wed").css("background-color", "red");
    } else if (day === "Wednesday" && urgency === "medium") {
      $("#wed").text(newEvent.print());
      $("#wed").css("background-color", "blue");
    } else if (day === "Wednesday" && urgency === "low") {
      $("#wed").text(newEvent.print());
      $("#wed").css("background-color", "orange");

    } else if (day === "Thursday" && urgency === "high") {
      $("#thurs").text(newEvent.print());
      $("#thurs").css("background-color", "red");
    } else if (day === "Thursday" && urgency === "medium") {
      $("#thurs").text(newEvent.print());
      $("#thurs").css("background-color", "blue");
    } else if (day === "Thursday" && urgency === "low") {
      $("#thurs").text(newEvent.print());
      $("#thurs").css("background-color", "orange");

    } else if (day === "Friday" && urgency === "high") {
      $("#fri").text(newEvent.print());
      $("#fri").css("background-color", "red");
    } else if (day === "Friday" && urgency === "medium") {
      $("#fri").text(newEvent.print());
      $("#fri").css("background-color", "blue");
    } else if (day === "Friday" && urgency === "low") {
      $("#fri").text(newEvent.print());
      $("#fri").css("background-color", "orange");

    } else if (day === "Saturday" && urgency === "high") {
      $("#sat").text(newEvent.print());
      $("#sat").css("background-color", "red");
    } else if (day === "Saturday" && urgency === "medium") {
      $("#sat").text(newEvent.print());
      $("#sat").css("background-color", "blue");
    } else if (day === "Saturday" && urgency === "low") {
      $("#sat").text(newEvent.print());
      $("#sat").css("background-color", "orange");
    }
/*
    if (urgency === "high") {
      $("#sun").css("background-color", "red");
    } else if (urgency === "medium") {
      $("#mon").css("background-color", "blue");
    } else if (urgency === "low") {
      $("#tues").css("background-color", "orange");
    }
*/

    console.log(name);
    console.log(day);
    console.log(startTime);
    console.log(endTime);
    console.log(urgency);
    console.log(newEvent.print());
  });
});
