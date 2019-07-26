// // setTimeout(1, 2, 3);
// // var my_mod = "happy", age = 21 ;
// // alert(my_mod);
// // alert(age);
//
// // var mood = "happy or don't or say:\" Hey \" ";
// // alert(mood);
// // var sleep = false;
// // alert(sleep);
// var books = Array(4);
// books[0] = "Math";
// books[1] = "Chinese";
// books[2] = "Art"
// books[3] = "PE";
//
// var music = Array("Dao", "Ran", "Mi", "Fa", "DDD");
//
// var art = ["love", 21, true, books];
//
// // console.log(art);
//
// var Gwendolyn = Object();
//
// Gwendolyn.name = "Gwendolyn";
// Gwendolyn.age = 21;
// Gwendolyn.email = "123@123.com";
//
// var judy = {name: "Judy", age: 21, year: 1998, sleeping: false};
// console.log(judy);
//
// var friends = Array();
// friends[0] = judy;
// console.log(friends);
// // friends[judy] = art;
// console.log(friends);
//
// var f = {};
// f.best = judy;
// document.write(f.best.name);
// document.write(f.best.sleeping);
//
// var time = 9102;
// var message =  " Now Time is ";
//  message += time;
//
// // alert(message);
// // for (var count = 0; count < books.length; count++) {
// //     alert(books[count]);
// // }
//  function sendMessage(num1, num2) {
//      var mess = num1 + " " +  num2;
//      return mess;
//  }
//
//  var mood = "happy", smile = "bigger";
//  var motion = sendMessage(mood, smile);
//  // alert(motion);
//
// function square ( num ) {
//     var total = num * num ;
//     return total;
// }
//
// var total = 10;
// var number = square(20);
// // alert(total);
//
//
// var habit = new Array();
// habit.reading = books;
// document.write(habit.length);
// document.write(habit.reading);
//
// var number = 7.657;
// var number = Math.round(number);
// document.write(number);
//
// var current_date = new Date();
// var today = current_date.getDate();
// document.write(today);
// document.write(current_date.getDay() + current_date.getHours() + current_date.getFullYear());
// // alert(today);
// // alert(current_date.getFullYear());
// var scoops = 5;
// while( scoops > 0 ) {
//     document.write("<br>Another scoop!<br>");
//     scoops--;
// }
// document.write("Life without ice cream isn't same");
// console.log(scoops);
//
var word = "bottles";
var count = 99;
while ( count > 0) {
    console.log(count + " " + word + " on the wall");
    console.log(count + " " + word + " of beer, ");
    console.log("Take one down, pass it around");
    count--;
    if (count > 0) {
        console.log(count + " " + word + " on the wall");
    } else {
        console.log("There is no " + word + " of beer on the wall ");
    }

}
