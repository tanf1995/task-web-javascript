// var $tree_btn = $('.tree p');
var $tree = $('.tree');
var current_node = null;

var $add = $('.add input');
var $delete = $('.delete input');
var $search = $('.search input');
var sel = null;

ul_right_go();
sel = select();


// 选择元素
function select(e) {
    var $tree_btn = $('.tree p');

    $tree_btn.each(function () {
        $(this).on('click', function () {
            $(this).toggleClass('active');
            $(this).next('ul').slideToggle();
            current_node = $(this);
        });
    });
}


$add.eq(1).click(function () {
    var value = $add.eq(0).val();
    var node = $('<p></p>');
    node.text(value);
    node = $('<li></li>').append(node);
    if(current_node.next('ul').length == 0 ){
        current_node.parent().append("<ul></ul>")
    }
    current_node.next('ul').append(node);
    current_node.next('ul').slideDown();
    ul_right_go();
    // stop(sel);
});


//让ul右移
function ul_right_go() {
    var node = $tree;
    var distance = 0;

    while (1){
        node.css({marginLeft: distance});
        if(node.children('li').children('ul').length > 0){
            node = node.children('li').children('ul');
            distance += 30;
        }
        else {
            break;
        }
    }
}

//删除节点
$delete.click(function () {
    current_node.parent().html("");
    current_node.parent().remove();
    // select();
});

//搜索
$search.eq(1).click(function () {
    var value = $search.eq(0).val();
    var $p_list = $('.tree p');
    var is_find = false;

    if(value==""){
        return false;
    }

    $p_list.each(function () {
        if($(this).text()==value){
            $(this).addClass('active');
            $(this).next('ul').slideDown();

            var node = $(this).parent().parent();
            while (1){
                if(node.length > 0){
                    node.slideDown();
                    node.prev('p').addClass('active');
                    node = node.parent().parent();
                }
                else{
                    break;
                }
            }

            is_find = true;
            return false;
        }
    });

    if(!is_find){
        alert('未找到！');
    }
});


