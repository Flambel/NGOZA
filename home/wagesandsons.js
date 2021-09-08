jQuery(document).ready(function() {
  // Sticky HEADER
  jQuery(function() {
    var ih = jQuery(".inside-header");
    var mn = jQuery(".main-navigation");
    var stky = "fixed";
    var hdr = jQuery(".top-bar").height();
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > hdr) {
        ih.addClass(stky);
        mn.addClass(stky);
      } else {
        ih.removeClass(stky);
        mn.removeClass(stky);
      }
    });
  });

  jQuery("ul#mega-menu-primary").hover(
    function() {
      jQuery(".inside-header .site-logo a").css("z-index", "99997");
    },
    function() {
      jQuery(".inside-header .site-logo a").css("z-index", "99998");
    }
  );

  jQuery(function() {
    jQuery('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = jQuery(this.hash);
        target = target.length
          ? target
          : jQuery("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          jQuery("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });

  jQuery(function() {
    jQuery("body.single-post #comments h2").html("Comments");
    jQuery("body.single-post #respond .comment-reply-title h2").html(
      "Post a Reply"
    );
  });

  jQuery(function() {
    jQuery("a.staff-member-email").html("Email Me");
  });

  jQuery(function() {
    setTimeout(function(event) {
      jQuery("a.point").addClass("show");
    }, 1000);
  });
});
