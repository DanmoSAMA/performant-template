/**
 * description: 测试 add
 * author: 772523546@qq.com
 * date: 2022-10-07 19:49:04 +0800
 */

// import { add } from '@/utils/add'
import { add } from '../../src/utils/add'
import { describe, test, expect } from '@jest/globals'

describe('MyTestServices', () => {
  test('Add-test', () => {
    expect(add(1, 2)).toBe(3)
  })
})
