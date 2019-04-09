//< div class = "wrap" ><p>hello</p></div >
function craterElement(obj) {
    let {
        tagName,
        props: {
            className
        },
        childern
    } = obj;
    return `<${tagName} class="${className}">${childern}</${tagName}>`

}
let tag = craterElement({
    tagName: "div",
    props: {
        className: "wrap"
    },
    childern: craterElement({
        tagName: "p",
        props: {
            className: "box"
        },
        childern: "hello"
    })
});
console.log(tag)