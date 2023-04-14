(() => {

    type Avengers = {
        nick: string,
        iroman: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    const avengers: Avengers = {
        nick: 'Sanuel',
        iroman: 'Robert',
        vision: 'paul',
        activo: true,
        poder: 1500
    }

    // const { poder, vision } = avengers
    // console.log(poder);
    const print = ({ iroman, ...resto }: Avengers) => {

        console.log(iroman, resto);


    }

    print(avengers)

})()