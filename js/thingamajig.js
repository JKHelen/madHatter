function clunk(times) {
    var num = times;
    while ( num > 0 ) {
        display("clunk");
        num--;
    }
}

function thingamajig( size ) {
    var facky = 1;
    clunkCounter = 0;
    if (size < 0) {
        display("clank");
    } else if (size == 1) {
        display("thunk");
    } else {
        while (size > 1) {
            facky *= size;
            size--;
        }
        clunk(facky);
    }
}

function display(output) {
    console.log(output);
    clunkCounter++;
}

var clunkCounter = 0;
var number = prompt("PLease enter an integer number; ");
thingamajig(number);
console.log(clunkCounter);