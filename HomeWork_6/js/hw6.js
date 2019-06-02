//Задача №1
console.log("Задача №1");
let a = {
    name: 'static',
    count: 0
};
function foo (obj,count, n ){
	let arr = [];
	for (let i = 0; i < n; i++){
		arr[i] = {
			name: obj.name, 
			count: i
		};
	};
	return arr;
}
console.log(foo(a, 'count', 10));

//Задача №2
console.log("Задача №2");
function getNumber(){
	let arr2 = [];
	let x;
	function saveNumber(){
		let flag = true;
		if (arr2.length < 100 ) {
			while (flag){
				flag = false;
				x = Math.round(Math.random()*100+1);
				if (x == 101) x =100;
				for (let i = 0; i < arr2.length; i++){
					if (x == arr2[i]) {
						flag = true;
						break;
					}; 
				};
			};
			arr2.push(x);
		} else {
			x = Math.round(Math.random()*100);
			arr2.push(x);
		}
		return x;
	};		
	return saveNumber;
}
var number = getNumber();
let arr3 = [];
for (let i = 0; i < 105; i++){
	arr3[i] = number();
};
console.log(arr3);

//Задача №3
console.log("Задача №3");
let student = {
	name: "Svyatoslav",
	surname: "Klabukov",
	age: 26,
	interests: ['music', 'studing'],
	placeOfStuding: 'ITMO',
	printInfo: function() {
		let str =`${this.name} ${this.surname}. ${this.age} год. Интересы: 
		${this.interests[0]}, ${this.interests[1]}. Учится в ${this.placeOfStuding}.`; 
		return str;
	}
}
console.log(student.printInfo());

//Задача №4
console.log("Задача №4");
function factorial(n){
	if (n > 0){
		return  n*factorial(n-1);
	}
	return 1;
}
console.log(factorial(5));

//Задача №5
console.log ("Задача №5");
let arr4 = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];
/*function sortArr4(ar, sort(compareObj)){
	
}*/
function compareObj(obj1, obj2){
	return obj1.price - obj2.price;
};
arr4.sort(compareObj);
console.log(arr4);

