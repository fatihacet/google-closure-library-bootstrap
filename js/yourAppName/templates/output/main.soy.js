// This file was automatically generated from main.soy.
// Please don't edit this file by hand.

goog.provide('yourAppName.templates');

goog.require('soy');
goog.require('soy.StringBuilder');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string}
 * @notypecheck
 */
yourAppName.templates.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="', goog.getCssName('container'), '">Google Closure Library Bootstrap Repo</div>');
  return opt_sb ? '' : output.toString();
};
