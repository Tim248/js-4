let num = +prompt('Введите число: ');
let pow = +prompt('Введите степень: ');
let result = num;

for (let i = 1; i < pow; i++) {
    result *= num;  
}
alert('Ответ: ' + result);