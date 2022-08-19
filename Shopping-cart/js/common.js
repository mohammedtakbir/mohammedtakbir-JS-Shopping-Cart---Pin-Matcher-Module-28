function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhonetotal = parseInt(currentPhoneTotalString);
    return currentPhonetotal
}
// * function for set subtotal, tax, total
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

// * set subtotal, tax, total

function calculateSubTotal(){

    // ? calculate total and set subtotal
    const currentPhonetotal =  getTextElementById('phone-total' );
    const currentCaseTotal = getTextElementById('case-total')
    const currentSubTotal = currentPhonetotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal)
    
    
    // ? calculate tax and set tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('text-amount', taxAmount)

    // ? calculate final amount and set 
    const finalAmount = currentSubTotal + taxAmount
    setTextElementValueById('final-total', finalAmount);
}