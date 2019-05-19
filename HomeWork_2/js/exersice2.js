let b = prompt("Введите номер единицы измерения\n 1 - дм\n 2 - км\n 3 - м\n 4 - мм\n 5 - см ");
let s;
switch (b){
	case "1":
		s = "дм";
		break;
	case "2":
		s = "км";
		break;
	case "3":
		s = "м";
		break;
	case "4":
		s = "мм";
		break;
	case "5":
		s = "см";
		break;
	default:
		s = "неизвестные единицы измерения";
		break;
}
let c = prompt("Введите длину отрезка в " + s);
let l = parseInt(c , 10);
switch (b){
	case "1":
		alert("Длина отрезка " + l*0.1 + " м");
		break;
	case "2":
		alert("Длина отрезка " + l*1000 + " м");
		break;
	case "3":
		alert("Длина отрезка " + l + " м");
		break;
	case "4":
		alert("Длина отрезка " + l/1000 + " м");
		break;
	case "5":
		alert("Длина отрезка " + l/100 + " м");
		break;
	default:
		alert("Введите номер единицы измерения от 1 до 5");
		break;
};