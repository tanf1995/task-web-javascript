var table_item = document.getElementsByTagName('table');
var table = Table(table_item[0]);
var table2 = Table(table_item[1]);

table2.asc_order();
table2.des_order();
table2.freeze();

table.asc_order();
table.des_order();
table.freeze();



function Table(elem) {
    var a = new Object();
    a.asc_order_btn = elem.getElementsByClassName('asc_btn');
    a.des_order_btn = elem.getElementsByClassName('des_btn');
    a.place_holder = elem.getElementsByClassName('place_holder')[0];
    a.first_tr = elem.getElementsByClassName('first_tr')[0];
    a.list = [];

    //冻结行首
    a.freeze = function () {
        //非ie浏览器
        window.addEventListener("scroll", function () {
            if(document.body.scrollTop>elem.offsetTop && document.body.scrollTop<parseInt(elem.offsetTop)+parseInt(elem.clientHeight)){
                a.place_holder.style.display = 'table-row';
                a.first_tr.style.position = 'fixed';
                a.first_tr.style.top = 0;
            }

            else{
                a.place_holder.style.display = 'none';
                a.first_tr.style.position = 'static';
            }
        });

        //ie浏览器
        // window.attachEvent("onload", function () {
        //     if(document.body.scrollTop>elem.offsetTop && document.body.scrollTop<parseInt(elem.offsetTop)+parseInt(elem.clientHeight)){
        //         a.place_holder.style.display = 'table-row';
        //         a.first_tr.style.position = 'fixed';
        //         a.first_tr.style.top = 0;
        //     }
        //
        //     else{
        //         a.place_holder.style.display = 'none';
        //         a.first_tr.style.position = 'static';
        //     }
        // })

    };

    //升序
    a.asc_order = function () {
        for(var i=0;i<this.asc_order_btn.length;i++){
            (function (i) {
                a.asc_order_btn[i].onclick = function () {
                    list = a.get_score(i);
                    a.order(list, 1);
                    order_tr(list);
                }
            })(i)
        }
    };

    //降序
    a.des_order = function () {
        for(var i=0;i<this.des_order_btn.length;i++){
            (function (i) {
                a.des_order_btn[i].onclick = function () {
                    list = a.get_score(i);
                    a.order(list, 2);
                    order_tr(list);
                }
            })(i)
        }
    };

    //获取成绩数组
    a.get_score = function (i) {
        var tr_num = elem.getElementsByTagName('tr');
        var list = [];

        for(var j=1;j<tr_num.length;j++){
            var score = tr_num[j].getElementsByTagName('td')[i+1].innerHTML;
            var item = [tr_num[j], score];

            list.push(item);
        }
        return list;
    };

    //排序, 参数type 1--升序， 2--降序
    a.order = function (list, type) {
        for(var i=0;i<list.length;i++){
            var is_sort = true;
            for(var j=0;j<list.length-i-1;j++){
                if(parseInt(list[j][1]) > parseInt(list[j+1][1])){
                    var mid = list[j];
                    list[j] = list[j+1];
                    list[j+1] = mid;
                    is_sort = false;
                }
            }
            if(is_sort){
                break;
            }
        }

        if(type==2){
            list.reverse();
        }
    };

    //排序表格列
    function order_tr(list) {
        var tr = elem.getElementsByTagName('tr');

        for(var j=1;j<tr.length;j++){
            tr[j].parentNode.removeChild(tr[j]);
        }

        for(var i=0;i<list.length;i++){
            elem.appendChild(list[i][0]);
        }
    }

    return a;
}
