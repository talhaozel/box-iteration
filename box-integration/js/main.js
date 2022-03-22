document.addEventListener('DOMContentLoaded', function (e) {

  var hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', function (e) {
    if (!document.body.classList.contains('mobile-menu-active')) {
      document.body.classList.add('mobile-menu-active');
    }
    else {
      document.body.classList.remove('mobile-menu-active');
    }
      
  });

  
  var play = document.querySelector('.video-image');

  play.addEventListener('click', function (e) {
  
   var img = document.querySelector('.video-image');
   var icon = document.querySelector('.play');

   img.remove();
   icon.remove();   
   var video = document.querySelector('.video-frame');

   video.src+="?autoplay=1";
  
   play.remove();
  
  });

  
});