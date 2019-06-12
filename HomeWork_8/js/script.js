//Задача №1
let firstdiv = document.getElementById('firstdiv');
let seconddiv = document.getElementById('seconddiv');
firstdiv.addEventListener("click",func1);
seconddiv.addEventListener("click",func1);

function func1(event){
	let clickElem = event.target;// элемент, на котором сработал click
	clickElem.classList.toggle('green');
}

//Задача №2
let button = document.getElementById('button');
button.addEventListener("click", func2);

function func2(){
	
	let x = Number(button.value);
	x++;
	button.setAttribute("value", x);
}

//Задача №3

let form = document.forms.ex;
form.addEventListener('submit', func3); 
function func3(event){
	event.preventDefault();//отменяет перезапуск страницы, сабмит отправляет запрос на сервер и если путь не указан то перезапускает страницу
	
	let div = document.createElement('div');
	div.style.cssText = "height: 100px;";
	document.body.appendChild(div);

	let p = document.createElement('p');
	div.appendChild(p);
	let img = document.createElement('img');
	img.src = 'im.jpg';
	img.style.cssText="width:100px; height:100px; float: left; margin-right: 10px;";
	p.appendChild(img);

	
	let strong = document.createElement('strong');
	let text0 = document.createTextNode("Svyatoslav  ");
	strong.appendChild(text0);
	p.appendChild(strong);
	
	let date = new Date();
	p.appendChild(document.createTextNode(date));
	
	let br = document.createElement('br');
	p.appendChild(br);
	
	let text1 = document.getElementById('text').value;
	p.appendChild(document.createTextNode(text1));
}

