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

        // console.log(iroman, resto);


    }

    print(avengers)



    const avengersArr: [string, string, boolean, number] = ["Iroman", "Hulk", true, 6]
    const [capi, hulk, seriaUnBooleano] = avengersArr
    // console.log({ hulk, seriaUnBooleano })

})()