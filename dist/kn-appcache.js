(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './$appCache', 'angular'], factory);
    }
})(function (require, exports) {
    "use strict";
    var _appCache_1 = require('./$appCache');
    require('angular');
    var moduleName = 'kn-appcache';
    angular.module(moduleName, [])
        .constant('updateInterval', 60 * 60 * 1000)
        .service({
        $appCache: _appCache_1.AppCache
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = moduleName;
});
