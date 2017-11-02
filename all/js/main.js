var $lists = $('.body li');

$lists.each(function () {
    $(this).click(function () {
        $(this).children('.menu_box').slideToggle();
        $(this).toggleClass('active');
    });
});