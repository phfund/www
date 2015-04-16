/**
 * Created by cgx on 2015/2/6.
 */

(function (window, document, undefined) {
    /********from coffee*************/
    var __super,
        __hasProp = {}.hasOwnProperty,
        __extends = function (child, parent) {
            for (var key in parent) {
                if (__hasProp.call(parent, key)) child[key] = parent[key];
            }
            if (typeof parent === 'object') return;
            function Ctor() {
                this.constructor = child;
            }

            child.Init = function (o) {
                this.init(o);
            };
            Ctor.prototype = parent.prototype;
            child.fn = child.Init.prototype = child.prototype = new Ctor();
            child.__super__ = parent.prototype;
            return child;
        };
    /************************/
    __super = (function () {
        function __super() {
        }

        __super.prototype.init = function (o) {
            this.init(o);
        };
        return __super;
    })();
    $.gui = {};

    $.gui.tabs_defaults = {
        container: null, //tab 最外层的 className
        top: null, //包裹 topElem 的 className
        topElem: 'a', //点击的元素 ,一定要有 href 属性, 对应切换容器的 id
        activeClass: 'Selected',// tabElem 选中的 className
        events: 'click', //切换事件, 默认点击
        callback: null // 切换回调
    };
    var tabs;
    tabs = (function (_super) {

        __extends(tabs, _super);
        function tabs(options) {
            var opts = $.extend({}, $.gui.tabs_defaults, options);
            return new tabs.Init(opts);
        }

        $.extend(tabs.fn, {
            init: function (options) {
                var top = $(options.top, options.container),
                    items = $(options.topElem, top),
                    contents = [];
                items.each(function (i, item) {
                    contents.push($(item).attr('href'));
                });

                this.items = items;
                this.contents = contents;
                this.options = options;
                this.bind();
            },
            bind: function () {
                var contents = this.contents,
                    items = this.items,
                    options = this.options,
                    callback = options.callback;
                this.items.bind(options.events, function (evt) {
                    var href = $(this).attr('href');

                    $.each(contents,function (i,item) {
                        if (item == href) {
                            $(item, options.container).show();
                        } else {
                            $(item, options.container).hide();
                        }
                    });

                    $.each(items, function (index, item) {
                        $(item).removeClass(options.activeClass);
                    })

                    $(this).addClass(options.activeClass).siblings();
                    if (!!callback) {
                        callback(href);
                    }
                    evt.stopPropagation();
                    evt.preventDefault();
                    return false;
                });
            },
            unbind: function () {
                this.items.unbind();
            }
        });

        return tabs;
    })(__super);

    /*
     function tabs(options){
     var opts =  $.extend({}, $.gui.tabs.defaults, options);
     return new tabs.init(opts);
     }
     tabs.init = function(options){
     this.init(options);
     };
     tabs.fn = tabs.init.prototype = tabs.prototype ;
     */
    $.gui.tabs = tabs;
})(window, window.document);

