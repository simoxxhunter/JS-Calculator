var userinput, operation, total;

function calculate(total, memo, userinput, operation) {
    userinput = parseFloat(userinput);
    let memo = document.querySelector(".memo").innerHTML;
    
    if (operation == '+') {
        total = memo + userinput;
    }
    else if (operation == '-') {
        total = memo - userinput;
    }
    else if(operation == '/') {
        if (userinput == 0) {
            alert("cannot divide by 0, please choose another number");
        } else 
        total = memo / userinput;
    }
    else if (operation == '*') {
        total = memo * userinput;
    }

    return  document.getElementById('total').innerHTML = total;
}

