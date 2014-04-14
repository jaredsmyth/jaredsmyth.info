var utl = utilities = (function() {
	return {
		scaleTime: function(input, max, time) {
			return (time / max) * input;
		}
	}
})();