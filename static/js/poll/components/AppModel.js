/* Ensure that an url has trailing slash,
 * to avoid the need for a redirect on every API call
 * http://paltman.com/integration-backbonejs-tastypie/
 */
define([
    'jquery', 'underscore', 'backbone'
],function($, _, $B) {
    return $B.Model.extend({
        base_url: function() {
            var temp_url = Backbone.Model.prototype.url.call(this);
            return (temp_url.charAt(temp_url.length - 1) == '/' ? temp_url : temp_url+'/');
        },

        url: function() {
            return this.base_url();
        }
    });

});
