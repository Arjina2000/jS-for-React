const array =[1,2,3,4,5]; 
const student ={
    name:'arjina',
    age:25,
    movies :['king khan','yoyooo']


}
// 1. Template String
const about = `My name is ${student.name} age of  ${student.age} has numbers ${array} and like to watch ${student.movies[0]}`; 
console.log(about);

// 2. Arrow Function
const getFiftyFive =()=>55;
const fiftyPlus = num => num+654;
const isEven = x=> x%2==0;
const addThree =(x,y,z) =>x+y+z;
const doMath =(num1,num2)=>{
    const sum = num1+num2;
    return sum;
}
// spread operator
const newArray = array;
array.push(99);
console.log(...newArray,1000);