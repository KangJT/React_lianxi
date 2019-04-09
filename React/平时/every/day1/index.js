// if (10 > 5) {
//     let str = "bawei";
//     console.log(str)
//     for (let i = 0; i < 10; i++) {
//         let str = 'swsw';
//         console.log(str)
//     }
// }
//0-9
// for (let i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 0)
// }

// for (var i = 0; i < 10; i++) {
//     (function(n) {
//         setTimeout(function() {
//             console.log(n)
//         }, 0)
//     })(i)
// }

// if (11 > 10) {
//     // console.log(str);
//     const str = 'www';
//     console.log(str); {
//         const sss = 'hello';
//         console.log(sss);
//         const i = 'aaa';
//         console.log(i)
//     }
// }

// // let [a, b, c] = [10, 20, 30];
// // console.log(a, b, c)

// // let [a, b, c] = [{ name: "aa", old: "ss" }, { name: "bb", old: "ss" }, { name: "cc", old: "ss" }]
// // console.log(a, b, c)
// // let [a, b, c] = [{ name: "kkk", old: "18" },
// //     [10, 50, 20], 11111
// // ]
// // console.log(a, b, c)

// var a = [];
// for (let i = 0; i < 10; i++) {
//     a[i] = function() {
//         console.log(i)
//     };
// }
// a[6]();
// for (let i = 0; i < 3; i++) {
//     let i = 'abc';
//     console.log(i)
// }

// let jsonData = {
//     id: 42,
//     status: "OK",
//     data: [857, 5390]
// };
// let { id, status, data: number } = jsonData;
// console.log(id, status, number)

// let x = 1;
// let y = 2;
// [x, y] = [y, x]
// console.log([x, y], [y, x]);

// let {
//     name: aa,
//     age,
//     sex
// } = {
//     name: "kk",
//     age: "18",
//     sex: "女"
// }

// console.log(aa, age, sex)

// function create(obj) {
//     let {
//         tagName,
//         props: {
//             className
//         },
//         children: childe
//     } = obj
//     console.log(tagName, className, childe)
// }
// create({
//     tagName: "div",
//     props: {
//         className: "wrap"
//     },
//     children: "hello"
// })

// function sum(...n) {
//     return n.reduce(function(prev, next) {
//         return prev + next
//     })
// }
// sum(10, 20, 30, 50);
// console.log(sum(10, 20, 30, 50));
//复习数组
//div小仅能  递归

//拷贝数组
// let arr = [10, 20, 30, 40];
// arr1 = [].concat(arr);
// arr1.push(10);
// arr2 = arr.slice();
// arr2.shift();
// arr3 = [...arr];

// console.log(arr1, arr2, arr3)

// console.log(Array.of(10, 20, 30, 50, 180));
// let arr = [10, 20, 30, 40];
// let newArr = [];
// arr.forEach(function(item) {
//     if (newArr.indexOf(item) === -1) {
//         newArr.push(item)
//     }
// })
// console.log(newArr)

// let arr = [10, 20, 30, 40];
// let newArr = [];
// arr.forEach(function(item) {
//     if (!newArr.includes(item)) {
//         newArr.push(item)
//     }
// })
// console.log(newArr);

// let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// arr1.copyWithin(0, 4, 5);
// console.log(arr1.copyWithin(0, 4, 5));

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// function Iterator(arr) {
//     let index = 0;
//     let len = arr.length;
//     return {
//         next() {
//             return {
//                 value: arr[index++],
//                 done: index >= len
//             }
//         }
//     }
// }
// let a = Iterator(arr);
// console.log(a.next());

//done: index >= len    
//done: index >= len ? true : false
//done: index >= len｜｜ false


// let str = 'abx';
// for (let item of str) {
//     console.log(item);
// }
// console.log(str.includes('a'))
// console.log(str.startsWith('c'))
// console.log(str.startsWith('a', 1))
// console.log(str.endsWith('b', 2))

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// let a1 = arr.entries();
// console.log(a1.next())
// for (let index of a1) {
//     console.log(index)
// }

function ajax(obj) {
    let degaul = {
        async: true,
        url: "/aa",
        data: "",
        error: function() {}
    }
    console.log(Object.assign(degaul, obj))
}
ajax({
    url: "/ww",
    success: function() {

    }
})