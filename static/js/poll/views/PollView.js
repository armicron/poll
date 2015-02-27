define([
    'jquery', 'underscore', 'backbone'
], function($, _, $B) {
    return $B.View.extend({
        template: _.template("<div><%= question %></div>\
<% _.each(choices, function(choice) {%>\
<br><input type='radio' data-id='<%= choice.id %>'><%= choice.choice %></input>\
<%}); %>\
<br><br><input type='button' value='Vote'></input>"),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
    });
});
