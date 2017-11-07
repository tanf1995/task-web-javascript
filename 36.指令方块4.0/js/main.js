window.onload = function () {
    var enter = document.getElementById('enter');
    var actor = document.getElementsByClassName('actor')[0];
    var grid = document.getElementsByTagName('table')[0].getElementsByTagName('td');
    var move_unit = 50;
    //方块移动方向 1--上， 2--右， 3--下， 4--左， 默认为1
    var direction = 1;
    //用行为列表来存储行为系数，使得行为能够安顺序进行下去
    var action_index = 0;
    var action_list = [];
    //存储墙块的位置列表
    var wall_pos_li = [];

    reset();

    enter.onclick = function () {
        var command = document.getElementById('command').value;
        var command_list = command.split('\n');

        for(var i=0;i<command_list.length;i++){
            var is_ok = execute(command_list[i]);

            if(!is_ok){
                sign_error(i);
            }
        }
    };

    //标出命令错误的行
    function sign_error(index) {
        var li = document.getElementsByClassName('control')[0].getElementsByTagName('ul')[0];
        li = li.getElementsByTagName('li');
        li[index].className = 'error';
    }

    //执行命令
    function execute(command) {
        var timer = null;
        var index = 0;
        var color = null;

        if(command.substring(0, 3)=='BRU' || command.substring(0, 3)=='bru'){
            color = command.split(' ')[1];
            command = command.split(' ')[0];
            console.log(command);
            console.log(color);

            var reg1=/^#[0-9a-fA-F]{6}$/;
            var reg2 = /^##[0-9a-fA-F]{3}$/;
            if(!reg1.test(color) && !reg2.test(color)){
                return false;
            }
        }

        switch (command){
            case 'GO':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        move(direction);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'go':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        move(direction);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'TUN LEF':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        direction = direction>1?direction-1:4;
                        tun(direction, 2);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'tun lef':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        direction = direction>1?direction-1:4;
                        tun(direction, 2);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'TUN RIG':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        direction = direction<4?direction+1:1;
                        tun(direction, 1);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'tun rig':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        direction = direction<4?direction+1:1;
                        tun(direction, 1);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'TUN BAC':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        direction = direction<3?direction+2:direction-2;
                        tun(direction, 3);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'tun bac':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        direction = direction<3?direction+2:direction-2;
                        tun(direction, 3);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'TRA LEF':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        move(4);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'tra lef':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        move(4);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'TRA TOP':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        move(1);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'tra top':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        move(1);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'TRA RIG':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        move(2);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'tra rig':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        move(2);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'TRA BOT':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        move(3);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'tra bot':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        move(3);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'MOV LEF':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        rotate_move(4);
                        direction = 4;
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'mov lef':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        rotate_move(4);
                        direction = 4;
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'MOV RIG':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        rotate_move(2);
                        direction = 2;
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'mov rig':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        rotate_move(2);
                        direction = 2;
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'MOV TOP':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        rotate_move(1);
                        direction = 1;
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'mov top':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        rotate_move(1);
                        direction = 1;
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'MOV BOT':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        rotate_move(3);
                        direction = 3;
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'mov bot':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        rotate_move(3);
                        direction = 3;
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'BUILD':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        build_wall();
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'build':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        build_wall();
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'BRU':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        change_wall_color(color);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;

            case 'bru':
                index = action_index;
                action_list.push(index);
                action_index += 1;

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        change_wall_color(color);
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;
        }
        return false;
    }

    //粉刷墙
    function change_wall_color(color) {
        for(var i=0;i<wall_pos_li.length;i++){
            grid[wall_pos_li[i]].style.backgroundColor = color;
        }
        action_list.shift();
    }

    //前方修墙
    function build_wall() {
        var actor_x = parseInt(actor.style.left)/move_unit;
        var actor_y = parseInt(actor.style.top)/move_unit;
        var wall_pos = 0;

        if(direction==1){
            if(!able_build(actor_x ,actor_y-1)){
                console.log('前方不可修墙');
                action_list.shift();
                return false;
            }
            wall_pos = (actor_y-1)*10 + actor_x;
            grid[wall_pos].style.backgroundColor = '#aaa';
        }

        if(direction==2){
            if(!able_build(actor_x+1 ,actor_y)){
                console.log('前方不可修墙');
                action_list.shift();
                return false;
            }
            wall_pos = (actor_y)*10 + actor_x + 1;
            grid[wall_pos].style.backgroundColor = '#aaa';
        }

        if(direction==3){
            if(!able_build(actor_x ,actor_y+1)){
                console.log('前方不可修墙');
                action_list.shift();
                return false;
            }
            wall_pos = (actor_y+1)*10 + actor_x;
            grid[wall_pos].style.backgroundColor = '#aaa';
        }

        if(direction==4){
            if(!able_build(actor_x-1 ,actor_y)){
                console.log('前方不可修墙');
                action_list.shift();
                return false;
            }
            wall_pos = (actor_y)*10 + actor_x -1;
            grid[wall_pos].style.backgroundColor = '#aaa';
        }
        wall_pos_li.push(wall_pos);
        action_list.shift();
    }

    //判断前方是否能够修墙
    function able_build(wall_x, wall_y) {
        if(wall_pos_li.indexOf(wall_y*10 + wall_x)!=-1){
            return false;
        }
        return wall_x>=0 && wall_x<=9 && wall_y>=0 && wall_y<=9;
    }

    //旋转且移动, 参数 1--上、 2--右、 3--下、 4--左
    function rotate_move(main_dir) {
        if(direction==1){
            if(main_dir==4){
                tun(4, 2);
                move(4);
            }
            else if(main_dir==2){
                tun(2, 1);
                move(2);
            }
            else if(main_dir==1){
                move(1);
            }
            else{
                tun(3, 3);
                move(3);
            }
        }

        if(direction==2){
            if(main_dir==4){
                tun(4, 3);
                move(4);
            }
            else if(main_dir==2){
                move(2);
            }
            else if(main_dir==1){
                tun(1, 2);
                move(1);
            }
            else{
                tun(3, 1);
                move(3);
            }
        }

        if(direction==3){
            if(main_dir==4){
                tun(4, 1);
                move(4);
            }
            else if(main_dir==2){
                tun(2, 2);
                move(2);
            }
            else if(main_dir==1){
                tun(1, 3);
                move(1);
            }
            else{
                move(3);
            }
        }

        if(direction==4){
            if(main_dir==4){
                move(4);
            }
            else if(main_dir==2){
                tun(2, 3);
                move(2);
            }
            else if(main_dir==1){
                tun(1, 1);
                move(1);
            }
            else{
                tun(3, 1);
                move(3);
            }
        }
    }

    //移动
    function move(direction) {
        var move_times = 0;
        var timer = null;
        var actor_x = parseInt(actor.style.left)/move_unit;
        var actor_y = parseInt(actor.style.top)/move_unit;

        if(direction==1){
            if(actor.offsetTop==0 || !able_build(actor_x, actor_y-1)){
                console.log('不能移动');
                action_list.shift();
                return false;
            }

            timer = setInterval(function () {
                move_times += 1;
                actor.style.top = parseInt(actor.offsetTop) - 1 + 'px';

                if(move_times>=50){
                    action_list.shift();
                    clearInterval(timer);
                }
            }, 20);
        }

        if(direction==2){
            if(actor.offsetLeft==450 || !able_build(actor_x+1, actor_y)) {
                console.log('不能移动');
                action_list.shift();
                return false;
            }

            timer = setInterval(function () {
                move_times += 1;
                actor.style.left = parseInt(actor.offsetLeft) + 1 + 'px';

                if(move_times>=50){
                    action_list.shift();
                    clearInterval(timer);
                }
            }, 20);
        }

        if(direction==3){
            if(actor.offsetTop==450 || !able_build(actor_x, actor_y+1)){
                console.log('不能移动');
                action_list.shift();
                return false;
            }

            timer = setInterval(function () {
                move_times += 1;
                actor.style.top = parseInt(actor.offsetTop) + 1 + 'px';

                if(move_times>=50){
                    action_list.shift();
                    clearInterval(timer);
                }
            }, 20);
        }

        if(direction==4){
            if(actor.offsetLeft==0 || !able_build(actor_x-1, actor_y)){
                console.log('不能移动');
                action_list.shift();
                return false;
            }

            timer = setInterval(function () {
                move_times += 1;
                actor.style.left = parseInt(actor.offsetLeft) - 1 + 'px';

                if(move_times>=50){
                    action_list.shift();
                    clearInterval(timer);
                }
            }, 20);
        }
    }

    //转向, 参数--旋转后方向、旋转方向（1--右， 2--左， 3--后）
    function tun(direction, ro_dir) {
        var timer = null;
        var rotate_times = 0;
        var rotate = actor.style.transform;
        rotate = parseInt(rotate.substring(7));

        if(ro_dir==1){
            timer = setInterval(function () {
                rotate_times += 10;
                rotate += 90/100;

                actor.style.transform = 'rotate(' + rotate + 'deg)';
                if(rotate_times==1000){
                    if(direction==1){
                        actor.style.transform = 'rotate(0deg)';
                    }
                    action_list.shift();
                    clearInterval(timer);
                }
            }, 1)
        }

        if(ro_dir==2){
            timer = setInterval(function () {
                rotate_times += 10;
                rotate -= 90/100;

                actor.style.transform = 'rotate(' + rotate + 'deg)';
                if(rotate_times==1000){
                    if(direction==4){
                        actor.style.transform = 'rotate(270deg)';
                    }
                    action_list.shift();
                    clearInterval(timer);
                }
            }, 1)
        }

        if(ro_dir==3){
            timer = setInterval(function () {
                rotate_times += 10;
                rotate += 180/100;

                actor.style.transform = 'rotate(' + rotate + 'deg)';
                if(rotate_times==1000){
                    if(direction==1){
                        actor.style.transform = 'rotate(0deg)';
                    }
                    action_list.shift();
                    clearInterval(timer);
                }
            }, 1)
        }
    }

    //随机生成主要块
    function reset() {
        var pos_x = Math.floor(Math.random()*10) * move_unit;
        var pos_y = Math.floor(Math.random()*10) * move_unit;
        var rand_direction = Math.ceil(Math.random()*4);

        actor.style.top = pos_x + 'px';
        actor.style.left = pos_y + 'px';
        direction = rand_direction;

        if(direction==1){
            actor.style.transform = 'rotate(0deg)';
        }
        else if(direction==2){
            actor.style.transform = 'rotate(90deg)';
        }
        else if(direction==3){
            actor.style.transform = 'rotate(180deg)';
        }
        else{
            actor.style.transform = 'rotate(270deg)';
        }
    }

};
