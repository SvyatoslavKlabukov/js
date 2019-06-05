//Задача №1
let span1 = document.createElement('span');
let span2 = document.createElement('span');
let span3 = document.createElement('span');
span1.style.cssText = 'font-size:40px; color:blue;';
span2.style.cssText = 'font-size:40px; color:red;';
span3.style.cssText = 'font-size:40px; color:green;';

let timer = document.getElementById('timer');
timer.appendChild(span1);
timer.appendChild(span2);
timer.appendChild(span3);

function time(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	
	span1.innerHTML=hours + ":";
	span2.innerHTML=minutes + ":";
	span3.innerHTML=seconds;
};
setInterval(time, 1000);

//Задача №2
let product = [{
	photo: 'img1.jpg',
	articul: 12233,
	about: 'товар первый'
	},
	{photo: 'img2.jpg',
	articul: 65675,
	about: 'товар второй'
	},
	{photo: 'img3.jpg',
	articul: 78901,
	about: 'товар третий'
	}
];

function getProduct(arr){
	for (let i = 0; i < arr.length; i++){
		let img = document.createElement('img');
		let div = document.createElement('div');
		let p = document.createElement('p');
		p.appendChild(document.createTextNode("Артикул: "+product[i].articul));
		let h3 = document.createElement('h3');
		h3.appendChild(document.createTextNode(product[i].about));
		img.src = arr[i].photo;
		img.style.cssText=" width:300px; height:300px;";
		document.body.appendChild(div);
		div.appendChild(img);
		div.appendChild(p);
		div.appendChild(h3);
	}
}; 

getProduct(product);

/*
var div = document.createElement('div');
div.className = "alert alert-success";
div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";
document.body.appendChild(div);*/
