
var main = {

    bigImgEl: null,
    numImgs: null,

    init: function () {
        // Window Scroll
        $(window).scroll(function () {

            var scrollPos = $(this).scrollTop();

            var system = { win: false, mac: false, xll: false };
            //check platform
            var p = navigator.platform;
            system.win = p.indexOf("Win") == 0;
            system.mac = p.indexOf("Mac") == 0;
            system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
            //platform type
            if (system.win || system.mac || system.xll) {
                if ($(window).scrollTop() > 70) {
                    $('.site-header').addClass('site-header-nav-scrolled');
                } else {
                    $('.site-header').removeClass('site-header-nav-scrolled');
                }
            } else {
                //if phone, remove navigator on the top
                if ($(window).scrollTop() > 40) {
                    $('.site-header').addClass('site-header-nav-scrolled-ph');
                } else {
                    $('.site-header').removeClass('site-header-nav-scrolled-ph');
                }
            }
        });

        // show the big header image
        main.initImgs();
    },


    initImgs: function () {
        // If the page was large images to randomly select from, choose an image
        if ($("#header-big-imgs").length > 0) {
            main.bigImgEl = $("#header-big-imgs");
            main.numImgs = main.bigImgEl.attr("data-num-img");

            // set an initial image
            var imgInfo = main.getImgInfo();
            var src = imgInfo.src;
            var desc = imgInfo.desc;
            main.setImg(src, desc);

            // For better UX, prefetch the next image so that it will already be loaded when we want to show it
            var getNextImg = function () {
                var imgInfo = main.getImgInfo();
                var src = imgInfo.src;
                var desc = imgInfo.desc;

                var prefetchImg = new Image();
                prefetchImg.src = src;
                // if I want to do something once the image is ready: `prefetchImg.onload = function(){}`

                setTimeout(function () {
                    var img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
                    $(".jumbotron.big-img").prepend(img);
                    setTimeout(function () { img.css("opacity", "1"); }, 50);

                    // after the animation of fading in the new image is done, prefetch the next one
                    //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                    setTimeout(function () {
                        main.setImg(src, desc);
                        img.remove();
                        getNextImg();
                    }, 1000);
                    //});
                }, 6000);
            };

            // If there are multiple images, cycle through them
            if (main.numImgs > 1) {
                getNextImg();
            }
        }
    },

    getImgInfo: function () {
        var randNum = Math.floor((Math.random() * main.numImgs) + 1);
        var src = main.bigImgEl.attr("data-img-src-" + randNum);
        var desc = main.bigImgEl.attr("data-img-desc-" + randNum);

        return {
            src: src,
            desc: desc
        }
    },

    setImg: function (src, desc) {
        $(".jumbotron.big-img").css("background-image", 'url(' + src + ')');
        if (typeof desc !== typeof undefined && desc !== false) {
            $(".img-desc").text(desc).show();
        } else {
            $(".img-desc").hide();
        }
    }
};

$(document).ready(function () {
    main.init();
});