(() => {

    const addNumbers = (a: number, b: number) => a + b;
    const greet = (a: string) => `Hola ${name}`;
    const saveTheWorld = () => 'el mundo esta salvado';


    let myFunction: (y:number,z:number)=>number;

    myFunction = addNumbers
    console.log(myFunction(1,2));
})()