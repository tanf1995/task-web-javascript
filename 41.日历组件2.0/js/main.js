$(function () {
    var current_time = new Date();
    var current_year = current_time.getFullYear(); //当前年份
    var current_month = current_time.getMonth();  //当前月份
    var current_day = current_time.getDate();  //当前号数
    var $calender = $('.calendar');
    var $td = $('.calendar .content tr:gt(0) td');
    var $select_year = $('#select_year');
    var $select_month = $('#select_month');
    var $date = $('#date');
    var $previous = $('.previous');
    var $next = $('.next');

    reset();

    //时间框获取焦点时显示日历
    $date.focus(function () {
        $calender.slideDown();
    });

    $('body').click(function () {
        $calender.slideUp();
    });

    $('.main').click(function () {
        return false;
    });

    //点击选中日期
    $td.each(function (i) {
        $(this).click(function () {
            current_day = $(this).text();
            current_year = $select_year.val();
            current_month = $select_month.val() - 1;

            if($(this).hasClass('disable')){
                if(i<7){
                    $select_month.find("option[value=" + String(current_month+1) + "]").attr("selected",false);
                    if(current_month>0){
                        current_month = current_month - 1;
                    }
                    else {
                        current_month = 11;
                        current_year -= 1;
                        $select_year.find("option[value=" + String(parseInt(current_year)+1) + "]").attr("selected",false);
                        $select_year.find("option[value=" + String(current_year) + "]").attr("selected",true);
                    }
                }
                else {
                    $select_month.find("option[value=" + String(current_month+1) + "]").attr("selected",false);
                    if(current_month<11){
                        current_month = current_month + 1;
                    }
                    else {
                        current_month = 0;
                        current_year = parseInt(current_year) + 1;
                        $select_year.find("option[value=" + String(parseInt(current_year)-1) + "]").attr("selected",false);
                        $select_year.find("option[value=" + String(current_year) + "]").attr("selected",true);
                    }
                }
            }
            $select_month.find("option[value=" + String(current_month+1) + "]").attr("selected",true);
            fill_data(current_day, current_year, current_month);
            show_select_date();
            $calender.slideUp();
            return false;
        });
    });

    //点击前一个月
    $previous.click(function () {
        $select_month.find("option[value=" + String(current_month+1) + "]").attr("selected",false);
        current_month -= 1;
        if(current_month<0){
            current_month = 11;
            current_year -= 1;
            $select_year.find("option[value=" + String(parseInt(current_year)+1) + "]").attr("selected",false);
            $select_year.find("option[value=" + String(current_year) + "]").attr("selected",true);
        }
        $select_month.find("option[value=" + String(current_month+1) + "]").attr("selected",true);
        fill_data(current_day, current_year, current_month);
        show_select_date();
    });

    //点击后一个月
    $next.click(function () {
        $select_month.find("option[value=" + String(current_month+1) + "]").attr("selected",false);
        current_month = parseInt(current_month) + 1;
        if(current_month>11){
            current_month = 0;
            current_year = parseInt(current_year) + 1;
            $select_year.find("option[value=" + String(parseInt(current_year)-1) + "]").attr("selected",false);
            $select_year.find("option[value=" + String(current_year) + "]").attr("selected",true);
        }
        $select_month.find("option[value=" + String(current_month+1) + "]").attr("selected",true);
        fill_data(current_day, current_year, current_month);
        show_select_date();
    });

    $select_year.change(function () {
        current_year = $(this).val();
        current_month = $select_month.val() - 1;

        fill_data(current_day, current_year, current_month);
        show_select_date();
    });

    $select_month.change(function () {
        current_year = $select_year.val();
        current_month = $(this).val() - 1;

        fill_data(current_day, current_year, current_month);
        show_select_date();
    });

    //重置日历至当前
    function reset() {
        show_select_date();
        fill_data(current_day, current_year, current_month);
        fill_option(1970, 2030);

        $select_month.find("option[value=" + String(current_month+1) + "]").attr("selected",true);
        $select_year.find("option[value=" + String(current_year) + "]").attr("selected",true);
    }

    //填充可选年月
    function fill_option(year_start, year_end) {
        for(var i=year_start;i<=year_end;i++){
            $select_year.append('<option value=' + i + '>' + i + '</option>');
        }
        for(var j=1;j<13;j++){
            $select_month.append('<option value=' + j + '>' + j + '</option>');
        }
    }

    //输出框展示选中时间
    function show_select_date() {
        var date = String(current_year) + '-' + String(current_month+1) + '-' + String(current_day);

        $date.val(date);
    }

    //当前几号， 当前年号， 当前月号
    function fill_data(current_day, current_year, current_month) {
        var current_month_first_day = new Date(current_year, current_month, 1);
        var first_day_week = current_month_first_day.getDay();  //当前月第一天是星期几
        var current_month_last_day = new Date(current_year, current_month+1, 0);
        var current_month_days = current_month_last_day.getDate();  //当前月天数
        var date_list = [];
        var pre_month = new Date(current_year, current_month, 0);
        var pre_month_days = pre_month.getDate();

        //填入上月末尾天数
        for(var j=0;j<first_day_week;j++){
            date_list.unshift(pre_month_days);
            pre_month_days -=1;
        }

        //填入当月号数
        for(var i=0;i<current_month_days;i++){
            date_list.push(i+1);
        }

        //填入下月号数
        var next_day = 1;
        while (1){
            if(date_list.length==42){
                break;
            }
            date_list.push(next_day);
            next_day += 1;
        }

        var is_find_current_day = false;
        $td.each(function (i) {
            $td.eq(i).text(date_list[i]).removeClass('disable').removeClass('current');
            if(i<first_day_week || i>first_day_week+current_month_days-1){
                $td.eq(i).addClass('disable').siblings();
            }

            if(date_list[i]==current_day && !is_find_current_day && !$td.eq(i).hasClass('disable')){
                $td.eq(i).addClass('current').siblings();
                is_find_current_day = true;
            }
        });
    }

});
