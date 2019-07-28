var car = {
    color: "red",
    year: 9102,
    price: 2100000,
    engine: false,

    start: function () {
        this.engine = true;
    },
    stop: function () {
        this.engine = false;
    },
    drive: function () {
        if (this.engine) {
            alert("Zoom Zoom");
        } else {
            alert("U need to engine at first");
        }
    }
};

function display() {
    for (var i in car) {
        console.log(i + " " +  car[i]);
    }
}

console.log(car);
// car.drive();
// car.start();
// car.drive();
// car.stop();
// car.drive();
car.washing = function () {
    alert("Your car needs to be washed" );
}
// car.washing();
display();

