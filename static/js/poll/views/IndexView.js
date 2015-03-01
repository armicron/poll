 define([
     'jquery', 'underscore', 'backbone', 'models/Poll',
     'text!templates/poll_index.txt'
 ], function($, _, $B, Poll, poll_index) {
     var QuestionView = $B.View.extend({
         template: _.template(poll_index),

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
