import { getGrade, isEven } from "./utils.js";
import products from "./products.js";
// 1. Test getGrade()
console.log("Grade:", getGrade(85));

// 2. Test isEven()
console.log("Is 10 even?", isEven(10));

// 3. Destructuring with for...of loop
for (const { name, price } of products) {
    console.log(`${name} costs ${price}`);
}

// 4. Spread operator
const newProduct = {
    id: 5,
    name: "Mouse",
    price: 800,
    inStock: true
};

const allProducts = [...products, newProduct];

// 5. Print array lengths
console.log("Original products:", products.length);
console.log("All products:", allProducts.length);
