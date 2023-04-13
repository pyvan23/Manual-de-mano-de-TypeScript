(()=>{

    const batman:string = 'Batman';
    const linternaVerde:string = 'Linterna verde';
    const volcan:string = `Heroe: ${batman} volcan negro`;

    console.log(volcan.toLowerCase());

    console.log(batman[10]?.toLocaleUpperCase() || 'es undefined');

})()