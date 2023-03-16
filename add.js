// task 1

// function sumPolygon(n){
//      return (n-2)*180
// }
// console.log(sumPolygon(3));
// console.log(sumPolygon(4));
// console.log(sumPolygon(6));

// task 2 

// function sumOfTwoNum(a,b){
//     return a+b
// }
// console.log(sumOfTwoNum(4,5));

// task 3

// function sumOfTwoNum(a,b){
//     return Math.max(a,b)
// }
// console.log(sumOfTwoNum(4,5)); 
 

// function sumOfTwoNum(a,b,c){
//     if(a>b && a>c) {
//         return a
//     }
//      else if(b>a && b>c) {
//         return b
//     }
//     else if(c>b && c>a) {
//         return c
//     }

// }
// console.log(sumOfTwoNum(4,5,6));

// task 4

// function sumOfTwoNum(a){
//     return a-(a%2)+2
// }
// console.log(sumOfTwoNum(8));



// task 5 

// function sumTwoInt(a,b){
//     let sum=0
//     for(let i=a;i<=b;i++) {
//          sum+=i
//     }
//     return sum
// }
// console.log(sumTwoInt(2,5));

// task 6 

// function century(n){
    
//     if(n%100==0) {
//         return a/100
//     }
//     else return Math.floor(n/100)+1
    
// }
// console.log(century(1705));

// task 7 

// function turnIntoSecond(a){
//     return a*60
// }
// console.log(turnIntoSecond(5)); 


// task 8 

// function evenNum(a,b){
//     let c=0
//    for(let i=a;i<b;i++) {
//     if(i%2==0) {
//       c=i
//     }
//     console.log(c);
//    }
// }
// console.log(evenNum(2,9));

// task 9 


// function sqrtNum(a,b) {
    //     let sqrt=0
    //     for(let i=a; i<=b; i++) {
        
 //        sqrt=i*i
//        if(sqrt<=b)
 //       { console.log(sqrt);}
 //     }
        
 // }
  // console.log(sqrtNum(1,15)); 

   // function factorial(a){
        //     let c=1
        //       for(let i=1;i<=a;i++){
        //          c*=i
        //       }
        //       return c
        // }
        // console.log(factorial(5));

// task 10 

// function triugolnik(a,b){

//     let c=0;
//     c=Math.sqrt(a*a+b*b)
//     return c
// }
// console.log(triugolnik(2,3));

// task 12

// function PalindromNum(n) {
//         let sum=" "
//         let rev=0
//         for(let i=n; i>=1;) {
//             rev=sum+=i%10
//             i=Math.floor(i/=10)
//         } 
//         return rev==n
//     }
//      console.log(PalindromNum(202));
    // task 13 

    // function cntNum(a,b){
    //     let cnt=0
    //     for(let i=a;i>=1;) {
    //         if(i%10==b) {
    //             cnt++
    //         }
    //         i=Math.floor(i/=10)
    //     }  
    //     return cnt;
    // }
    // console.log(cntNum(458,5)); 

//                           home task for 14.03.2023

// task 1 

// function multiplyNum(a,b){

// return a*b

// }console.log(multiplyNum(25,4));

// task 2 

// function divisibleBy5(n){

// return n%5==0

// }
// console.log(divisibleBy5(37));

// task 3

// function divides(n,a){

//     return n%a==0
    
//     }
//     console.log(divides(85,4));

// / task 4

// function points(n,a){

//     return n*2+a*3
    
//     }
//     console.log(points(7,5));

// / task 5

// function isSameNum(n,a){

//     return n==a
    
//     }
//     console.log(isSameNum(85,4));

// task 8

    // function longestTime(a,b,c){

    //     if(a*3600>b*60 && a*3600>c) {
    //         return a
    //     }
    //     if(b*60>a*3600 && b*60>c) {
    //         return b
    //     }
    //     if(c>b*60 && c>a*3600) {
    //         return c
    //     }
        
    //     }
    //     console.log(longestTime(1,59,3598));

// task 9

// function largestSwap(a) {
    
//     let c=''
//        for(let i=a;i>=1;) {

//          c+=i%10
//          i=Math.floor(i/=10)
         
//        }
//        return a>=c

// }
// console.log(largestSwap(14));
// console.log(largestSwap(53));
// console.log(largestSwap(99));

// task 10

// function solveExp(a,x){
//     let b=0
//     for (let i=x;i>=a;) {
        
//         b++
//         i=Math.floor(i/=a)
//     }
//      return b
// }

// console.log(solveExp(4,1024));
// console.log(solveExp(2,1024));
// console.log(solveExp(9, 3486784401));