(function (window, document, undefined) {


    //fixme 测试用
    $('.h_search_box .h_input').bind('keyup', function () {

        $('.h_search_box .h_drop_menu').show();

    });

    /*
     * 头部搜索
     * */

    $('.h_search').bind('click', function () {
        $('.h_search_box').addClass('h_search_box_active');
        $('.h_search_box .h_input').focus();

        return !1;
    });

    /*
     * 首页 基金tab 置顶
     * */

    $(window).bind('scroll', function () {
        var tab_top = $('.c_fund_list .c_top'), //60
            table_head = $('.c_fund_list .c_fd_th'), //41
            table = $('.c_fd_table'),
            table_body = $('.c_fd_body'),
            last_item = $('.c_fd_table .c_ul:last-child'),
            list = $('.c_fund_list');

        if (list.length == 0 || last_item.length == 0) {
            return !1;
        }

        var list_offset = list.offset(),
            list_offset_top = list_offset.top,
            list_offset_left = list_offset.left,
            last_item_offset = last_item.offset(),
            last_item_offset_top = last_item_offset.top
            ;

        scroll_top = $(window).scrollTop();

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
       // console.log(111)
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
        if (_top < 100) {
            _banner.stop().animate({'top': (590 - _top) + 'px'}, _time);
        } else {
            var _st = $(window).scrollTop() + 100 + 'px';
            _banner.stop().animate({'top': _st}, _time);
        }

    });

    /**
     * 返回顶部
     * **/
    $('.l_right_banner .l_icon_box').bind('click', function () {
        if ($(this).index() == 3) {
            $(window).scrollTop(0);
        }
    });

    /**复选框**/
    $('.l_fund_check_grid span').click(function () {
        var _this = $(this);
        if (!_this.is('.l_check_label_check')) {
            _this.attr('class', 'l_check_label_check');
        } else {
            _this.attr('class', 'l_check_label');
        }
    });
    /*
     * 字号切换
     * */

    $('.c_text_size_switch .c_item').bind('click', function () {
        var _this = this,
            $this = $(this),
            index = $this.index(),
            $content = $('.c_content');

        if ($this.hasClass('acitve')) {
            return;
        }

        $this.siblings().removeClass('active');
        $this.addClass('active');

        switch (index) {
            case 0:

                $content.removeClass('small normal');
                $content.addClass('big');
                break;
            case 1:
                $content.removeClass('big small');
                $content.addClass('normal');
                break;
            case 2:
                $content.removeClass('big normal');
                $content.addClass('small');
                break;

        }
    });

    if ($.fn.jCarouselLite) {

        /*
         * 资讯详情 杂志切换
         * */

        $('.c_slider_box').hover(function () {
            $('.c_btn_next',this).show();
            $('.c_btn_prev',this).show();
        },function () {
            $('.c_btn_next',this).hide();
            $('.c_btn_prev',this).hide();
        })

         $(".c_sider_slider").jCarouselLite({
            btnNext: ".c_slider_box .c_btn_next",
            btnPrev: ".c_slider_box .c_btn_prev",
            speed: 500,
            visible: 1
        });

        /*
         * 11专业理财.html 团队切换
         * */
        $(".l_team_intro_cell").jCarouselLite({
            containerSelector: '.l_team_intro_cell_box',
            itemSelector: '.l_team_intro_cell_item',
            btnNext: ".l_team_intro_list .l_page_left",
            btnPrev: ".l_team_intro_list .l_page_right",
            speed: 500,
            visible: 1
        });

    }

    /*
     * tabs切换
     * */

    /*
     * 首页 基金 tabs
     * */

    $.gui.tabs({
        container: '.c_page', //tab 最外层的 selector
        top: '.c_tab', //包裹 topElem 的 selector
        topElem: 'a', //点击的元素 ,一定要有 href 属性, 对应切换容器的 id
        activeClass: 'active',// tabElem 选中的 className
        events: 'click', //切换事件, 默认点击
        callback: null // 切换回调
    });

    /*
     * 00客户中心_2_00_鹏博士问答_常见问题-热点问题_tabs切换_实例.html
     * 基金详情页
     * */

    $.gui.tabs({
        container: '.c_fund_list', //tab 最外层的 selector
        top: '.c_top', //包裹 topElem 的 selector
        topElem: 'a', //点击的元素 ,一定要有 href 属性, 对应切换容器的 id
        activeClass: 'active',// tabElem 选中的 className
        events: 'click', //切换事件, 默认点击
        callback: null // 切换回调
    });

    /*
     * 头部轮播图
     * */
    if ($.fn.responsiveSlides) {
        $("#slider").responsiveSlides({
            auto: !1,
            pager: !0,
            nav: !1,
            speed: 500,
            namespace: "slide"
        });
    }

    /*
     * 7 股票型
     *  走势图tab
     * */
    $.gui.tabs({
        container: '.c_fund_chart_wrap', //tab 最外层的 selector
        top: '.c_f_c_tab ', //包裹 topElem 的 selector
        topElem: 'a', //点击的元素 ,一定要有 href 属性, 对应切换容器的 id
        activeClass: 'active',// tabElem 选中的 className
        events: 'click', //切换事件, 默认点击
        callback: null // 切换回调
    });
 /*
     * 13 搜索
     *
     * */
    $.gui.tabs({
        container: '.c_search_body', //tab 最外层的 selector
        top: '.c_search_tab', //包裹 topElem 的 selector
        topElem: 'a', //点击的元素 ,一定要有 href 属性, 对应切换容器的 id
        activeClass: 'active',// tabElem 选中的 className
        events: 'click', //切换事件, 默认点击
        callback: null // 切换回调
    });

    $('.c_search_all').bind('click', function () {
        $('#search_1 ,#search_2 ,#search_3').show();
    });

    $('.h_sub_item').hover(function () {
            $('.h_sub_item_menu', this).css('visibility','visible');
        }, function () {
            $('.h_sub_item_menu', this).css('visibility','hidden');
        }
    );

    /**专业理财 开户流程,网上直销交易流程**/
    $('.l_flow_box .action_flow').bind('click',function(){
        var _index = $(this).index(),
            _cells = $(this).parents('.l_flow_box').children('.l_flow_box_dialog').children('.l_flow_dialog_cell');
        _cells.hide();
        _cells.eq(_index).show();
    });

    /**常见问题伸展**/
    $('.action_question .l_faq_question').bind('click',function(){
        $(this).closest('.l_faq_cell').toggleClass('active');
    });

})(window, window.document)
