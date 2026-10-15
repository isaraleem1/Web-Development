// Basic Javascript
// let day=9;

// switch(day){
//    case 1:
//      console.log(`monday`);
//      break;
//    case 2:
//     console.log(`tuesday`)
//     break;
//    case 3:
//     console.log('wednesday');
//     break;
//    case 4:
//     console.log("thursday");
//     break;
//    case 5:
//     console.log("friday");
//     break;
//    case 6:
//     console.log("saturday");
//     break; 
//    case 7:
//     console.log("sunday");
//     break; 
//    default :
//     console.log("Invalid Input");
// }
// let num=prompt("enter your number");
// if(num%10==0){
//  console.log("good");
// }else{
//     console.log("bad");
// }
// error("Hihaha Isar's space");
// /let userName=prompt("Enter your name");
// let age=prompt("Enter your age")
// alert(`${userName} is ${age} years old`);
//let Quater=Number(prompt("enter Quater number"));
// switch(Quater){
//     case 1:
//         console.log('Janauary,February,March');
//          break;
//     case 2:
//         console.log('April,May,June');
//         break;
//     case 3:
//         console.log('July,August,september');
//         break;
//     case 4:
//         console.log('october,November,December');
//         break;
//     default :
//      console.log("Invalid Quater");
// }
// let str=prompt("enter your string:");
// if(str[0]==='a'|| str[0]==='A' && str.length>5){
//     console.log("Given string is golden string")
// }else{
//     console.log("Given string is not a golden string")
// }
// let a=3;
// let b=5;
// let c=1;
// if(a>b && a>c){
// console.log(`Maximum number is ${a}`);
// }else if(b>c){
//     console.log(`Maximum number is ${b}`);
// }else{
//     console.log(`Maximum number is ${c}`);
// }
// let str=" hello ";
// console.log(str.trim());
// console.log(str);
// let name="Apna College";
// console.log(name);
// console.log(name.toUpperCase());
// let msg="hello!";
// let msg2=msg.trim().toUpperCase();
// console.log(msg2);
//array in js
//let students=["Aman","Shraddha","Rajat"];
// console.log(students);
// let cars=["audi","bmw","xuv","maruti"];
// 
// let array=[1,2,3,4,5];
// let element=5;
// if(array.includes(element)){
//     console.log("Array includes the given element");
// }
// else{
//     console.log("Array doesn't include the element");
// }
//table of a number 
// let num=Number(prompt("enter the number whose table you want to print:"));
// for(let i=1;i<=10;i++){
//     console.log(num*i);
// }
// for(let i=1;i<=3;i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }
// let i=1;
// while(i<=20){
//     console.log(i);
//     i=i+2;
// }
// const favouriteMovie="herapheri";

// let movie=prompt("Enter my favourite movie");
// while(movie!=favouriteMovie){
//   if(movie=="quit"){
//     break;
//   }
//   movie=prompt(" wrong Guess again  my favourite movie else  enter quit");
// }
// if(movie=="herapheri"){
//     console.log("you guessd the correct");
// }else{
//     console.log("you qiut the game,better luck next time");
// }
// for(let i=1;i<=5;i++){
//     console.log(i);
//     if(i==3){
//         break;
//     }
// }
//loop with array
// let arr=["mango","apple","banana","litchi","orange"];
// arr.push("pineapple");
// for(let i=arr.length-1;i>=0;i--){
//     console.log(i,arr[i]);
// }
// // nested loop with arrays
// let heros=[["ironman","spiderman","thor"],["superman","wonderwoman","flash"]];
// for(let i=0;i<heros.length;i++){
//     console.log(`${i}th row`)
//     for(let j=0;j<heros[i].length;j++){
//         console.log(heros[i][j]);
//     }
//  }
// let student=[["aman",95],["shraddha",94.4],["karan",100]];
// for(let i=0;i<student.length;i++){
//     console.log(`${i+1}th student data`)
//     for(let j=0;j<student[i].length;j++){
//         console.log(student[i][j]);
//     }
// }
// let fruits=["mango","apple","banana","litchi","orange"];
// for(let fruit of fruits){
//     console.log(fruit);
// }
// let heros=[["ironman","spiderman","thor"],["superman","wonderwoman","flash"]];
// for(let groupOfHeros of heros ){
    
//     for(let hero of groupOfHeros ){
//         console.log(hero);
//     }
// }
// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// while(arr.includes(num)){
//     idx=arr.indexOf(num);
//     arr.splice(idx,1);
// }
// for(let i=0;i<arr.length;i++){
//    console.log(arr[i]);
// }
// let num=1200;
// let digit=0;
// let sumOfDigits=0;
// let remainder;
// while(num>0){
//     // num=(num-num%10)/10;
    
//      num = Math.floor(num / 10);
//      remainder=num%10;
//      sumOfDigits=sumOfDigits+remainder;
//     digit++;
// }
// console.log(`Number of digits in given number is: ${digit}`);
// console.log(`sum of digits in given number is: ${sumOfDigits}`);
// let num=5;
// let factorial=1;
// if(num<=1){
//     console.log(`foctorial of given number : ${factorial}`);
// }
// else{
// for(let i=1;i<=num;i++){
//    factorial*=i;
// }
// console.log(`foctorial of given number : ${factorial}`);
// }
// let arr=[1,5,6,9];
// let max=-1;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(`Max of given numberis ${max}`);
// const student ={
//     Name:"isar",
//     age:23,
//     marks:87
// };
// const item={
//     price:100.99,
//     discount:50
// };
// const thread={
//     userName:"@isaraleem",
//     content:"This is my first post",
//     likes:200,
//     repost:5,
//     tags:["@usmani","@shafa"]
// };
// const classInfo={
//    aman:{
//     grade:'A+',
//     city:"Delhi"
//    },
//    shraddha:{
//     grade:"A",
//     city:"Pune"
//    }
// }
// const classInfo=[
//     {
//         Name:"aman",
//         grade:'A+',
//         city:"Delhi"

//     },
//     {
//         Name:"shraddha",
//         grade:'A',
//         city:"Pune"
//     }
// ];
// let req=prompt("Type roll to rolling your dice");

// if(req=='r'){
// let diceNumber=Math.floor(Math.random()*6+1);
// console.log(`you have got ${diceNumber} on your Dice`);
// }else{
//     console.log("invalid command");
// }
// let car={
//     Name:"Audi",
//     model:2019,
//     color:"black"
// };
// console.log(car.Name);
// let person={
//   Name:'Isar Aleem',
//   age:20,
//   city:"Agra",
// };
// person.city="New York";
// person.country="United states";
function poem(){
  console.log("Twinkle twinke little star... ");
  console.log("How are wonder ,what you are...")
}
poem();
function rolldice(){
    let diceNumber=Math.floor(Math.random()*6+1);
    console.log(`you have got ${diceNumber} on your Dice`);
}
rolldice();