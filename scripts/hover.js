
$(document).bind('mousemove.hoverTest', function() {
   $('div.wrap').addClass('hover-on');
});

$(document).on('touchstart', function(e) {
		$(document).unbind('mousemove.hoverTest');
  });
