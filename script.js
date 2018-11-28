window.onload = function(){
    var but = document.getElementById('check');
    var li = document.getElementsByTagName('li');
    var correct = 0;
    var wrong = 0;
    var unchecked = 0;
    var count = 0;
    var all = document.getElementsByTagName('input');
    var reset = document.getElementById('Reset');
    but.addEventListener('click', function() {

    for (var i = 0; i < li.length; i++) {
        for (var j = 0; j < li[i].children.length; j++) {
        if (li[i].children[j].checked) {
            if (li[i].children[j].value == 'yes') {
            correct++;
            } else {
            wrong++;
            }
        } else {
            count++;
            if (count == 3) {
            count = 0;
            unchecked++;
            }
        }
        }
        count = 0;
    }
    alert('Unchecked: ' + unchecked + '(' +
        Math.round(unchecked / 3 * 100) + '%)' + '\nCorrect: ' + correct + '(' + Math.round((correct / 3) * 100) + '%)' + '\nWrong: ' + wrong + '(' + Math.round(wrong / 3 * 100) + '%)');
    count = 0;
    correct = 0;
    wrong = 0;
    unchecked = 0;
    });

    var f = function clear(){
        count = 0;
    correct = 0;
    wrong = 0;
        for(var n = 0; n < all.length; n++){
        all[n].checked = false;
    }
    
    }
    reset.addEventListener('click', f);
}