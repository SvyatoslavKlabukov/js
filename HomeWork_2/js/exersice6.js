let a1 = prompt("Введите количество тарелок");
let a = parseInt(a1, 10);
console.log("Количество тарелок: " + a);
let b1 = prompt("Введите количество моющего средства в литрах");
let b = parseInt(b1, 10);
console.log("Количество моющего средства: " + b);
while ((a > 0) && (b > 0 )) {
	b -= 0.5;
	a--;
	console.log("Количество оставшегося моющего средства: " + b);
}
console.log("Количество невымытых тарелок: " + a);
console.log("Количество оставшегося моющего средства: " + b);