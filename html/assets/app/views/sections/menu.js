Space.MenuView = (function() {
    'use strict';

    var menuWidth = 70,
    	menuWidthExpanded = 190;

    return Tendon.View.extend({
        template: Template.get("menu"),

        ui: {
        	wrapper: ".menu-wrapper",
        	menuLink: ".menu-link",
        	subMenuLink: ".menu-subnav-link",
        	control: ".menu-control",
        	controlAlt: ".menu-control-alt"
        },

        events: {
        	"click @ui.menuLink": "onLinkClick",
        	"click @ui.controlAlt" : "onControlAltClick",
        	"click @ui.subMenuLink": "onSubLinkClick",
        	"click @ui.control": "onControlClick"
        },

        onRender: function() {
        	var root = this;

        	this.app = window.app;
        	this.$body = $("body");

        	this.ui.swipeage = $(".swipeage");

	    	this.hammer = new Hammer(this.el, {
				drag_block_vertical: true,
				drag_lock_to_axis: true,
			    tap: false,
			    doubletap: false,
			    hold: false,
			    rotate: false,
			    pinch: false,
			    transform: false
    		});

    		this.setupDragging();
    		this.setupListeners();
        },

        setupListeners: function() {
        	this.app.vein.on("route:known", function(route) {
						this.ui.menuLink
							.removeClass("is-active")
							.filter("[data-menu=" + _.first(route) + "]")
							.addClass("is-active");

						this.ui.subMenuLink
							.removeClass("is-sub-active")
							.filter("[data-submenu=" + _.first(route, 2).join("-") + "]")
							.addClass("is-sub-active");

		        	}, this);
		        },

		    onSubLinkClick: function(ev) {
		    	this.onControlClick(ev);
		    },

		    onControlAltClick: function(ev) {
		    	ev.preventDefault();

		    	var clickedLocation = ev.currentTarget.hash,
		    			target = $('[href="'+ clickedLocation +'"]').next().find('.menu-subnav-link').attr('href'),
		    			dest = window.location.hash;

		    	if(dest.split('#/').pop().split('/').shift() == clickedLocation.split('#/').pop().split('/').shift()) {
	        	return;
		    	} else {
		    		window.location.hash = target;
		    	}
		    },

        onLinkClick: function(ev) {
        	this.app.vein.trigger("route:known", _.compact(Backbone.history.getHash().split("/")));

        	if(this.app.state("menu-expanded")) {
        		return;
        	} else {
        		this.onControlClick();
        	}

        },

        onControlClick: function() {
			this.app.state("menu-expanded", !this.app.state("menu-expanded"));
			this.ui.swipeage.css({
				'transition-duration': "",
				'transform': ''
			});

			clearTimeout(this.fastTimer);
        },

        setupDragging: function() {
        	var root = this,
        		menuStartTransform,
        		menuCurrentTransform,
        		fastTimer,
        		velocities = [];

    		var isValidDirection = function(ev) {
				var dir = ev.gestures && (ev.gesture.interimDirection || ev.gesture.direction) || Hammer.DIRECTION_LEFT;
	    		return dir == Hammer.DIRECTION_LEFT 
	    			|| dir == Hammer.DIRECTION_RIGHT;
    		};

    		var addVelocity = function(vel) {
    			velocities.push(vel);
    			if (velocities.length > 5) velocities.shift(); 
    		}

			var updateCurrentWidth = _.throttle(function() {
				menuCurrentTransform = +root.ui.swipeage.css("transform").split(",")[4].trim();
			}, 125);

			var menuExpandCleanup = _.debounce(function() {
    			if (root.state("dragging")) {
	    			root.state("dragging", false);
	    			root.ui.swipeage.removeClass("is-dragging");
	    		} else {
	    			root.state("dragging", true);
	    			root.ui.swipeage.addClass("is-dragging");
	    		}
			}, 125);

	    	this.hammer.on("dragstart", function(ev) {
    			root.state("dragging", true);

    			root.ui.swipeage.addClass("is-dragging");
				root.ui.swipeage.css('transition-duration', "0s");

	    		if (isValidDirection(ev)) {
					menuStartTransform = +root.ui.swipeage.css("transform").split(",")[4].trim();
					updateCurrentWidth();

	    			clearTimeout(fastTimer);
	    		}
	    	});

	    	this.hammer.on("drag", function(ev) {
	    		var gesture = ev.gesture;
  
	    		if (isValidDirection(ev)) {
		    		gesture.preventDefault();

	    			var isExpanded = ev.gesture.interimDirection == Hammer.DIRECTION_RIGHT;
		    		var newWidth = menuStartTransform + gesture.deltaX;
		    		var newTrans = newWidth > 0 ? newWidth < menuWidthExpanded - menuWidth ? newWidth : menuWidthExpanded - menuWidth : 0;

		            root.ui.swipeage.css('transform', 'translateX(' + newTrans + 'px)');
					root.ui.swipeage.css('transition-duration', "0s");
					
					_.defer(function() {
						root.ui.swipeage.css('transition', "");
					});

	    			root.app.state("menu-expanded", isExpanded);
					// root.app.swiper.disableTouch = true;

	    			addVelocity(ev.gesture.velocityX);
	    			clearTimeout(root.fastTimer);
					
					updateCurrentWidth();
					menuExpandCleanup();
	    		}
	    	});

	    	this.hammer.on("dragend", function(ev) {
	    		if (isValidDirection(ev)) {
	    			var isExpanded = menuCurrentTransform < menuStartTransform + ev.gesture.deltaX, // menuCurrentTransform < menuStartWidth + ev.gesture.deltaX,
		    			scaleTime = utl.scaleTime(menuCurrentTransform, menuWidthExpanded - menuWidth, 650),
		    			transTime = ((isExpanded ? 650 - scaleTime : scaleTime) / 1000);

		    		var velocity = _.reduce(velocities, function(a, b) { return a + b; }, 0) / velocities.length;
		    		velocity = (1 - (velocity > 1 ? 1 : velocity)) * 1.25;

					root.ui.swipeage.css('transition-duration', transTime * velocity + "s");

					_.defer(function() {
		    			root.app.state("menu-expanded", isExpanded);
						root.ui.swipeage.css('transform', ""); 
					});

					if (!isExpanded) {
						root.app.swiper.disableTouch = false;
						app.layout.content.$el.off('touchstart')
					} 

					root.fastTimer = setTimeout(function() {
						root.ui.swipeage.css('transition-duration', "");
						root.ui.swipeage.css('transform', "");
		    			root.app.state("menu-expanded", isExpanded);
					}, transTime * velocity * 1000);
				
	    		}
	    	});

	    	this.app.vein.on("menu:open", function() {
    			root.app.state("menu-expanded", true);
	    	});

	    	this.app.vein.on("menu:close", function() {
    			root.app.state("menu-expanded", false);
	    	});
        }
    });
}());