this["Templates"] = this["Templates"] || {};

this["Templates"]["assets/templates/application.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"application\" class=\"application is-menu-expanded\">\n	<div id=\"menu\">\n		\n	</div>\n	<div id=\"content\" class=\"application-content\">\n		<div class=\"swipeage\">\n			<div class=\"swipeage-wrapper js-swipeage\">\n\n			</div>\n		</div>\n	</div>\n</div>";
  });

this["Templates"]["assets/templates/components/iconSelector.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li class=\"selector-item selector-item-icon\">\n	<a class=\"selector-link\" href=\"javascript:;\" data-sub=\"";
  if (stack1 = helpers.index) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.index); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n		<img src=\"dist/casestudies/";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.image); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ".png\" class=\"icon icon-72\" />\n	</a>\n</li>";
  return buffer;
  });

this["Templates"]["assets/templates/components/images.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <img src=\"dist/images/jpeg/";
  if (stack1 = helpers.path) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.path); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ".jpg\" />\n    ";
  return buffer;
  }

  buffer += "<div class=\"general-column general-3of5 portfolio-hero-image\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["Templates"]["assets/templates/components/revealPanel.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"reveal\">\n	<div class=\"reveal-cover\"></div>\n	<div class=\"reveal-content\"></div>\n</div>";
  });

this["Templates"]["assets/templates/components/selectorView.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"multi\">\n	<nav class=\"multi-selector\"><ul class=\"selector\"></ul></nav>\n	<section class=\"multi-frames\"><ul class=\"multi-frames-list\"></ul></section>\n</div>";
  });

this["Templates"]["assets/templates/components/textSelector.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li class=\"selector-item\">\n	<a class=\"selector-link\" href=\"javascript:;\" data-sub=\"";
  if (stack1 = helpers.index) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.index); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"multi-frame-item\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></a>\n</li>";
  return buffer;
  });

this["Templates"]["assets/templates/loading.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section>\n	Loading...\n</section>";
  });

