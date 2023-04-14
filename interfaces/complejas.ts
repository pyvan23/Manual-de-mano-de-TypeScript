(() => {

    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAdrees(id: string): string;

    }

    interface Address {
        id: number,
        zip: string
    }

    const client: Client = {
        name: 'Juana',
        age: 25,
        address: {
            id: 123232,
            zip: 'bsfibfi'
        },
        getFullAdrees(id: string) {
            return this.address.zip;
        },
    }
    const client2: Client = {
        name: 'Pedro',
        age: 35,
        address: {
            id: 87827,
            zip: 'bsfytdx'
        },
        getFullAdrees(id: string) {
            return this.address.zip;
        },
    }



})()