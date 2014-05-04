Space.App = (function() {
    "use strict";

    var menuWidth = 70,
    	menuWidthExpanded = 300;

	return Tendon.Composer.extend({
		template: Template.get("application"),

		routes: ["home", "photos", "music", "code", "furniture", "contact"],
		
    layout: {
    	menu: "#menu",
    	content: "#content",
    	frameArea: ".js-swipeage",
    	swipeage: '.swipeage'
    },

    children: {
    	menu: new Space.MenuView()
    },

    ui: {
    	swipeage: ".js-swipeage",
    	swipeItems: ".swipeage-item",
    	content: ".application-content"
    },

    preLoad: function(item) {
        var img = new Image();
        img.src = item;
    },

    onRender: function() {
    	var root = this;

    	// PULL GLOBALS REFERENCES
      this.app = window.app;
    	this.ui.window = $(window);
    	this.body = new Tendon.View({ el: "body" });


    	// SETUP FRAMES FROM MENU CONTENT
    	Space.FrameSelector.loadContent($('#menu'));

    	// TURN OFF BASE DRAG INTERACTIONS
    	this.hammer = Hammer("body");

    	this.hammer.on("dragstart", function(ev) {
            if($(window).width() >= 641) {
    			if (ev.gesture && ev.gesture.preventDefault) {
        			if(!$(ev.target.parentNode).hasClass('portfolio-hero-image')) {
        		    ev.gesture.preventDefault();
        		  } else {
        		  	ev.gesture.stopPropagation();
        		  }
        		}
            }
    	});

    	this.setupSwiper();
    },

    setupSwiper: function() {
    	var root = this;

    	//SETUP SWIPER AND CALLBACKS
    	this.swiper = Flipsnap(".js-swipeage");

			this.swiper.element.addEventListener('fstouchstart', function(ev) {
				if(root.app.state("menu-expanded"))
					root.app.vein.trigger("menu:close");
			}, false);

			this.swiper.element.addEventListener('fstouchend', function(ev) {
				if (ev.moved) {
					var lroutes = _.first(root.lastRoutes.split("-"), 2);
					this.lastRoutes = lroutes.join("-");
					lroutes.push(ev.newPoint)
					root.app.router.nav(lroutes.join("/"), false);
				}
			}, false);

			//RESIZE SWIPER PANELS ON WINDOW RESIZE
	    	this.ui.window.on("resize", function() {
	    		var contentWidth = root.ui.content.innerWidth() - menuWidth;
	    		root.ui.swipeItems.css("width", contentWidth);
	    		root.ui.swipeage.css("width", contentWidth * root.ui.swipeItems.length);
	    		
	    		if (root.swiper) {
	    			root.swiper.refresh();
	    		}
	    		
	    	}).trigger("resize");
	   },

    onUnknownRoute: function(routes) {
    	// console.log("unknown route")
    },

    updateFrames: function(routes) {
    	var slug = _.first(routes, 2).join("-"),
	    	last = this.lastRoutes,
    		nearest = Space.FrameSelector.nearest(slug);

    	if (this.lastRoutes != slug) {
	    	this.lastRoutes = slug;

	    	if (nearest.length > 0) {
		    	this.emptyFrames();
		    	this.insertFrameset(Space.FrameSelector.init(nearest));

		    	_.defer(_.bind(function() {
					this.swiper.moveToPoint(routes[2], 0);
		    	}, this));
	    	}
    	} else {
	    	if (routes.length > 2) {
		    	_.defer(_.bind(function() {
					this.swiper.moveToPoint(routes[2], 400);
		    	}, this));
	    	}
    	}
    },

    onKnownRoute: function(routes) {
    	this.updateFrames(routes);
    },

    insertFrameset: function() {
    	var root = this,
    		views = _.isArray(arguments[0]) ? arguments[0] : _.toArray(arguments);

    	_.each(views, function(view) {
    		root.insertFrame(view);
    	});
    },

    insertFrame: function(view) {
    	view.$el.addClass("swipeage-item");
    	// view.$el.css("color", '#'+Math.floor(Math.random()*16777215).toString(16));

    	this.layout.frameArea.insert(view);

    	_.defer(_.bind(function() {
	    	this.ui.swipeItems = this.$(".swipeage-item");
	    	this.ui.window.trigger("resize");
    	}, this));
    },

    emptyFrames: function() {
    	var root = this;
    	if (this.layout.frameArea) {				
	    	this.layout.frameArea.each(function(e) {
	    		this.layout.frameArea.remove(e);
	    	}, this);

			this.swiper.moveToPoint(0, 0);
	    }
    }
	});
})();