this["Templates"]["assets/templates/menu.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"menu\"><div class=\"menu-wrapper\">\n	<div class=\"menu-header\"><a href=\"#/home\" class=\"js-menu-link\" data-menu=\"home\"><img class=\"face\" src=\"dist/images/face.png\" /></a></div>\n\n	<ul class=\"menu-nav\">\n\n		<li class=\"media\">\n			<a href=\"#/photos\" class=\"menu-link menu-control-alt js-menu-link\" data-menu=\"photos\">\n				<div class=\"media-preview\"><i class=\"icon icon-32 icon-photos\"></i></div>\n				<div class=\"media-content\">Photos</div>\n			</a>\n\n			<ul class=\"menu-subnav\">\n				<li><a class=\"menu-subnav-link delay-05\" href=\"#/photos/afterhours\"  image-length=\"9\" data-submenu=\"photos-afterhours\">After Hours</a></li>\n				\n				\n				<li><a class=\"menu-subnav-link delay-12\" href=\"#/photos/2013\"  image-length=\"3\" data-submenu=\"photos-2013\">2013</a></li>\n			</ul>\n		</li>\n\n\n		\n\n		<li class=\"media\">\n			<a href=\"#/furniture\" class=\"menu-link menu-control-alt js-menu-link\" data-menu=\"furniture\">\n				<div class=\"media-preview\"><i class=\"icon icon-32 icon-furniture\"></i></div>\n				<div class=\"media-content\">Furniture</div>\n			</a>\n\n			<ul class=\"menu-subnav\">\n				<li><a class=\"menu-subnav-link delay-05\" href=\"#/furniture/oscar\" image-length=\"3\"  data-submenu=\"furniture-oscar\">the Oscar</a></li>\n				<li><a class=\"menu-subnav-link delay-07\" href=\"#/furniture/typea\" image-length=\"4\"  data-submenu=\"furniture-typea\">the type-A</a></li>\n				<li><a class=\"menu-subnav-link delay-09\" href=\"#/furniture/bedsidelamp\" image-length=\"1\"  data-submenu=\"furniture-bedsidelamp\">Bedside Lamp</a></li>\n				<li><a class=\"menu-subnav-link delay-12\" href=\"#/furniture/keyhooks\" image-length=\"2\"  data-submenu=\"furniture-keyhooks\">Key Hooks</a></li>\n				<li><a class=\"menu-subnav-link delay-14\" href=\"#/furniture/simplecabinet\" image-length=\"1\"  data-submenu=\"furniture-simplecabinet\">Simple Cabinet</a></li>\n				<li><a class=\"menu-subnav-link delay-16\" href=\"#/furniture/coffeetable\" image-length=\"1\"  data-submenu=\"furniture-coffeetable\">Coffee Table</a></li>\n			</ul>\n		</li>\n		\n		<li class=\"media\">\n			<a href=\"#/music\" class=\"menu-link menu-control-alt js-menu-link\" data-menu=\"music\">\n				<div class=\"media-preview\"><i class=\"icon icon-32 icon-music\"></i></div>\n				<div class=\"media-content\">Music</div>\n			</a>\n\n			<ul class=\"menu-subnav\">\n				<li><a class=\"menu-subnav-link delay-05\" href=\"#/music/fjall\"  image-length=\"4\" data-submenu=\"music-fjall\">Fjall</a></li>\n				<li><a class=\"menu-subnav-link delay-07\" href=\"#/music/home\"  image-length=\"2\" data-submenu=\"music-home\">Home</a></li>\n				<li><a class=\"menu-subnav-link delay-09\" href=\"#/music/outcroppings\"  image-length=\"2\" data-submenu=\"music-outcroppings\">Outcroppings</a></li>\n				<li><a class=\"menu-subnav-link delay-12\" href=\"#/music/sanibel\"  image-length=\"2\" data-submenu=\"music-sanibel\">Sanibel</a></li>\n				<li><a class=\"menu-subnav-link delay-14\" href=\"#/music/senescence\"  image-length=\"2\" data-submenu=\"music-senescence\">Senescence</a></li>\n			</ul>\n		</li>\n		\n		<li class=\"media\">\n			<a href=\"#/contact\" class=\"menu-link js-menu-link\" data-menu=\"contact\">\n				<div class=\"media-preview\"><i class=\"icon icon-32 icon-contact\"></i></div>\n				<div class=\"media-content\">Contact</div>\n			</a>\n		</li>\n\n\n	</ul>\n	\n	<a href=\"javascript:;\" class=\"menu-control\"><i class=\"icon icon-32 icon-burger\"></i></a>\n</div></div>";
  return buffer;
  });

this["Templates"]["assets/templates/notFound.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section>\n	<h2>Not Found</h2>\n	<p>Page wasn't found.</p>\n</section>";
  });

this["Templates"]["assets/templates/page/code/atthecenter/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">CA At the Center</span>\n        </h1>\n\n        <p>Landing page for <a class=\"link\" href=\"http://ca.com\" target=\"_blank\">CA's</a>, \"CA At the Center\" campaign. \n        </p>\n\n        <p>Backbone.js app, css3 animations, require.js, and grunt.js on the development end.</p>\n\n        <p class=\"copy-small\">2013</p>\n\n        <ul class=\"linklist linklist-blue\">\n            <li class=\"linklist-item link-header\">\n                Live Site:\n            </li>\n            <li class=\"linklist-item linklist-cta\">\n                <a class=\"linklist-link\" href=\"http://www.ca.com/us/lpg/ca-at-the-center.aspx\" target=\"_blank\">ca.com/AtTheCenter</a>\n            </li>\n        </ul>\n    </div>\n\n</div>";
  });

this["Templates"]["assets/templates/page/code/cloudaxis/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">Cloud Axis</span>\n        </h1>\n\n        <p>Landing page for <a class=\"link\" href=\"http://polycom.com\" target=\"_blank\">Polycom's</a> Cloud Axis.\n        </p>\n\n        <p>Backbone.js app, css3 animations, and grunt.js on the development end.</p>\n\n        <p class=\"copy-small\">2013</p>\n\n        <ul class=\"linklist linklist-blue\">\n            <li class=\"linklist-item link-header\">\n                Live Link:\n            </li>\n            <li class=\"linklist-item linklist-cta\">\n                <a class=\"linklist-link\" href=\"http://www.polycom.com/content/dam/polycom/www/cloudaxis/index.html\" target=\"_blank\">polycom.com/cloudaxis</a>\n            </li>\n        </ul>\n    </div>\n\n</div>";
  });

