$(function () {
    $ ( "#immersive_slider" ).immersive_slider ( {
        container : ".main",
        cssBlur: true,
        autoStart: 0  //将此更改为0或false来禁用自动启动
    } );


    var $sWrapper = $("#main");
    $sWrapper.height ( $ ( window ).height () - 86 );
    $sWrapper.width ( $ ( window ).width () );

});