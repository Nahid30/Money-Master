
function getInput(inputId){
    const inputFood = document.getElementById(inputId);
    const inputFoodValue = inputFood.value;
    const inputFoodAmount = parseFloat(inputFoodValue);
    inputFood.value = '';
    return inputFoodAmount;
}


document.getElementById('calculate-total').addEventListener('click',function(){

    
        /* const inputIncome = document.getElementById('input-income');
        const inputIncomeValue = incomeInput.value;
        const inputIncomeAmount = parseFloat(incomeInputValue);
        console.log(incomeInputAmount); */
        const inputIncomeAmount = getInput('input-income');


        /* const inputFood = document.getElementById('food-input');
        const inputFoodValue = inputFood.value;
        const inputFoodAmount = parseFloat(inputFoodValue);
        console.log(inputFoodAmount); */
     
   
        const inputFoodAmount =  getInput('food-input');
    
     
        /* const inputRent = document.getElementById('rent-input');
        const inputRentValue = inputRent.value;
        const inputRentAmount = parseFloat(inputRentValue);
        console.log(inputRentAmount); */
    
        const inputRentAmount = getInput('rent-input');
    

    
        /* const inputCloth = document.getElementById('cloth-input');
        const inputClothValue = inputCloth.value;
        const inputClothAmount = parseFloat(inputClothValue);
        console.log(inputClothAmount);    */

        const inputClothAmount = getInput('cloth-input');
    

    
        let totalExpencesSum = inputFoodAmount + inputRentAmount + inputClothAmount;
        // console.log(totalExpences);
    

    const totalExpences = document.getElementById('total-expenses');
    const totalExpencesInnerText = totalExpences.innerText;
    totalExpences.innerText = totalExpencesSum;
    // console.log(totalExpencesInputText);

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


   