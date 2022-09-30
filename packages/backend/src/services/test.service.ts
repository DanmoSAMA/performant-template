/**
 * description: 打招呼
 * author: 772523546@qq.com
 * date: 2022-09-29 23:28:25 +0800
 */

class TestServices {
  /**
   * 打招呼
   * @param params
   */
  public async saySomeThing(params: string): Promise<string> {
    const p = new Promise<string>((res, rej) => {
      setTimeout(() => {
        res(params + ' DanmoSAMA')
      }, 1000)
    })
    const content = await p
    return content
  }
}

export default new TestServices()
