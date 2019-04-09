let uesrs = [

    {
        username: "zs",
        password: "123"
    }, {
        username: "ls",
        password: "123"
    }, {
        username: "ww",
        password: "123"
    }
]
submit.onclick = function() {
    let obj = {};
    //下获取form表单下的所有  在遍历每一项
    Array.from(document.querySelector('form').elements).forEach(function(item) {
        console.log(item)
        obj[item.name] = item.value;
    })
    console.log(obj)
    let res = uesrs.find(function(item) {
        return item.username === obj.user && item.password === obj.pwd
    })
    if (res) {
        alert("登陆成功");
        location.href = '../html/detail.html'
    } else {
        alert('用户名或密码输入错误')
    }
}