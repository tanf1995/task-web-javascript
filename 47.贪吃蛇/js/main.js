var xv = yv = 0;  //移动方向
var px = py = 10;  //贪吃蛇位置
var gs = tc = 20;  //gs为贪吃蛇小块宽高， tc为宽高总格数
var ax = ay = 15;  //随机小块的位置
var trail = [];  //贪吃蛇数组
tail = 5;  //贪吃蛇长度

window.onload = function () {
    canv = document.getElementById('gc');
    ctx = canv.getContext('2d');

    document.addEventListener('keydown', keyPush);
    setInterval(game, 1000/15);
};

function game() {
    px += xv;
    py += yv;

    if(px < 0){
        px = tc - 1;
    }
    if(px > tc - 1){
        px = 0;
    }
    if(py < 0){
        py = tc - 1;
    }
    if(py > tc - 1){
        py = 0;
    }

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = 'lime';
    for(var i=0;i<trail.length;i++){
        ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);
        if(trail[i].x==px && trail[i].y==py){
            tail = 5;
        }
    }

    trail.push({x:px, y:py});
    while (trail.length>tail){
        trail.shift();
    }

    if(ax==px && ay==py){
        tail++;
        ax = Math.floor(Math.random()*tc);
        ay = Math.floor(Math.random()*tc)
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);
}

function keyPush(evt) {
    switch (evt.keyCode){
        case 37:  //左
            if(xv>0){
            return false;
            }
            xv = -1;
            yv = 0;
            break;

        case 38:  //上
            if(yv>0){
            return false;
            }
            xv = 0;
            yv = -1;
            break;

        case 39:  //右
            if(xv<0){
            return false;
            }
            xv = 1;
            yv = 0;
            break;

        case 40:  //下
            if(yv<0){
            return false;
            }
            xv = 0;
            yv = 1;
            break;
    }
}
