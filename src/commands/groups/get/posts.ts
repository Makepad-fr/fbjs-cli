import {Command, flags} from '@oclif/command'
import Conf from 'conf'
import {FB} from '@makepad/fbjs'
import * as inquirer from 'inquirer'

export default class GroupsGetPosts extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    debug: flags.boolean({description: 'Indicates the development environment', default: false}),
    headfull: flags.boolean({description: 'Indicates the not headless mode', default: false}),
    concurrent: flags.integer({char: 'c', default: 1, description: 'Number of concurrent jobs'}),
    ids: flags.string({char: 'i', required: true, description: 'Comma separated Facebook group ids'}),
    public: flags.boolean({description: 'Indicates the public visibility to skip authentication process', required: false, default: false}),
    output: flags.string({char: 'o', description: 'The output path to save output posts', default: process.cwd()}),
    format: flags.enum({description: 'The format of parsed files', options: ['json', 'csv', 'tsv'], default: 'json'}),
    cookiePath: flags.string({description: 'The JSON file path for cookies to use. This will skip the authentication process'}),
  }

  static args = []

  async run() {
    const {flags} = this.parse(GroupsGetPosts)
    const config = new Conf()
    const parsedIds = flags.ids.split(',')
    if (parsedIds.filter((id: string) => {
      return isNaN(parseInt(id, 10))
    }).length !== 0) {
      this.error('ids should be comma separated integers')
    }
    this.log(`Running in headless mode ? ${flags.headfull}`)
    const fb: FB = await FB.init({
      output: flags.output,
      debug: flags.debug,
      groupIds: parsedIds,
      disableAssets: true,
      headless: !flags.headfull,
      useCookies: true,
    }, flags.cookiePath)
    if (flags.cookiePath === undefined && !flags.public) {
      if (config.has('username') && config.has('password')) {
        try {
          await fb.login(config.get('username') as string, config.get('password') as string)
        } catch {
          const authCode = (await inquirer.prompt({
            name: 'authCode',
            type: 'input',
            message: 'Two factor authentication detected. Please enter the authentication code',
          })).authCode
          await fb.enterAuthCode(authCode)
        }
      }
    }
    for (let i = 0; i < parsedIds.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      await fb.getGroupPosts(Number(parsedIds[i]), undefined)
    }
    await fb.close()
  }
}
