// pushState ʵ����������ؼ���
function pushHistory() {
    var state = {
        title: "title",
        url: "#"
    };
    window.history.pushState(state, "title", "#");
}

// ����ڽг��ȴ�Ӧ��ҳ�棬��������������¼�
function ListenBrowerBack() {
    pushHistory();
    var bool = false;
    setTimeout(function () {
        bool = true;
    });
    window.addEventListener("popstate", function (e) {
        if (bool) {
            layer.confirm('������˷��أ��Ƿ���Ҫȡ���ö�����', {
                area: ['70%', 'auto'],
                title: "ȡ���г�",
                shadeClose: true,
                btn: ['��', '��'] //��ť
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

// �ֻ�����У��
function checkPhone(phone) {
    var flag = true;
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
        flag = false;
    }
    return flag;
}

//ȥ���������ظ�����
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