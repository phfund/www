/**
 * Created by cgx on 2015/2/6.
 */

(function (window, document, undefined) {


    /*
    * 登陆框切换*/
    $('.h_switch_btn').bind('click', function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $($(this).siblings('.h_login_inner')[0]).show();
            $($(this).siblings('.h_login_inner')[1]).hide();
        } else {
            $(this).addClass('active');
            $($(this).siblings('.h_login_inner')[0]).hide();
            $($(this).siblings('.h_login_inner')[1]).show();

        }
    })

    /*
    * 关于 左侧菜单
    * */

    $('.c_page_menu_ul li').click(function () {
        $(this).toggleClass('active');
    });


    /**
     * 右侧的banner
     * **/
    $(window).scroll(function(){
        var _top = $(window).scrollTop(),
            _width = $(window).width(),
            _right = 0,
            _banner = $('.l_right_banner'),
            _time = 200;
        if(_width > 1200){
            _right = (_width - 1200) /2 - 44;
        }
        _banner.css('right',_right + 'px');
        console.log(_top < 500)
        if(_top < 590){
            _banner.stop().animate({'top':(590 - _top) + 'px'},_time);
        }else{
            _banner.stop().animate({'top': '10px'},_time);
        }

    });


})(window, window.document);