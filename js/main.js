document.write("Домашнє завдання з JavaScript <br />");
document.write("#1 <br />");

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
let myNum = 10;
// ім'я змінної: myStr, значення: 'some string'
let myStr = "some string";
// ім'я змінної: myBool, значення: true
let myBool = true;
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
let myArr = [1, 2, 3, 4, 5];
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'
let myObj = {
  first: "First Name",
  last: "Last Name",
};

document.write("ім'я змінної: myNum, значення: ", myNum, "<br />");
document.write("ім'я змінної: myStr, значення: ", myStr, "<br />");
document.write("ім'я змінної: myBool, значення: ", myBool, "<br />");
document.write("ім'я змінної: myArr, значення: ", myArr, "<br />");
document.write(
  "ім'я змінної: myObj, значення: ",
  JSON.stringify(myObj),
  "<br />"
);

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

document.write("#2 <br />");

let decimal2 = myNum.toFixed(2);

document.write(
  `Відформатуйте ціле число, яке зберігається в змінній myNum=${myNum}, щоб отримати результат з 2 знаками після коми: `,
  decimal2,
  "<br />"
);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */
document.write("#3 <br />");

let i = 5;
// Постфіксний інкремент (i++)
document.write("Значення i перед постфіксним інкрементом: ", i, "<br />"); // 5
document.write("Постфіксний інкремент i++: ", i++, "<br />"); // 5
document.write("Значення i після постфіксного інкременту: ", i, "<br />"); // 6

// Префіксний інкремент (++i)
document.write("Префіксний інкремент ++i: ", ++i, "<br />"); // 7
document.write("Значення i після префіксного інкременту: ", i, "<br />"); // 7

// Постфіксний декремент (i--)
document.write("Значення i перед постфіксним декрементом: ", i, "<br />"); // 7
document.write("Постфіксний декремент i--: ", i--, "<br />"); // 7
document.write("Значення i після постфіксного декременту: ", i, "<br />"); // 6

// Префіксний декремент (--i)
document.write("Префіксний декремент --i: ", --i, "<br />"); // 5
document.write("Значення i після префіксного декременту: ", i, "<br />"); // 5

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

document.write("#4 <br />");

let myTest = 20;

myTest += myNum;
document.write("Результат myTest після +=: ", myTest, "<br />"); // 30

myTest -= 5;
document.write("Результат myTest після -=: ", myTest, "<br />"); // 25

myTest *= 2;
document.write("Результат myTest після *=: ", myTest, "<br />"); // 50

myTest /= myNum;
document.write("Результат myTest після /=: ", myTest, "<br />"); // 5

myTest %= 3;
document.write("Результат myTest після %=: ", myTest, "<br />"); // 2

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow

document.write("#5 <br />");

const myPi = Math.PI;
let myRound = Math.round(89.279);
let myRandom = (Math.random() * 10).toFixed();  
const myPow = Math.pow(3, 5);

document.write("константа Pi → myPi: ", myPi, "<br />");
document.write("округлене значення числа 89.279 → myRound: ", myRound, "<br />");
document.write("випадкове число між 0..10 → myRandom: ", myRandom, "<br />");
document.write("3 у 5 степені → myPow: ", myPow, "<br />");

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту 'Мама мыла раму, рама мыла маму', ключу length встановіть довжину цього рядка.
 */

document.write("#6 <br />");

let strObj = {};
strObj.str = "Мама мыла раму, рама мыла маму";
strObj.length = "Мама мыла раму, рама мыла маму".length;
document.write("strObj: ", JSON.stringify(strObj), "<br />");

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */
document.write("#7 <br />");

let isRamaPos = strObj.str.indexOf("рама");
let isRama = isRamaPos !== -1;
document.write(
  "Результатом для isRama має бути буль true: ",
  isRama ? "✅" : "🔴",
  "<br />"
);

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

document.write("#8 <br />");

let strReplace = strObj.str
  .replace("Мама мыла", "Мама моет")
  .replace("рама мыла", "Рама держит");
let isCorrect = "Мама моет раму, Рама держит маму" === strReplace;
document.write(
  "Результат перейменування підрядка у рядку:",
  isCorrect ? "✅" : "🔴",
  "<br />"
);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

document.write("#9 <br />");

let someStr = "some STRING";
let upperStr = someStr.toUpperCase();
document.write(
  "Текст у верхньому регістрі:",
  upperStr === "SOME STRING" ? "✅" : "🔴",
  "<br />"
);

let lowerStr = someStr.toLowerCase();
document.write(
  "Текст у нижньому регістрі:",
  lowerStr === "some string" ? "✅" : "🔴",
  "<br />"
);
