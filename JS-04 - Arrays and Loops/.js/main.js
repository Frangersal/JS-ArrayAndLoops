
document.addEventListener("DOMContentLoaded", function() { 

});
 /*
Exercise #1

Part 1
There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. 
Create an array that has these three names in order.

Part 2
Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

Part 3
It turns out David was saving a spot for his friend Renata. 
She shows up and goes behind him in the line. 
One more person (Elena) shows up and goes to the end of the line. 
What does the queue look like?
 */

function bankWaiting() {
    let personas = ["Sofia", "David", "Juan"];
    //Forma al ultimo elemento
    personas.push("Sara","Augustin"); 
    //Primera persona es llamada, quitar primera persona del array
    personas.shift();

    personas.splice(1, 0, "Renata");

    //Forma al ultimo elemento
    personas.push("Elena"); 
    for (let index = 0; index < personas.length; index++) {
        console.log(personas[index]); 
    } 
}
console.log(bankWaiting());
console.log("*********");
/*
Write a JavaScript program to construct the following pattern, using a nested for loop.
*  
* *  
* * *  
* * * *  
* * * * *
*/

function piramide() {
    let asteriscos = [];
    for (let index = 0; index <= 5; index++) { 
        asteriscos.push("*");  
        let strAsteriscos = asteriscos.join(" ");
        console.log(strAsteriscos);
    } 
}

console.log(piramide());
console.log("*********");

/*
– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive. 

- Print all the odd numbers between 1 - 100.

- Write a method with a while loop to print 1 
through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]

- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190
*/
function fValue() { 
    /*
    
    for (let xValue = -100; xValue >= 0; xValue-=0.5) {  
        console.log(xValue);
    } 
    */
}
function odds() { 
    for (let index = 1; index <= 100; index+=2) { 
        console.log(index);
    }
}
function whileLoop() {  
    let n = 3;
    let arrNums = [];
    let i=0;
    while (n>=1) {
        let isuma=parseInt(i)+1;
        //console.log(isuma);
        arrNums.push("["+isuma+"]");
        
        i++;
        n--;
    }
    
    return(arrNums.join(" "));
}


function whileLoop() {  
    let n = 3;
    let arrNums = [];
    let i=0;
    while (n>=1) {
        let isuma=parseInt(i)+1;
        //console.log(isuma);
        arrNums.push("["+isuma+"]");
        
        i++;
        n--;
    }
    
    return(arrNums.join(" "));
}

console.log("********* fValue");
//console.log(fValue());
console.log("********* odds");
console.log(odds());
console.log("*********whileLoop");
console.log(whileLoop());
console.log("*********");