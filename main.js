"use strict";
(() => {
    class Avenger {
        static getAvAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.aveAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('constructor llamado Avenger llamado');
        }
        getFullName() {
            return `${this.name}  ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutante) {
            super(name, realName);
            this.isMutante = isMutante;
            console.log('constructor llamdo desde X-men');
        }
        get fullName() {
            return `${this.name} --- ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres');
            }
            this.name = name;
        }
        getFullNameXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Ivan 23';
    console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map