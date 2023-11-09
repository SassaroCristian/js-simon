const randomNumbers = document.getElementById("randomNumbers")

function numbergenerator () {
    return Math.floor(Math.random()* 100 + 1);
}

const generatedNumbers = [];
for(let i = 0; i < 5; i++) {
    generatedNumbers.push(numbergenerator());
    randomNumbers.textContent = `${generatedNumbers}`
};

function hideNumbers () {
    randomNumbers.classList.add("hideNumbers");
}


 function checkNumbers() {
    let askNumber = prompt("Inserisci i numeri che hai appena letto");
    if (askNumber === generatedNumbers.toString()) {
         alert("Complimenti")
         location.reload('')
     } else {
        alert ("Prova ancora!")
        location.reload('')
     };
 };

setTimeout (hideNumbers, 10000);
setTimeout (checkNumbers, 15000);


console.log(generatedNumbers);
