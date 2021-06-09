let firstNumber = Number.parseInt(prompt("Write integer number 'N'"));

if (Number.isInteger(firstNumber) || !isNaN(firstNumber)) {
    let secondNumber = Number.parseInt(prompt("Write integer number 'M'"));

    if (Number.isInteger(secondNumber) || !isNaN(secondNumber)) {
        let sum = 0;

        if (firstNumber > secondNumber){
            alert("Error: First number is bigger then second number");
        } else {
            const SKIP_MESSAGE = confirm("Skip even numbers ?");
            if(SKIP_MESSAGE) {
                for (let i = firstNumber; i <= secondNumber; i++) {
                    if (i % 2 === 0) {
                        continue;
                    }
                    sum = sum + i;
                }

                alert(`Sum without even numbers: ${sum}`);
            } else {
                for (let i = firstNumber; i <= secondNumber; i++) {
                    sum = sum + i;
                }

                alert(`Sum of numbers: ${sum}`);
            }
        }
    } else {
        alert("Error: Something went wrong, bye bye 😉");
    }
} else  {
    alert("Error: Something went wrong, bye bye 😉");
}