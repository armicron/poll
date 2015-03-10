define([
    'jquery', 'underscore', 'backbone', 'models/Vote',
    'text!templates/poll_details.txt',
], function($, _, $B, Vote, poll_details) {
    return $B.View.extend({
        template: _.template(poll_details),
        events: {
            'click input:button': 'vote',
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        vote: function(e) {
            var vote = new Vote();
            var $button = $(e.target);
            var poll_id = $button.data('poll-id');
            var choices = $button.parent().find('.poll_choice:checked');
            // $.each(choices, function (i, l) {
            //     var choice_id = $(l).data('id');
            //     vote.set({choice: '/polls/api/v1/choice/' + choice_id + '/',
            //               poll: '/polls/api/v1/poll/' + poll_id + '/'});
            //     vote.save();
            // });
            var choices_id = [];
            $.each(choices, function(i, l) {
                choices_id.push($(l).data('id'));
            });
            vote.set({choice: choices_id,
                      poll:'/polls/api/v1/poll/' + poll_id + '/'});
            vote.save();
            $button.parent().find('.poll_choices').fadeOut();
        }
    });
});
