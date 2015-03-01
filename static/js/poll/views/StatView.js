define([
    'jquery', 'underscore', 'backbone', 'chart', 'settings'
], function($, _, $B, Chart, settings) {
    return $B.View.extend({
        render: function() {
            var json = this.model.toJSON();
            var data = {
                labels: json.stats.labels,
                datasets: [
                    {
                        label: "Poll survey",
                        fillColor: settings.chart.fillColor,
                        strokeColor: settings.chart.strokeColor,
                        highlightFill: settings.chart.highlightFill,
                        highlightStroke: settings.chart.hightlightStroke,
                        data: json.stats.values
                    },
                ]
            };
            var ctx = document.getElementById(settings.chart.context).getContext('2d');
            if (_.has(window.Poll, 'chart')) {
                window.Poll.chart.destroy();
            }
            window.Poll.chart = new Chart(ctx).Bar(data, settings.chart.options);
        }
    });
});
