(() => {

    type Avenger = {
        name: string,
        weapon: string

    }

    const iroman: Avenger = {

        name: 'iroman',
        weapon: 'armor'

    }

    const capAmerica: Avenger = {

        name: 'cap',
        weapon: 'escudo'

    }

    const spiderman: Avenger = {

        name: 'spiderman',
        weapon: 'tela'

    }

    const avengers: Avenger[] = [iroman, spiderman, capAmerica];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }



})()