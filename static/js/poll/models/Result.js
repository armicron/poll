define(['backbone', 'appModel', 'settings'], function($B, appModel, settings) {

    return appModel.extend({
        urlRoot: settings.apiUri + '/result/'
    });
});
