Space.FrameSelector = (function () {
	'use strict';

    var exists = function (selector) {
        return Frames[selector] !== undefined;
    };

    var get = function (selector) {
        return Frames[selector];
    };

    var getNearest = function (selector) {
        if (exists(selector)) return get(selector);
        var parts = selector.split("-");
        if (exists(parts[0])) return get(parts[0]);
    };

    var initialize = function (viewArray) {
        return _.map(viewArray, function (view) {
            return new view();
        });
    };

    var start = function (selector) {
        return initialize(get(selector))
    };

    var Frames = {
        "home": [
            Space.StaticView.extend({
                template: Template.get("page/home/landing")
            })
        ]
    };

    var loadAll = function(item) {
        var $menuLink = $('.menu-link', item),
            $subMenus = $('.menu-subnav-link', item);

        $menuLink.each(function() {
            var title = $(this).attr('href').split('#/').pop(),
                templ = _.template('[ Space.StaticView.extend({template: Template.get("page/<%= title %>/landing")})]');

            var render = eval(templ({'title': title})),
                concat = {};
            
            concat[title] = render;

            _.extend(Frames, concat);


            // add sub menus
            $subMenus.each(function() {
                var self = $(this),
                    root = this,
                    i = 1,
                    title = $(this).attr('data-submenu'),
                    subTitle = $(this).attr('href').split('#/').pop(),
                    templ = _.template('[ Space.StaticView.extend({template: Template.get("page/<%= title %>/landing"), images: <%= imageArray %> })]'),
                    imageList = [],
                    images = '[<% _.each(images, function(name){%>"<%= name %>",<%});%>]';

                for (i = 1; i <= self.attr('image-length'); i++) {
                    var iteration = self.attr('data-submenu').split('-').pop() + '-' + i;
                    imageList.push(iteration);
                    app.preLoad("dist/images/jpeg/" + subTitle + '/' + iteration + ".jpg");
                }

                var readyToInsert = _.template(images, {images: imageList });


                var render = templ({title: subTitle, imageArray: readyToInsert }),
                    method = {};

                method[title] = eval(render);

                _.extend(Frames, method);
            });
        });

    };

    return {
        exists: exists,
        get: get,
        nearest: getNearest,
        init: initialize,
        start: start,
        loadContent: loadAll
    };
})();
