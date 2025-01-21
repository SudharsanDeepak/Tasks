let a=-10;
if(a>=0 && a%2==0){
    console.log("positive and even number");
}
else if(a>=0 && a%2!=0){
    console.log("postive and odd number");
}
else if(a<0 && a%2==0){
    console.log("negative and even number");
}
else{
    console.log("negative and odd number");
}

//grade

let b=prompt("enter the mark:");
if(b>=90){
    console.log("grade a");
}
else if(b>=70 && b<90){
    console.log("grade b");
}
else if(b>=50 && b<70){
    console.log("grade c");
}
else{
    console.log("fail");
}