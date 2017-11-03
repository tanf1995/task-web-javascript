window.onload = function () {
    //根节点
    var root = document.getElementsByClassName('root')[0];
    var btns = document.getElementsByTagName('input');
    var res = document.getElementsByClassName('search')[0].getElementsByTagName('p')[0];
    var nodes = document.getElementsByClassName('tree')[0].getElementsByTagName('div');
    var array = [];
    var delete_index = -1;
    var timer = null;

    // console.log(root.children);

    preOrder(root);
    //先序遍历, 将节点放入数组中
    function preOrder(node) {
        if(node){
            array.push(node);
            for(var i=0;i<node.children.length;i++){
                preOrder(node.children[i]);
            }
        }
    }


    //后序遍历
    function postOrder(node) {
        if (node) {
            for (var i = 0; i < node.children.length; i++) {
                postOrder(node.children[i]);
            }
            array.push(node);
        }
    }

    //广度遍历
    function breadthOrder(node) {
        var queue = [];
        queue.push(node);

        while (queue.length > 0){
            var now_node = queue.shift();
            array.push(now_node);

            for(var i=0;i<now_node.children.length;i++){
                queue.push(now_node.children[i]);
            }
        }
    }

    //遍历动画
    function show_ani() {
        clearInterval(timer);
        for(var i=0;i<array.length;i++){
            array[i].style.backgroundColor = '#fff';
        }

        var i = 0;
        timer = setInterval(function () {
            if(i>0){
                array[i-1].style.backgroundColor = '#fff';
            }
            if(i<array.length){
                array[i].style.backgroundColor = '#d45d5c';
            }
            else {
                clearInterval(timer);
                return false;
            }
            i += 1;
        }, 500)
    }

    //搜索动画
    function search_ani(value) {
        var is_find = false;
        clearInterval(timer);
        for(var i=0;i<array.length;i++){
            array[i].style.backgroundColor = '#fff';
        }

        var i = 0;
        timer = setInterval(function () {
            if(i>0){
                if(array[i-1].innerHTML==value){
                    array[i-1].style.backgroundColor = 'aqua';
                    is_find = true;
                }
                else {
                    array[i-1].style.backgroundColor = '#fff';
                }
            }
            if(i<array.length){
                array[i].style.backgroundColor = '#d45d5c';
            }
            else {
                clearInterval(timer);
                if(!is_find){
                    res.innerHTML = '没找到！'
                }
                return false;
            }
            i += 1;
        }, 500)
    }

    //展示前序遍历
    btns[0].onclick = function () {
        array = [];
        preOrder(root);
        show_ani();
    };

    //展示后序遍历
    btns[1].onclick = function () {
        array = [];
        postOrder(root);
        show_ani();
    };

    //展示广度遍历
    btns[2].onclick = function () {
        array = [];
        breadthOrder(root);
        show_ani();
    };

    //先序搜索
    btns[4].onclick = function () {
        var value = btns[3].value;
        if(value==""){
            return false;
        }
        array = [];
        preOrder(root);
        search_ani(value);
    };

    //后序搜索
    btns[5].onclick = function () {
        var value = btns[3].value;
        if(value==""){
            return false;
        }
        array = [];
        postOrder(root);
        search_ani(value);
    };

    //广度搜索
    btns[6].onclick = function () {
        var value = btns[3].value;
        if(value==""){
            return false;
        }
        array = [];
        breadthOrder(root);
        search_ani(value);
    };

    //点击节点效果并记录节点索引
    document.getElementsByClassName('tree')[0].onmouseover = function () {
        nodes = document.getElementsByClassName('tree')[0].getElementsByTagName('div');
        for(var i=0;i<nodes.length;i++){
            (function (i) {
                nodes[i].onclick = function (ev) {
                    for(var j=0;j<nodes.length;j++){
                        nodes[j].style.backgroundColor = '#fff';
                    }
                    this.style.backgroundColor = '#d45d5c';
                    delete_index = i;
                    ev.stopPropagation(); //阻止时间冒泡
                    console.log(delete_index);
                }
            })(i);
        }
    };

    //删除节点
    btns[7].onclick = function () {
        if(delete_index < 0){
            return false;
        }
        console.log(delete_index);
        nodes[delete_index].innerHTML = "";
        nodes[delete_index].parentNode.removeChild(nodes[delete_index]);
    };

    //增加节点
    btns[9].onclick = function () {
        if(delete_index < 0){
            return false;
        }
        var value = btns[8].value;
        var node = document.createElement('div');
        var sbling = nodes[delete_index].children;
        node.innerHTML = value;
        for(var i=0;i<sbling.length;i++){
            sbling[i].style.width = (100/(sbling.length+1) - 10) + '%'
        }
        node.style.width = (100/(sbling.length+1) - 10) + '%';
        node.style.height = 80 + '%';

        nodes[delete_index].appendChild(node);
    }

};