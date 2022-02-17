
// function for calculate button and calculation 
function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const inputAmount = parseFloat(inputValue);
    inputField.value = '';
    return inputAmount;
}

// calculate button and calculation 

document.getElementById('calculate-total').addEventListener('click',function(){

    // income amount call 

        const inputIncomeAmount = getInput('input-income');
     
    // Expences input amount call 
        const inputFoodAmount =  getInput('food-input');

        const inputRentAmount = getInput('rent-input');

        const inputClothAmount = getInput('cloth-input');
    
    // sum of total Expences
        let totalExpencesSum = inputFoodAmount + inputRentAmount + inputClothAmount;
        
    // total Expences
    const totalExpences = document.getElementById('total-expenses');
    const totalExpencesInnerText = totalExpences.innerText;
    totalExpences.innerText = totalExpencesSum;
    
    // total Balance
    const inputBalance = document.getElementById('input-balance');
    const inputBalanceInnerText = inputBalance.innerText;
    inputBalance.innerText = inputIncomeAmount - totalExpencesSum;

    
});

// save button added and calculation 

document.getElementById('calculate-saving').addEventListener('click',function(){
    // call the function
    const inputIncomeAmount = getInput('input-income');


    // input field of savings Amount
    const inputSave = document.getElementById('save-input');
    const inputSaveValue = inputSave.value;
    const inputSaveAmount = parseFloat(inputSaveValue);
    
    // savings Amount calculation 
    const savingCalculation = (inputIncomeAmount * inputSaveAmount) / 100;
    
    // declare savings ammount
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountInnerText = savingAmount.innerText;
    const savingAmountParse = parseFloat(savingAmountInnerText);
    savingAmount.innerText = savingCalculation;


    // total balance calculation again to see the remainingBalance
    const inputBalance = document.getElementById('input-balance');
    const inputBalanceInnerText = inputBalance.innerText;
    const inputBalanceAmountParse = parseFloat(inputBalanceInnerText);

    
    // remainingBalance calculation 
    const remainingBalanceCalculation = inputBalanceAmountParse - savingCalculation;

   
    // declare remaining balance 
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceInnerText = remainingBalance.innerText;
    remainingBalance.innerText = remainingBalanceCalculation;

    
    
});


   