let users = {};

for (let i = 1; i <= 10; i++) {
    let name = prompt(`Foydalanuvchi ${i} ismini kiriting:`);

    let age = prompt(`Foydalanuvchi ${i} yoshi nechada?`);
    users[i] = {
        id: i,
        name: name,
        age: age
    };

    console.log(`Foydalanuvchi ${i}`);
    console.log(`Ismi ${name}`);
    console.log(`Yoshi ${age}`);
}

console.log(users);
let cart = cartObj(); 
let totalPrice = 0;
let deliveryFee = 9000;  
let orderDetails = 'Sizning buyurtmangiz: ';

for (let product in cart) {
    let item = cart[product];
    orderDetails += `${product} ${item.info}, `;
    totalPrice += item.price;
}

totalPrice += deliveryFee;

console.log