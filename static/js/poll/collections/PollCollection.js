define([
    'jquery', 'underscore', 'backbone', 'appCollection', 'models/Poll',
    'settings'
], function($, _, $B, appCollection, Poll, settings) {
    return appCollection.extend({
        model: Poll,
        url: settings.apiUri + '/poll/',
    });

});
