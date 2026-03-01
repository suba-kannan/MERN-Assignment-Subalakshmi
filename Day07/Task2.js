const calculateTotal = (discount, ...prices) =>{

    const total = prices.reduce((sum, price) => sum + price, 0);
    const finalAmount = total - (total * discount) / 100;
    return finalAmount;

}

console.log(calculateTotal(10, 100, 200, 300));
