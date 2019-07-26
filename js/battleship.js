//1. need 3 variables to store ship location
var location1,
    location2,
    location3;
//2. geuss is player's guss number
var geuss;

//3. hit time initialize to 0
var hits = 0;

//4. guess times
var guesses = 0;

//5. markup ship is sank or not
var is_sank = false;

//start
/*
  simple one set location 1, 2, 3 is 3,4,5
  after theses will be random number
 */
location1 = 3;
location2 = 4;
location3 = 5;
/*
 * step 1: loop get and check player's input
 */

while( is_sank == false ) { // ship is not sank
    // get player's guess number
    guess = prompt("Ready, aim, fire!!( enter a number from 0~6) ");
    // if (guess == null) break;
    //compare guess with ship location1~3
    // if (guess !== (location1 || location2 || location3)) {
    //     alert("Please enter 0~6 number ");
    if (guess < 0 || guess > 6) {
        alert("PLease enter a cell number from 0~6 !!!");
    } else {
        //guess time add 1
        guesses++;
        if ( guess == location1 || geuss == location2 || guess == location3 ) {
            //hit time add 1
            alert("HIT!!!");
            hits++;
            if (hits == 3) {
                is_sank = true;
                alert("You sank my battleship!!!");
            }
        } else {
            alert( "MISS....");
        }
    }
}

//show players's count information
var stats = "You took " + guesses + " times to sank my battleship ~~~"  +
             "Which means your shooting accuracy was " + ( 3/guesses );
alert(stats);

