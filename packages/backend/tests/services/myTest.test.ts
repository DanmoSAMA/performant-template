/**
 * description: 测试 myTestServices
 * author: 772523546@qq.com
 * date: 2022-10-07 19:49:04 +0800
 */

import TestServices from '../../src/services/myTest.service'
import { describe, test, beforeAll, beforeEach, afterAll, afterEach, expect } from '@jest/globals'

describe('MyTestServices', () => {
  beforeAll(() => {
    console.log('BeforeAll')
  })

  beforeEach(() => {
    console.log('BeforeEach')
  })

  afterAll(() => {
    console.log('AfterAll')
  })

  afterEach(() => {
    console.log('AfterEach')
  })

  test('First-test', async () => {
    await expect(TestServices.saySomeThing('Hello')).resolves.toBe('Hello DanmoSAMA')
  })
})
