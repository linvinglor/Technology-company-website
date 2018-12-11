// 页面就绪函数入口
$ ( function () {

    var $box = $ ( ".box" );
    $box.height ( $ ( window ).height () - 86 );
    $box.width ( $ ( window ).width () );


    //右侧盒子
    $ ( ".rightBox" ).on ( "click", function () {
        $ ( ".leftBox" ).stop ( true, false ).animate ( { "width" : "15%" }, 500 );

        $ ( ".rightBox" ).stop ( true, false ).animate ( { "width" : "85%" }, 500, function () {

            $ ( ".schemeBox" ).stop ( true, false ).animate ( { left : 178 }, 500, function () {
                $ ( ".developBox" ).stop ( true, false ).animate ( { left : 325 }, 500, function () {
                    $ ( ".operationBox" ).stop ( true, false ).animate ( { left : 513 }, 500, function () {
                        $ ( ".marketBox" ).stop ( true, false ).animate ( { left : 683 }, 500, function () {
                            $ ( ".consultBox" ).stop ( true, false ).animate ( { left : 871 }, 500, function () {
                                // 鼠标移入事件
                                var $listBox = $ ( ".listBox" );
                                $listBox.on ( "mouseenter", function () {
                                    $ ( this ).stop ( true, false ).animate ( { top : "45%" }, 200);
                                } );
                                //鼠标移出事件
                                $listBox.on ( "mouseleave", function () {
                                    $ ( this ).stop ( true, false ).animate ( { top : "50%" }, 200 );
                                } );

                            } );
                        } );

                    } );
                } );
            } );
        } );


        $ ( ".arrowRight" ).stop ( true, false ).animate ( { left : 500, opacity : 0 }, 100 );
        $ ( ".arrowLeft" ).stop ( true, false ).animate ( { left : 100, opacity : 1 }, 100 );
        $ ( ".leftBoxInner>div" ).stop ( true, false ).animate ( { left : -2000, opacity : 0 }, 800 );


    } );
    //右侧盒子]

    //左侧盒子
    $ ( ".leftBox" ).on ( "click", function () {
        $ ( ".rightBox" ).stop ( true, false ).animate ( { "width" : "15%" }, 500 );
        $ ( ".leftBox" ).stop ( true, false ).animate ( { "width" : "85%" }, 500 );

        $ ( ".schemeBox" ).stop ( true, false ).animate ( { left : 2000 }, 500 );
        $ ( ".developBox" ).stop ( true, false ).animate ( { left : 2000 }, 500 );
        $ ( ".operationBox" ).stop ( true, false ).animate ( { left : 2000 }, 500 );
        $ ( ".marketBox" ).stop ( true, false ).animate ( { left : 2000 }, 500 );
        $ ( ".consultBox" ).stop ( true, false ).animate ( { left : 2000 }, 500 );

        $ ( "#shouhou" ).stop ( true, false ).animate ( { left : 780, opacity : 1 }, 800 );
        $ ( "#jiaofu" ).stop ( true, false ).animate ( { left : 574, opacity : 1 }, 800 );
        $ ( "#shishi" ).stop ( true, false ).animate ( { left : 390, opacity : 1 }, 800 );
        $ ( "#jichu" ).stop ( true, false ).animate ( { left : 206, opacity : 1 }, 800 );
        $ ( "#goutong" ).stop ( true, false ).animate ( { left : 0, opacity : 1 }, 800 );

        $ ( ".arrowRight" ).stop ( true, false ).animate ( { left : 50, opacity : 1 }, 100 );
        $ ( ".arrowLeft" ).stop ( true, false ).animate ( { left : 1000, opacity : 0 }, 100 );

        $ ( ".listBox" ).off("mouseenter mouseleave")

    } );
    //左侧盒子]




} );
// 页面就绪函数入口]