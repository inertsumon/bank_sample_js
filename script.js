const depositBTN = document.getElementById("deposit-button");
// console.log(depositBTN);
depositBTN.addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositInputValue = parseFloat(depositInput.value);
    // console.log(depositValue);

    const depositAmount = document.getElementById("deposit-amount");
    const depositValue = parseFloat(depositAmount.innerText); 
    // console.log(depositValue)

    const totalDeposit = depositValue + depositInputValue ;
    // console.log(totalDeposit);
    depositAmount.innerText = totalDeposit;

    const totalBalance = document.getElementById("Total-balance");
    const totalBalanceValue = parseFloat(totalBalance.innerText); 
    const totalBal = depositInputValue + totalBalanceValue;
    totalBalance.innerText = totalBal;
    depositInput.value = "";

})
const withdrawBTN = document.getElementById("withdraw-button");
// console.log(depositBTN);
withdrawBTN.addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputValue = parseFloat(withdrawInput.value);
    // console.log(depositValue);

    const withdrawAmount = document.getElementById("withdraw-amount");
    const withdrawValue = parseFloat(withdrawAmount.innerText); 
    // console.log(depositValue)

    const totalwithdraw = withdrawValue + withdrawInputValue ;
    // console.log(totalDeposit);
    withdrawAmount.innerText = totalwithdraw;

    const totalBalance = document.getElementById("Total-balance");
    const totalBalanceValue = parseFloat(totalBalance.innerText); 
    const totalBal = totalBalanceValue-withdrawInputValue ;
    totalBalance.innerText = totalBal;
    withdrawInput.value = "";
})