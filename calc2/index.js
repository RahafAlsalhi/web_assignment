let outputScreen = document.getElementById("output-screen");

function display(input){
    outputScreen.value += input;
}

function calculateall() {
    const expression = outputScreen.value;

    let result;
    if (expression.includes('+')) {
        let parts = expression.split('+');
        result = parseFloat(parts[0]) + parseFloat(parts[1]);
    } else if (expression.includes('-')) {
        let parts = expression.split('-');
        result = parseFloat(parts[0]) - parseFloat(parts[1]);
    } else if (expression.includes('*')) {
        let parts = expression.split('*');
        result = parseFloat(parts[0]) * parseFloat(parts[1]);
    } else if (expression.includes('/')) {
        let parts = expression.split('/');
        if (parseFloat(parts[1]) === 0) {
            result = "can not devide by 0";
        } else {
            result = parseFloat(parts[0]) / parseFloat(parts[1]);
        }
    } else {
        result = "Error";
    }

    outputScreen.value = result;
}

function clearall() {
    outputScreen.value = "";
}
