checkInApp.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "$locationProvider", "JS_REQUIRES", "$ocLazyLoadProvider", "$controllerProvider", function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, jsRequires, $ocLazyLoadProvider, $controllerProvider) {
    checkInApp.controller = $controllerProvider.register;
    //LAZY MODULES
    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: jsRequires.modules
    });
    $urlRouterProvider.otherwise("/login");
    $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'app/template/login.html',
            resolve: loadSequence('loginCSS', 'bootstrapCSS', 'allCSS', 'AppCtrl'),
            controller: 'appCtrl',
            title: 'Check-in-Login'
        }).state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/template/dashboard.html',
            resolve: loadSequence('loginCSS', 'bootstrapCSS', 'allCSS', 'AppCtrl'),
            controller: 'appCtrl',
            title: 'Check-in-Dashboard'

        }).state('search', {
            url: '/search',
            templateUrl: 'app/template/search.html',
            resolve: loadSequence('loginCSS', 'bootstrapCSS', 'allCSS', 'AppCtrl'),
            controller: 'appCtrl',
            title: 'Check-in-Search'
        })
        .state('personDetail', {
            url: '/personDetail',
            templateUrl: 'app/template/personDetail.html',
            resolve: loadSequence('loginCSS', 'bootstrapCSS', 'allCSS', 'AppCtrl'),
            controller: 'appCtrl',
            title: 'Check-in-Person Detail'
        });

    function loadSequence() {
        var _args = arguments;
        return {
            deps: ['$ocLazyLoad', '$q', function ($ocLL, $q) {
                var promise = $q.when(1);
                for (var i = 0, len = _args.length; i < len; i++) {
                    promise = promiseThen(_args[i]);
                }
                return promise;

                function promiseThen(_arg) {
                    if (typeof _arg == 'function') return promise.then(_arg);
                    else return promise.then(function () {
                        var nowLoad = requiredData(_arg);
                        if (!nowLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                        return $ocLL.load(nowLoad);
                    });
                }

                function requiredData(name) {
                    if (jsRequires.modules)
                        for (var m in jsRequires.modules)
                            if (jsRequires.modules[m].name && jsRequires.modules[m].name === name) return jsRequires.modules[m];
                    return jsRequires.scripts && jsRequires.scripts[name];
                }
   }]
        };
    };
}]);
