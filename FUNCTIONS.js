function calculator() {

    let OPTR = document.getElementById("OPTR").value
    let numberOne = document.getElementById("numberOne").value
    let numberTwo = document.getElementById("numberTwo").value

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    let result = document.getElementById("ANSWER");
    result.style.color = 'lime';

    switch(OPTR) {

        case '+':
            result.innerHTML = numberOne + numberTwo;
        break;

        case '-':
            result.innerHTML = numberOne - numberTwo;
        break;

        case '*':
            result.innerHTML = numberOne * numberTwo;
        break;

        case '/':
            result.innerHTML = numberOne / numberTwo;
        break;

        default:
            result.style.color='darkred';
            result.innerHTML = "Invalid Input <br> Please Try Again";
        }

}