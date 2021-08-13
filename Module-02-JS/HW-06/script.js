// Task No. 01
// создать массив с 20 числами

let numbers = [5656,1212,3645,5689,7778,6363,7070,3001,6736,412,143,2527,5263,5015,6996,8,75,10,7575,29];
console.log(numbers);

// Task No. 02
// при помощи метода sort и колбека  отсортировать массив

let sortNumbers=numbers.sort((a, b) => a-b);
//console.log(sortNumbers);

// Task No. 03
// при помощи filter получить числа кратные 3

//console.log(numbers.filter(value => value % 3 === 0));

// Task No. 04
// при помощи filter получить числа кратные 10 

let multiple10 = numbers.filter(value => !(value%10));
//console.log(multiple10);

Task No. 05
перебрать (проитерировать) массив при помощи foreach()

numbers.forEach(value => console.log(value));

// Task No. 06
// перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let multi3 = numbers.map(value => value*3);
//console.log(multi3);

// Task No. 07
// создать массив со словами на 15-20 элементов

let arrayStr=['If','it','takes','a','long','time','to','learn',
'something','I','like','it','very','much','learn','javascript','course','it','too']
//console.log(arrayStr);

// Task No. 08
// отсортировать его по алфавиту в восходящем порядке

console.log(arrayStr.map(value => value.toUpperCase()).sort());

let strSort = arrayStr.sort((a, b) => (a.toLowerCase()<b.toLowerCase())?-1:1);
console.log(strSort);


// Task No. 09
// отсортировать его по алфавиту  в нисходящем порядке.

//console.log(arrayStr.map(value => value.toUpperCase()).reverse());

let strSortReverse = arrayStr.sort((a, b) => (a.toLowerCase()>b.toLowerCase())?-1:1)
//console.log(strSortReverse);


// Task No. 10
// отфильтровать слова длиной менее 4х символов

console.log(arrayStr.filter(value => value.length <= 4));


// Task No. 11
// перебрать массив при помощи map() и получить новый
// массив в котором все значения будут со знаком "!" в конце

//console.log(arrayStr.map(value => value + '!'));

// Task No. 12
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
    ];
// відсортувати його за  віком (зростання , а потім окремо спадання)

console.log(users.sort(((a, b) => a.age - b.age)));
console.log(users.sort(((a, b) => b.age - a.age)));

// Task No. 13
// відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

console.log(users.sort(((a, b) => a.name.length - b.name.length)));
console.log(users.sort(((a, b) => b.name.length - a.name.length)));

// Task No. 14 
// пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний
// індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив
// (первинний масив залишиться без змін)

let usersWithId = users.map((value, index) => {value.id=index+1; return value});
//console.log(usersWithId);
//console.log(users);

// Task No. 15
// відсортувати його за індентифікатором
console.log(usersWithId.sort(((a, b) => a.id - b.id)));

// Task No. 16
// наисать функцию калькулятора с 2мя числами и колбеком

let calculator2Nums=(a,b,callback) =>callback(a, b);

console.log(calculator2Nums(45, 3, (a, b) => a + b * 2));

// Task No. 17
// наисать функцию калькулятора с 3мя числами и колбеком

let calculator3Nums=(a,b,c,callback)=>callback(a,b,c);

console.log(calculator3Nums(5, 7, 9, (a, b, c,) => (a + b - c * 3) * b));

// Task No. 18
// Відфільтрувати масив за наступними крітеріями :
let cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
//- двигун більше 3х літрів

let volumeMore3 = cars.filter(value => value.volume>3);
console.log(volumeMore3);

//- двигун = 2л

let volume2=cars.filter(value => value.volume===2);
console.log(volume2);

//- виробник мерс

let merc=cars.filter(value => value.producer==="mercedes")
console.log(merc);

//- двигун більше 3х літрів + виробник мерседес

let filter = cars.filter(value => value.volume>3&&value.producer==='mercedes');
console.log(filter);

//- двигун більше 3х літрів + виробник субару

let filter1 = cars.filter(value => value.engine>3&&value.producer==='subaru');
console.log(filter1);

//- сили більше ніж 300

let filter2 = cars.filter(value => value.power>300);
console.log(filter2);

//- сили більше ніж 300 + виробник субару

let filter3 = cars.filter(value => value.power>300&&value.producer==='subaru');
console.log(filter3);

//- мотор серіі ej

let filter4 = cars.filter(value => value.engine.startsWith('ej'));
console.log(filter4);

//- сили більше ніж 300 + виробник субару + мотор серіі ej

let filter5 = cars.filter(value => value.power>300&&value.producer==='subaru'&&value.engine.startsWith('ej'));
console.log(filter5);

//- двигун меньше 3х літрів + виробник мерседес

let filter6 = cars.filter(value => value.volume<3&&value.producer==='mercedes');
console.log(filter6);

//- двигун більше 2л + сили більше 250

