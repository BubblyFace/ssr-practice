const Koa = require('koa');
const app = new Koa();
const Logger = require('koa-logger');

app.use(Logger());

app.use(ctx => {
  if(ctx.path === '/') {
    ctx.body = "hello world";
    ctx.status = 200;
  }
})




app.listen(3001)


