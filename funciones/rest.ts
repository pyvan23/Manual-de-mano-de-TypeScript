(() => {

    const fullName = (name: string, ...restArgs: string[]): string => {


        return `${name} ${restArgs.join(' ')}`;
    }

    const name = fullName('tony', 'stark','kent')
    console.log(name);


})()