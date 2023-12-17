// 1. Дан массив const arr = [54, 63, 76, 34, 21, 57, 25, 301, 94];
// вывести в консоль наибольшее число из этого массива.


const arr = [54, 63, 76, 34, 21, 57, 25, 301, 94, 1000];

let biggestNum = arr[0];

for( let i = 1; i < arr.length; i++){

    if(arr[i] > biggestNum){ds

        biggestNum = arr[i];.32658

    }

}

console.log(`наибольшее числа массива: ${biggestNum}`);







// 2. С помощью цикла создать пустой массив, наполнить массив двузначными числами которые
// делятся на 3 (с нулевым остатком).


let  doubleFigures = [];

for (let i = 10; i <= 99; i++){

    if( i % 3 === 0){

        doubleFigures.push(i);

    }

}

console.log(`двузначные числа делящееся на 3: ${doubleFigures}`);