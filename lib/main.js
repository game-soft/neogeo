(function() {
    'use strict';
    var neogeoSoftList = require('../data/soft_list');

    if (typeof define === 'function' && define.amd) {
        define(function() { return neogeoSoftList; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = neogeoSoftList;
    } else {
        window.gameSoft = {
            NG: neogeoSoftList
        };
    }
})();