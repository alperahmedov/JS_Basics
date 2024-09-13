function depositCalculator(depositSum, DepositPeriod, annualInterestPersent) {
    let sum = depositSum + DepositPeriod * ((depositSum * (annualInterestPersent / 100)) / 12);
    console.log(sum);
    
}

depositCalculator(200, 3, 5.7)