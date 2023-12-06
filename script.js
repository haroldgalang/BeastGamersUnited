var loader = document.getElementById("preloader");
        window.addEventListener("load", function() {
            loader.style.display = "none";
            
})

$(document).ready(function(){
    $('.slider').slider({
        indicators: false,
        height: 450,
        duration: 500
    });

    $('.pushpin').pushpin();

    $('.target').pushpin({
        top: 0,
        bottom: 1000,
        offset: 0
    });

    $('.pushpin-demo-nav').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
          top: $target.offset().top,
          bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
      });

      $('.sidenav').sidenav();
      $('.scrollspy').scrollSpy();
      $('.tooltipped').tooltip();
      $('.fixed-action-btn').floatingActionButton();
      $('.parallax').parallax();

  });

