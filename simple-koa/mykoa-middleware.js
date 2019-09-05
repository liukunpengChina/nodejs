function runtime() {
    return async function(ctx, next) {
        const start = new Date().getTime();
        await next();
        const end = new Date().getTime();
        console.log(`call ${ctx.req.url} spend ${end - start} ms`);
    }
}

module.exports = runtime;
