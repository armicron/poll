/* Adding meta information from tastypie.
 * http://paltman.com/integration-backbonejs-tastypie/ */
define([
    'jquery', 'underscore', 'backbone'
],function($, _, $B) {
    return Backbone.Collection.extend({
        parse: function(response) {
            this.recent_meta = response.meta || {};
            return response.objects || response;
        }
    });
});
