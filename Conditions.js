
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a number: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number)) {
        console.log('That is not a valid number.');
    } else {
        if (number % 2 === 0) {
            console.log(`${number} is even.`);
        } else {
            console.log(`${number} is odd.`);
        }
    }

    rl.close();
});





// Grading System
let marks=prompt("Enter your Marks:");
marks=parseInt(marks);
if(marks==100){
    console.log("O");
}
else if(marks>=90 && marks<=99){
    console.log("A+");
}
else if(marks>=80 && marks<=89){
    console.log("A");
}
else if(marks>=70 && marks<=79){
    console.log("B+");
}
else if(marks>=60 && marks<=69){
    console.log("B");
}
else if(marks>=50 && marks<=59){
    console.log("C+");
}
else if(marks>=40 && marks<=49){
    console.log("C");
}
else{
    console.log("F");
}