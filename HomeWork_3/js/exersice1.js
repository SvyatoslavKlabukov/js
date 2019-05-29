//Задача №1
console.log("Задача №1");
let A = [12, 4, 3, 10, 1, 20];
let B = [-3, -7, -100, -33];
console.log(A);
console.log(B);
let C = A.concat(B);
console.log(C);
let D = B.concat(A);
console.log(D);

//Задача №2
console.log("Задача №2");
var area = [ 1, null, 0, null, 1, 0, null, null, 1 ];

for (var i = 0; i < area.length; i++){
	switch (area[i]){
		case 1:
			area[i] = "x";
			break;
		case 0:
			area[i] = "0";
			break;
		case null:
			area[i] = "";
			break;
	};
};

let str = "<table width='90px' border='solid black 1px' >"+ 
			"<tbody>"+
				"<tr align='center' height='30px' width='30px'>"+
					"<td>"+area[0]+"</td>"+
					"<td>"+area[1]+"</td>"+
					"<td>"+area[2]+"</td>"+
				"</tr>"+
				"<tr align='center' height='30px' width='30px'>"+
					"<td>"+area[3]+"</td>"+
					"<td>"+area[4]+"</td>"+
					"<td>"+area[5]+"</td>"+
				"</tr>"+
				"<tr align='center' height='30px' width='30px'>"+
					"<td>"+area[6]+"</td>"+
					"<td>"+area[7]+"</td>"+
					"<td>"+area[8]+"</td>"+
				"</tr>"+
			"</tbody>"+
		"</table>";
document.write(str);

//Задача №3
console.log("Задача №3"); 
let E = [12,4,3,10,1,20]
console.log(E);
let max = E[0], min = E[0], indexmax, indexmin;
for (i = 1; i < E.length; i++){
	if (E[i] < min){
		min = E[i];
		indexmin = i;
	}
}
E.splice(indexmin, 1);
for (i = 1; i < E.length; i++){
	if (E[i] > max){
		max = E[i];
		indexmax = i;
	}
}
E.splice(indexmax, 1);
console.log(E);


