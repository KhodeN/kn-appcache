"use strict";
var AppCache = (function () {
    function AppCache($rootScope, $window, updateInterval) {
        this.$rootScope = $rootScope;
        this.$window = $window;
        this.updateInterval = updateInterval;
    }
    AppCache.prototype.init = function () {
        var appCache = this.$window.applicationCache;
        this._appStarted = Date.now();
        if (appCache && appCache.status !== appCache.UNCACHED) {
            this._startChecking();
            this._addListeners();
        }
    };
    AppCache.prototype._getUptime = function () {
        return Date.now() - this._appStarted;
    };
    AppCache.prototype._addListeners = function () {
        var _this = this;
        var appCache = this.$window.applicationCache;
        var action = function () { return _this.$window.location.reload(); };
        appCache.addEventListener('updateready', function () {
            var uptime = _this._getUptime();
            if (uptime < 30 * 1000) {
                action();
                return;
            }
            _this.$rootScope.$on('$stateChangeSuccess', action);
        }, false);
    };
    AppCache.prototype._startChecking = function () {
        var _this = this;
        setInterval(function () {
            _this.$window.applicationCache.update();
        }, this.updateInterval);
    };
    AppCache.$inject = ['$rootScope', '$window', 'updateInterval'];
    return AppCache;
}());
exports.AppCache = AppCache;
