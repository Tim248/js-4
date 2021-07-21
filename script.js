let Num = +prompt('Введите число: ');
let Pow = +prompt('Введите степень: ');
let Result = Num;

for (let i = 1; i < Pow; i++) {
    Result *= Num;  
}
alert('Ответ: ' + Result);