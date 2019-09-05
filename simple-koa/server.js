const mykoa = require('./application');
const app = new mykoa();

const runTime = require('./mykoa-middleware');

function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    })
}

app.use(runTime());

app.use(async (ctx, next) => {
    console.log('start 1');
    ctx.body = '1';
    await next();
    console.log('end 1');
});

app.use(async (ctx, next) => {
    console.log('start 2');
    ctx.body += '2';
    await delay();
    await next();
    console.log('end 2');
});

app.use(async (ctx, next) => {
    console.log('start 3');
    ctx.body += '3';
    console.log('end 3');
});

app.listen(9092, () => {
    console.log('app is listening on port 9092')
});
