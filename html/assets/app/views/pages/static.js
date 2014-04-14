Space.StaticView = (function() {
    'use strict';

    return Tendon.View.extend({
        onRender: function() {
            var root = this;
            this.app = window.app;
            this.$el.addClass("frame");
            
            setTimeout(function() {
                root.$el.removeClass("is-loading");
            }, 400);

            if(this.images) {
                this.loadImages();
            }
        },

        loadImages: function() {
            var data = this.images,
                tube = {};
            tube.images = [];
            
            var mapped = _.map(data, function(i) { return tube.images.push({'path': Backbone.history.fragment.split('/0').shift() + '/' + i }) }),
                templatedImages = Template.get("components/images")(tube);

            this.$el.append(templatedImages);
        }
    });
}());