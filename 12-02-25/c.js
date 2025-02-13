
function add(n1, n2) {
    let num = 34;
    // console.log(num)
    return n1 + n2
}

function substr(n1, n2) {
    return n1 - n2
}

function multiply(n1, n2) {
    return n1 * n2
}

function divide(n1, n2) {
    return n1 / n2
}




export function calculate(n1, operator, n2) {
    switch (operator) {
        case "+":
            return add(n1, n2)
        case "-":
            return substr(n1, n2)
        case "*":
            return multiply(n1, n2)
        case "/":
            return divide(n1, n2)
        default:
            return 0;
            break
    }

}