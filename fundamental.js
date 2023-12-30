// <!--1.  how to use let and const -->
const fathersName='amir';
let season = 'rainy';
season='winter';
// 2. 6 basic condition >,<,>=,<=,===,!==,
// multiple condition && ||
// if ... else...ifelse....
// 3. Array  declare
// index, length,push
// 

const array =[1,2,3,4,5]; 
array[0]=50;
// 4. for loop
for ( let i=0; i<array.length;i++)
{
    console.log(i);
}

// 5. function
function multiply(num1,num2){

    result = num1*num2;
    return result;

}

const output = multiply(10,20);

// 6. object
const student ={
    name:'arjina',
    age:25,
    movies :['abr','d']


}
const myVariable = 'age';
console.log(student.age);// direct by property
console.log(student['age']); // access via property nasme string
console.log(student[myVariable]);//access via property name in a variable
