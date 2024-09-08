function gardenDesign(arg) {

    let pricePerMeter = 7.61;
    let discountInNumber = 18 / 100;

    let result = (arg * pricePerMeter);
    let discount = discountInNumber * result;
    let totalPrice = result - discount;

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}

gardenDesign(550);