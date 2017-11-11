$(function () {
    var photo1 = 'images/1.jpg';
    var photo2 = 'images/2.jpg';
    var photo3 = 'images/3.jpg';
    var photo4 = 'images/4.jpg';
    var photo5 = 'images/5.jpg';
    var photo6 = 'images/6.jpg';
    var $main = $('.main');
    var $btn = $('.btns input');
    var $photos = $('.main img');
    var $show_pic = $('.show_pic');
    var photoAlbum = PhotoAlbum($main);

    $btn.eq(0).click(function () {
        photoAlbum.clear();
        photoAlbum.select_album(1, photo1);
        show_pic();
    });

    $btn.eq(1).click(function () {
        photoAlbum.clear();
        photoAlbum.select_album(2, photo1, photo2);
        show_pic();
    });

    $btn.eq(2).click(function () {
        photoAlbum.clear();
        photoAlbum.select_album(3, photo1, photo2, photo3);
        show_pic();
    });

    $btn.eq(3).click(function () {
        photoAlbum.clear();
        photoAlbum.select_album(4, photo1, photo2, photo3, photo4);
        show_pic();
    });

    $btn.eq(4).click(function () {
        photoAlbum.clear();
        photoAlbum.select_album(5, photo1, photo2, photo3, photo4, photo5);
        show_pic();
    });

    $btn.eq(5).click(function () {
        photoAlbum.clear();
        photoAlbum.select_album(6, photo1, photo2, photo3, photo4, photo5, photo6);
        show_pic();
    });

    $btn.eq(6).click(function () {
        photoAlbum.select_album(1, photo1);
        photoAlbum.select_album(2, photo1, photo2);
        photoAlbum.select_album(3, photo1, photo2, photo3);
        photoAlbum.select_album(4, photo1, photo2, photo3, photo4);
        photoAlbum.select_album(5, photo1, photo2, photo3, photo4, photo5);
        photoAlbum.select_album(6, photo1, photo2, photo3, photo4, photo5, photo6);
        show_pic();
    });

    function show_pic() {
        $photos = $('.main img');

        $photos.each(function () {
            $(this).click(function () {
                src = $(this).attr('src');
                $show_pic.css({
                    display: 'flex'
                });
                $show_pic.children('img').attr('src', src);
                $show_pic.children('img').slideDown();
            });
        });

        $show_pic.click(function () {
            $show_pic.css({
                display: 'none'
            });
            $show_pic.children('img').slideUp();
        });

        $show_pic.children('img').click(function () {
            return false;
        });
    }

    function PhotoAlbum(elem) {
        var p = new Object();

        p.main = elem;  //装相册的容器

        //清空容器
        p.clear = function () {
            this.main.html('');
        };

        //选择几张相片的相册
        p.select_album = function (photo_num, photo1, photo2, photo3, photo4, photo5, photo6) {
            var img1 = $('<img>');
            var img2 = $('<img>');
            var img3 = $('<img>');
            var img4 = $('<img>');
            var img5 = $('<img>');
            var img6 = $('<img>');
            var album = $('<div>');

            switch (photo_num){
                case 1:
                    img1.attr('src', photo1);
                    album.addClass('photo_album');
                    album.append(img1);
                    this.main.append(album);
                    break;

                case 2:
                    img1.attr('src', photo1);
                    img1.css({
                        clipPath: 'polygon(0 0, 0 100%, 33.333% 100%, 66.666% 0)',
                        position: 'absolute',
                        top: 0
                    });
                    img2.attr('src', photo2);
                    img2.css({
                        clipPath: 'polygon(66.666% 0, 33.333% 100%, 100% 100%, 100% 0)',
                        position: 'absolute',
                        top: 0
                    });
                    album.addClass('photo_album');
                    album.append(img1);
                    album.append(img2);
                    this.main.append(album);
                    break;

                case 3:
                    img1.attr('src', photo1);
                    img1.css({
                        clipPath: 'polygon(0 0, 66.666% 0, 66.666% 100%, 0 100%)',
                        position: 'absolute',
                        top: 0
                    });
                    img2.attr('src', photo2);
                    img2.css({
                        clipPath: 'polygon(66.666% 0, 100% 0, 100% 50%, 66.666% 50%)',
                        position: 'absolute',
                        top: 0
                    });
                    img3.attr('src', photo3);
                    img3.css({
                        clipPath: 'polygon(66.666% 50%, 100% 50%, 100% 100%, 66.666% 100%)',
                        position: 'absolute',
                        top: 0
                    });
                    album.addClass('photo_album');
                    album.append(img1);
                    album.append(img2);
                    album.append(img3);
                    this.main.append(album);
                    break;

                case 4:
                    img1.attr('src', photo1);
                    img1.css({
                        clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)',
                        position: 'absolute',
                        top: 0
                    });
                    img2.attr('src', photo2);
                    img2.css({
                        clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)',
                        position: 'absolute',
                        top: 0
                    });
                    img3.attr('src', photo3);
                    img3.css({
                        clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)',
                        position: 'absolute',
                        top: 0
                    });
                    img4.attr('src', photo4);
                    img4.css({
                        clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)',
                        position: 'absolute',
                        top: 0
                    });
                    album.addClass('photo_album');
                    album.append(img1);
                    album.append(img2);
                    album.append(img3);
                    album.append(img4);
                    this.main.append(album);
                    break;

                case 5:
                    img1.attr('src', photo1);
                    img1.css({
                        clipPath: 'polygon(0 0, 66.666% 0, 66.666% 66.666%, 0 66.666%)',
                        position: 'absolute',
                        top: 0
                    });
                    img2.attr('src', photo2);
                    img2.css({
                        clipPath: 'polygon(66.666% 0, 100% 0, 100% 50%, 66.666% 50%)',
                        position: 'absolute',
                        top: 0
                    });
                    img3.attr('src', photo3);
                    img3.css({
                        clipPath: 'polygon(66.666% 50%, 100% 50%, 100% 100%, 66.666% 100%)',
                        position: 'absolute',
                        top: 0
                    });
                    img4.attr('src', photo4);
                    img4.css({
                        clipPath: 'polygon(0 66.666%, 33.333% 66.666%, 33.333% 100%, 0 100%)',
                        position: 'absolute',
                        top: 0
                    });
                    img5.attr('src', photo5);
                    img5.css({
                        clipPath: 'polygon(33.333% 66.666%, 66.666% 66.666%, 66.666% 100%, 33.333% 100%)',
                        position: 'absolute',
                        top: 0
                    });
                    album.addClass('photo_album');
                    album.append(img1);
                    album.append(img2);
                    album.append(img3);
                    album.append(img4);
                    album.append(img5);
                    this.main.append(album);
                    break;

                case 6:
                    img1.attr('src', photo1);
                    img1.css({
                        clipPath: 'polygon(0 0, 66.666% 0, 66.666% 66.666%, 0 66.666%)',
                        position: 'absolute',
                        top: 0
                    });
                    img2.attr('src', photo2);
                    img2.css({
                        clipPath: 'polygon(66.666% 0, 100% 0, 100% 33.333%, 66.666% 33.333%)',
                        position: 'absolute',
                        top: 0
                    });
                    img3.attr('src', photo3);
                    img3.css({
                        clipPath: 'polygon(66.666% 33.333%, 100% 33.333%, 100% 66.666%, 66.666% 66.666%)',
                        position: 'absolute',
                        top: 0
                    });
                    img4.attr('src', photo4);
                    img4.css({
                        clipPath: 'polygon(0 66.666%, 33.333% 66.666%, 33.333% 100%, 0 100%)',
                        position: 'absolute',
                        top: 0
                    });
                    img5.attr('src', photo5);
                    img5.css({
                        clipPath: 'polygon(33.333% 66.666%, 66.666% 66.666%, 66.666% 100%, 33.333% 100%)',
                        position: 'absolute',
                        top: 0
                    });
                    img6.attr('src', photo6);
                    img6.css({
                        clipPath: 'polygon(66.666% 66.666%, 100% 66.666%, 100% 100%, 66.666% 100%)',
                        position: 'absolute',
                        top: 0
                    });
                    album.addClass('photo_album');
                    album.append(img1);
                    album.append(img2);
                    album.append(img3);
                    album.append(img4);
                    album.append(img5);
                    album.append(img6);
                    this.main.append(album);
                    break;
            }

        };

        return p;
    }
});

