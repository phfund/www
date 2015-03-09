/**
 * Created by cgx on 2015/2/6.
 */

(function (window, document, undefined) {

    /*
     * 头部搜索
     * */

    $('.h_search').bind('click', function () {
        $('.h_search_box').addClass('active');
        $('.h_search_box .h_input').focus();

        return !1;
    });

    //fixme 测试用
    $('.h_search_box .h_input').bind('keyup', function () {

        $('.h_search_box .h_drop_menu').show();

    });

    /*
     * 首页 基金tab 置顶
     * */

    $(window).bind('scroll', function () {
        var tab_top = $('.c_fund_list .c_top'), //60
            table_head = $('.c_fund_list .c_fd_th'), //41
            table = $('.c_fd_table'),
            table_body = $('.c_fd_body'),
            list = $('.c_fund_list');

        if (list.length == 0) {
            return !1;
        }

        var list_offset = list.offset(),
            list_offset_top = list_offset.top,
            list_offset_left = list_offset.left,
            last_item = $('.c_fd_table .c_ul:last-child'),
            last_item_offset = last_item.offset(),
            last_item_offset_top = last_item_offset.top
            ;

        scroll_top = $(window).scrollTop();

        console.log(last_item)
        last_item.addClass('aaaa')

        if (scroll_top > list_offset_top) {

            list.addClass('active');
            tab_top.css('left', list_offset_left + 1);
            table_head.css('left', list_offset_left + 1);
        } else {
            list.removeClass('active');
        }

        if (last_item_offset_top <= scroll_top) {
            list.removeClass('active');
        }

    })

    /*
     * 登陆框切换*/
    $('.h_switch_btn').bind('click', function () {
        if ($(this).hasClass('active')) {
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
     * 首页 左侧tab
     * */

    $('.c_grid_menu a').hover(function () {

        if (!$(this).hasClass('active')) {

            $('.c_grid_menu a').removeClass('active');
            $(this).addClass('active');

            var idx;

            idx = $(this).closest('li').index();
            $('.c_grid_900').hide();
            $($('.c_grid_900').get(idx)).show();

        }

        return !1;
    });

    /*
     * footer 二维码tab
     * */
    $('.f_qr_tab_top .f_item').click(function () {

        if (!$(this).hasClass('active')) {

            $('.f_qr_tab_top .f_item').removeClass('active');
            $(this).addClass('active');

            var idx;

            idx = $(this).index();
            $('.f_qr_tab_content').hide();
            $($('.f_qr_tab_content').get(idx)).show();

        }

        return !1;
    });

    /*
     * 关于 左侧菜单
     * */

    $('.c_page_menu_ul li').click(function () {
        $(this).toggleClass('active');
    });

    /*
     * 联系方式 收起展开
     * */

    $('.c_expender .c_ico').click(function () {
        $(this).closest('.c_item').toggleClass('active');
        console.log(111)
    });

    /**
     * 右侧的banner
     * **/
    $(window).scroll(function () {
        var _top = $(window).scrollTop(),
            _width = $(window).width(),
            _right = 0,
            _banner = $('.l_right_banner'),
            _time = 200;
        if (_width > 1200) {
            _right = (_width - 1200) / 2 - 55;
        }
        _banner.css('right', _right + 'px');
        //console.log(_top < 500)
        if (_top < 590) {
            _banner.stop().animate({'top': (590 - _top) + 'px'}, _time);
        } else {
            _banner.stop().animate({'top': '10px'}, _time);
        }

    });

    /**
     * 返回顶部
     * **/
    $('.l_right_banner').on('click', '.l_icon_box', function () {
        if ($(this).index() == 3) {
            $(window).scrollTop(0);
        }
    });
})(window, window.document);
