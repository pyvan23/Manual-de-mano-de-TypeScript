// los parametros opcionales siempre van al final
(() => {

    const fullName = (name: string, lastName?: string, upper: boolean = false): string => {


        return `${name} ${lastName || 'nombre'}`;
    }

    const name = fullName('tony','stark')
    console.log(name);
    

})()