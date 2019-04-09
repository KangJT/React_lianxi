let ajax = (url, method = 'get', params = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status <= 30 || xhr.status === 304) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText)
            }
        }
        xhr.open(method, url)
        xhr.send();
    })
}
ajax('/getdata').then((data) => {
    data = JSON.parse(data);
    data.forEach((item) => {
        loadimg(item)
    });
}).catch((err) => {
    console.log(err)
})