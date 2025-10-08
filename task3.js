var product = [];
product.push({ name: "laptop", price: 50000, inStock: true });
product.push({ name: "mouse", price: 1000, inStock: true });
product.push({ name: "monitor", price: 5000, inStock: false });
console.log(product);
//print all
for (var _i = 0, product_1 = product; _i < product_1.length; _i++) {
    var item = product_1[_i];
    console.log("".concat(item.name, " - ").concat(item.price, " - ").concat(item.inStock));
}
//Those are stock 
for (var _a = 0, product_2 = product; _a < product_2.length; _a++) {
    var item = product_2[_a];
    if (item.inStock) {
        console.log("currently stock in ".concat(item.name));
    }
}
//current stock value
var sum = 0;
for (var _b = 0, product_3 = product; _b < product_3.length; _b++) {
    var item = product_3[_b];
    if (item.inStock) {
        sum += item.price;
    }
}
console.log("current stock value is : ".concat(sum));
