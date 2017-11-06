var command_text = document.getElementById('command');
var li_index = document.getElementsByClassName('control')[0].getElementsByTagName('ul')[0];
var refresh = document.getElementById('refresh');

command_text.onkeydown = function (){
    command_text = document.getElementById('command');
    var value = command_text.value;

    var value_list = value.split('\n');
    var index = 1;

    li_index.innerHTML = '';

    for (var i = 0; i < value_list.length; i++) {
        var li_node = document.createElement('li');

        li_node.innerHTML = index;
        li_index.appendChild(li_node);
        index += 1;
    }
};

refresh.onclick = function () {
    command_text.value = '';
    li_index.innerHTML = "";
};

