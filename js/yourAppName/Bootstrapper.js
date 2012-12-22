/**
 *
 * @fileoverview This is a bootstrap code base for Google Closure Library.
 * @author Fatih Acet <fatih@fatihacet.com>
 */
goog.provide('yourAppName.Bootstrapper');


/**
 * Bootstrapper class of your project.
 * Instantiating a new Bootstrapper will also build up all application.
 *
 * @constructor
 */
yourAppName.Bootstrapper = function() {
    // ...
    // Your application setup before running.
    // ...

    this.init();
};


/**
 * Application initialization method.
 * Implement your app logic in this method.
 */
yourAppName.Bootstrapper.prototype.init = function() {
    // do your application logic in here.

    // using jQuery is not cool here, but don't want to deal with window load within a cross browser scope.
    // however you can refer to http://stackoverflow.com/a/12057014/480949
    $(function() {
        alert('Well, we are ready to go!');
    });
};


/**
 * Initialize bootstrapper class to start application.
 */
new yourAppName.Bootstrapper();
