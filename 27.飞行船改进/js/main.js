var create_btn = document.getElementsByClassName('create')[0];
var warehouse = document.getElementsByClassName('warehouse')[0];
var control_btn = document.getElementsByClassName('control')[0];
var command_info = document.getElementsByClassName('commands')[0];
var power_radio = document.getElementsByClassName('power_system')[0].getElementsByTagName('input');
var energy_radio = document.getElementsByClassName('energy_system')[0].getElementsByTagName('input');
var airship_num = 0;
var airship_list = [];

//创建新飞船
create_btn.onclick = function () {
    var power_value = 0;
    var energy_value = 0;
    var speed_list = [30, 50, 80];
    var edsspeed_list = [5, 7, 9];
    var batspeed_list = [2, 3, 4];
    var speed = 0;
    var edsspeed = 0;
    var batspeed = 0;
    for(var i=0;i<power_radio.length;i++){
        if(power_radio[i].checked){
            power_value = power_radio[i].value;
            speed = speed_list[i];
            edsspeed = edsspeed_list[i];
        }
        if(energy_radio[i].checked){
            energy_value = energy_radio[i].value;
            batspeed = batspeed_list[i];
        }
    }

    if(airship_num<4 && power_value!=0 && energy_value!=0){
        //创建飞船节点
        var elem = document.createElement('div');
        var span_elem1 = document.createElement('span');
        var span_elem2 = document.createElement('span');
        var span_elem3 = document.createElement('span');
        var text = document.createTextNode(airship_num + 1);

        elem.className = 'airship';
        span_elem1.appendChild(text);
        elem.appendChild(span_elem1);
        text = document.createTextNode('号飞船 ');
        elem.appendChild(text);
        text = document.createTextNode('100');
        span_elem2.appendChild(text);
        elem.appendChild(span_elem2);
        text = document.createTextNode('%');
        elem.appendChild(text);
        elem.appendChild(span_elem3);
        elem.style.top = -50 - airship_num*50  + 'px';
        elem.style.left = 40 + 'px';
        warehouse.appendChild(elem);

        if(power_value)
        var airship = Airship(speed, edsspeed, batspeed, elem, 85+(airship_num+1)*50);
        airship_list.push(airship);

        //输出命令信息
        node = document.createElement('p');
        node.innerHTML = airship_num+1 + '号飞船创建成功';
        command_info.appendChild(node);

        //创建控制按钮组
        var label = document.createElement('label');
        var input1 = document.createElement('input');
        var input2 = document.createElement('input');
        var input3 = document.createElement('input');
        elem = document.createElement('div');
        elem.className = 'send_command';
        text = document.createTextNode('对');
        label.appendChild(text);
        span_elem1 = document.createElement('span');
        text = document.createTextNode(airship_num+1);
        span_elem1.appendChild(text);
        label.appendChild(span_elem1);
        text = document.createTextNode('号飞船发送命令： ');
        label.appendChild(text);
        elem.appendChild(label);
        input1.type = 'submit';
        input1.value = '开始飞行';
        input2.type = 'submit';
        input2.value = '停止飞行';
        input3.type = 'submit';
        input3.value = '销毁飞船';
        elem.appendChild(input1);
        text = document.createTextNode(' ');
        elem.appendChild(text);
        elem.appendChild(input2);
        text = document.createTextNode(' ');
        elem.appendChild(text);
        elem.appendChild(input3);
        control_btn.appendChild(elem);

        airship_num += 1;
    }
};

control_btn.onmouseover = function () {
    //发送命令
    var command_btn = document.getElementsByClassName('send_command');
    for(var i=0;i<command_btn.length;i++){
        (function (i) {
            var btns = command_btn[i].getElementsByTagName('input');

            btns[0].onclick = function () {
                var node = null;

                data = {
                    id: 1,
                    command: 'flight'
                };
                var new_data = data_to_2(data);
                var timer = setInterval(function () {
                    var res = airship_list[i].get_command(new_data);
                    if(res){
                        node = document.createElement('p');
                        node.innerHTML = i+1 + '号飞船接受命令 “开始飞行” 成功';
                        command_info.appendChild(node);
                        clearInterval(timer);
                    }
                    else {
                        node = document.createElement('p');
                        node.innerHTML = 'BUS系统正在重新发送信号给' + i+1 + '号飞船';
                        command_info.appendChild(node);
                    }
                }, 1000)
            };

            btns[1].onclick = function () {
                data = {
                    id: 2,
                    command: 'stop'
                };
                var new_data = data_to_2(data);
                var timer = setInterval(function () {
                    var res = airship_list[i].get_command(new_data);
                    if(res){
                        node = document.createElement('p');
                        node.innerHTML = i+1 + '号飞船接受命令 “停止飞行” 成功';
                        command_info.appendChild(node);
                        clearInterval(timer);
                    }
                    else {
                        node = document.createElement('p');
                        node.innerHTML = 'BUS系统正在重新发送信号给' + i+1 + '号飞船';
                        command_info.appendChild(node);
                    }
                }, 1000);
            };

            btns[2].onclick = function () {
                data = {
                    id: 3,
                    command: 'drop'
                };
                var new_data = data_to_2(data);
                var timer = setTimeout(function () {
                    var res = airship_list[i].get_command(new_data);
                    if(res){
                        node = document.createElement('p');
                        node.innerHTML = i+1 + '号飞船接受命令 “销毁飞船” 成功';
                        command_info.appendChild(node);

                        airship_num -= 1;
                        airship_list.splice(i);
                        var control_btns = control_btn.getElementsByClassName('send_command');
                        control_btn.removeChild(control_btns[i]);
                        clearInterval(timer);
                    }
                    else {
                        node = document.createElement('p');
                        node.innerHTML = 'BUS系统正在重新发送信号给' + i+1 + '号飞船';
                        command_info.appendChild(node);
                    }
                }, 1000);
            };
            //命令列表滑动条自动滑到底部
            command_info.scrollTop = command_info.scrollHeight;
        })(i);
    }
};

