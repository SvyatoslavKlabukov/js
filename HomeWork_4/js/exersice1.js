// Задача №1
console.log("Задача №1");
let str1 = "109";
console.log(str1);
let arr1 = str1.split("");
let sum = 0 ;
for (let i = 0; i < arr1.length; i++){
	sum +=Number(arr1[i]);
}
console.log("Сумма цифр числа " + str1 + " равна " + sum);

// Задача №2
console.log("Задача №2");
let str2 = "В этой строке удваиваю символ";
let symbol = "о";
console.log(str2);
console.log(symbol);
let arr2 = str2.split(symbol);
let arr3 = [];
arr3[0] = arr2[0];
for (let i = 1; i < arr2.length; i++){
	arr3[i] = symbol + arr2[i];
};
str3 = arr3.join(symbol);
console.log(str3);

// Задача №3
console.log("Задача №3");
let str4 = prompt("Введите пароль");
let regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$#%])[\d{3,}a-zA-Z!$#%]{9,}/;
if (regExp.test(str4)){
	alert("пароль верен");
} else
alert("пароль не верен");                                                                    



