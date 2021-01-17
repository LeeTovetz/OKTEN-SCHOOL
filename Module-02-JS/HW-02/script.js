// Task No. 01-04

let numbers = [89,45,1943,5,548];
console.log(numbers);

let str = ['oleg', 'j', 'ten', 'mesh', 'asha'];
console.log(str);

let mas = [20,30,50, 'summer', 'spring', 'year', 10>5, 12!=='21', 5=='5'];
console.log(mas);

// Task No. 05

let list = [];
list[0] = 'ten';
list[1] = 454554;
list[2] = 7679494;
console.log(list);

 Task No. 07
 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.writeln(`<div><h1>hi</h1></div>`);
}

// Task No. 08
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.writeln(`<div><h1>wooow ${i}</h1></div>`);
}

// Task No. 09
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let counter = 0;
while (counter < 20) {
    document.writeln (`<div><h1>w ${counter}</h1></div>`);
    counter++;
}

// Task No. 10
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let counter = 1;
while (counter <= 20) {
    document.writeln (`<div><h1>milk ${counter}</h1></div>`);
    counter++;
}

// Task No. 11
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numbers01 = [89,45,19,45,54,89,45,19,45,54];
console.log(numbers01);

// Task No. 12
// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strList01 = ['a','45','19','45','b','89','45','c','45','d'];
console.log(strList01);

// Task No. 13
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr01 = ['a','winter', 'autumn','89','45','c','45', 10>5,,'d'];
console.log(arr01);

// Task No. 14, 15, 16
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let mass05 = ['19','45','b','89','summer', 'winter', 5514, 963258, 10>5, 5>6];

for (const i of mass05) {
    if (typeof i === 'boolean') {
        console.log(i);
    }
}

for (const j of mass05) {
    if (typeof j === 'string') {
        console.log(j);

    }
}

for (const k of mass05) {
    if (typeof k === 'number') {
        console.log(k);
    }
}

 Task No. 17
 Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let list7 = [];
list7[0] = 41;
list7[1] = 'summer';
list7[2] = 'winter';
list7[3] = 35;
list7[4] = 82;
list7[5] = 567<87;
list7[6] = 'hi';
list7[7] = 145051>9900100;
list7[8] = 10521010<145513;
list7[9] = 5445>787887;

for (const list7Element of list7) {
    console.log(list7Element);
}

// Task No. 18
// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i < 11; i++) {
    console.log(i);
    document.writeln(i);
    document.writeln('<br>');
}

// Task No. 19
// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i < 101; i++) {
    console.log(i);
    document.writeln(i);
    document.writeln('<br>');
}

 Task No. 20
 Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i < 101; i+=2) {
    console.log(i);
    document.writeln(i);
    document.writeln('<br>');
}

// Task No. 21
// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 1; i < 101; i++) {
    if (i%2 === 0) {
        console.log(i);
        document.writeln(i);
        document.writeln('<br>');

    }

}

// Task No. 23
// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 1; i < 101; i++) {
    if (i%2 !== 0) {
        console.log(i);
        document.writeln(i);
        document.writeln('<br>');

    }

}


// Task No. 24
// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for (let minute = 0; minute < 2; minute++) {
    for (let sec = 0; sec < 60; sec++) {
        console.log('min: ' + minute +' '+'sec: ' + sec);
    }
}

// Task No. 25
// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let hour = 0; hour < 3; hour++) {
    for (let minute = 0; minute < 60; minute++) {
        if (hour === 2 && minute === 20){
            break;
        }
        for (let second = 0; second < 60; second++) {
            console.log('hour:' + hour + ' min:' + minute +' '+'sec:' + second);
        }
    }
}

// Task No. 26
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr11 = [ 'a', 'b', 'c'];
let word11 = '';
for (let i = 0; i < arr11.length; i++) {
    word11+=arr11[i];
}
console.log(word11);


// Task No. 27
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let word22 = '';
let i = 0;
while(i<arr11.length){
    word22+=arr11[i];
    i++;
}
console.log(word22);

// Task No. 28
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let word33 = '';
for (const element of arr11) {
    word33+=element;
}
console.log(word33);


// Task No. 29
// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let arrayNew = [];
for (let j = 1; j<=3; j++) {
    arrayNew=arr11;
    arrayNew.push(j);
}
console.log(arrayNew);

// Task No. 30
// Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]

let numberArray = [1, 2, 3];
let reverseNumberArray = [];
for (let j = numberArray.length - 1; j >= 0; j--) {
    const item = numberArray[j];
    reverseNumberArray.push(item);
}
console.log(reverseNumberArray);

// Task No. 31
// Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

let numberArray1 = [1, 2, 3];
for (let j = 4; j <=6; j++) {
    numberArray1.push(j);
}
console.log(numberArray1);

// Task No. 32
// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6

let numberArray2 = [1, 2, 3];
numberArray2.unshift(4,5,6);
console.log(numberArray2);

// Task No. 33
// Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let arrayShift = ['js', 'css', 'jq'];
let shiftedItem = arrayShift.shift();
console.log(shiftedItem);

// Task No. 34
// Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

let poppedItem = arrayShift.pop();
console.log(poppedItem);

// Task No. 35
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5]

let arrayOfNumbers = [1, 2, 3, 4, 5];
console.log(arrayOfNumbers.slice(3, 5));

// Task No. 36
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

let slicedArray =  arrayOfNumbers.slice(0,2);
console.log(slicedArray);

// Task No. 37
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5]

let arrayOfNumbers1 = [1, 2, 3, 4, 5];
arrayOfNumbers1.splice(1, 2);
console.log(arrayOfNumbers1);

