window.onload = function () {
    var $main_box = $('.main');
    var photos = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg'];
    var fallWalter = FallWalter($main_box, 4);

    $main_box.css({width: $('body').width()});
    fallWalter.reset(photos);
    fallWalter.pushImg(photos);

    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        // console.log($(this).height());
        // console.log($(document).height());
        if($(this).scrollTop()>= $(document).height()-$(this).height()-10){
            fallWalter.pushImg(photos);
        }
    });
};

function FallWalter($main_box, col_num) {
    var f = new Object();

    f.main_box = $main_box;  //总容器
    f.img_box = [];  //存放每一列图片容器
    f.col_num = col_num;  //列数
    f.col_width = Math.floor((f.main_box.width()-15*(f.col_num+1))/f.col_num); //每列宽度
    f.col_height_li = [];

    //初始化最上层
    f.reset = function (photos) {
        for(var i=0;i<f.col_num;i++){
            var $img_box = $('<ul></ul>');

            f.col_height_li.push(0);
            f.insert_img($img_box, i, photos);
            $img_box.addClass('img_box');
            $img_box.css({width: f.col_width});
            f.main_box.append($img_box);
            f.img_box.push($img_box);
        }
    };

    //开始插入图片, 每次插入10张
    f.pushImg = function (photos) {
        var time = 0;
        var timer = setInterval(function () {
            var min_height = Math.min.apply(Math, f.col_height_li);
            var index = f.col_height_li.indexOf(min_height);
            f.insert_img(f.img_box[index], index, photos);
            time += 1;
            if(time==10){
                clearInterval(timer);
            }
        }, 200);
    };

    //插入图片
    f.insert_img = function (parent, i, photos) {
        var rand_num = Math.floor(Math.random()*photos.length);
        var $img_li = $('<li></li>');
        var $img = $('<img>');

        $img.attr('src', photos[rand_num]);
        $img_li.append($img);
        parent.append($img_li);
        $img.get(0).onload = function () {
            f.col_height_li[i] += this.height;
        };
    };

    return f;
}