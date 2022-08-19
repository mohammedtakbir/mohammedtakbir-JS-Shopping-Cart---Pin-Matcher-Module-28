
function getPin(){
    const pin = generatePin();
    const pinString = pin + ''; // * convert number to string
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin(); // * return the getPink function to generate 4 digit number.return until 4 digit number is come

    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayInputField = document.getElementById('display-pin');
    displayInputField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNameField = document.getElementById('typed-number');
    const previousTypedNumber = typeNameField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNameField.value = '';
        }
        else if(number === '<' ){
            const digits =previousTypedNumber.split('');
            digits.pop();
            const remainhDigits = digits.join('');
            typeNameField.value = remainhDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typeNameField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayInputField = document.getElementById('display-pin');
    const currentPin = displayInputField.value;
    /* if(currentPin === ''){
        alert('enter number')
    } */

    const typedPinNumber = document.getElementById('typed-number');
    const typedNumber = typedPinNumber.value;
    
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if(currentPin === typedNumber){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})