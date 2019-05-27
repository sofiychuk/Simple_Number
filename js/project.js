var number = prompt("Введіть число більше від одиниці і отримаєте всі прості числа від 1 до вашого числа", "");

if (number <= 1) {
    alert("Число має бути більше 1")
} else if (!isFinite(number)) {
    alert('Потрібно тільки число!')
};

var allSimple = [];

function genereteSimpleNumber(number) {
    nextPrime: for (var i = 2; i <= number; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        allSimple += i + '; ';
        
    }
   // allSimple[allSimple.length - 1] += '.'; Не працює?
    
    return alert(allSimple); 
}

genereteSimpleNumber(number);