this["Templates"]["assets/templates/page/code/defydistance/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">Defy Distance</span>\n        </h1>\n\n        <p>Landing page for <a class=\"link\" href=\"http://polycom.com\" target=\"_blank\">Polycom's</a> Defy Distance.\n        </p>\n\n        <p>Backbone.js app, css3 animations, and grunt.js on the development end.</p>\n\n        <p class=\"copy-small\">2013</p>\n\n        <ul class=\"linklist linklist-blue\">\n            <li class=\"linklist-item link-header\">\n                Live Link:\n            </li>\n            <li class=\"linklist-item linklist-cta\">\n                <a class=\"linklist-link\" href=\"http://www.polycom.com/content/dam/polycom/www/defydistance/index.html\" target=\"_blank\">polycom.com/defydistance</a>\n            </li>\n        </ul>\n    </div>\n\n</div>";
  });

this["Templates"]["assets/templates/page/code/jvst/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">JVST</span>\n        </h1>\n\n        <p>Portfolio site for San Francisco interactive agency, <a class=\"link\" href=\"http://jvst.us\" target=\"_blank\">JVST</a>.</p>\n\n        <p>Wordpress backend with Advanced Custom Fields, css3 hover animations, and custom javascript history plugin.\n        </p>\n        <p class=\"copy-small\">2012</p>\n\n\n        <ul class=\"linklist linklist-blue\">\n            <li class=\"linklist-item link-header\">\n                Live Site:\n            </li>\n            <li class=\"linklist-item linklist-cta\">\n                <a class=\"linklist-link\" href=\"http://jvst.us\" target=\"_blank\">JVST.us</a>\n            </li>\n        </ul>\n    </div>\n\n</div>";
  });

this["Templates"]["assets/templates/page/contact/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"general swipeage-item p-portfolio-landing\">\n	<div class=\"general-block general-padding content portfolio-hero-content\">\n		<h1 class=\"header-large\">\n			Hello, my name is Jared Smith (sometimes Smyth).\n		</h1>\n		<p>\n			I spent most of my life in Tallahassee, FL in the Lake Talquin forest, was homeschooled, and dropped out of college three times - I now live in El Cerrito, California and create beautiful, functional things… sometimes with javascript and css3, sometimes with modified reel-to-reel players, sometimes with cameras and film, and sometimes with wood and steel.  \n		</p>\n		<p>\n		I currently spend the lion's share of my time as a senior engineer at <a class=\"link\" href=\"http://johnmcneilstudio.com\" target=\"_blank\" >John McNeil Studio.</a>\n		</p>\n		<p>\n			Have a look around and if you think I can help you execute a piece of your next project get in touch at one of the links below.\n		</p>\n		<p>\n			<ul>\n				<li class=\"contact-links\"><span>Email:</span><a class=\"link\" target=\"_blank\" href=\"mailto:jared@jaredsmyth.info\" >jared@jaredsmyth.info</a></li>\n				<li class=\"contact-links\"> <span>LinkedIn:</span><a class=\"link\" target=\"_blank\" href=\"http://www.linkedin.com/in/jaredshuansmith\">/jaredshaunsmith</a> </li>\n				<li class=\"contact-links\"> <span>Flickr:</span><a class=\"link\" target=\"_blank\" href=\"http://flickr.com/jredsmyth\">/jredsmyth</a> </li>\n				<li class=\"contact-links\"> <span>Instagram:</span><a class=\"link\" target=\"_blank\" href=\"http://instagram.com/jared_smith\">@jared_smith</a> </li>\n				<li class=\"contact-links\"> <span>Github:</span><a class=\"link\" target=\"_blank\" href=\"https://github.com/jaredsmyth\">/jaredsmyth</a> </li>\n				<li class=\"contact-links\"><span>Soundcloud:</span><a class=\"link\" target=\"_blank\" href=\"https://soundcloud.com/jared-smyth\">/jared-smyth</a></li>\n				<li class=\"contact-links\"><span>Blog:</span><a class=\"link\" target=\"_blank\" href=\"http://uprlip.com/\">uprlip.com</a></li>\n			</ul>\n		</p>\n	</div>\n</div>";
  });

