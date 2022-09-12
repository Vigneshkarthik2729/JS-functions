// Function Declaration

function car(a,b) {
    return a+b;
  }
console.log(car(5,5));  
  
console.log(car);


// Function Expression

const myFunction =  function (a,b) {
    return a*b;
}


console.log(myFunction(10,5));

const vk = function () {
    var a = 5;
    var b = 7;
    console.log(a+b);
}
vk();


// Arrow Function

const xy = () => {
    return 10+7;
}
console.log(xy());

const lh = () => 10+10;
console.log(lh());