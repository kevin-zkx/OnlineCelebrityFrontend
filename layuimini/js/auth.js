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
me = getCookie(" super");

// console.log(me)
if(me === "1"){
    // console.log("have auth");
}else{
    // console.log("no auth");
    window.alert("没有权限");
    window.location = '../index.html';
}