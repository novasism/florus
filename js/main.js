/**
 * Main JavaScript file.
 *
 * Using require.js. More information at http://requirejs.org/docs/start.html
 */

(function (require) {

    /**
     * Shim
     */
    require.config({
        paths: {
            jquery: 'vendor/jquery',
            foundation: 'foundation/foundation'
        },
        shim: {
            'foundation/foundation.section': {
                deps: ['foundation/foundation']
            }
        }
    });

    /**
     * require jQuery functions
     */
    require(['jquery'], function () {

        /**
         * Instantiate Foundation
         */
        require(['foundation'], function () {
            $(document).foundation();
        });

    });

}) (window.requirejs);