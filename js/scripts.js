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

    if (day === "Sunday") {
      $("#sun").text(newEvent.print());
    } else if (day === "Monday") {
      $("#mon").text(newEvent.print());
    } else if (day === "Tuesday") {
      $("#tues").text(newEvent.print());
    } else if (day === "Wednesday") {
      $("#wed").text(newEvent.print());
    } else if (day === "Thursday") {
      $("#thurs").text(newEvent.print());
    } else if (day === "Friday") {
      $("#fri").text(newEvent.print());
    } else if (day === "Saturday") {
      $("#sat").text(newEvent.print());
    }

    if (urgency === "high") {
      $(".days li").css("background-color", "red");
    } else if (urgency === "medium") {
      $(".days li").css("background-color", "blue");
    } else if (urgency === "low") {
      $(".days li").css("background-color", "orange");
    }


    console.log(name);
    console.log(day);
    console.log(startTime);
    console.log(endTime);
    console.log(urgency);
    console.log(newEvent.print());
  });
});
