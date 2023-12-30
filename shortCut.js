// false=== '', 0,false,null,undefined
// 'alams',5,true,{},[]
//cherck truthy
let myVar=5;
if(myVar){
    myVar=myVar*100;
}

else{
    myVar=0;
}

// check negative or falsy anything
let myMoney =50;
if(!myMoney){

}



const money = 80;
let food;
if(money>100)
{
    food= 'biriyani';
}
else{
    food='cha biscuit';
}

//ternany
let food1= money>100?'biriyani':'cha biscuit';
console.log(food1);

///another example number to string convertion
let drink = (money>100)?'coke':'filter water';
console.log(drink);
const num1=52;
console.log(num1);
const numStr = num1+'';
console.log(numStr);

//string to number
const input = '500';
const inputNum= +input;
console.log(inputNum);
//
let isActive = true;
const showuser =()=>console.log('display user');
const hideuser =()=>console.log('hide user');
isActive?showuser():hideuser();
// use && if the left side is true then right side will be executed
isActive && showuser();
// use || if the left  side is false then right swide will be executed
isActive || hideuser();
//  toggle boolean
isActive = !isActive;
