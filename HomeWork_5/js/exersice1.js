//Задача №1
console.log("Задача №1");
let arr3 = [1, "строка", 3];
let arr4 = [1, "строка", 3, ];
function compareArrays (arr1, arr2){
	if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
		console.log("не массивы");
		return false;
	}
	let i = 0;
	while (i < arr1.length || i < arr2.length) {
		if (!(arr1[i] === arr2[i])){
			console.log("массивы не равны");
			return false;
		}
		i++;
	}
	return true;
}
console.log(compareArrays(arr3, arr4));

//Задача №2
console.log("Задача №2");
function range (a, b, c = 1 ){
	//c = c || 1;
	let arr = [];
	arr[0] = a;
	let i = 1;
	while (arr[i-1] != b){
		if (arr[i-1]+c > b) {
			arr[i] = b;
			break;
		}
		arr[i]=arr[i-1]+c;
		i++;
	}
 	return arr;
}	
console.log(range(1, 10, 2));

//Задача №3
console.log('Задача №3');
let student = {
	name: "Svyatoslav",
	surname: "Klabukov",
	age: 26,
	interests: ['music', 'studing'],
	placeOfStuding: 'ITMO'
};
function info(obj){
	for (let i in obj){
		console.log(i +": " + obj[i]);
	};
}
info(student);