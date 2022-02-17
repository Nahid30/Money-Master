
function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const inputAmount = parseFloat(inputValue);
    inputField.value = '';
    return inputAmount;
}


document.getElementById('calculate-total').addEventListener('click',function(){

   
        const totalExpences = document.getElementById('total-expenses');
        const totalExpencesInnerText = totalExpences.innerText;
        totalExpences.innerText = totalExpencesSum;

    


        const inputIncomeAmount = getInput('input-income');
     
   
        const inputFoodAmount =  getInput('food-input');


        const inputRentAmount = getInput('rent-input');


        const inputClothAmount = getInput('cloth-input');
    
    
        let totalExpencesSum = inputFoodAmount + inputRentAmount + inputClothAmount;
        

   
    

    const inputBalance = document.getElementById('input-balance');
    const inputBalanceInnerText = inputBalance.innerText;
    inputBalance.innerText = inputIncomeAmount - totalExpencesSum;

    
});



document.getElementById('calculate-saving').addEventListener('click',function(){

    const inputIncomeAmount = getInput('input-income');

    const inputSave = document.getElementById('save-input');
    const inputSaveValue = inputSave.value;
    const inputSaveAmount = parseFloat(inputSaveValue);
    

    const savingCalculation = (inputIncomeAmount * inputSaveAmount) / 100;
    

    const savingAmount = document.getElementById('saving-amount');
    const savingAmountInnerText = savingAmount.innerText;
    const savingAmountParse = parseFloat(savingAmountInnerText);
    savingAmount.innerText = savingCalculation;



    const inputBalance = document.getElementById('input-balance');
    const inputBalanceInnerText = inputBalance.innerText;
    const inputBalanceAmountParse = parseFloat(inputBalanceInnerText);

    
    
    const remainingBalanceCalculation = inputBalanceAmountParse - savingCalculation;

   

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceInnerText = remainingBalance.innerText;
    remainingBalance.innerText = remainingBalanceCalculation;

    
    
});


   