window.onload = function () {
    var enter = document.getElementById('enter');
    var actor = document.getElementsByClassName('actor')[0];
    var move_unit = 50;
    //方块移动方向 1--上， 2--右， 3--下， 4--左， 默认为1
    var direction = 1;
    //用行为列表来存储行为系数，使得行为能够安顺序进行下去
    var action_index = 0;
    var action_list = [];

    reset();

    enter.onclick = function () {
        var command = document.getElementById('command').value;
        var command_list = command.split('\n');

        for(var i=0;i<command_list.length;i++){
            var is_ok = execute(command_list[i]);
            console.log(is_ok);

            if(!is_ok){
                sign_error(i);
            }
        }
    };

    //标出命令错误的行
    function sign_error(index) {
        var li = document.getElementsByClassName('control')[0].getElementsByTagName('ul')[0];
        li = li.getElementsByTagName('li');
        console.log(index);
        li[index].className = 'error';
    }

    //执行命令
    function execute(command) {
        var timer = null;
        var index = 0;
        switch (command){
            case 'GO':
                index = action_index;
                action_list.push(index);
                action_index += 1;
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

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
                console.log(action_list);

                timer = setInterval(function () {
                    if(action_list.indexOf(index)==0){
                        rotate_move(3);
                        direction = 3;
                        clearInterval(timer);
                    }
                }, 100);
                return true;
                break;
        }
        return false;
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

        if(direction==1){
            if(actor.offsetTop==0){
                action_list.shift();
                console.log(action_list);
                return false;
            }
            timer = setInterval(function () {
                move_times += 1;
                actor.style.top = parseInt(actor.offsetTop) - 1 + 'px';

                if(move_times>=50){
                    action_list.shift();
                    console.log(action_list);
                    clearInterval(timer);
                }
            }, 20);
        }

        if(direction==2){
            if(actor.offsetLeft==450){
                action_list.shift();
                console.log(action_list);
                return false;
            }
            timer = setInterval(function () {
                move_times += 1;
                actor.style.left = parseInt(actor.offsetLeft) + 1 + 'px';

                if(move_times>=50){
                    action_list.shift();
                    console.log(action_list);
                    clearInterval(timer);
                }
            }, 20);
        }

        if(direction==3){
            if(actor.offsetTop==450){
                action_list.shift();
                console.log(action_list);
                return false;
            }
            timer = setInterval(function () {
                move_times += 1;
                actor.style.top = parseInt(actor.offsetTop) + 1 + 'px';

                if(move_times>=50){
                    action_list.shift();
                    console.log(action_list);
                    clearInterval(timer);
                }
            }, 20);
        }

        if(direction==4){
            if(actor.offsetLeft==0){
                action_list.shift();
                console.log(action_list);
                return false;
            }
            timer = setInterval(function () {
                move_times += 1;
                actor.style.left = parseInt(actor.offsetLeft) - 1 + 'px';

                if(move_times>=50){
                    action_list.shift();
                    console.log(action_list);
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
                    console.log(action_list);
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
                    console.log(action_list);
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
                    console.log(action_list);
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
