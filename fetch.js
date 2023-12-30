//1.JSON
const student ={
    name:'arjina',
    age:25,
    movies :['king khan','yoyooo']


}
const studentjson=JSON.stringify(student);
console.log(student);
console.log(studentjson);
const studentObj = JSON.parse(studentjson);
console.log(studentObj);
//2. fetch
// fetch('url')
// .then(res=>res.json())
// .then(data=>console.log(data));
// //keys , values

const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers =[10,20,30,40];
numbers.forEach(num=>console.log(num));
numbers.map(num=>num*2);
// for of on array like object
//loop on an object using for in


// add or remove from an array
const products =[
    {name :'laptop',price:320, brand: 'lenovo' , color:'yellow'},
    {name :'phone',price:200, brand: 'lenovo' , color:'yellow'},
    {name :'ewatch',price:1200, brand: 'lenovo' , color:'yellow'},
    {name :'tablet',price:800, brand: 'lenovo' , color:'yellow'},
    {name :'sunglass',price:200, brand: 'lenovo' , color:'yellow'},
];
const newProduct = {name : 'webcam',price:700, brand:'lal'};
 // copy product array and then add new product
 const newProducts =[...products,newProduct];

 // create a new array without one specific item
 // removes phone means create a new array without phone
 const remaining = products.filter(product => product.name !=='phone');
 