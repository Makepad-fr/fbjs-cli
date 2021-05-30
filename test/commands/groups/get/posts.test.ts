import {expect, test} from '@oclif/test'

describe('groups:get:posts', () => {
  test
  .stdout()
  .command(['groups:get:posts'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['groups:get:posts', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
