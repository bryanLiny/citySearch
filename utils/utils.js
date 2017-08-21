// pushState 实现浏览器返回监听
function pushHistory() {
    var state = {
        title: "title",
        url: "#"
    };
    window.history.pushState(state, "title", "#");
}

// 检测在叫车等待应答页面，监听浏览器返回事件
function ListenBrowerBack() {
    pushHistory();
    var bool = false;
    setTimeout(function () {
        bool = true;
    });
    window.addEventListener("popstate", function (e) {
        if (bool) {
            layer.confirm('您点击了返回，是否需要取消该订单？', {
                area: ['70%', 'auto'],
                title: "取消叫车",
                shadeClose: true,
                btn: ['是', '否'] //按钮
            }, function (index) {
                cancelOrder();
                layer.close(index);
            }, function (index) {
                layer.close(index);
            });
        }
        pushHistory();
    }, false);
}

// 手机号码校验
function checkPhone(phone) {
    var flag = true;
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
        flag = false;
    }
    return flag;
}

//去除数组中重复对象
function arrayUnique(array) {
    var unique = {};
    array.forEach(function (a) {
        unique[JSON.stringify(a)] = 1;
    });
    array = Object.keys(unique).map(function (u) {
        return JSON.parse(u);
    });
    return array;
}