"use strict";
//no debe tener un punto alcanzable
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('auxilio');
})();
