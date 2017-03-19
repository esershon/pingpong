
$(document).ready(function() {

  //variables
  var PingPong= [];

  //business logic
  $("form#pingpong").submit(function(event) {
    var UserNumber = parseInt($("input#number").val());
    var UserArray = [];
    for (var i=1; i<=UserNumber; i+=1){
      UserArray.push(i)
    }
    PingPong = UserArray.map(function(number){
      if (number%15===0){
        return "pingpong";
      } else if (number%3===0){
        return "ping";
      } else if (number%5===0){
        return "pong";
      } else {
        return number;
      }
    });

    //interface logic
    $("#gameList").text(" ");
    for (var i=0; i<UserArray.length; i+=1) {
      var ball = ("<li>" + PingPong[i])
      $("#gameList").append(ball)
    }
    event.preventDefault();
  });
});
