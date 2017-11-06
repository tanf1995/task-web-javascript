window.onload = function () {
    var enter = document.getElementById('enter');
    var actor = document.getElementsByClassName('actor')[0];
    var move_unit = 50;
    //方块移动方向 1--上， 2--右， 3--下， 4--左， 默认为1
    var direction = 1;

    reset();

    enter.onclick = function () {
        var command = document.getElementById('command').value;

        switch (command){
            case 'GO':
                move();
                break;

            case 'go':
                console.log('ok');
                move();
                break;

            case 'TUN LEF':
                direction = direction>1?direction-1:4;
                tun(direction);
                break;

            case 'tun lef':
                direction = direction>1?direction-1:4;
                tun(direction);
                break;

            case 'TUN RIG':
                direction = direction<4?direction+1:1;
                tun(direction);
                break;

            case 'tun rig':
                direction = direction<4?direction+1:1;
                tun(direction);
                break;

            case 'TUN BAC':
                direction = direction<3?direction+2:direction-2;
                tun(direction);
                break;

            case 'tun bac':
                direction = direction<3?direction+2:direction-2;
                tun(direction);
                break;
        }
    };

    //移动
    function move() {
        console.log('ok');
        if(direction==1){
            if(actor.offsetTop==0){
                return false;
            }
            actor.style.top = parseInt(actor.offsetTop) - move_unit + 'px';
        }

        if(direction==2){
            if(actor.offsetLeft==450){
                return false;
            }
            actor.style.left = parseInt(actor.offsetLeft) + move_unit + 'px';
        }

        if(direction==3){
            if(actor.offsetTop==450){
                return false;
            }
            actor.style.top = parseInt(actor.offsetTop) + move_unit + 'px';
        }

        if(direction==4){
            if(actor.offsetLeft==0){
                return false;
            }
            actor.style.left = parseInt(actor.offsetLeft) - move_unit + 'px';
        }
    }

    //转向
    function tun(direction) {
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

    //生成主要块
    function reset() {
        var pos_x = Math.floor(Math.random()*10) * move_unit;
        var pos_y = Math.floor(Math.random()*10) * move_unit;
        var rand_direction = Math.ceil(Math.random()*4);

        console.log(pos_y);
        actor.style.top = pos_x + 'px';
        actor.style.left = pos_y + 'px';
        direction = rand_direction;
        tun(direction);
    }

};
