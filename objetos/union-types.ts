(() => {
    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string,
    }

    let myCustomVariable: (string | number | Hero) = 'Ivan';
     myCustomVariable = {
        name:'jose',
        age:23,
        powers:[1,2]

    }


})()