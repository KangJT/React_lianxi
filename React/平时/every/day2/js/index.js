let loading = (obj) => {
    let promis = new Promise((reslove, reject) => {
        let {
            title,
            url
        } = obj;
        let img = new Image();
        img.onload = () => {
                reslove(img);
            },
            img.onerror = () => {
                reject(new Error(`图片找不到地址：${url}`))
            };
        img.title = title;
        img.src = url;
    });
    return promis;
}
loading({
    title: "啦啦啦",
    url: "https://static.npmjs.com/images/collaboration-security.svg"
}).then((img) => {
    console.log(img);
    document.body.append(img)
}).catch((data) => {
    console.log(data)
})