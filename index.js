// 1.Создать страницу с одним внутренним скриптом и одним внешним.
// Перед началом кода, который будет в отдельном файле, написать осмысленный комментарий.
// Отформатировать следующий код. В коде допущена одна ошибка. Не хватает символа точка с запятой(;). Устраните ошибку.


function newFunction(win) {
    var params = {
        states: {
            url: "» /»",
            template: "«temlate.js»"
        }
    }

    function setStates(params) {
        if (win && !win.params) {
            win.params = params;
        }
    }
    setStates();
    console.log(params.states.template);
}
newFunction(window);

// 2.Создайте 3 переменные, сначала присвойте им трем одно и то же значение, выведите в консоль.
// Затем установите для каждой переменной разное значение и снова выведите в консоль.

var a = 5;
var b = 5;
var c = 5;

console.log(a);
console.log(b);
console.log(c);

var a = 1;
var b = 2;
var c = 3;

console.log(a);
console.log(b);
console.log(c);

// 3. Объявите переменную, но не присваивайте ей значение.
// Выведите ее в консоль чтоб убедиться что она undefined.
// Затем поочередно присваивайте ей разные значения и выводите в консоль.
// Булевое значение - > в консоль, число - > в консоль, string - > в консоль, null - > в консоль.
// И в конце проверьте переменную с null с помощью оператора typeof.

var abc;
console.log(abc); //underfined
abc = true;
console.log(abc);
abc = 5;
console.log(abc);
abc = 'This is string';
console.log(abc);
abc = null;
console.log(abc);
console.log(typeof abc); // Object

// 4.Создайте переменную с помощью let и установите в нее значение «JavaScript»
// Создайте обычную переменную с помощью var установите в нее значение «courses»
// Склейте две эти строки таким образом чтоб между ними был пробел и результат склеивания запишите в переменную result
// Выведите переменную result в консоль.

let first = 'JavaScript';
var second = 'courses';
var result = `${first} ${second}`;
console.log(result);

// 5.Создайте переменную, с помощью инкремента увеличьте ее на 3
// Затем присвойте значение вашей переменной одновременно переменной «z» и «x».
// Выражение должно быть в одну строку.

var plus = 0;
var x;
var z;

plus += 3;
plus = x = z;

console.log(x);

// 6. Задача. Выведите столбец чисел от 1 до 50.
var i;
for (i = 1; i <= 50; i++) {
    console.log(i);
}

// 7.Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
var newArray1 = [1, 2, 3, 4, 5];

for (i = 0; i < newArray1.length; i++) {
    console.log(newArray1[i]);
}

// 8.Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
var newArray2 = [2, 3, 4, 5];
result = 1;
var y;
for (y = 0; y < newArray2.length; y++) {
    result = result * newArray2[y];

    console.log(result);
}
// 9.Выведите столбец четных чисел в промежутке от 0 до 100

var p;
for (p = 0; p <= 100; p++) {
    if (p % 2 == 0) {
        console.log(p);
    }
};


// 10. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех
// элементов массива, которые больше 3-х, но меньше 10.

var newArray3 = [2, 5, 9, 15, 0, 4];
var l;
for (l = 0; l < newArray3.length; l++) {
    if (newArray3[l] > 3 && newArray3[l] < 10) {
        console.log(newArray3[l]);
    }
};

// 11. Дано число n = 1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится ?
//     Посчитайте количество итераций, необходимых для этого(итерация - это проход цикла), и запишите его в переменную num.-- >

for (var n = 1000, num = 0; n > 50; n /= 2, num++);
console.log(n);
console.log(num);
