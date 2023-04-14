(()=>{

    interface Hero  {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string,
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super poderes', 'viajar en el tiempo']


    }
    let superman: Hero = {
        name: 'clark',
        age: 32,
        powers: ['super ', 'viajar en el tiempo'],
        getName() {
            return this.name;
        },


    }







})()