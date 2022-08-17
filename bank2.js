//Deposit
document.getElementById("btn-diposit").addEventListener("click",function(){
    const currcentDepositString = document.getElementById("totalDeposit").innerText;
    const currentDeposit = parseFloat(currcentDepositString);
    const userDeposit = document.getElementById("dipositInput").value;
    const userDepositBanance = parseFloat(userDeposit);
    const currcentBalanceString = document.getElementById("totalBalance").innerText;
    const currcentBalance = parseFloat(currcentBalanceString);
    dipositInput.value = '';
    if(isNaN(userDepositBanance) !== true){
    const newBalance = currcentBalance + userDepositBanance;
    const totalDepositBalance = currentDeposit + userDepositBanance;
    totalDeposit.innerText = totalDepositBalance;
    totalBalance.innerText = newBalance;

    }
    else{
        alert("Please Enter Deposit Ammount");
    }
})

//Widdraw
document.getElementById("btn-witdraw").addEventListener("click",function(){
    const currcentWidrawString = document.getElementById("withdrawBalance").innerText;
    const currcentWidrawBalance = parseFloat(currcentWidrawString);
    const userwidrawString = document.getElementById("userWidraw").value;
    const userWidrawNew = parseFloat(userwidrawString);
    const totalWidraw = currcentWidrawBalance+userWidrawNew;
    const updateBalance = document.getElementById("totalBalance").innerText;
    const newUpdateBalance = parseFloat(updateBalance);
    userWidraw.value ='';
    if(isNaN(userWidrawNew) !== true){
        if(newUpdateBalance > userWidrawNew ){
            withdrawBalance.innerText = totalWidraw;
            const totalBalanceBank = newUpdateBalance - userWidrawNew;
            totalBalance.innerText = totalBalanceBank;
        }
        else{
            alert("You Dont Have Enough Money");
        }
  

    }
    else{
        alert("Please Enter Deposit Ammount");
    }
    
})
