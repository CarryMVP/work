var honor = {};
honor.extend = function(o) {
    return o;
}
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var the_images;
var nowLoaded = 0;
var loadp1 = false;
var loadp2 = false;
var loaded = false;
var started_h5 = false;
var num = 0;
var objs = new Array();

function startLoad(img_array) {
    the_images = img_array;
    for (var i = 0; i < the_images.length; i++) {
        the_images[i] = page.basePicPath + the_images[i] + page.img_v;
        var img = new Image();
        img.src = the_images[i];
        objs.push(img);
    }
    jQuery.imgpreload(the_images, {
        each: function() {
            nowLoaded += 1;
            LoadEach(Math.ceil(nowLoaded / the_images.length * 100));
        },
        all: function() {
            loadp2 = true;
            checkLoaded();
        }
    });
}

$().ready(function(){
    loadp1 = true;
	checkLoaded();
})

function checkLoaded() {
    if (loadp1 && loadp2 && !loaded) {
        loaded = true;
        //$("#loading").css("display", "none");
        start_h5();
        //initAll();
        //unLoading();
        //$("#ploading").css("display","none");
        //initAll();
    }
}

function start_h5() {

    if (!started_h5) {
        started_h5 = true;
        starts();
        // page.startpage();
        // initAll();
    }

}



var page = honor.extend({
    obj: null,
    action: 'click',
    // width: parseInt(document.body.clientWidth),
    // height: parseInt(document.body.clientHeight),
    isandroid: /Android (\d+\.\d+)/.test(navigator.userAgent),
    ratio: parseInt(w / h * 100),
    btnfun: function() {},
    btnshow: false,
    isclick: false,
    viewScroll: null,
    startX: 0,
    startY: 0,
    tsel_num: 0,
    nowpart: -1,
    nowToppart: 0,
    parray: [''],
    parray2: [''],
    parrayout: [''],
    basePicPath: '',
    img_v: '',
    intime: function(f, t) {
        setTimeout(f, t);
    },
    invtime: function(f, t) {
        setInterval(f, t);
    },
    showbtn: function(f) {},
    closebtn: function() {},
    pageinit: function() {},
    startpage: function() {
        // $('#loading').css('display', 'none');
        // clearInterval(load.timer);
        // starts();
        //page.showTopPart(2);
    },
    showPartEnd: function() {

    },
    getPoint: function(e) {
        var touch;
        if (e.touches)
            touch = e.touches[0];
        if (!touch) {
            if (e.changedTouches && e.changedTouches.length > 0) {
                touch = e.changedTouches[0];
            } else if (e.originalEvent && e.originalEvent.touches) {
                touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            }
        }
        if (!touch) {
            touch = e;
        }
        return {
            x: touch.pageX,
            y: touch.pageY
        };
    },
    touchstart: function(e) {
        var p = page.getPoint(e);
        page.startX = p.x;
        page.startY = p.y;
    },
    touchmove: function(e) {
        var p = page.getPoint(e);
        if (p.y > page.startY) return;
        if (Math.abs(p.x - page.startX) > Math.abs(p.y - page.startY)) return;
        if (Math.abs(p.y - page.startY) > 50 && page.btnshow) {}
    },
    showPart: function(e, fadein, fadeout) {
        if (page.nowpart != -1) {
            $("#" + page.parray[page.nowpart]).removeClass(fadeout);
            $("#" + page.parray[page.nowpart]).removeClass(fadein1);
            // $("#" + page.parray[page.nowpart]).addClass(fadeout);
            // page.parrayout[page.nowpart] = fadeout;
            setTimeout(function() {



                page.nowpart = e;
                fadein1 = fadein;
                for (var i = 0; i < page.parray.length; i++) {
                    if (e == i) {
                        $("#" + page.parray[i]).css("display", "block");
                    }
                    // else {
                    //     $("#" + page.parray[i]).css("display", "none");
                    // }
                }

                $("#" + page.parray[page.nowpart]).removeClass(page.parrayout[page.nowpart]);
                $("#" + page.parray[page.nowpart]).removeClass(fadein);
                $("#" + page.parray[page.nowpart]).addClass(fadein);

                setTimeout(function() {

                    page.showPartEnd();
                    for (var i = 0; i < page.parray.length; i++) {
                        if (e != i) {
                            $("#" + page.parray[i]).css("display", "none");

                        }
                    }
                }, 400);
            }, 400);

        } else {
            page.nowpart = e;
            fadein1 = fadein;
            setTimeout(function() {
                for (var i = 0; i < page.parray.length; i++) {
                    if (e == i) {
                    $("#" + page.parray[page.nowpart]).addClass(fadein);
                     $("#" + page.parray[page.nowpart]).css("display","block");

                    // else {
                    //     $("#" + page.parray[i]).css("display", "none");
                    // }
                }
            }
                // $("#" + page.parray[page.nowpart]).removeClass(fadeout);
                // $("#" + page.parray[page.nowpart]).removeClass(fadein);

                setTimeout(function() {
                    for (var i = 0; i < page.parray.length; i++) {
                        if (e != i) {
                            $("#" + page.parray[i]).css("display", "none");
                        }
                    }

                }, 500);
            }, 400)

        }

    },
    showTopPart: function(e, fadein, fadeout) {
        if (e >= 0) {
            // page.nowToppart = e;
            for (var i = 0; i < page.parray2.length; i++) {
                if (e == i) {
                    $("#" + page.parray2[i]).css("display", "block");
                } else {
                    $("#" + page.parray2[i]).css("display", "none");
                }
            }
        } else {
            for (var i = 0; i < page.parray2.length; i++) {
                $("#" + page.parray2[i]).css("display", "none");
            }
        }
    },
    s_p: function(e, fadein, fadeout) {
        page.showPart(e, fadein, fadeout);
    },
    s_tp: function(e, fadein, fadeout) {
        page.showTopPart(e, fadein, fadeout);
    },
    init: function(array, array2, img_array, pic_path, img_v) {
        page.parray = array
        page.parray2 = array2
        page.basePicPath = pic_path;
        page.img_v = img_v;
        page.width = $(window).width();
        page.height = $(window).height();
        // page.ratio=page.width/page.height*100;
        startLoad(img_array);
    }
});