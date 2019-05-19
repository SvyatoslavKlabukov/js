var a = prompt("Введите год");
var b = parseInt(a, 10);
if (b%400 === 0){
	alert(b + " - високосный год");
} else	if ((b%100 === 0) && (b%400 !== 0)){
	alert(b + " - невисокосный год");
} else if (b%4 === 0) {
	alert(b + " - високосный год");
} else alert(b + " - невисокосный год");

