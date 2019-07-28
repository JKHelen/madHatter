function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}

// var  pappy = "Jerry";
// var weight = 12;
// bark(pappy,weight);
bark("Jerry", -12);
bark("Tom", "21");
bark("Alice", 9, 0);
bark("Kit", 10, 21);

function whatShallWear ( temp ) {
    if ( temp < 60 ) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log( "Wear a sweater");
    } else {
        console.log("Wear a T-shirt");
    }
}

whatShallWear(50);
whatShallWear(80);
whatShallWear(60);

function  doIt(param) {
    param = 2;
    console.log(param);
    console.log(test);
}
var test = 1;

doIt(test);

console.log(test);
