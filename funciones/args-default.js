"use strict";
// los parametros opcionales siempre van al final
(() => {
    const fullName = (name, lastName, upper = false) => {
        return `${name} ${lastName || 'nombre'}`;
    };
    const name = fullName('tony', 'stark');
    console.log(name);
})();
