/**
 * description: 打招呼
 * author: 772523546@qq.com
 * date: 2022-09-29 23:28:40 +0800
 */

import Koa from 'koa'
// import TestServices from '@services/test.service'
import TestServices from '../services/test.service'

class TestController {
  public async getContent(ctx: Koa.Context): Promise<void> {
    const content = await TestServices.saySomeThing('F**k you')
    ctx.body = content
  }
}

export default new TestController()
