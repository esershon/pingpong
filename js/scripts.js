
//the user's number is UserNumber
var UserArray;
for (var i=1; i<=UserNumber; i+=1){
 UserArray.push(i)
}
console.log(UserArray);

var PingPong = UserArray.map(function(number){
  for (var i=0; i<UserArray.length; i+=1) {
    if (number%3===0){
      //put in ping
    }
    if (numer%5===0){
      //put in pong
    }
  };
});

//array made from user.map(function
//for (cycle through the array)(
//if it's divisible by whatever, then this
//etc
//etc
//)
//)
//what is the new array called? I dunno, but then display it plz


//then the userinterface

//when they press the button
//clear the list
//for loop of the array where it puts it in the html as a list somehow
