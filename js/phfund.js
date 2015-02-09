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



})(window, window.document);