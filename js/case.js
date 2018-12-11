$ ( function () {
    //主体部分效果开始
    $ ( "#mainList>li" ).on ( "mouseenter", function () {
        //自定义动画  animate(参数1,参数2,参数3,参数3);
        //参数1: 必选  是一个对象, 代表要执行的动画属性.
        //参数2: 动画执行的时长  可选
        //参数3: 缓动还是匀速.   可选  可以选两个字符串值任何一个  linear(匀速)  swing(缓动)  不写默认是缓动.
        //参数4: 动画执行完毕后的回调函数

        $ ( this ).find ( ".up_over" ).stop ( true, false ).animate ( { top : 0 }, 300, "swing" );
        $ ( this ).find ( ".down_color" ).stop ( true, false ).animate ( { bottom : 0 }, 300, "swing" );
        $ ( this ).find ( ".name" ).css ( "color", "#fff" );
        $ ( this ).find ( ".industry" ).css ( "color", "#fff" );
    } );
    $ ( "#mainList>li" ).on ( "mouseleave", function () {
        $ ( this ).find ( ".up_over" ).stop ( true, false ).animate ( { top : - 180 }, 300, "swing" );
        $ ( this ).find ( ".down_color" ).stop ( true, false ).animate ( { bottom : - 70 }, 300, "swing" );
        $ ( this ).find ( ".name" ).css ( "color", "#000" );
        $ ( this ).find ( ".industry" ).css ( "color", "#999999" );
    } );

    //返回顶部
    $ ( "#goTop" ).on ( "click", function () {
        $ ( document ).scrollTop ( 0 );
    } );

    //第二导航
    $ ( window ).scroll ( function () {
        if ( $ ( window ).scrollTop () > 86 ) {
            $ ( "#header" ).slideUp ();
            $ ( "#headerTow" ).slideDown ();
        } else {
            $ ( "#header" ).slideDown ();
            $ ( "#headerTow" ).slideUp ();
        }
    } );

    $ ( "#navIcon" ).on ( "click", function () {
        $ ( this ).toggleClass ( "icon-mulu" );
        $ ( this ).toggleClass ( "icon-guanbijiantou" );
        $ ( this ).parent ().parent ().next ().slideToggle ();
    } );
    //第二导航;
    $ ( "img" ).lazyload ( {
        threshold : 200, effect : "fadeIn"
    } );


} );







