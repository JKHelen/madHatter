var scores = [60,50,60,58,54,54,
              58,50,52,54,48,69,
              34,55,51,52,44,51,
              69,64,66,55,52,61,
              46,31,57,52,44,18,
              41,53,55,61,51,44];

var costs = [.60,.10,.60,.85,.54,.54,
            .58,.50,.52,.54,.48,.69,
            .34,.85,.51,.52,.44,.51,
            .69,.64,.66,.55,.52,.61,
            .46,.31,.57,.82,.44,.18,
            .41,.53,.85,.61,.85,.44];

function displayBubble(bubbles) {
    for (var i = 0; i < bubbles.length; i++) {
        // document.write("Bubble solution #" + i + ": " + scores[i] + "<br>");
        var output = "Bubble solution #" + i + ": " + bubbles[i];
        console.log(output);
    }
    console.log("Bubble tests: " + bubbles.length);
}

function highest(bubbles) {
    // scores.sort();
    var high = 0;
    for (var i = 0; i < bubbles.length; i++) {
        // way to find max
        if (bubbles[i] > high) {
            high = bubbles[i];
        }
    }
    console.log("Highest bubble score: " + high);
    return high;
}

function bestSolutions(bubbles) {
    var best = [];
    for (var i = 0; i < bubbles.length; i++) {
        if (bubbles[i] == highest(bubbles)) {
            best.push(i);
            // best[best.length] = i;
        }
    }
    console.log("Best solutions score: " + best);
}

function getMostEffictiveSolutions(bubbles, costs) {
    var index;
    var cost = 100;
    for (var i = 0; i < bubbles.length; i++) {
        if (bubbles[i] == highest(bubbles)) {
            if (cost > costs[i] ) {
                index = i;
                cost = costs[i];
            }
        }
    }
    console.log("Most effective is : " + index + " Is Most Effective");
    return index;
}


displayBubble(scores);
bestSolutions(scores);
getMostEffictiveSolutions(scores, costs);

























