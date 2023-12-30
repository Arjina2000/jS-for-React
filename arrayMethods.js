const products =[
    {name :'laptop',price:320, brand: 'lenovo' , color:'yellow'},
    {name :'phone',price:200, brand: 'lenovo' , color:'yellow'},
    {name :'ewatch',price:1200, brand: 'lenovo' , color:'yellow'},
    {name :'tablet',price:800, brand: 'lenovo' , color:'yellow'},
    {name :'sunglass',price:200, brand: 'lenovo' , color:'yellow'},
];
const brands = products.map(product=>product.brand);
console.log(brands);
const prices = products.map(product=>product.price);
console.log(prices);
products.forEach(product=>console.log(product));
products.forEach(product=>console.log(product.color));
// forEach kono kisu return kore na.. map return kore

// 3. filter (condition deya lage and condition onujayi return kore)
const cheap = products.filter(product =>product.price<=5000);
console.log(cheap);
const SpecificName = products.filter(product=>product.name.includes('n'));
console.log(SpecificName);
//4.find(filter er motoi just jeta match korbe setar first condition take dibe)
const special = products.find(product=>product.name.includes('n'));
console.log(special);