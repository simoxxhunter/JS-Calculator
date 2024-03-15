function clearAll() {
    document.getElementById('memo').innerHTML = '0';
    document.getElementById('total').innerHTML = '0';
}

var memo, userinput, operation, total;

function calculate(total, memo, userinput, operation) {
    userinput = parseFloat(userinput);

    if (operation == '+') {
        total = memo + userinput;
    }
    else if (operation == '-') {
        total = memo - userinput;
    }
    else if (operation == '/') {
        if (userinput == 0) {
            alert("cannot divide by 0, please choose another number");
        } else
            total = memo / userinput;
    }
    else if (operation == '*') {
        total = memo * userinput;
    }

    document.getElementById('total').innerHTML = total;
}

