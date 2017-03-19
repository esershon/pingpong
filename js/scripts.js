
$(document).ready(function() {

  //variables
  var PingPong= [];

  //business logic
  $("form#pingpong").submit(function(event) {
    //get the UserNumber
    var UserNumber = parseInt($("input#number").val());
    //get the UserArray
    var UserArray = [];
    for (var i=1; i<=UserNumber; i+=1){
      UserArray.push(i)
    }
    //create PingPong Array

      // for (var i=0; i<UserArray.length; i+=1) {
      //   if (number%3===0){
      //     UserArray.splice[i,1,"ping"];
      //   }
      // }
        // if (number%5===0){
        //   UserArray.splice[i,1,"pong"];
        // }

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


    //user interface
    for (var i=0; i<UserArray.length; i+=1) {
      var ball = ("<li>" + PingPong[i])
      $("#gameList").append(ball)
    }

    event.preventDefault();

  });

});


//then the userinterface

//when they press the button
//clear the list
//for loop of the array where it puts it in the html as a list somehow
