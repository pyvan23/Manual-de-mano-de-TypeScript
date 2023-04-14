(()=>{
//patron Singleton una instancia
    class Apocalipsis{

        static instance:Apocalipsis
        private constructor(public name:string){


        }

        static callApocalipsis():Apocalipsis{
            if(!Apocalipsis.instance){
                Apocalipsis.instance= new Apocalipsis('soy el unico Apoca')
            }
            return Apocalipsis.instance
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis()
    console.log(apocalipsis1);
    // const apocalipsis = new Apocalipsis('soy Apocalipsis... el unico')
    // console.log(apocalipsis);

})()