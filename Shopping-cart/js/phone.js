
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const PreviousPhoneNumber = parseInt(phoneNumberFieldString);
    let newPhoneNumber
    if(isIncrease === true){
        newPhoneNumber = PreviousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = PreviousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
    return phoneTotalElement;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
})

document.getElementById('bt-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber()
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal()
})