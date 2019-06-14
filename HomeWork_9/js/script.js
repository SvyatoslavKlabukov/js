//Задача №1
let mas = [23, 6, 78, 1, -90];
console.log(myUtils.min(mas));
console.log(myUtils.max(mas));
console.log(myUtils.sredneeArifmeticheskoe(mas));
console.log(myUtils.clone(mas));

//Задача №2

/*Подключить стороннюю библиотеку для построения графиков.
Построить график функции y = f(x):
y = 5/x, при x>=1;
y = x*x – 4*x, при x<1.
Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5.
Расчёт функции y = f(x) реализовать в виде отдельной функции.
*/

//Объект описывающий точки одной линии
let line1 = {
    x:[],
    y:[],
    type:'scatter'
};

//Функция для расчёта y = f(x)
function calcY(x){
    let y;
    if (x >= 1){
        y = 5/x;
    } else {
        y =x*x - 4*x;
    }
    return y;
}	

for (let i = -5; i < 5; i+=0.01) {
    line1.x.push(i);
    line1.y.push(calcY(i));
}
let data = [line1];

let layout = {
    title: 'Кривая из ДЗ',
    xaxis: {
        title: 'Ось х',
        showgrid: false,
        zeroline: false
    },
    yaxis: {
        title: 'Ось у',
        showline: false
    }
};

Plotly.newPlot('placeholder', data, layout);
