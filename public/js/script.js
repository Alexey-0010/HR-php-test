$(document).ready(function () {
    var counter = 1;
    requestFromServer();

    var pid = setInterval(function () {
        counter++;
        requestFromServer();
        if (counter === 50) {
            clearInterval(pid);
        }
    },10000);
});

function requestFromServer() {
    $.get('/weather',function (data) {
        //console.log(data);
    });
}