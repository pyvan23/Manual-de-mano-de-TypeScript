(() => {

    const fullName = (name: string, lastName?: string): string => {


        return `${name} ${lastName || 'nombre'}`;
    }

    fullName('tony')

})()