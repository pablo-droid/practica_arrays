function main() {
    const testArray1 = [0, 6, -1, 7, -2];
    const testArray2 = [7, 7, 7, 7, 7];
    //1
    //console.log(testArray1[0]);

    //2
    //console.log(testArray1[testArray1.length - 1]);

    //3
    testArray1.splice(0, 0, "hola");
    //console.log(testArray1);

    //4
    testArray1.splice(0, 1);
    //console.log(testArray1);

    //5
    testArray1.push("hola");
    //console.log(testArray1);

    //6
    testArray1.pop();
    //console.log(testArray1);

    //7
    const concatArray = testArray1.concat(testArray2);
    //console.log(concatArray);

    //8
    //console.log(testArray1.includes(7));
    //console.log(testArray1.includes(69));

    //9
    //console.log(testArray1.indexOf(7));

    //10
    testArray2.splice(3, 1, 69)
    //console.log(testArray2);

    //11
    const sum = testArray1.reduce((accumulated, element)=>{return accumulated += element;});
    //console.log(sum);

    //12
    const productArray = testArray1.map((element)=>{ return element *= 2; });
    //console.log(productArray);

    //13
    const filteredArray = testArray1.filter((element)=>{return element > 5;});
    //console.log(filteredArray);

    //14
    const checkSize = (array, value)=>{
        let checker = true;
        for (let element of array) {
            if (element <= value) {
                checker = false;
                break;
            }
        }
        return checker;
    }
    //console.log(checkSize(testArray1, 7));
    //console.log(checkSize(testArray1, -700));

    //15
    const firstGreaterThan = testArray1.find((element)=>{return element > 2;});
    //console.log(firstGreaterThan);

    //16
    //testArray1.forEach((element)=>{console.log(element);});

    //17
    const doubled = testArray1.map((element)=>{return element * 2;});
    //console.log(doubled);

    //18
    const names = ["pepe", "manolo"];
    const upperNames = names.map((element)=>{return element.toUpperCase();});
    //console.log(upperNames);
}

main();