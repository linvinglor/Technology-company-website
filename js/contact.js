// 页面就绪函数入口
$ ( function () {

    //第二导航
    $ ( window ).scroll ( function () {
        if ( $ ( window ).scrollTop () > 86 ) {
            $ ( "#header" ).slideUp();
            $ ( "#headerTow" ).slideDown();
        } else {
            $ ( "#header" ).slideDown();
            $ ( "#headerTow" ).slideUp();
        }
    } );

    $ ( "#navIcon" ).on ( "click", function () {
        $ ( this ).toggleClass ( "icon-mulu" );
        $ ( this ).toggleClass ( "icon-guanbijiantou" );
        $ ( this ).parent ().parent ().next ().slideToggle ();
    } );
    //第二导航;

    $(".main").slideDown().on("click",function () {
        $(this).slideUp(function () {
            $(".company ").on("click",function () {
                $(".main").slideDown();
            })
        });

    });



} );
// 页面就绪函数入口]