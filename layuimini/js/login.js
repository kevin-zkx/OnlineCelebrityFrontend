function getCookie(name) {
    var j_test = {}
    var test = document.cookie.split(";");
    for (var i = 0; i < test.length; i++) {
        test[i].split("=");
        j_test[test[i].split("=")[0]] = test[i].split("=")[1];
    }
    // console.log(j_test);
    return j_test[name];
};


window.onload = function () {
    me = getCookie("login");
    // console.log(me);
    if (me === "1") {
        // console.log("success");
    } else {
        console.log("fail");
        window.location = '../login.html';
    }
    // var strcookie = document.cookie;//获取cookie字符串
    // var arrcookie = strcookie.split("; ");//分割
    // console.log(arrcookie);
    // //遍历匹配
    // for (var i = 0; i < arrcookie.length; i++) {
    //     var arr = arrcookie[i].split("=");
    //     console.log(arr[0] + "：" + arr[1]);
    //     if (arr[0] == "login" && arr[1] == 1) {
    //         console.log("success");
    //     } else {
    //         console.log("fail");
    //         window.location = '../login.html';
    //     }
    // }
    // return "";
}