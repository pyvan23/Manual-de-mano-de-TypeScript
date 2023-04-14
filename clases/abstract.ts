(() => {

    //sirve para crear otras clases y no sirve para crear instancias
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) {

        }
    }

    class Xmen extends Mutante { }
    class Villan extends Mutante { }

    const wolverine = new Xmen('Worverine', 'Logan')
    const magneto = new Villan('Magnetto', 'magnus')
    // console.log(wolverine);
    // console.log(magneto);
    const printName = (character: Mutante) => {
        console.log(character);
    }

    // printName(wolverine)
    // printName(magneto)
})()