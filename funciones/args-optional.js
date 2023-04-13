"use strict";
(() => {
    const fullName = (name, lastName) => {
        return `${name} ${lastName || 'nombre'}`;
    };
    fullName('tony');
})();
