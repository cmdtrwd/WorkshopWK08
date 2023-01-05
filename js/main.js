// variable declaration and initialisation
let count = 0;
let max = 5;


// A function to print out the number of times users click the button
function Count(){
    count++;
    if (count < max){
        document.getElementById("title").innerHTML = count;        
        let box = document.getElementById("box");
        box.style.width = 100 + 50*count +"px";
        box.style.height = 100 + 50*count +"px";
    }
    else {
        document.getElementById("title").innerHTML = "Reached the max of 5";
        let box = document.getElementById("box");        
        box.classList.toggle("active");
        box.parentElement.style.backgroundColor = "#ff0000";
    }    
}