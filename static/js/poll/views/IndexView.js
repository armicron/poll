 define([
    'jquery', 'underscore', 'backbone', 'models/Poll'
 ], function($, _, $B, Poll) {
     var QuestionView = $B.View.extend({
         template: _.template(
             "<a href='#' data-id='poll/<%= id %>'>\
             <%= question %></a><i><a href='#' data-id='stat/<%= id %>'>  [stat]</a></i>"),

         render: function(){
             this.$el.html(this.template(this.model.toJSON()));
             return this;
         },

     });
     return $B.View.extend({
         events: {
             'click a': 'show_poll',
         },
         render: function(){
             console.log('poll collection render');
             this.collection.forEach(this.addOne, this);
         },
         addOne: function(pollItem) {
             var questionView = new QuestionView({model: pollItem});
             this.$el.append(questionView.render().el);
         },
         show_poll: function (e,el,es) {
             if (e instanceof $.Event) {
                 e.preventDefault();
                 e.stopPropagation();
             }
             window.Poll.router.navigate($(e.target).data('id'), true);
         },
     });
 });
