import { AppCache } from './$appCache';
import 'angular';

var moduleName = 'kn-appcache';
angular.module(moduleName, [])
    .constant('updateInterval', 60 * 60 * 1000) // 1 hour
    .service({
        $appCache: AppCache
    });

export default moduleName;
