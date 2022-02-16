
function getInput(inputId){
    const inputFood = document.getElementById(inputId);
    const inputFoodValue = inputFood.value;
    const inputFoodAmount = parseFloat(inputFoodValue);
    inputFood.value = '';
    return inputFoodAmount;
}


document.getElementById('calculate-total').addEventListener('click',function(){

    
       /*  const inputFood = document.getElementById('food-input');
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
    

    
        let totalExpences = inputFoodAmount + inputRentAmount + inputClothAmount;
        console.log(totalExpences);
    

   
    
});


   