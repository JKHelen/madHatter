var t1 = "fggfhghg";
var t2 = 123;
var t3 = true;
var t4 = {};
var t5 = [];
var t6;
var t7 = {"adsd": 123};
var t8 = ["adsd", 123];
function t9() { return "abdeds";}
var t10 = null;
console.log(typeof t1);
console.log(typeof t2);
console.log(typeof t3);
console.log(typeof t4);
console.log(typeof t5);
console.log(typeof t6);
console.log(typeof t7);
console.log(typeof t8);
console.log(typeof t9);
console.log(typeof t10);
console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);
console.log(t5);
console.log(t6);
console.log(t7);
console.log(t8);
console.log(t9);
console.log(t10);

var header = document.getElementById("header");
if (header == null) {
    console.log("Oh no no header ")
} else {
    console.log(header);
}
var tips = document.getElementById("tips_div");
if (tips != null) {
    tips.setAttribute("class","tips");
    tips.innerHTML = "I am tips change " + tips.innerText;
} else {
    console.log("There is no id as tips_div");
}

var t11 = 0/0;
var t12 = "hjhj" * 78;
var t13 = Math.sqrt(-9);
var t14 = NaN;

console.log(typeof t11); // number 如果你一点也不吃惊，那么这本书对你来说唯一的用途也许就是拿来点火了。【😂】
console.log(typeof t12);
console.log(typeof t13);
console.log(t11);
console.log(t12);
console.log(t13);
console.log(t14);


var testNaN = (NaN == NaN);
console.log(testNaN);
var t15 = isNaN(t11);
console.log(t15); // true
console.log(typeof null); //object
if (66 == "66") {
    console.log("number 66 equals string \"66\" !!!! ");
} else {
    console.log("How could it be!!!!");
}



