$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var person1Input = $("input#person1").val();
    var dayInput = $("input#date").val();
    var startInput = $("input#startTime").val();
    var endInput = $("input#endTime").val();

    $(".person1").text(person1Input);
    $(".date").text(dateInput);
    $(".startTime").text(startInput);
    $(".endTime").text(endInput);

    $(".panel").show();
    event.preventDefault();
  });
});

//business logic
function urgency(highPriority, medPriority, lowPriority) {

  this.highPriority = urgent;
  this.medPriority = soon;
  this.lowPriority = whenever;
}




calendar.prototype.urgency = function() {
  if (this.highPriority === "urgent") {
    this.color === "red";
  } else if (this.medPriority === "soon") {
    this.color === "yellowColor";
  } else {
    this.lowPriority === "whenever";
  }
  return this.color === "greenColor";
};
