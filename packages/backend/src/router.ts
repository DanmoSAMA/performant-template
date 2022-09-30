/**
 * description: 路由
 * author: 772523546@qq.com
 * date: 2022-09-29 23:43:41 +0800
 */

import Router from 'koa-router'
import TestController from 'controllers/test.controller'

// import TestController from './controllers/test.controller'

const router = new Router({
  prefix: '/api'
})

/**
 * 打招呼
 */
router.all('/getContent', TestController.getContent)

export default router
