requirejs.config({
    baseUrl: "static/js/",
    paths: {
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min',
            'lib/jquery-2.1.3'
        ],
        cookie: 'lib/jquery.cookie',
        domReady: 'lib/domReady',
        text: 'lib/text',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        chart: 'lib/Chart',

        settings: 'poll/components/settings',
        views: 'poll/views',
        models: 'poll/models',
        templates: 'poll/templates',
        collections: 'poll/collections',
        components: 'poll/components',

        application: 'poll/components/Application',
        appModel: 'poll/components/AppModel',
        appCollection: 'poll/components/AppCollection',
        router: 'poll/components/Router',
    }
});

// Run the application
//requirejs(['poll/poll_app']);
define(['domReady', 'application'], function (dom, Poll) {
    window.Poll = new Poll();
    window.Poll.run();
});
