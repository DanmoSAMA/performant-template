/**
 * description: 应用入口
 * author: 772523546@qq.com
 * date: 2022-09-29 23:05:54 +0800
 */

import Koa from 'koa'
import KoaBody from 'koa-body'
import Cors from '@koa/cors'
import Logger from 'koa-logger'
import router from './router'

const app = new Koa()

app
  .use(Logger())
  .use(
    Cors({
      origin: '*',
      allowMethods: '*',
      allowHeaders:
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      exposeHeaders:
        'Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type',
      credentials: true
    })
  )
  .use(KoaBody())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8080, () => {
    console.log('Server is running at 127.0.0.1:8080')
  })
