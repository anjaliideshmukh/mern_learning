// 1. Create an array of four products
const products = [
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Mobile", price: 20000, inStock: false },
    { id: 3, name: "Headphones", price: 2000, inStock: true },
    { id: 4, name: "Keyboard", price: 1500, inStock: true }
];

// 2. Print the name of the second product
console.log(products[1].name);

// 3. Use map() to get only product names
const productNames = products.map(product => product.name);
console.log(productNames);

// 4. Use filter() to get products that are in stock
const availableProducts = products.filter(product => product.inStock === true);
console.log(availableProducts);

// 5. Use find() to get a product with a specific id
const foundProduct = products.find(product => product.id === 3);
console.log(foundProduct.name);

// 6. Add a new product using push()
products.push({
    id: 5,
    name: "Mouse",
    price: 800,
    inStock: true
});

console.log("Total products:", products.length);

// 7. Use a for loop to print each product
for (let i = 0; i < products.length; i++) {
    console.log(`${products[i].name} costs ${products[i].price}`);
}