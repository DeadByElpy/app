/**
 * Additional dev events.
 *
 * @license The MIT License (MIT)
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

/* eslint new-cap: 0 */

var //util    = require('util'),
    app      = require('../core'),
    //Wamp     = require('spa-wamp'),
    //request  = require('spa-request'),
    gremlins = require('gremlins.js/gremlins.min.js'),
    events   = {};
    //app;
    //dom     = require('spa-dom'),
    //grid    = require('./grid');


events.load = function () {
    // app instance
    //window.app = app = require('spa-app');

    /*if ( app.query.wampPort ) {
        //console.log('connect to WAMP server');
        app.develop.wamp = new Wamp(
            //new WebSocket('ws://' + (app.query.wampHost || location.hostname) + ':' + app.query.wampPort + '/target')
            'ws://' + (app.query.wampHost || location.hostname) + ':' + app.query.wampPort + '/target'
        );

        app.develop.wamp.addListener('connection:open', function () {
            console.log('wamp open ' + app.develop.wamp.socket.url);
        });

        app.develop.wamp.addListener('connection:close', function () {
            console.log('wamp close ' + app.develop.wamp.socket.url);
        });

        // ready
        /!*window.app.wamp.socket.onopen = function () {
            console.log('wamp is ready!');
        };*!/
    }*/

    // export to globals div for develop HTML elements
    /*window.$develop = document.body.appendChild(document.createElement('div'));
    window.$develop.className = 'develop';/**/

    // apply dev css
    document.body.classList.add('develop');

    //grid.init();

    //if ( localStorage.getItem('grid.active') ) {
    //    grid.show();
    //}

    // stress-testing
    app.develop.horde = gremlins.createHorde();
};


events.keydown = function ( event ) {
    switch ( event.keyCode ) {
        // key b
        /*case 66:
            if ( event.altKey && app.develop.wamp ) {
                app.develop.wamp.call('runTask', {id: 'build'}, function ( error, result ) {
                    console.log('task build executed: ', error, result);
                });
            }
            break;/**/

        // numpad 0
        case 96:
            //debug.info('full app reload', null, {tags: ['reload']});
            console.log('full app reload');
            location.hash = '';
            location.reload();
            break;

        // numpad 5
        //case 101:
        //    // debug grid
        //    if ( grid.active ) {
        //        grid.hide();
        //    } else {
        //        grid.show();
        //    }
        //    debug.log('show grid: ' + grid.active, 'red');
        //    localStorage.setItem('grid.active', grid.active);
        //    break;

        // numpad 6
        case 102:
            // stress-testing
            app.develop.horde.unleash({nb: 500});
            break;

        // numpad 7
        /*case 103:
            //if ( !app.data.host ) {
            //    debug.log('SpyJS in this mode is available only on STB devices.', 'red');
            //} else {
            // SpyJS enable/disable
            if ( localStorage.getItem('spyjs.active') ) {
                //isSpyJs = false;
                localStorage.setItem('spyjs.active', false);
                gSTB.ResetWebProxy();
                debug.log('SpyJS: disable', 'red');
                location.reload();
            } else {
                // try to "ping" proxy server
                request.ajax(document.location.protocol + '//' + location.hostname + ':3546', {
                    method: 'get',
                    onload: function () {
                        // proxy seems ready
                        //isSpyJs = true;
                        localStorage.setItem('spyjs.active', true);
                        debug.log('SpyJS: enable', 'red');
                        debug.log('SpyJS: set proxy to ' + location.hostname + ':' + 3546);

                        gSTB.SetWebProxy(location.hostname, 3546, '', '', '');
                        location.reload();
                    },
                    onerror: function () {
                        debug.log('SpyJS: no connection (check SpyJS is started on the server)', 'red');
                    }
                });
            }
            //}
            break;*/

        //// numpad 8
        //case 104:
        //    // FireBug Lite
        //    debug.log('firebug-lite activation', 'red');
        //    document.head.appendChild(dom.tag('script', {
        //        type: 'text/javascript',
        //        src: 'http://getfirebug.com/firebug-lite.js#startOpened',
        //        onload: function () {
        //            debug.log('firebug-lite ready ...', 'green');
        //        },
        //        onerror: function ( error ) {
        //            debug.inspect(error);
        //        }
        //    }));
        //    break;

        // numpad 9
        /*case 105:
            // outline components and inner structures
            //debug.info('toggle develop/release css layout', null, {tags: ['css', 'toggle']});
            console.log('toggle develop/release css layout');
            // get through all css links
            Array.prototype.forEach.call(document.querySelectorAll('link[rel=stylesheet]'), function ( link ) {
                if ( link.href.indexOf('/release.') === -1 ) {
                    link.href = link.href.replace('/develop.', '/release.');
                } else {
                    link.href = link.href.replace('/release.', '/develop.');
                }
            });
            break;/**/

        // numpad .
        case 110:
            // CSS reload
            //debug.info('CSS reload', null, {tags: ['css', 'reload']});
            console.log('CSS reload');
            // get through all css links
            Array.prototype.forEach.call(document.querySelectorAll('link[rel=stylesheet]'), function ( link ) {
                // get base name, modify and apply
                link.href = link.href.split('?')[0] + '?' + Date.now();
                console.log(link.href);
            });
            break;
    }
};


// additional top-level key handlers
window.addEventListener('load',    events.load);
window.addEventListener('keydown', events.keydown);


// public
module.exports = events;
