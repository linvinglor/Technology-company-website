// 页面就绪函数入口
$ ( function () {

    $ ( "#fullPage" ).fullpage ( {
        anchors : [ "page1", "page2", "page3", "page4", "page5", "page6", "page7", "page8", "page9", "page10" ],
        verticalCentered : ! 1,
        navigation : ! 0,
        navigationPosition : "left",
        navigationTooltips : [ "首 页", "服 务", "案 例", "皇 室 公 告", "关 于 皇 室", "联 系 方 式" ],
        scrollingSpeed : 500,



        // afterLoad动画
        afterLoad : function ( anchorLink, index ) {

            //主导航和副导航切换部分
            var $header = $ ( "#header" );
            var $headerTow = $ ( "#headerTow" );
            if ( index !== 1 ) {
                $header.slideUp ();
                $headerTow.slideDown ();
            } else {
                $header.slideDown ();
                $headerTow.slideUp ();
            }
            //主导航和副导航切换部分]

            //服务屏切入动画
            if ( index === 2 ) {
                $ ( ".section2ul>.li1" ).stop ( true, false ).animate ( { left : 0 }, 600 );
                $ ( ".section2ul>.li2" ).stop ( true, false ).animate ( { left : 300 }, 600 );
                $ ( ".section2ul>.li3" ).stop ( true, false ).animate ( { right : 300 }, 600 );
                $ ( ".section2ul>.li4" ).stop ( true, false ).animate ( { right : 0 }, 600 );
            }
            //服务屏切入动画]

            //案例屏切入动画
            if ( index === 3 ) {
                var $caseLi = $ ( ".section3 .caseList" ).find ( "li" );

                $ ( ".section3 .title" ).stop ( true, false ).animate ( { left : 0 }, 500 );
                $ ( ".section3 .more" ).stop ( true, false ).animate ( { left : 610 }, 500 );


                $caseLi.eq ( 0 ).animate ( {
                    top : 0, opacity : 1
                }, 300, function () {
                    $caseLi.eq ( 1 ).animate ( {
                        top : 0, opacity : 1
                    }, 300, function () {
                        $caseLi.eq ( 2 ).animate ( {
                            top : 0, opacity : 1
                        }, 300, function () {
                            $caseLi.eq ( 3 ).animate ( {
                                top : 0, opacity : 1
                            }, 300, function () {
                                $caseLi.eq ( 4 ).animate ( {
                                    top : 173, opacity : 1
                                }, 300, function () {
                                    $caseLi.eq ( 5 ).animate ( {
                                        top : 173, opacity : 1
                                    }, 300, function () {
                                        $caseLi.eq ( 6 ).animate ( {
                                            top : 173, opacity : 1
                                        }, 300, function () {
                                            $caseLi.eq ( 7 ).animate ( {
                                                top : 173, opacity : 1
                                            }, 300, function () {
                                            } );
                                        } );
                                    } );
                                } );
                            } );
                        } );
                    } );
                } );
            }
            //案例屏切入动画]

            //公告屏切入动画
            if ( index === 4 ) {
                $ ( ".section4Inner" ).children ( ".title" ).stop ( true, false ).animate ( { top : 159 }, 1000 );


                var $newListLi = $ ( ".newList" ).children ().children ( "li" );
                $newListLi.eq ( 0 ).stop ( true, false ).animate ( { left : 0, opacity : 1 }, 500, function () {
                    $ ( this ).stop ( true, false ).animate ( { top : 0 }, 500 );
                } );
                $newListLi.eq ( 1 ).animate ( { left : 258, opacity : 1 }, 1000, function () {
                    $ ( this ).stop ( true, false ).animate ( { top : 0 }, 500 );
                } );
                $newListLi.eq ( 2 ).stop ( true, false ).animate ( { left : 516, opacity : 1 }, 1500, function () {
                    $ ( this ).stop ( true, false ).animate ( { top : 0 }, 500 );
                } );
                $newListLi.eq ( 3 ).stop ( true, false ).animate ( { left : 774, opacity : 1 }, 2000, function () {
                    $ ( this ).stop ( true, false ).animate ( { top : 0 }, 500, function () {


                        $newListLi.on ( "mouseenter", function () {
                            $ ( this ).find ( ".dlist" ).stop ( true, false ).animate ( { top : 0 }, 500 );
                        } );
                        $newListLi.on ( "mouseleave", function () {
                            $ ( this ).find ( ".dlist" ).stop ( true, false ).animate ( { top : 250 }, 500 );
                        } );

                    } );
                } );


            }
            //公告屏切入动画]


            //关于皇室屏切入动画
            if ( index === 5 ) {
                $ ( ".section5 .line" ).stop ( true, false ).animate ( {
                    width : 400
                }, 1000 );
                $ ( ".section5 .img1" ).stop ( true, false ).animate ( {
                    left : 35
                }, 900 );
                $ ( ".section5 .img2" ).stop ( true, false ).animate ( {
                    left : 0
                }, 900 );
                $ ( ".section5 .img3" ).css ( "transform", "scale(3.3,3.3)" );
                $ ( ".section5 .img4" ).stop ( true, false ).animate ( {
                    left : 100
                }, 900 );
                $ ( ".section5 .middle" ).stop ( true, false ).animate ( {
                    top : 0
                }, 1000 );
                $ ( ".section5 .up" ).stop ( true, false ).animate ( {
                    top : 0
                }, 1100 );
                $ ( ".section5 .down" ).stop ( true, false ).animate ( {
                    top : 203
                }, 900 );
            }
            //关于皇室屏切入动画]

            //联系我们屏切入动画
            if ( index === 6 ) {

                var $roundMove = $ ( "#roundMove" );
                //动画
                $ ( "#askMove" ).animate ( { "left" : 498 }, 1000 );
                $roundMove.animate ( { "left" : 342 }, 1000 );
                //小圆
                $roundMove.fadeOut ( 5000 );
                $ ( ".loaderbox" ).fadeIn ( 8000 );
            }
            //联系我们屏切入动画]


            //数字滚动
            var $phoneNumberI = $ ( ".phoneNumber i" );
            $phoneNumberI.eq ( 0 ).numberRock ( {
                lastNumber : 852, duration : 2000, easing : "swing"
            } );

            $phoneNumberI.eq ( 1 ).numberRock ( {
                lastNumber : 3499, duration : 2000, easing : "swing"
            } );

            $phoneNumberI.eq ( 2 ).numberRock ( {
                lastNumber : 1687, duration : 2000, easing : "swing"
            } );


            $phoneNumberI.eq ( 3 ).numberRock ( {
                lastNumber : 335, duration : 2000, easing : "swing"
            } );

            $phoneNumberI.eq ( 4 ).numberRock ( {
                lastNumber : 6444, duration : 2000, easing : "swing"
            } );

            $phoneNumberI.eq ( 5 ).numberRock ( {
                lastNumber : 3566, duration : 2000, easing : "swing"
            } );

        }, // afterLoad动画]


        // onLeave动画
        onLeave : function ( index ) {
            //服务屏切出动画
            if ( index === 2 ) {
                $ ( ".section2ul>.li1" ).stop ( true, false ).animate ( { left : - 300 }, 600 );
                $ ( ".section2ul>.li2" ).stop ( true, false ).animate ( { left : 100 }, 600 );
                $ ( ".section2ul>.li3" ).stop ( true, false ).animate ( { right : 100 }, 600 );
                $ ( ".section2ul>.li4" ).stop ( true, false ).animate ( { right : - 300 }, 600 );
            }
            //服务屏切出动画]

            //案例屏移出动画
            if ( index === 3 ) {
                var $caseLiLeave = $ ( ".section3 .caseList" ).find ( "li" );

                $ ( ".section3 .title" ).stop ( true, false ).animate ( { left : - 500 }, 500 );
                $ ( ".section3 .more" ).stop ( true, false ).animate ( { left : 910 }, 500 );

                $caseLiLeave.eq ( 7 ).stop ( false, false ).animate ( {
                    "top" : "253px", "opacity" : 0
                }, 300 );
                $caseLiLeave.eq ( 6 ).stop ( false, false ).animate ( {
                    "top" : "253px", "opacity" : 0
                }, 300 );
                $caseLiLeave.eq ( 5 ).stop ( false, false ).animate ( {
                    "top" : "253px", "opacity" : 0
                }, 300 );
                $caseLiLeave.eq ( 4 ).stop ( false, false ).animate ( {
                    "top" : "253px", "opacity" : 0
                }, 300 );
                $caseLiLeave.eq ( 3 ).stop ( false, false ).animate ( {
                    "top" : "80px", "opacity" : 0
                }, 300 );
                $caseLiLeave.eq ( 2 ).stop ( false, false ).animate ( {
                    "top" : "80px", "opacity" : 0
                }, 300 );
                $caseLiLeave.eq ( 1 ).stop ( false, false ).animate ( {
                    "top" : "80px", "opacity" : 0
                }, 300 );
                $caseLiLeave.eq ( 0 ).stop ( false, false ).animate ( {
                    "top" : "80px", "opacity" : 0
                }, 300 );
            }
            //案例屏移出动画]

            //公告屏切出动画
            if ( index === 4 ) {
                $ ( ".section4Inner" ).children ( ".title" ).stop ( true, false ).animate ( { top : 59 }, 1000 );


                var $newListLi = $ ( ".newList" ).children ().children ( "li" );
                $newListLi.eq ( 3 ).stop ( true, false ).animate ( { opacity : 0, top : 80 }, 300, function () {
                    $ ( this ).stop ( true, false ).animate ( { left : 2000 }, 1000 );
                } );
                $newListLi.eq ( 2 ).stop ( true, false ).animate ( { opacity : 0, top : 80 }, 350, function () {
                    $ ( this ).stop ( true, false ).animate ( { left : 2000 }, 1000 );
                } );
                $newListLi.eq ( 1 ).stop ( true, false ).animate ( { opacity : 0, top : 80 }, 400, function () {
                    $ ( this ).stop ( true, false ).animate ( { left : 2000 }, 1000 );
                } );
                $newListLi.eq ( 0 ).stop ( true, false ).animate ( { opacity : 0, top : 80 }, 450, function () {
                    $ ( this ).stop ( true, false ).animate ( { left : 2000 }, 1000 );
                } );





            }
            //公告屏切出动画]

            //关于皇室屏移出动画
            if ( index === 5 ) {
                $ ( ".section5 .line" ).stop ( true, false ).animate ( {
                    width : 0
                }, 1000 );
                $ ( ".section5 .img1" ).stop ( true, false ).animate ( {
                    left : - 40
                }, 900 );
                $ ( ".section5 .img2" ).stop ( true, false ).animate ( {
                    left : - 75
                }, 900 );
                $ ( ".section5 .img3" ).stop ( true, false ).css ( "transform", "scale(1,1)" );
                $ ( ".section5 .img4" ).animate ( {
                    left : 180
                }, 900 );
                $ ( ".section5 .middle" ).stop ( true, false ).animate ( {
                    top : 120
                }, 1000 );
                $ ( ".section5 .up" ).stop ( true, false ).animate ( {
                    top : - 200
                }, 1100 );
                $ ( ".section5 .down" ).stop ( true, false ).animate ( {
                    top : 50
                }, 900 );
            }

            //关于皇室屏移出动画]

            //联系我们屏移出动画
            if ( index === 6 ) {

                $ ( "#askMove" ).animate ( { "left" : 550 }, 500 );
                $ ( "#roundMove" ).animate ( { "left" : 300 }, 500, function () {
                    $ ( "#roundMove" ).fadeIn ( 500 );
                } );

                //小圆
                $ ( ".loaderbox" ).fadeOut ( 500 );
            }

            //联系我们屏移出动画]

        }
        // onLeave动画
    } );


    //副导航下拉菜单
    $ ( "#navIcon" ).on ( "click", function () {
        $ ( this ).toggleClass ( "icon-mulu" );
        $ ( this ).toggleClass ( "icon-guanbijiantou" );
        $ ( this ).parent ().parent ().next ().slideToggle ();
    } );
    //副导航下拉菜单]

    // 首屏banner
    var index = 0;
    var timeBn = null;
    timeBn = setInterval ( function () {
        nextPage ();
    }, 3000 );

    var $section1 = $ ( ".section1" );
    $section1.on ( "mouseenter", function () {
        clearInterval ( timeBn );

        var $arr = $ ( "#arr" );

        $arr.children ( "#left" ).stop ( true, false ).animate ( { left : 0 }, 500 );
        $arr.children ( "#right" ).stop ( true, false ).animate ( { right : 0 }, 500 );

    } );

    $section1.on ( "mouseleave", function () {
        timeBn = setInterval ( function () {
            nextPage ();
        }, 3000 );
        var $arr = $ ( "#arr" );
        $arr.children ( "#left" ).stop ( true, false ).animate ( { left : - 50 }, 500 );
        $arr.children ( "#right" ).stop ( true, false ).animate ( { right : - 50 }, 500 );

    } );
    var $arr = $ ( "#arr" );
    $arr.children ( "#right" ).on ( "click", function () {
        nextPage ();
    } );
    $arr.children ( "#left" ).on ( "click", function () {
        prePage ();
    } );

    function nextPage () {
        index ++;
        if ( index > 2 ) {
            index = 0;
        }
        var $section1WrapLi = $ ( ".section1Wrap>ul>li" );
        var $conYLi = $ ( ".conY>ul>li" );
        $section1WrapLi.eq ( index ).fadeIn ( 1000 ).siblings ( "li" ).fadeOut ( 1000 );
        switch ( index ) {
            case 0:
                $conYLi.eq ( index + 1 ).find ( "i" ).addClass ( "active" ).parent ().parent ().siblings ().find ( "i" ).removeClass ( "active" );
                break;
            case 1:
                $conYLi.eq ( index + 2 ).find ( "i" ).addClass ( "active" ).parent ().parent ().siblings ().find ( "i" ).removeClass ( "active" );
                break;
            case 2:
                $conYLi.eq ( index + 3 ).find ( "i" ).addClass ( "active" ).parent ().parent ().siblings ().find ( "i" ).removeClass ( "active" );
                break;
        }
        $section1WrapLi.eq ( index ).find ( "img" ).stop ( true, false ).animate ( { "top" : 130 }, 1000 ).parent ().parent ().siblings ().find ( "img" ).stop ( true, false ).animate ( { "top" : 80 }, 1000 );
    }

    function prePage () {
        index --;
        if ( index < 0 ) {
            index = 2;
        }
        var $section1WrapLi = $ ( ".section1Wrap>ul>li" );
        var $conYLi = $ ( ".conY>ul>li" );
        $section1WrapLi.eq ( index ).fadeIn ( 1000 ).siblings ( "li" ).fadeOut ( 1000 );
        switch ( index ) {
            case 0:
                $conYLi.eq ( index + 1 ).find ( "i" ).addClass ( "active" ).parent ().parent ().siblings ().find ( "i" ).removeClass ( "active" );
                break;
            case 1:
                $conYLi.eq ( index + 2 ).find ( "i" ).addClass ( "active" ).parent ().parent ().siblings ().find ( "i" ).removeClass ( "active" );
                break;
            case 2:
                $conYLi.eq ( index + 3 ).find ( "i" ).addClass ( "active" ).parent ().parent ().siblings ().find ( "i" ).removeClass ( "active" );
                break;
        }
        $section1WrapLi.eq ( index ).find ( "img" ).stop ( true, false ).animate ( { "top" : 130 }, 1000 ).parent ().parent ().siblings ().find ( "img" ).stop ( true, false ).animate ( { "top" : 80 }, 1000 );
    }

    // 首屏banner]
    // 服务屏
    var $section2ulLi = $ ( ".section2ul>li" );
    $section2ulLi.on ( "mouseenter", function () {
        $ ( this ).children ( ".Libg" ).stop ( true, false ).animate ( { "height" : "100%" }, 400, function () {
            $ ( this ).siblings ( ".Center" ).children ( ".icon" ).stop ( true, false ).animate ( { "background-position-y" : "-109px" }, 200 );
            $ ( this ).siblings ( ".Bottom" ).stop ( true, false ).animate ( { "bottom" : "0", "opacity" : 1 }, 200 );
        } );
    } );
    $section2ulLi.on ( "mouseleave", function () {
        $ ( this ).children ( ".Libg" ).stop ( true, false ).animate ( { "height" : "0" }, 400, function () {
            $ ( this ).siblings ( ".Center" ).children ( ".icon" ).stop ( true, false ).animate ( { "background-position-y" : "0" }, 200 );
            $ ( this ).siblings ( ".Bottom" ).stop ( true, false ).animate ( {
                "bottom" : "-168px", "opacity" : 0
            }, 200 );
        } );
    } );

    // 服务屏]

    //案例屏
    $ ( ".txt" ).on ( "mouseenter", function () {
        $ ( this ).children ( "#txtBorder" ).stop ( true, false ).animate ( {
            "width" : "70", "height" : "70", "opacity" : "0"
        }, 800, function () {
            $ ( this ).stop ( true, false ).animate ( {
                "width" : "30", "height" : "30", "opacity" : "0.1"
            }, 10, function () {
                $ ( this ).stop ( true, false ).animate ( { "width" : "48", "height" : "48", "opacity" : "1" }, 800 );
            } );
        } );
    } );
    //案例屏]

    //公告屏
    $ ( ".gao" ).on ( "mouseenter", function () {
        $ ( this ).children ( "#txtBorder2" ).stop ( true, false ).animate ( {
            "width" : "70", "height" : "70", "opacity" : "0"
        }, 800, function () {
            $ ( this ).stop ( true, false ).animate ( {
                "width" : "30", "height" : "30", "opacity" : "0.1"
            }, 10, function () {
                $ ( this ).stop ( true, false ).animate ( { "width" : "48", "height" : "48", "opacity" : "1" }, 800 );
            } );
        } );
    } );

    //公告屏]




    //联系页
    //数字滚动封装....................................................

    ( function ( $ ) {
        $.fn.numberRock = function ( options ) {
            var defaults = {
                lastNumber : 100, duration : 2000, easing : "swing"  //swing(默认 : 缓冲 : 慢快慢)  linear(匀速的)
            };
            var opts = $.extend ( {}, defaults, options );

            $ ( this ).animate ( {
                num : "numberRock" // width : 300,
                // height : 300,
            }, {
                duration : opts.duration, easing : opts.easing, complete : function () {
                }, step : function ( a, b ) {  //可以检测我们定时器的每一次变化
                    //console.log(a);
                    //console.log(b.pos);   //运动过程中的比例值(0~1)
                    $ ( this ).html ( parseInt ( b.pos * opts.lastNumber ) );
                }
            } );

        };

    } ) ( jQuery );

    //数字滚动封装结束....................................................



    //................................................................................................
    //时钟
    var hDiv = document.getElementById ( "h" );
    var mDiv = document.getElementById ( "m" );
    var sDiv = document.getElementById ( "s" );

    zouZi ();

//1.开启定时器
    setInterval ( function () {
        zouZi ();
    }, 10 );

    function zouZi () {
        //2.1 获取当前时间
        var date = new Date ();
        var h = date.getHours ();
        var m = date.getMinutes ();
        var s = date.getSeconds ();
        var ms = date.getMilliseconds ();
        //2.2 根据当前时间计算时分秒角度
        var sDeg = s * 6 + ms / 1000 * 6;
        var mDeg = ( m + s / 60 ) * 6;
        var hDeg = ( h + m / 60 + s / 3600 ) * 30;
        //2.3 将计算好的角度赋值给页面元素
        sDiv.style.transform = "rotate(" + sDeg + "deg)";
        mDiv.style.transform = "rotate(" + mDeg + "deg)";
        hDiv.style.transform = "rotate(" + hDeg + "deg)";
    }

    //时钟结束................................................
    //联系页]


    //右侧固定信息栏
    $ ( ".sidebarIfo" ).on ( "click", function () {
        $.fn.fullpage.moveTo ( 1 );

    } );
    //右侧固定信息栏]



} );
// 页面就绪函数入口]