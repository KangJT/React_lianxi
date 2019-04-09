const gulp = require('gulp');
const server = require('gulp-webserver');
console.log(gulp)

//起静态服务
gulp.task('page', () => {
    return gulp.src('.')
        .pipe(server({
            port: 8081,
            fallback: "index8.html",
            open: true,
            middleware(req, res) {
                res.end(JSON.stringify({
                    name: "zs",
                    age: 12
                }))
            }
        }))
})
gulp.task('datas', () => {
    return gulp.src('.')
        .pipe(server({
            port: 8083,
            fallback: "index8.html",
            open: true,
            middleware(req, res) {
                //解决跨域问题
                res.writeHead(200, {
                    'Access-Control-Allow-Origin': '*'
                })
                res.end(JSON.stringify([{
                    title: "啦啦啦1",
                    url: "https://static.npmjs.com/images/collaboration-security.svg"
                }, {
                    title: "啦啦啦2",
                    url: "https://static.npmjs.com/images/collaboration-security.svg"
                }]))
            }
        }))
})
gulp.task('default', gulp.series('page', 'datas'))