this["Templates"]["assets/templates/page/furniture/bedsidelamp/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            the <span class=\"header-bold\">bedside lamp</span>\n        </h1>\n\n        <p>Here is the <span class=\"header-bold\">bedside lamp</span> - A one-off production for my wife. Made from 1/4\" brass tubing and reclaimed hardware.\n        </p>\n\n        \n    </div>\n    \n</div>";
  return buffer;
  });

this["Templates"]["assets/templates/page/furniture/coffeetable/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            the <span class=\"header-bold\">coffee table</span>\n        </h1>\n\n        <p>Here is the <span class=\"header-bold\">coffee table</span> - You've seen it before, you'll see it again... it's a chunk of wood on hairpin legs... except I bent and welded these hairpins myself. MCM y'all - (psst. for the unhip, that's mid centruy modern, not man candy monday)\n        </p>\n\n        \n    </div>\n    \n</div>";
  return buffer;
  });

this["Templates"]["assets/templates/page/furniture/keyhooks/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            the <span class=\"header-bold\">key hooks</span>\n        </h1>\n\n        <p>Here are the <span class=\"header-bold\">key hooks</span> - No visible screws, solid piece of bent 5/16th\" cold rolled steel.\n        </p>\n\n        \n    </div>\n    \n</div>";
  return buffer;
  });

this["Templates"]["assets/templates/page/furniture/landing/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 portfolio-content general-padding portfolio-hero-content\">\n        <h1>\n            Furniture\n        </h1>\n    </div>\n</div>";
  });

this["Templates"]["assets/templates/page/furniture/oscar/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            the <span class=\"header-bold\">Oscar</span>\n        </h1>\n\n        <p>The idea for this piece came to me at about 5:30am one morning as I was sitting on the floor lacing up my boots for work, shoes around me on the floor... why not combine shoe storage with a bench to sit on?  \n        </p>\n        <p>Here is the <span class=\"header-bold\">Oscar</span> - A wall-mounted bench, made from reclaimed wood, custom welded 45º supports, and a suspended 10\" deep, bent and welded rack made from 5/8\" steel rod.\n        </p>\n\n        \n    </div>\n    \n</div>";
  return buffer;
  });

this["Templates"]["assets/templates/page/furniture/simplecabinet/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            the <span class=\"header-bold\">simple cabinet</span>\n        </h1>\n\n        <p>This piece served two purposes: an excuse to use my new router table, and a place to hide my deodorant.\n        </p>\n        <p>Here is the <span class=\"header-bold\">simple cabinet</span> - Pine boards, 45º glued joints, nothing special here... just a simple cabinet.\n        </p>\n\n        \n    </div>\n    \n</div>";
  return buffer;
  });

this["Templates"]["assets/templates/page/furniture/typea/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            the <span class=\"header-bold\">type-A</span>\n        </h1>\n\n        <p>Here is the <span class=\"header-bold\">type-A</span> - A modular shelving unit with adjustable height shelves held in place by tapped set screws.  We needed something in that corner.\n        </p>\n\n        \n    </div>\n    \n</div>";
  return buffer;
  });

