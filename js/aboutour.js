// 页面就绪函数入口
$ ( function () {

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



    //需求:middleBox缓动动画实现
    //1.获取middleBox盒子的高
    var middleBoxHight = $ ( "#middleBox" ).offset ().top - 360;
    //console.log ( middleBoxHight )
    //2.屏幕的滚动事件

    $ ( window ).on ( "scroll", function () {
        //2.1时刻监视页面的scrollTop的值
        var scrollTopValue = $ ( this ).scrollTop ();
        // console.log ( scrollTopValue )
        if ( scrollTopValue > middleBoxHight ) {
            //执行动画
            $ ( "#middleBoxLeft" ).stop ( true, false ).animate ( { "left" : 100 }, 300, "swing" );
            $ ( "#middleBoxRight" ).stop ( true, false ).animate ( { "right" : 459 }, 300, "swing" );
        } else if ( scrollTopValue < middleBoxHight ) {
            $ ( "#middleBoxLeft" ).stop ( true, false ).animate ( { "left" : - 400 }, 300, "swing" );
            $ ( "#middleBoxRight" ).stop ( true, false ).animate ( { "right" : - 350 }, 300, "swing" );
        }
    } );
    //--------------------------------------------------------------
    //需求:footBox缓动动画实现
    //  //1.获取footBox盒子的高
    var footBox = $ ( "#footBox" ).offset ().top - 720;
    console.log ( footBox );
    //  //2.屏幕的滚动事件
    $ ( window ).on ( "scroll", function () {

        //      //2.1监视页面的scrollTop的值

        var scrollTopValue = $ ( this ).scrollTop ();
        console.log ( scrollTopValue );
        if ( scrollTopValue > footBox ) {
            //          //执行动画
            $ ( "#footLeft" ).stop ( true, false ).animate ( { "left" : 100 }, 300, "swing" );

            $ ( "#footRight" ).stop ( true, false ).animate ( { "right" : 250 }, 300, "swing" );
        } else if ( scrollTopValue < middleBoxHight ) {
            $ ( "#footLeft" ).stop ( true, false ).animate ( { "left" : - 542 }, 1000, "swing" );
            $ ( "#footRight" ).stop ( true, false ).animate ( { "right" : - 641 }, 1000, "swing" );
        }


    } );
    //--------------------------------------------------------------
    //需求:中间图片淡入淡出效果
    //淡入 fadeIn()实现
    $ ( "#rightBox" ).on ( "mouseenter", function () {
        $ ( "#rightBox>img" ).stop ( true, false ).fadeIn ( 1000 );
    } );


    //背景动画
    $ ( "#bgImg" ).css ( { transform : "scale(1.4)" } );

    //背景动画]


} );
// 页面就绪函数入口]