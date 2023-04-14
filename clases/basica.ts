(() => {
    //propiedades y metodos estaticas solo puede ser accedidas desde la clase y no des de una instancia de esta
    class Avenger {

        // private name: string;
        // private team: string;
        // public realName: string;
        static aveAge: number = 35;
        static getAvAge(){
            return this.name
        }

        constructor(
            private name: string,
            private team: string,
            public realName?: string,
        ) { }

       public bio() {
            return `${this.name} (${this.team})`
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott');
    // console.log(antman);
    // console.log(antman.bio());






})()