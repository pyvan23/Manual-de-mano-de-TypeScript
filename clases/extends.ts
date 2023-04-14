(() => {
    //metodos y propiedades protected solo es accesible dentro de la clase o clases que extiendan de ella
    //metodos y propiedades private solo es accesible dentro de la clase
    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('constructor llamado Avenger llamado');
        }

        protected getFullName() {
            return `${this.name}  ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutante: boolean
        ) {
            super(name, realName)
            console.log('constructor llamdo desde X-men');
        }
        get fullName() {
            return `${this.name} --- ${this.realName}`
        }
        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres')
            }
            this.name = name;
        }

        getFullNameXmen() {
            console.log(super.getFullName());
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);
    // wolverine.getFullNameXmen()
    wolverine.fullName = 'Ivan 23';
    console.log(wolverine.fullName);
})()