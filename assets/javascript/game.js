// A $( document ).ready() block.
$( document ).ready(function() {
    console.log("ready")
    // function generateRandomInteger(min, max) {
    //     return Math.floor(min + Math.random() * (max + 1 - min))
    // };
    // var cnumber=generateRandomInteger(19,120);
    // $("#computernumber").html(cnumber);
});


//Above i was trying to get started with jquery but i am short on time so i will pseudo code from here

//Step 1 generate random number between 19 and 120 with the following formula:
//function generateRandomInteger(min, max) {
    //     return Math.floor(min + Math.random() * (max + 1 - min))
    // };

//Step 2 assign a variable a number using the function above
//step 3 show number on the DOM using .html() jquery command after selecting the the #computernumber with the $ selector

//step 4 create on.click() listeners for the images $(img) and have the function perform the following task
//** generate a random number when an image is clicked using the same function for computer number and add the number to the .html value of "your score" 
//