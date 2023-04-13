"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super poderes', 'viajar en el tiempo']
    };
    let superman = {
        name: 'clark',
        age: 32,
        powers: ['super ', 'viajar en el tiempo'],
        getName() {
            return this.name;
        },
    };
})();
