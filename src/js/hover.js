
$(document).bind('mousemove.hoverTest', function() {
   $('div.wrap').addClass('hover-on');
});

$(document).on('touchstart', function(e) {
		$(document).unbind('mousemove.hoverTest');
  });
  'use strict';
  var burger = document.getElementById('burger-button');
  burger.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.toggle('open');
      burger.classList.toggle('open');
  });
