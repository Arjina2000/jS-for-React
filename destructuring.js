//1.array destructuring
const numbers =[42,50];
//const x= numbers[0];
//const y= numbers[1];
//console.log(x,y);
//this method is old

const [x,y]=[40,50];
console.log(x,y);
function boxify(num1,num2){
    const nums=[num1,num2];
    return nums;
}
console.log(boxify(500,400));
// object destructuring
// const{name, age}={name:'arjina',age:25};
// const{name, age}={name:'arji',age:2};
const employeee ={
    idea :'VS Code',
    designation : 'Web developer',
    machine :'Mac',
    languages:['html','css','js'],
    specification :{
        height :66,
        weight:67,
        address:'kumarkhali',
    }
}

const{machine,idea}=employeee;

// destructuring e duipase same jinis hoya lagbe and ekhane ?. diye optional chaining o use korte parbe