this["Templates"]["assets/templates/page/home/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"general swipeage-item p-portfolio-landing\">\n	<div class=\"general-block general-padding content portfolio-hero-content\">\n		<h1 class=\"header-large\">\n			Hello, my name is Jared Smith (sometimes Smyth).\n		</h1>\n		<p>\n			I spent most of my life in Tallahassee, FL in the Lake Talquin forest, was homeschooled, and dropped out of college three times - I now live in El Cerrito, California and create beautiful, functional things… sometimes with javascript and css3, sometimes with modified reel-to-reel players, sometimes with cameras and film, and sometimes with wood and steel.  \n		</p>\n		<p>\n		I currently spend the lion's share of my time as a senior engineer at <a class=\"link\" href=\"http://johnmcneilstudio.com\" target=\"_blank\" >John McNeil Studio.</a>\n		</p>\n		<p>\n			Have a look around and if you think I can help you execute a piece of your next project get in touch <a class=\"link\" href=\"#/contact\">here</a>.\n		</p>\n	</div>\n</div>";
  });

this["Templates"]["assets/templates/page/music/fjall/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">Fjall</span>\n        </h1>\n\n        <p>Limited edition 12\" white vinyl released by Own Records.</p>\n        <p>Fjall, meaning “mountain” in Icelandic, provides a stripped down departure from my previous albums. Whether it’s the melodic rapping of a flagpole in front of Hallgrímskirkja church, the hollow clatter of a loose street-tile along Bergstaðastræti, or even the warm, comforting sound of coffee brewing from within a flat in Reykjavík, Fjall finds the music in the micro and the mundane. Fjall explores the fear that disables enjoyment of beautiful moments, the fear of repeating mistakes, the fear of what a new path will bring.</p>\n\n        <p>\n        <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/85350554&amp;color=d6d6d6&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true\"></iframe>\n        </p>\n\n        <ul class=\"linklist linklist-blue\">\n            <li class=\"linklist-item link-header\">\n                Links:\n            </li>\n            <li class=\"linklist-item\"><a class=\"linklist-link\" href=\"https://ownrecords.bandcamp.com/album/fjall\" target=\"_blank\">Listen / Purchase</a></li>\n        </ul>\n    </div>\n</div>";
  });

this["Templates"]["assets/templates/page/music/home/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">Home</span>\n        </h1>\n\n        <p>A long-distance collaborative album with <a href=\"https://soundcloud.com/darrenharper\" target=\"_blank\" class=\"link\">Darren Harper</a></p>\n\n        <p>\n        <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/45601665&amp;color=d6d6d6&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true\"></iframe>\n        </p>\n\n        <ul class=\"linklist linklist-blue\">\n            <li class=\"linklist-item link-header\">\n                Links:\n            </li>\n            <li class=\"linklist-item\"><a class=\"linklist-link\" href=\"http://flamingpines.com/home.html\" target=\"_blank\">Listen / Purchase</a></li>\n        </ul>\n    </div>\n</div>";
  });

this["Templates"]["assets/templates/page/music/landing/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 portfolio-content general-padding portfolio-hero-content\">\n        <h1>\n            Music\n        </h1>\n    </div>\n</div>";
  });

this["Templates"]["assets/templates/page/music/outcroppings/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">Outcroppings</span>\n        </h1>\n        <p>Limited edition of cassettes released on Sunshine Ltd. by and with my good friend, Josh Mason.</p>\n\n        <p>What started as an after-show discussion about the use of electronics in live environments, ended in a set of recordings made in November, 2011 without the use of digital devices, post-processing or effects. Recorded to 1/4″ tape and dubbed on Nakamichi decks by Josh Mason.</p>\n\n        <ul class=\"linklist linklist-blue\">\n            <li class=\"linklist-item link-header\">\n                Links:\n            </li>\n            <li class=\"linklist-item\"><a class=\"linklist-link\" href=\"http://sunshineltd.info/?sunshine_product=mason-smyth-outcroppings\" target=\"_blank\">Listen / <strike>Sold out</strike></a></li>\n        </ul>\n    </div>\n</div>";
  });

