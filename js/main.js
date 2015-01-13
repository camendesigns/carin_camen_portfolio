$(document).ready(function() {
    $.preloadImages = function () {
        for (var i = 0; i < arguments.length; i++) {
            $("img").attr("src", arguments[i]);
        }
    }

    $.preloadImages(

        /*index.html*/
        "../img/bcg/ccPort_bcg.jpg",
        "../img/logo/cc_portfolio-logo.png",

        /*Digital Art*/
        "../img/digital_art/broken.jpg",
        "../img/digital_art/cityscape.jpg",
        "../img/digital_art/dark_queen.jpg",
        "../img/digital_art/haunted_ship.jpg",
        "../img/digital_art/ltu_cover.jpg",
        "../img/digital_art/paradise.jpg",
        "../img/digital_art/release.jpg",
        "../img/digital_art/steamPunk.jpg",
        "../img/digital_art/theEdge.jpg",
        "../img/digital_art/through_the_flames.jpg",

        /*Drawing*/
        "../img/drawing/sketch01.jpg",
        "../img/drawing/sketch02.jpg",
        "../img/drawing/sketch03.jpg",
        "../img/drawing/sketch04.jpg",
        "../img/drawing/sketch05.jpg",
        "../img/drawing/sketch06.jpg",
        "../img/drawing/sketch07.jpg",
        "../img/drawing/sketch08.jpg",
        "../img/drawing/sketch09.jpg",
        "../img/drawing/sketch10.jpg",

        /*Fashion Design*/
        "../img/fashion_design/devinci.jpg",
        "../img/fashion_design/leaf_texture_set.jpg",
        "../img/fashion_design/round_texture_set.jpg",
        "../img/fashion_design/silver_texture_set.jpg",
        "../img/fashion_design/white.jpg",

        /*Painting*/
        "../img/painting/fall_morning.jpg",
        "../img/painting/possibilities.jpg",
        "../img/painting/spring_mountain.jpg",
        "../img/painting/tranquility.jpg",
        "../img/painting/winter_river.jpg",
        "../img/painting/within.jpg"
    );
})

$(document).ready(function() {
    $('div.ui-page').live('swipeleft', function(){
        var nextpage =
            $(this).next('div[data-role="page"]');
        if (nextpage.length > 0){
            $.mobile.changePage(nextpage, "slide", false, true);
        }
    });
    $('div.ui-page').live('swiperight', function(){
            var prevpage =
                $(this).prev('div[data-role="page"]');
            if (prevpage.length > 0) {
                $.mobile.changePage(prevpage, {
                    transition: "slide", reverse: true}, true, true);
            }
    });

  })




