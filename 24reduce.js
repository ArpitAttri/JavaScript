
const myNum = [1, 2, 3];
const Mytotal = myNum.reduce((acc, curr) => acc + curr, 0);
//console.log(Mytotal);

const shoppingCart = [
    {
        item: "Apple",
        price: 40
    },
    {
        item: "Mango",
        price: 45
    },
    {
        item: "Banana",
        price: 30
    }
]
const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceTopay);





  
  