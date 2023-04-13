"use strict";
(() => {
    const fullName = (name, ...restArgs) => {
        return `${name} ${restArgs.join(' ')}`;
    };
    const name = fullName('tony', 'stark', 'kent');
    console.log(name);
})();
