//Задача №1

var uchastok, a, b, ostatok;
uchastok = 10*100; //исправил на 10 соток
a = 15;
b = 25;
ostatok = uchastok%(a*b);
console.log("Задача №1");
console.log(ostatok);

//Задача №2

let oval1 = 15;
let oval2 = 600;
let ovalResult;
ovalResult = 15*100 - 600;
console.log("Задача №2");
console.log("Площадь кольца овала: " + ovalResult);

//Задача №3

var c, d, e;
c = 3; d = 5; e = 19;
console.log("Задача №3");
console.log("c="+c+" d="+d+" e="+e);
(c < e) ? 
	(c < d) ? 
		console.log("Наименьшее число с=" + c) :
		console.log("Наименьшее число d=" + d)
	: (e < d)? console.log("Наименьшее число e=" + e) : console.log("Наименьшее число d=" + d);

//Задача №4

m = 7;
n = 22;
var k, l;
console.log("Задача №4");
console.log("m="+m+" n="+n);
k = (m < 10) ?  10 - m : m - 10;
l= (n < 10) ?  10 - n : n - 10;
(k < l) ? console.log("Ближе к 10 число m="+m) : console.log("Ближе к 10 число n="+n);

//Задача №5

console.log("Задача №5");
ax = 0; ay = 0; az = 0;
bx = 0; by = 0; bz = 10;
cx = 1; cy = 0; cz = 0;
//зададим координаты векторов ab, bc, ac
abx = bx - ax; aby = by - ay; abz = bz - az;
bcx = cx - bx; bcy = cy - by; bcz = cz - bz;
acx = cx - ax; acy = cy - ay; acz = cz - az;
//проверяем скалярное произведение ab и bc
 sk1 = abx*bcx + aby*bcy + abz*bcz;
 (sk1==0) ? console.log('прямоугольный треугольник') : console.log('стороны ab и bc не перпендикулярны');
//проверяем скалярное произведение bc и ac 
sk2 = bcx*acx + bcy*acy + bcz*acz;
 (sk2==0) ? console.log('прямоугольный треугольник') : console.log('стороны bc и ac не перпендикулярны');
//проверяем скалярное произведение ab и ac 
sk3 = abx*acx + aby*acy + abz*acz;
 (sk3==0) ? console.log('прямоугольный треугольник') : console.log('стороны ab и ac не перпендикулярны');
 