// 页面就绪函数入口
$ ( function () {

    //1、第二导航
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


    //2、banner区 动画 start
    $(' #company ').fadeIn(2000);
    $(' #big ').slideDown(2000);
    $(' #silu ').fadeIn(1000);
    $(' #lineTop ').animate({
        left: 467,
    },2000);
    $(' #lineBottom ').animate({
        right: 467,
    },2000)
    //banner区 动画 end


    //3、center区 动画 start
    /*
    思路：设置定时器：让li里面txtBox里面的文字变成蓝色
         鼠标移入：清除定时器
     */

    var timeID=null;
    var index=0;
    //页面一加载自动开启定时器
    moveColor();
    //鼠标移入li
    $('.base-work-infor li').on('mouseenter',function () {
        clearInterval(timeID);
        index=$(this).index();
        $(this).find('.txt-box').css('color', getRandomColor()).parent().siblings().find('.txt-box').css('color', '#000');
        $(this).find('.base-work-img').css('margin-top',1).parent().parent().siblings().find('.base-work-img').css('margin-top',8);
    })
    //鼠标移出li
    $('.base-work-infor li').on('mouseleave',function () {
        moveColor();
    })

    //将颜色变换和图片移动的效果封装到一个函数
    function moveColor() {
        clearInterval(timeID);
        timeID=setInterval(function () {
            if(index==$('.txt-box').length){
                index=0;
            }
            $('.txt-box').eq(index).css('color', getRandomColor()).parent().siblings().find('.txt-box').css('color', '#000');
            $('.base-work-img').eq(index).css('margin-top',1).parent().parent().siblings().find('.base-work-img').css('margin-top',8);
            index++;
        },300)
    }
    //将随机颜色封装到一个函数里
    function getRandomColor() {
        /*0-255*/
        var r = Math.floor(256 * Math.random());
        var g = Math.floor(256 * Math.random());
        var b = Math.floor(256 * Math.random());
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    //center区 动画 end





} );
// 页面就绪函数入口]