let filter7 = cars.filter(value => value.volume>2&&value.power>250);
console.log(filter7);

//- сили більше 250  + виробник бмв

//let filter8 = cars.filter(value => value.power>250&&value.producer==='bmw');
//console.log(filter8);

// Дан масив :

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
    ];
// отсортировать его по id пользователей

 //let sort1 = usersWithAddress.sort((a, b) => a.id-b.id);
//console.log(sort1);

//  отсортировать его по id пользователей в обратном опрядке

//let sort2 = usersWithAddress.sort((a, b) => b.id-a.id);
//console.log(sort2);

// отсортировать его по возрасту пользователей

//let sort3 = usersWithAddress.sort((a, b) => a.age-b.age);
//console.log(sort3);

// отсортировать его по возрасту пользователей в обратном порядке

//let sort4 = usersWithAddress.sort((a, b) => b.age-a.age);
//console.log(sort4);

// отсортировать его по имени пользователей

//let sort5=usersWithAddress.sort((a, b) => (a.name.toLowerCase()<b.name.toLowerCase())?-1:1)
//console.log(sort5);

// отсортировать его по имени пользователей в обратном порядке

let sort6=usersWithAddress.sort((a, b) =>(b.name.toLowerCase()<a.name.toLowerCase())?-1:1)
console.log(sort6);

// отсортировать его по названию улицы  в алфавитном порядке

let sort7=usersWithAddress.sort((a, b) =>  (a.address.street.toLowerCase()<b.address.street.toLowerCase())?-1:1);
console.log(sort7);

// отсортировать его по номеру дома по возрастанию

let sort8 = usersWithAddress.sort((a, b) => a.address.number-b.address.number);
console.log(sort8);

// отфильтровать (оставить) тех кто младше 30

let filter9 = usersWithAddress.filter(value => value.age<30);
console.log(filter9);

// отфильтровать (оставить) тех у кого отрицательный статус

let filter10 = usersWithAddress.filter(value => value.status===false);
console.log(filter10);

// отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

let filter11 = usersWithAddress.filter(value => value.status===false&&value.age<30);
console.log(filter11);

//-- отфильтровать (оставить) тех у кого номер дома четный

let filter12 = usersWithAddress.filter(value => value.address.number%2===0);
console.log(filter12);


//Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
//Для початку вкладіть всі наші створені автомобілі в масив cars.
cars2=[
    {producer:'bmw',power:200,price:5000,yearOfProduction:2010,owner:{name:'Vasyl',age:25,drivingExp:5}},
    {producer:'mercedes',power:176,price:6250,yearOfProduction:2011,owner:{name:'Volodymyr',age:32,drivingExp:1}},
    {producer:'audi',power:180,price:7200,yearOfProduction:2003,owner:{name:'Olexandr',age:22,drivingExp:2}},
    {producer:'opel',power:153,price:4500,yearOfProduction:2005,owner:{name:'Petro',age:34,drivingExp:3}},
    {producer:'toyota',power:185,price:9240,yearOfProduction:2012,owner:{name:'Maria',age:23,drivingExp:4}},
    {producer:'renault',power:146,price:4680,yearOfProduction:2007,owner:{name:'Dmytro',age:19,drivingExp:1}},
    {producer:'cherry',power:150,price:3100,yearOfProduction:2004,owner:{name:'Olesya',age:39,drivingExp:12}},
    {producer:'ford',power:166,price:4000,yearOfProduction:2013,owner:{name:'Iryna',age:40,drivingExp:4}},
    {producer:'mazda',power:183,price:6750,yearOfProduction:2015,owner:{name:'Ivan',age:36,drivingExp:11}},
    {producer:'nissan',power:190,price:3450,yearOfProduction:2008,owner:{name:'Ruslan',age:29,drivingExp:9}},
    {producer:'honda',power:174,price:2200,yearOfProduction:2009,owner:{name:'Oksana',age:27,drivingExp:5}},
]
//Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

let carsAfterUpdate=cars2.map((value, index) =>{
    if(index%2===0)
    {
       value.power*=1.1;
        value.price*=1.05;
        console.log(value.producer +" is updated");
        return value;
    }
    return value;
} )

//Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

carsAfterUpdate.forEach((value) =>{if (value.owner.drivingExp<5&&value.owner.age>25){console.log(value.owner.name+" is going for cources"); value.owner.drivingExp+=1;}});

//Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let price=carsAfterUpdate.reduce((accum, currentValue) => accum+currentValue.price,0);
console.log(price);

//Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function minMaxIndex(arr) {
    let key=+prompt("Enter key",1);
    let index=-1;
    let lastIndex=-1;
    for (let i = 0; i < arr.length; i++) {
        if(key===arr[i]) lastIndex=i;
        if(key===arr[i]&&index===-1) index=i;
        }
    return 'MinIndex = '+ index+', MaxIndex = '+lastIndex;
}
console.log(minMaxIndex(Arr));


