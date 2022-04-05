// Functions
// // Create one function with zero parameter having a console statement;
// function x(){
//     a=10;
//     console.log(a)
// }
// x()


// Create one function which takes two values as a parameter 
// // and print the sum of them as "Sum of 3, 4 is 7"
// function abc(a,b){
// console.log(a+b)
// }
// abc(3,4)


// Create one function which takes three parameter as first name and last name and
//  age and return the statement as "A is 99 years old"
// function details(){
//    let firstname="harini";
//    let lastname="reddy";
//    let age=23;
//    console.log(firstname, lastname    +'is'+  age, 'years old')
// }
// details()


// // Create one arrow function
// let adding=(e,f)=>{
//  return e+f;
// }
// console.log(adding(2,3))



// "Print output: 
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl();
       // output is undefined


// "Print output: "
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };
// the output to this is undefined and 21


// "Print output
// var x = 21;
// a();
// b();
// console.log(a);
// function a () {
    
//     var x = 20;
// console.log(x);
// };

// function b () {
    
//     var x = 40;
// console.log(x);
// };

// output to this is 20 and 40 and for console.log(a) is the defination of a function


// "Print output"
// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// }
// output is a is not defined

// Write a function that accepts parameter n and returns factorial of n

// function factorial(n){
//    if(n == 0 || n == 1){
//        return 1;
//    }else{
//        return n * factorial(n-1);
//    }
// }
// result=factorial(4);
// console.log(result);


// Closures

//   function counter(){
//    var counter = 0;

//    function IncreaseCounter() {
//        return counter += 1;
//    };

//    return IncreaseCounter;
// }

// var counter = Counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
// output is counter is not defined

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();
// the output is 0 and 1




// for (var i = 0; i < 3; i++) {
//    setTimeout(function log() {
//      console.log(i); // What is logged?
//    }, 1000);
//  }
// //  The output is 3 




// Write a code to explain closure
// function outer(){
//    let a=10;
//    function inner(){
//       let b=2
//       console.log(a+b)
//    }
//    return inner
// }
// let res=outer()
// res()

// Write a code to calculate area of a rectangle using inner function
// In this case outer function should accept parameter 
// length and inner function should accept parameter breadth.

// function outer(){
//    let length=10;
//    function innerrec(){
//       let breadth=12;
//       AreaOfRec=length*breadth;
//       console.log(AreaOfRec)

//    }
//    return innerrec;
// }
// let rectangles=outer();
// rectangles()


// Take a variable in outer function and create an
//  inner function to increase the counter every time it is called

// function out(){
//    let count=0
//    function inner(){
//       return count++;

//    }
//    return inner
// }
// let update=out()
// console.log(update())
// console.log(update())
// output is 0 and 1



// var a = 12;
// (function () {
//   alert(a);
// })();//output is 12

// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x(); 
// output is 12




// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         ""outerArg = "" + outerArg + ""\n"" +
//         ""innerArg = "" + innerArg + ""\n"" +
//         ""outerVar = "" + outerVar + ""\n"" +
//         ""innerVar = "" + innerVar + ""\n"" +
//         ""globalVar = "" + globalVar);
    
//     })(456);
// })(123);
//outerArg = 123
//innerArg = 456
//outerVar = a
//innerVar = b
 //globalVar =xyz



