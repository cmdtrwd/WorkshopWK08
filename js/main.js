// variable declaration and initialisation
let count = 1;
let max = 5;


// A function to print out the number of times users click the button
function Count(){
    if (count < max){
        count++;
        document.getElementById("title").innerHTML = count;
    }
    else {
        document.getElementById("title").innerHTML = "Reached the max of 5";
    }
    
}