// Task No. 38
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arrayOfNumbers2 = [1, 2, 3, 4, 5];
arrayOfNumbers2.splice(2, 0, 'a', 'b', 'c');
console.log(arrayOfNumbers2);

// Task No. 39
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arrayOfNumbers3 = [1, 2, 3, 4, 5];
arrayOfNumbers3.splice(1,0,'a', 'b');
arrayOfNumbers3.splice(5,0,'c');
arrayOfNumbers3.splice(8,0,'e');
console.log(arrayOfNumbers3);

// Task No. 40
// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let numbers10 = [1,2,3,4,5,6,7,8,9,10];
for (const number of numbers10) {
    if (number % 2 === 0){
        console.log(number);
    }
}

// Task No. 41
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

let numbers11 = [];
for (const number of numbers10) {
    numbers11.push(number);
}
    console.log(numbers11)

// Task No. 42
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let numbers12 = [];
for (let i = 0; i < numbers10.length; i++) {
    numbers12[i] = numbers10[i];
}
console.log(numbers12);

// Task No. 43
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let numbersArr = [2,17,13,6,22,31,45,66,100,-18];

// Task No. 44
// 1. перебрати його циклом while

let x = 0;
while( x < numbersArr.length ){
    console.log ( numbersArr );
    x++;
}

// Task No. 45
// 2. перебрати його циклом for

for (const number of numbersArr) {
    console.log(numbersArr)
}

// Task No. 46
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let z = 0;
while(z<numbersArr.length){
    if (z%2!==0){
        const number = numbersArr[z];
        console.log(number);
    }
    z++;
}

// Task No. 47
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < numbersArr.length; i++) {
    const number = numbersArr[i];
    if (i%2!==0){
        console.log(number);
    }
}

// Task No. 48
// 5. перебрати циклом while та вивести  числа тільки парні  значення

let q = 0;
while(q<numbersArr.length){
    const number = numbersArr[q];
    if (number%2===0){
        console.log(number);
    }
    q++;
}

// Task No. 49
// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let j = 0; j < numbersArr.length; j++) {
    const number = numbersArr[j];
    if (number%2===0){
        console.log(number);
    }
}

// Task No. 50
// 7. замінити кожне число кратне 3 на слово "okten"

for (let j = 0; j < numbersArr.length; j++) {
        if (numbersArr[j]%3===0){
        numbersArr[j] = 'okten';
    }
    console.log(numbersArr)
}

// Task No. 51
// 8. вивести масив в зворотньому порядку.

for (let j = numbersArr.length - 1; j >= 0; j--) {
    console.log(numbersArr[j]);
}

// Task No. 52
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

for (let i=numbersArr.length-1; i >=0; i--) {
    console.log(numbersArr[i]);

}

let jl = numbersArr.length-1;
while (jl>=0) {
    console.log(numbersArr[jl]);
    jl--
}

let k = numbersArr.length-1;
while (k>=0) {
    if (numbersArr[k]%2 !==0) {
        console.log(numbersArr[k]);
    }
    k--
}

// Task No. 53
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

let emptyArray = [];
for (let j = 1; j < 102; j++) {
    if (j%2===0){
    emptyArray.push(j);
    }
}
    console.log(emptyArray);

// Task No. 54  
//заповнити його 50 непарними числами за допомоги циклу.
let emptyArr = [];
for (let j = 1; j < 100; j++) {
    if (j%2!==0){
        emptyArr.push(j);
    }

}
console.log(emptyArr);



// Task No. 55
// используя Math.random заполнить массив из ???(сколько хотите) элементов.

let emptyArray1 = [];
for (let j = 0; j < 10; j++) {
    emptyArray1[j]= Math.random();
    }
console.log(emptyArray1);

// Task No. 56
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

let emptyArray2 = [];
for (let j = 0; j < 10; j++) {
    emptyArray2[j]=Math.floor(Math.random() * (732 - 8)) + 8;
}
console.log(emptyArray2);

// Task No. 57
//  2. вывести на консоль  каждый третий елемент

for (let j = 2; j < emptyArray2.length; j+=3) {
    console.log(emptyArray2[j]);
}

// Task No. 58
//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.

for (let j = 2; j < emptyArray2.length; j+=3) {
    if (emptyArray2[j]%2===0){
    console.log(emptyArray2[j]);
    }
}

// Task No. 59
//  вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.

let emptyArray3 = [];
for (let j = 2; j < emptyArray2.length; j+=3) {
    if (emptyArray2[j]%2===0){
        emptyArray3.push(emptyArray2[j]);
    }
console.log(emptyArray3);
}

// Task No. 60
// Вывести каждый елемент массива у которого соседний с права элемент - парный

for (let j = 0; j < emptyArray2.length; j++) {
    if (emptyArray2[j+1]%2===0){
        console.log(emptyArray2[j]);
    }
}

// Task No. 61
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

let check = [100,250,50,168,120,345,188];
    let sum = 0;
for (let j = 0; j < check.length; j++) {
    sum += check[j];

}
console.log(sum);
console.log(sum/check.length);

// Task No. 62
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let randomArray = [];
let randomArray5 = [];
for (let i = 0; i < 10; i++) {
    randomArray[i]=Math.floor(Math.random() * (20 - 1)) + 1;
}
console.log(randomArray);
for (let j = 0; j < randomArray.length; j++) {
    randomArray5[j]=randomArray[j]*5;
}
console.log(randomArray5);

// Task No. 63
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

/*let someArray = [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'];
let someNewArray = [];
for (let j = 0; j < someArray.length; j++) {
    if (typeof someArray[j]=== 'number'){
        someNewArray.push(someArray[j]);
    }
}
console.log(someNewArray);*/


