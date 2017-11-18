$(function () {
    var $main_box = $('.main');
    var photos = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg'];

    var bowie = Bowie($main_box);
    bowie.reset(photos);

    //滚动条滑到底部时继续加载图片
    $(window).scroll(function () {
        if($(this).scrollTop()>= $(document).height()-$(this).height()-5){
            bowie.add_to(photos);
        }
    });
});

//木桶布局类
function Bowie(main_box) {
    var b = new Object();

    b.main_box = main_box;  //布局总容器
    b.main_width = $('body').width();
    b.current_row = null;  //当前行
    b.current_row_width = 0;  //当前行长度
    b.last_pic_width = 0;  //超过每行宽度的图片，放在下一行
    b.img_list = [];  //存放待渲染的图片

    //初始化页面
    b.reset = function (photos) {
        b.create_row();

        for(var i=0;i<30;i++){
            var rand_num = Math.floor(Math.random()*10);

            b.pushImg(photos[rand_num]);
        }
        console.log('--');
        b.render();
    };

    //向后追加
    b.add_to = function (photos) {
        // b.img_list = [];

        for(var j=0;j<30;j++){
            var rand_num = Math.floor(Math.random()*10);

            b.pushImg(photos[rand_num]);
        }
        console.log('--');
        b.render();
    };

    //渲染页面
    b.render = function () {
        var i = 0;
        var len = b.img_list.length;

        var timer = setInterval(function () {
            b.current_row_width += b.img_list[0].get(0).width*200/b.img_list[0].get(0).height;
            b.last_pic_width = b.img_list[0].get(0).width*200/b.img_list[0].get(0).height;

            if(b.current_row_width>b.main_width){
                b.adjustment();  // 调整上一行宽高
                b.create_row();
                b.current_row.append(b.img_list[0]);
                b.current_row_width = b.last_pic_width;
            }
            else {
                b.current_row.append(b.img_list[0]);
            }
            b.img_list.shift();

            i ++;
            if(i==len){
                clearInterval(timer);
            }

        }, 100)
    };

    //创建行容器
    b.create_row = function () {
        var $row_box = $('<div></div>');

        $row_box.addClass('img_box');
        b.main_box.append($row_box);
        b.current_row = $row_box;
        b.current_row_width = 0;
    };

    //创建图片
    b.pushImg = function (photo_src) {
        var $img = $('<img>');
        $img.attr('src', photo_src);

        b.img_list.push($img);
    };

    //调整每行宽高
    b.adjustment = function() {
        var new_height = 200*(b.main_width-20)/(b.current_row_width-b.last_pic_width);

        b.current_row.css({height: new_height});
    };

    return b;
}