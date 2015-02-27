define([
    'jquery', 'underscore', 'backbone', 'views/IndexView',
    'collections/PollCollection', 'models/Poll', 'views/PollView'
], function($, _, $B, IndexView, PollCollection, Poll, PollView){
    return $B.Router.extend({
        routes: {
            '': 'index',
            'poll/:id': 'poll',
            'stat/:id': 'stat',
        },
        initialize: function() {
            this.pollList = new PollCollection();
            this.indexView = new IndexView({collection: this.pollList});
            $('#poll_container').append(this.indexView.el);
            console.log('Router initialized...');
        },
        start: function() {
            $B.history.start({pushState: true});
            console.log('Router started...');
        },
        index: function() {
            console.log('index');
            var self = this;
            this.pollList.fetch({
                success: function() {
                    self.indexView.render();
                }});
        },
        poll: function(id) {
            console.log('poll detail');
            var poll = new Poll({'id': id});
            poll.fetch({
                success: function() {
                    var pollView = new PollView({model: poll});
                    $('#poll_details').html(pollView.render().el);
                }
            });


        },
        stat: function(id) {
            console.log('statistics of the poll');
        },
    });
});
