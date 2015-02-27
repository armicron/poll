define([
    'jquery', 'underscore', 'backbone', 'router'
], function($, _, $B, Router) {

    var Poll = $B.Model.extend({
        constructor: function() {
            console.log('Poll app initialized...');
        },

        run: function() {
            this.router = new Router();
            this.router.start();
        }
    });
    return Poll;
});
