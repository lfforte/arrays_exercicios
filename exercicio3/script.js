let array01 = [10,20,30];
let array02 = ["Luiz","Fernando","Forte"];
let array03 = ["Luiz",1984,true];

let array01Copia = array01.slice();
let array02Copia = array02.slice();
let array03Copia = array03.slice();

const manipulandoArrays = (array01) => {

    array01.unshift(5);
    console.log(`Array01 original: ${array01}\n Array01cópia: ${array01Copia}`);

}

const manipulandoArrays2 = (array02) => {

    array02.pop();
    console.log(`Array02 original: ${array02}\n Array02cópia: ${array02Copia}`);

}

const manipulandoArrays3 = (array03) => {

    array03.splice(1,1);
    console.log(`Array03 original: ${array03}\n Array03ópia: ${array03Copia}`);

}

manipulandoArrays(array01);
manipulandoArrays2(array02);
manipulandoArrays3(array03);