this["Templates"]["assets/templates/page/music/sanibel/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">Sanibel</span>\n        </h1>\n\n        <p>Recorded on Sanibel Island, Florida &mdash; Summer 2011 to 4-track cassette. Photos shot with iPhone 4 and hipstamatic app.</p>\n\n        <p>\n        <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/32963992&amp;color=d6d6d6&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true\"></iframe>\n        </p>\n        \n        <ul class=\"linklist linklist-blue\">\n            <li class=\"linklist-item link-header\">\n                Links:\n            </li>\n            <li class=\"linklist-item\"><a class=\"linklist-link\" href=\"http://analogpath.com/main/sanibel/\" target=\"_blank\">Listen / Purchase</a></li>\n        </ul>\n    </div>\n</div>";
  });

this["Templates"]["assets/templates/page/music/senescence/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">Senescence</span>\n        </h1>\n\n        <p>My first release on a label - recorded in Tallahassee, FL to 1/2\" tape on an Otari deck.</p>\n\n        <p>Explores the life cycle of all things through the life cycle of texture and tone... building in and decaying before the listener has had a chance to fully connect with the sound.</p>\n\n        <p>\n        <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/21206277&amp;color=d6d6d6&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true\"></iframe>\n        </p>\n\n        <ul class=\"linklist linklist-blue\">\n            <li class=\"linklist-item link-header\">\n                Links:\n            </li>\n            <li class=\"linklist-item\"><a class=\"linklist-link\" href=\"http://sunshineltd.info/?sunshine_product=smyth-senescence\" target=\"_blank\">Listen / <strike>Sold out</strike></a></li>\n        </ul>\n    </div>\n</div>";
  });

this["Templates"]["assets/templates/page/photos/2013/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">I told you things were about to get weird</span>\n        </h1>\n\n        <p>a note to you (excerpt from the book)\n\nin 2013 i set out to take a series of photos each day – a minimum of three photos a day.\nthese photos were shot, edited, and published to my blog by the end of each day.\nthe following photos were all shot in 2013, some published to the blog, but many more never published anywhere before.\n\nincluded you will find photos from oakland, san francisco, el cerrito, berkeley, and monte rio / russian river, california. photos from portland, oregon, austin, texas, tallahassee, florida, and sanibel island, florida.\n        </p>\n\n        <ul class=\"linklist linklist-blue\">\n            <li class=\"linklist-item link-header\">\n                Links:\n            </li>\n            <li class=\"linklist-item\">\n                <a class=\"linklist-link linklist-cta\" href=\"http://www.blurb.com/b/4979381-i-told-you-things-were-about-to-get-weird\" target=\"_blank\">Purchase Book</a>\n            </li>\n            <li class=\"linklist-item linklist-cta\">\n                <a class=\"linklist-link linklist-cta\" href=\"http://uprlip.com\" target=\"_blank\">View 2013 Blog</a>\n            </li>\n        </ul>\n    </div>\n    \n</div>";
  });

this["Templates"]["assets/templates/page/photos/afterhours/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">After Hours</span>\n        </h1>\n\n        <p>On-going series of long exposures of found suburban scenes shot on medium format film primarily around Northern California.\n        </p>\n    </div>\n    \n</div>";
  });

this["Templates"]["assets/templates/page/photos/extendedinteractions/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">Extended Interactions</span>\n        </h1>\n\n        <p>The idea for blah blah came from blah - do lah dee dah.\n        </p>\n        <p>Here is the <span class=\"header-bold\">bedside lamp</span> - A lorem blah blah.\n        </p>\n\n        \n    </div>\n    \n</div>";
  return buffer;
  });

this["Templates"]["assets/templates/page/photos/landing/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 portfolio-content general-padding portfolio-hero-content\">\n        <h1>\n            Photos\n        </h1>\n    </div>\n</div>";
  });

this["Templates"]["assets/templates/page/photos/secretsofthecommonplace/landing.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"p-portfolio-landing general content\">\n    <div class=\"general-column general-2of5 general-padding portfolio-content portfolio-hero-content\">\n        <h1>\n            <span class=\"header-bold\">Secrets of the Commonplace</span>\n        </h1>\n\n        <p>The idea for blah blah came from blah - do lah dee dah.\n        </p>\n        <p>Here is the <span class=\"header-bold\">bedside lamp</span> - A lorem blah blah.\n        </p>\n\n        \n    </div>\n    \n</div>";
  return buffer;
  });