//data数据转二进制
function data_to_2(data) {
    if(data['id']==1){
        return '0001';
    }
    else if(data['id']==2){
        return '0010';
    }
    else if(data['id']==3){
        return '0010';
    }
}

// 飞行船类
function Airship(speed, edspeed, batspeed, elem, radius) {
    var a = new Object();
    a.elem = elem;  //飞船节点
    a.speed = speed;  //飞行速度，时间单位s
    a.edspeed = edspeed;  //耗能速度
    a.batspeed = batspeed;  //充电速度
    a.energy = 100;  //能源量
    a.status = false;  //飞行状态，默认停止
    //飞行方向默认顺时针，数字代表运功轨迹，1--代表往右下，2--左下，3--左上， 4--右上
    a.direction = null;
    a.timer_fi = null;
    a.timer_eds = null;
    a.timer_bat = null;
    a.radius = radius;
    a.angle = 0;

    //飞行
    a.flight = function () {
        this.status = true;
        var x_pos = parseInt(a.elem.style.top);
        var y_pos = parseInt(a.elem.style.left);
        var x = -1;
        var y = -1;

        if(x_pos<=85 && y_pos>=40){
            this.direction = 1;
        }
        else if(x_pos>85 && y_pos>=40){
            this.direction = 2;
        }
        else if(x_pos>85 && y_pos<40){
            this.direction = 3;
        }
        else {
            this.direction = 4;
        }

        this.timer_fi = setInterval(function () {
            if(a.direction==1){
                x = parseInt(a.elem.style.left) +60 + 1;
                y = Math.sqrt(Math.pow(a.radius, 2) - Math.pow(x-100, 2));
                a.elem.style.left = x - 60 + 'px';
                a.elem.style.top = -y + 85 + 'px';
                a.angle += 90/a.radius;
                a.elem.style.transform = 'rotate(' + a.angle + 'deg)';

                if(y==0){
                    a.direction = 2;
                    a.angle = 90;
                }
            }

            if(a.direction==2){
                x = parseInt(a.elem.style.left) +60 - 1;
                y = Math.sqrt(Math.pow(a.radius, 2) - Math.pow(x-100, 2));
                a.elem.style.left = x - 60 + 'px';
                a.elem.style.top = y + 85 + 'px';
                a.angle += 90/a.radius;
                a.elem.style.transform = 'rotate(' + a.angle + 'deg)';

                if(x==100){
                    a.direction = 3;
                    a.angle = 180;
                }
            }

            if(a.direction==3){
                x = parseInt(a.elem.style.left) +60 - 1;
                y = Math.sqrt(Math.pow(a.radius, 2) - Math.pow(x-100, 2));
                a.elem.style.left = x - 60 + 'px';
                a.elem.style.top = y + 85 + 'px';
                a.angle += 90/a.radius;
                a.elem.style.transform = 'rotate(' + a.angle + 'deg)';

                if(y==0){
                    a.direction = 4;
                    a.angle = 270;
                }
            }

            if(a.direction==4){
                x = parseInt(a.elem.style.left) +60 + 1;
                y = Math.sqrt(Math.pow(a.radius, 2) - Math.pow(x-100, 2));
                a.elem.style.left = x - 60 + 'px';
                a.elem.style.top = -y + 85 + 'px';
                a.angle += 90/a.radius;
                a.elem.style.transform = 'rotate(' + a.angle + 'deg)';

                if(x==100){
                    a.direction = 1;
                    a.angle = 0;
                }
            }
        }, 300/a.speed)
    };

    //停止飞行
    a.stop_flight = function () {
        a.status = false;
        clearInterval(a.timer_fi);
    };

    //销毁飞船
    a.drop_airship = function () {
        a.elem.parentNode.removeChild(a.elem);
    };

    //耗能
    a.cut_energy = function () {
        clearInterval(a.timer_bat);
        a.timer_eds = setInterval(function () {
            if(a.energy<a.edspeed || !a.status){
                a.stop_flight();
                clearInterval(a.timer_eds);
                a.add_energy();
                return false;
            }
            a.energy -= a.edspeed;
            a.elem.getElementsByTagName('span')[1].innerHTML = a.energy;
        }, 1000)
    };

    //充电
    a.add_energy = function () {
        a.timer_bat = setInterval(function () {
            if(a.energy>=100-a.batspeed){
                a.energy = 100;
                a.elem.getElementsByTagName('span')[1].innerHTML = a.energy;
                clearInterval(a.timer_bat);
                return false;
            }
            a.energy += a.batspeed;
            a.elem.getElementsByTagName('span')[1].innerHTML = a.energy;
        }, 1000)
    };

    //二进制转data
    function to_data(data) {
        if(data=='0001'){
            return 1;
        }
        else if(data=='0010'){
            return 2;
        }
        else{
            return 3;
        }
    }

    //接受命令
    a.get_command = function (data) {
        rand_num = Math.random();
        if(rand_num<0.1){
            return false;
        }
        var new_data = to_data(data);
        switch (new_data){
            case 1: // 飞行命令
                if(this.status || this.energy < this.speed){
                    return false;
                }
                setTimeout(function () {
                    a.flight();
                    a.cut_energy();
                }, 1000);
                break;

            case 2: // 停止飞行
                if(!this.status){
                return false;
                }
                setTimeout(function () {
                    a.stop_flight();
                }, 1000);
                break;

            case 3: //销毁飞船
                setTimeout(function () {
                    a.drop_airship();
                }, 1000);
                break;
        }
        return true;
    };

    return a;
}
