window.onload = function () {
    //根节点
    var root = document.getElementsByClassName('root')[0];
    var btns = document.getElementsByTagName('input');
    var array = [];
    var timer = null;

    preOrder(root);
    //先序遍历, 将节点放入数组中
    function preOrder(node) {
        if(node){
            array.push(node);
            preOrder(node.firstElementChild);
            preOrder(node.lastElementChild);
        }
    }

    //中序遍历
    function inOrder(node) {
        if(node){
            inOrder(node.firstElementChild);
            array.push(node);
            inOrder(node.lastElementChild);
        }
    }

    //后序遍历
    function postOrder(node) {
        if(node){
            postOrder(node.firstElementChild);
            postOrder(node.lastElementChild);
            array.push(node);
        }
    }

    //变色动画
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
        }, 1000)
    }

    //展示前序遍历
    btns[0].onclick = function () {
        array = [];
        preOrder(root);
        console.log(array);
        show_ani();
    };

    //展示中序遍历
    btns[1].onclick = function () {
        array = [];
        inOrder(root);
        show_ani();
    };

    //展示后序遍历
    btns[2].onclick = function () {
        array = [];
        postOrder(root);
        show_ani();
    };
};
