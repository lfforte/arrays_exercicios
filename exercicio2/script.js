let array01 = [10,20,30];
let array02 = ["Luiz","Fernando","Forte"];
let array03 = ["Luiz",1984,true];

console.log(`Array 01: ${array01},\nArray 02: ${array02} \nArray 03: ${array03} \n`);

const exArray = (array01,array02,array03) => {

    console.log(`Array 01: ${array01.length}`);
    console.log(`Array 02: ${array02.length}`);
    console.log(`Array 03: ${array03.length}`);

    return
}

exArray(array01,array02,array03);

const exArray01 = (array01,array02,array03) => {
    
    console.log(`Array 01: ${array01[0]}`);
    console.log(`Array 02: ${array02[1]}`);
    console.log(`Array 03: ${array03[2]}`);
    
    console.log(`Status 1 = ${array01.includes(10)}\nStatus 2 = ${array03.includes(10)}`)

}

exArray01(array01,array02,array03);