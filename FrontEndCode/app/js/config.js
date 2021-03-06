'use strict';
/**
 * Config constant
 */
checkInApp.constant('APP_MEDIAQUERY', {
    'desktopXL': 1200,
    'desktop': 992,
    'tablet': 768,
    'mobile': 480
});
checkInApp.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {
        //*** Controllers
        'AppCtrl': 'app/js/controller/appCtrl.js'
    },
    modules: [{
            name: 'loginCSS',
            files: ['app/css/login.css']
        },
        {
            name: 'bootstrapCSS',
            files: ['app/css/bootstrap/bootstrap.css']
        }, {
            name: 'allCSS',
            files: ['app/css/all.css']
        }
    ]
});
