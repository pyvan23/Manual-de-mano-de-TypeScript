(() => {

    class Avenger {


        constructor(name = 'name', power = 0) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyAvenger extends Avenger {


        constructor(name, power) {
            super(name, power);
            this.fly = true

        }

    }

    const hulk = new Avenger('Hulk', 99000)
    const flyAvenger = new FlyAvenger('fly', 99000)

    // console.log(hulk, flyAvenger);



})()