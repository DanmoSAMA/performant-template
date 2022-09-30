import Koa from 'koa'

export default async function test(ctx: Koa.Context, next: Koa.Next) {
  try {
    console.log('Hello World')
    await next()
  } catch (err: any) {
    ctx.body = {
      statusCode: err.code,
      statusMsg: err.message
    }
  }
}
