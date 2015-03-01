define([
    'jquery', 'underscore', 'backbone', 'text!templates/poll_details.txt',
], function($, _, $B, poll_details) {
    return $B.View.extend({
        template: _.template(poll_details),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
    });
});
